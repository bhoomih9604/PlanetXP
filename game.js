// game.js (patched)
// -----------------
// Top: auth & per-user helpers (safe to run as soon as file loads)

function getCurrentUser() {
  try { return JSON.parse(localStorage.getItem('rq_current') || 'null'); } catch (e) { return null; }
}
function getUsers() { return JSON.parse(localStorage.getItem('rq_users') || '{}'); }
function saveUsers(u) { localStorage.setItem('rq_users', JSON.stringify(u)); }

const currentUser = getCurrentUser();
if (!currentUser) {
  console.warn('No user logged in — redirecting to login');
  // redirecting immediately - keeps the page safe if not logged in
  window.location.href = 'login.html';
}

// prepare user profile (won't touch player yet)
const users = getUsers();
if (!users[currentUser.username]) users[currentUser.username] = { password: '', progress: { level: 1, score: 0, completedQuizzes: 0 } };
const profile = users[currentUser.username];

// selected level (only stores the number; we do not manipulate `player` yet)
const selectedLevel = Number(sessionStorage.getItem('rq_selected_level') || profile.progress.level || 1);
console.log('Playing level', selectedLevel);

// Helper to persist progress (call when player finishes or quiz completes)
function saveProgress({ levelIncrement = 0, scoreDelta = 0, quizCompleted = false } = {}) {
  profile.progress.level = Math.max(profile.progress.level, selectedLevel + levelIncrement);
  profile.progress.score = (profile.progress.score || 0) + scoreDelta;
  if (quizCompleted) profile.progress.completedQuizzes = (profile.progress.completedQuizzes || 0) + 1;
  users[currentUser.username] = profile;
  saveUsers(users);
  console.log('Saved progress', profile.progress);
}

// -----------------
// Main initialization runs after window load to ensure canvas & map data exist
window.addEventListener('load', initGame);

function initGame() {
  // sanity checks
  if (typeof TileMaps === 'undefined' || !TileMaps['map']) {
    console.error('TileMaps["map"] is not available. Make sure map.js is loaded BEFORE game.js and it defines TileMaps["map"].');
    return;
  }

  const canvas = document.getElementById('gameCanvas');
  if (!canvas) {
    console.error('No canvas with id "gameCanvas" found.');
    return;
  }
  const ctx = canvas.getContext('2d');

  // tileset and image loading
  const tilesets = TileMaps['map'].tilesets || [];
  let tilesetImages = {};
  let imagesLoaded = 0;
  const totalImages = tilesets.length;

  const collideTiles = new Set();
  const disappearingTiles = new Set();
  const hiddenTiles = new Set();

  // player sprite sheets
  const playerSprites = { down: new Image(), side: new Image(), up: new Image() };
  playerSprites.down.src = 'assets/Run_Down-Sheet.png';
  playerSprites.side.src = 'assets/Run_right-Sheet.png';
  playerSprites.up.src = 'assets/Run_Up-Sheet.png';

  // load tileset images and collect tile properties
  if (tilesets.length === 0) {
    console.warn('No tilesets detected in TileMaps["map"].tilesets — map may be empty or use embedded tiles.');
  }

  tilesets.forEach(tileset => {
    const img = new Image();
    img.src = (tileset.image || '').replace(/\\/g, '/');
    img.onload = () => {
      imagesLoaded++;
      console.log(`Loaded tileset image: ${tileset.name} (${imagesLoaded}/${totalImages})`);
      if (imagesLoaded === totalImages) startGame();
    };
    img.onerror = (e) => {
      imagesLoaded++;
      console.error('Failed to load tileset image:', img.src, e);
      if (imagesLoaded === totalImages) startGame();
    };
    tilesetImages[tileset.name] = img;

    if (tileset.tiles) {
      tileset.tiles.forEach(tile => {
        const tileGid = tileset.firstgid + tile.id;
        if (tile.properties) {
          tile.properties.forEach(prop => {
            if (String(prop.name) === 'collide' && String(prop.value) === 'true') collideTiles.add(tileGid);
            if (String(prop.name) === 'disappear' && String(prop.value) === 'true') disappearingTiles.add(tileGid);
          });
        }
      });
    }
  });

  // if there are no images to load, start immediately
  if (totalImages === 0) {
    // small delay to ensure other assets settle
    setTimeout(startGame, 60);
  }

  // map constants (safe guarded)
  const tileSize = TileMaps['map'].tilewidth || 32;
  const mapWidth = TileMaps['map'].width || Math.floor(canvas.width / tileSize);
  const mapHeight = TileMaps['map'].height || Math.floor(canvas.height / tileSize);

  // === player declared here (important: later code may set position) ===
  let player = {
    x: 32 * 6,
    y: 32 * 4,
    width: 64,
    height: 64,
    speed: 4,
    direction: 'down',
    frame: 0,
    frameCount: 6,
    frameTimer: 0,
    frameInterval: 100,
    collWidth: 35,
    collHeight: 35,
    collOffsetX: (64 - 35) / 2,
    collOffsetY: (64 - 35) / 2,
    facingLeft: false
  };

  // restore saved state (if coming back from quiz)
  const saved = sessionStorage.getItem('savedGameState');
  if (saved) {
    try {
      const s = JSON.parse(saved);
      if (typeof s.playerX === 'number') player.x = s.playerX;
      if (typeof s.playerY === 'number') player.y = s.playerY;
      if (Array.isArray(s.hiddenTiles)) {
        s.hiddenTiles.forEach(idx => hiddenTiles.add(idx));
      }
      console.log('Restored savedGameState', player.x, player.y);
      // remove saved state so it doesn't reapply next time (optional)
      // sessionStorage.removeItem('savedGameState');
    } catch (e) {
      console.warn('Could not parse savedGameState:', e);
    }
  } else {
    // no saved state — set start position based on selected level
    if (selectedLevel === 2) {
      player.x = 32 * 4; player.y = 32 * 6;
    } else if (selectedLevel === 3) {
      player.x = 32 * 2; player.y = 32 * 2;
    } else {
      player.x = 32 * 6; player.y = 32 * 4;
    }
  }

  console.log('Player start pos:', player.x, player.y, 'level:', selectedLevel);

  // input handling
  let keys = {};
  document.addEventListener('keydown', e => { keys[e.code] = true; });
  document.addEventListener('keyup', e => { keys[e.code] = false; });

  function findTileset(tileId) {
    for (let i = tilesets.length - 1; i >= 0; i--) {
      if (tileId >= tilesets[i].firstgid) return tilesets[i];
    }
    return null;
  }

  function drawLayer(layer) {
    if (!layer || !layer.data) return;
    const data = layer.data;
    for (let i = 0; i < data.length; i++) {
      if (layer.name === 'layer 1' && hiddenTiles.has(i)) continue;
      const tileGlobalId = data[i];
      if (!tileGlobalId) continue;
      const tileset = findTileset(tileGlobalId);
      if (!tileset) continue;
      const tileId = tileGlobalId - tileset.firstgid;
      const img = tilesetImages[tileset.name];
      if (!img || !img.width) continue; // image not available
      const columns = Math.floor((tileset.imagewidth - 2 * (tileset.margin || 0) + (tileset.spacing || 0)) / ((tileset.tilewidth || tileSize) + (tileset.spacing || 0)));
      const margin = tileset.margin || 0;
      const spacing = tileset.spacing || 0;
      const tileWidth = tileset.tilewidth || tileSize;
      const tileHeight = tileset.tileheight || tileSize;
      const sx = margin + (tileId % columns) * (tileWidth + spacing);
      const sy = margin + Math.floor(tileId / columns) * (tileHeight + spacing);
      const dx = (i % mapWidth) * tileSize;
      const dy = Math.floor(i / mapWidth) * tileSize;
      ctx.drawImage(img, sx, sy, tileWidth, tileHeight, dx, dy, tileSize, tileSize);
    }
  }

  function drawPlayer() {
    let spriteSheet = playerSprites.down;
    if (player.direction === 'up') spriteSheet = playerSprites.up;
    else if (player.direction === 'side') spriteSheet = playerSprites.side;
    const frameX = player.frame * player.width;
    const frameY = 0;
    ctx.save();
    if (player.direction === 'side' && player.facingLeft) {
      ctx.translate(player.x + player.width / 2, player.y + player.height / 2);
      ctx.scale(-1, 1);
      ctx.translate(-player.width / 2, -player.height / 2);
      ctx.drawImage(spriteSheet, frameX, frameY, player.width, player.height, 0, 0, player.width, player.height);
    } else {
      ctx.drawImage(spriteSheet, frameX, frameY, player.width, player.height, player.x, player.y, player.width, player.height);
    }
    ctx.restore();
  }

  function isCollidingRect(x, y, width, height, layer) {
    const startX = Math.floor(x / tileSize);
    const endX = Math.floor((x + width - 1) / tileSize);
    const startY = Math.floor(y / tileSize);
    const endY = Math.floor((y + height - 1) / tileSize);
    if (startX < 0 || endX >= mapWidth || startY < 0 || endY >= mapHeight) {
      // keep player inside map bounds — treat out of bounds as collision
      return true;
    }
    for (let ty = startY; ty <= endY; ty++) {
      for (let tx = startX; tx <= endX; tx++) {
        const idx = ty * mapWidth + tx;
        const tileGid = layer.data[idx];
        if (collideTiles.has(tileGid)) return true;
      }
    }
    return false;
  }

  function getPlayerTileIndex(layer) {
    const tileX = Math.floor((player.x + player.width / 2) / tileSize);
    const tileY = Math.floor((player.y + player.height / 2) / tileSize);
    if (tileX < 0 || tileX >= mapWidth || tileY < 0 || tileY >= mapHeight) return -1;
    return tileY * mapWidth + tileX;
  }

  // Save game state & navigate (also optionally save progress here)
  function saveGameStateAndNavigate(url) {
    const gameState = {
      playerX: player.x,
      playerY: player.y,
      hiddenTiles: Array.from(hiddenTiles),
      playerDirection: player.direction,
      playerFrame: player.frame,
      level: selectedLevel
    };
    sessionStorage.setItem('savedGameState', JSON.stringify(gameState));
    // Optionally save an interim progress snapshot (no increment here)
    saveProgress({ scoreDelta: 0 });
    window.location.href = url;
  }

  // Player update + tile interactions
  let lastTimestamp = 0;
  function updatePlayer(deltaTime) {
    let newX = player.x;
    let newY = player.y;
    let moved = false;
    if (keys['ArrowUp']) { newY -= player.speed; player.direction = 'up'; moved = true; }
    if (keys['ArrowDown']) { newY += player.speed; player.direction = 'down'; moved = true; }
    if (keys['ArrowLeft']) { newX -= player.speed; player.direction = 'side'; player.facingLeft = true; moved = true; }
    if (keys['ArrowRight']) { newX += player.speed; player.direction = 'side'; player.facingLeft = false; moved = true; }

    const collisionLayers = (TileMaps['map'].layers || []).filter(l => ['Ground', 'layer 1'].includes(l.name));
    function isPositionColliding(x, y, width, height) {
      return collisionLayers.some(layer => isCollidingRect(x, y, width, height, layer));
    }

    const collBoxX = newX + player.collOffsetX;
    const collBoxY = newY + player.collOffsetY;
    const collBoxWidth = player.collWidth;
    const collBoxHeight = player.collHeight;

    if (!isPositionColliding(collBoxX, collBoxY, collBoxWidth, collBoxHeight)) {
      player.x = newX; player.y = newY;
      if (moved) {
        player.frameTimer += deltaTime;
        if (player.frameTimer > player.frameInterval) {
          player.frame = (player.frame + 1) % player.frameCount;
          player.frameTimer = 0;
        }
      }
    } else {
      player.frame = 0;
    }

    // Disappear tile logic
    (TileMaps['map'].layers || []).forEach(layer => {
      if (layer.type === 'tilelayer') {
        const tileIndex = getPlayerTileIndex(layer);
        if (tileIndex !== -1) {
          const gid = layer.data[tileIndex];
          if (disappearingTiles.has(gid) && !hiddenTiles.has(tileIndex)) {
            hiddenTiles.add(tileIndex);
            console.log(`Tile at index ${tileIndex} disappeared (GID: ${gid})`);
          }
        }
      }
    });

    // Special tile check (quiz trigger)
    const specialTileX = 16; // column 16 zero-based
    const specialTileY = 3;  // row 3 zero-based
    const specialTileIndex = specialTileY * mapWidth + specialTileX;
    const quizCompleted = sessionStorage.getItem('quizCompleted');

    (TileMaps['map'].layers || []).forEach(layer => {
      if (layer.type === 'tilelayer' && layer.visible) {
        const playerTileIndex = getPlayerTileIndex(layer);
        if (playerTileIndex === specialTileIndex) {
          if (!quizCompleted) {
            saveGameStateAndNavigate('newpage.html');
          } else {
            sessionStorage.removeItem('quizCompleted');
          }
        }
      }
    });
  }

  function gameLoop(timestamp = 0) {
    const deltaTime = timestamp - lastTimestamp;
    lastTimestamp = timestamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    (TileMaps['map'].layers || []).forEach(layer => {
      if (layer.type === 'tilelayer' && layer.visible) {
        drawLayer(layer);
      }
    });

    drawPlayer();
    updatePlayer(deltaTime);

    requestAnimationFrame(gameLoop);
  }

  function startGame() {
    console.log('Starting game loop...');
    requestAnimationFrame(gameLoop);
  }

  // If images were already loaded earlier (edge cases), start now
  if (totalImages === 0) {
    // startGame will be called after a tiny delay above
  }

} // end initGame()
