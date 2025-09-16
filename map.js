(function (name, data) {
       if (typeof onTileMapLoaded === 'undefined') {
              if (typeof TileMaps === 'undefined') TileMaps = {};
              TileMaps[name] = data;
       } else {
              onTileMapLoaded(name, data);
       }
       if (typeof module === 'object' && module && module.exports) {
              module.exports = data;
       }
})("map",
       {
              "compressionlevel": -1,
              "height": 20,
              "infinite": false,
              "layers": [
                     {
                            "data": [64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64,
                                   64, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 67, 67, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 64,
                                   64, 62, 62, 62, 62, 137, 137, 137, 137, 62, 62, 62, 62, 62, 67, 67, 67, 264, 264, 264, 62, 62, 62, 62, 62, 62, 62, 62, 62, 64,
                                   64, 62, 62, 62, 149, 137, 137, 137, 137, 137, 62, 62, 62, 62, 67, 67, 67, 264, 264, 264, 264, 264, 62, 62, 62, 62, 62, 62, 62, 64,
                                   64, 62, 62, 137, 137, 137, 137, 137, 137, 137, 137, 62, 62, 62, 67, 67, 62, 62, 62, 264, 264, 264, 62, 62, 62, 62, 62, 62, 62, 64,
                                   64, 62, 62, 137, 137, 137, 137, 137, 137, 137, 137, 62, 62, 62, 67, 67, 62, 62, 62, 62, 264, 264, 264, 62, 62, 62, 62, 62, 62, 64,
                                   64, 62, 62, 62, 148, 149, 137, 137, 137, 148, 62, 62, 62, 62, 67, 67, 62, 62, 62, 62, 62, 264, 264, 264, 62, 62, 62, 62, 62, 64,
                                   64, 62, 62, 62, 62, 62, 137, 137, 62, 62, 62, 62, 62, 62, 67, 67, 62, 62, 62, 62, 62, 62, 264, 264, 264, 264, 264, 264, 264, 64,
                                   64, 62, 62, 62, 62, 62, 67, 67, 62, 62, 62, 62, 62, 62, 67, 67, 62, 62, 62, 62, 62, 62, 62, 264, 264, 264, 264, 264, 264, 64,
                                   64, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 64,
                                   64, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 64,
                                   64, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 67, 67, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 64,
                                   64, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 67, 67, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 64,
                                   64, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 67, 67, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 64,
                                   64, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 67, 67, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 64,
                                   64, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 67, 67, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 64,
                                   64, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 67, 67, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 64,
                                   64, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 67, 67, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 64,
                                   64, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 67, 67, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 64,
                                   64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64],
                            "height": 20,
                            "id": 1,
                            "name": "Ground",
                            "opacity": 1,
                            "type": "tilelayer",
                            "visible": true,
                            "width": 30,
                            "x": 0,
                            "y": 0
                     },
                     {
                            "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                   0, 0, 158, 0, 0, 0, 0, 165, 165, 0, 0, 158, 0, 0, 67, 67, 0, 0, 0, 0, 178, 178, 0, 176, 165, 165, 158, 158, 165, 0,
                                   0, 0, 166, 0, 0, 149, 149, 149, 149, 0, 0, 166, 0, 158, 67, 67, 347, 0, 0, 183, 186, 186, 0, 184, 0, 165, 166, 166, 158, 0,
                                   0, 0, 165, 0, 149, 149, 149, 149, 149, 149, 0, 158, 165, 166, 67, 67, 347, 0, 264, 264, 0, 186, 62, 183, 0, 176, 165, 165, 166, 0,
                                   0, 0, 165, 149, 149, 149, 149, 149, 149, 149, 149, 166, 0, 158, 67, 67, 0, 183, 62, 0, 0, 0, 62, 185, 183, 184, 0, 165, 165, 0,
                                   0, 158, 0, 149, 149, 149, 149, 149, 149, 149, 149, 158, 0, 166, 67, 67, 165, 0, 62, 62, 0, 183, 0, 62, 62, 183, 183, 165, 158, 0,
                                   0, 166, 0, 158, 149, 149, 149, 149, 149, 149, 0, 166, 158, 165, 67, 67, 165, 165, 0, 176, 62, 0, 185, 183, 62, 185, 183, 62, 166, 0,
                                   0, 165, 165, 166, 158, 0, 149, 149, 0, 0, 158, 0, 166, 158, 67, 67, 165, 165, 165, 184, 183, 178, 0, 0, 0, 183, 264, 181, 264, 0,
                                   0, 0, 0, 0, 166, 0, 67, 67, 0, 0, 166, 0, 0, 166, 67, 67, 165, 165, 165, 165, 0, 186, 0, 183, 0, 186, 264, 264, 0, 0,
                                   0, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 0,
                                   0, 67, 67, 67, 67, 67, 67, 67, 67, 0, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 0,
                                   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            "height": 20,
                            "id": 2,
                            "name": "layer 1",
                            "opacity": 1,
                            "type": "tilelayer",
                            "visible": true,
                            "width": 30,
                            "x": 0,
                            "y": 0
                     }],
              "nextlayerid": 5,
              "nextobjectid": 1,
              "orientation": "orthogonal",
              "renderorder": "right-down",
              "tiledversion": "1.11.2",
              "tileheight": 32,
              "tilesets": [
                     {
                            "columns": 12,
                            "firstgid": 1,
                            "image": "assets/Floors_Tiles.png",
                            "imageheight": 416,
                            "imagewidth": 400,
                            "margin": 0,
                            "name": "floor",
                            "spacing": 0,
                            "tilecount": 156,
                            "tileheight": 32,
                            "tiles": [
                                   {
                                          "id": 0,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 1,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 2,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 3,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 4,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 5,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 6,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 7,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 8,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 9,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 10,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 11,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 12,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 13,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 14,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 15,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 16,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 17,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 18,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 19,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 20,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 21,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 22,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 23,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 24,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 25,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 26,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 27,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 28,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 29,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },

                                   {
                                          "id": 30,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 31,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 32,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 33,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 34,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 35,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 36,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 37,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 38,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 39,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 40,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 41,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 42,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 43,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 44,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 45,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 46,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 47,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 48,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 49,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 50,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 51,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 52,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 53,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 54,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 55,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 56,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 57,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 58,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 59,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },

                                   {
                                          "id": 60,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 61,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 62,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 63,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 64,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 65,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 66,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "false"
                                                 }]
                                   },
                                   {
                                          "id": 67,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 68,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 69,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 70,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 71,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 72,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 73,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 74,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 75,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 76,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 77,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 78,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 79,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 80,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 81,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 82,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 83,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 84,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 85,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 86,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 87,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 88,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 89,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },

                                   {
                                          "id": 90,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 91,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 92,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 93,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 94,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 95,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 96,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 97,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 98,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 99,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 100,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 101,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 102,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 103,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 104,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 105,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 106,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 107,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 108,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 109,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 110,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 111,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 112,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 113,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 114,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 115,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 116,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 117,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 118,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 119,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },

                                   {
                                          "id": 120,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 121,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 122,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 123,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 124,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 125,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 126,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 127,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 128,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 129,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 130,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 131,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 132,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 133,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 134,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 135,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 136,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "false"
                                                 }]
                                   },
                                   {
                                          "id": 137,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 138,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 139,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 140,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 141,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 142,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 143,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 144,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 145,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 146,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 147,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 148,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "false"
                                                 }]
                                   },
                                   {
                                          "id": 149,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },

                                   {
                                          "id": 150,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 151,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 152,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 153,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 154,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 155,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   }],
                            "tilewidth": 32
                     },
                     {
                            "columns": 8,
                            "firstgid": 157,
                            "image": "assets/Size_02.png",
                            "imageheight": 128,
                            "imagewidth": 256,
                            "margin": 0,
                            "name": "trees",
                            "properties": [
                                   {
                                          "name": "collide",
                                          "type": "string",
                                          "value": "true"
                                   }],
                            "spacing": 0,
                            "tilecount": 32,
                            "tileheight": 32,
                            "tilewidth": 32
                     },
                     {
                            "columns": 12,
                            "firstgid": 189,
                            "image": "assets/Water_tiles.png",
                            "imageheight": 400,
                            "imagewidth": 400,
                            "margin": 0,
                            "name": "water",
                            "spacing": 0,
                            "tilecount": 144,
                            "tileheight": 32,
                            "tiles": [
                                   {
                                          "id": 0,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 1,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 2,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 3,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 4,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 5,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 6,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 7,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 8,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 9,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 10,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 11,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 12,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 13,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 14,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 15,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 16,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 17,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 18,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 19,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 20,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 21,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 22,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 23,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 24,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 25,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 26,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 27,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 28,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 29,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },

                                   {
                                          "id": 30,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 31,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 32,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 33,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 34,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 35,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 36,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 37,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 38,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 39,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 40,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 41,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 42,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 43,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 44,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 45,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 46,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 47,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 48,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 49,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 50,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 51,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 52,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 53,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 54,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 55,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 56,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 57,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 58,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 59,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },

                                   {
                                          "id": 60,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 61,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 62,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 63,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 64,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 65,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 66,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 67,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 68,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 69,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 70,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 71,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 72,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 73,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 74,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 75,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 76,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 77,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 78,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 79,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 80,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 81,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 82,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 83,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 84,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 85,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 86,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 87,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 88,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 89,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },

                                   {
                                          "id": 90,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 91,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 92,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 93,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 94,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   },
                                   {
                                          "id": 95,
                                          "properties": [
                                                 {
                                                        "name": "collide",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   }],
                            "tilewidth": 32
                     },
                     {
                            "columns": 7,
                            "firstgid": 333,
                            "grid":
                            {
                                   "height": 32,
                                   "orientation": "orthogonal",
                                   "width": 32
                            },
                            "image": "assets/Pixel Signs.png",
                            "imageheight": 960,
                            "imagewidth": 960,
                            "margin": 8,
                            "name": "signs",
                            "spacing": 8,
                            "tilecount": 14400,
                            "tileheight": 100,
                            "tilerendersize": "grid",
                            "tiles": [
                                   {
                                          "id": 14,
                                          "properties": [
                                                 {
                                                        "name": "disappear",
                                                        "type": "string",
                                                        "value": "true"
                                                 }]
                                   }],
                            "tilewidth": 128
                     }],
              "tilewidth": 32,
              "type": "map",
              "version": "1.10",
              "width": 30
       });