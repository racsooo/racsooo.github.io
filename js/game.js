
class MapScene extends Phaser.Scene {
    constructor() {
        super('MapScene');
      }
  
    preload() {
      // Runs once, loads up assets like images and audio
        this.load.image('tiles', 'assets/images/environment/grass.png');
        this.load.atlas("atlas", "assets/images/character/anim-sheet.png", "assets/images/character/a-character.json");
  
      }
    
    create() {
      // Runs once, after all assets in preload are loaded

      // Load a map from a 2D array of tile indices
      const level = [
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
        [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0]
      ];

      // When loading from an array, make sure to specify the tileWidth and tileHeight
      const map = this.make.tilemap({ data: level, tileWidth: 24, tileHeight: 24 });
      const tiles = map.addTilesetImage("tiles");
      const layer = map.createLayer(0, tiles, 0, 0);


      player = this.physics.add.sprite(100, 350, "atlas").setSize(14, 20)
      .setOffset(0, 10);

      // Create the player's walking animations from the texture atlas. These are stored in the global
      // animation manager so any sprite can access them.
      const anims = this.anims;
      anims.create({
        key: "left-walk",
        frames: anims.generateFrameNames("atlas", {
          prefix: "left-walk.",
          start: 0,
          end: 3,
          zeroPad: 3,
        }),
        frameRate: 3,
        repeat: -1,
      });
      anims.create({
        key: "right-walk",
        frames: anims.generateFrameNames("atlas", {
          prefix: "right-walk.",
          start: 0,
          end: 3,
          zeroPad: 3,
        }),
        frameRate: 3,
        repeat: -1,
      });
      anims.create({
        key: "front-walk",
        frames: anims.generateFrameNames("atlas", {
          prefix: "front-walk.",
          start: 0,
          end: 3,
          zeroPad: 3,
        }),
        frameRate: 3,
        repeat: -1,
      });
      anims.create({
        key: "back-walk",
        frames: anims.generateFrameNames("atlas", {
          prefix: "back-walk.",
          start: 0,
          end: 3,
          zeroPad: 3,
        }),
        frameRate: 3,
        repeat: -1,
      });
      anims.create({
        key: "front",
        frames: anims.generateFrameNames("atlas", {
          prefix: "front.",
          start: 0,
          end: 1,
          zeroPad: 3,
        }),
        frameRate: 3,
        repeat: -1,
      });
      anims.create({
        key: "back",
        frames: anims.generateFrameNames("atlas", {
          prefix: "back.",
          start: 0,
          end: 1,
          zeroPad: 3,
        }),
        frameRate: 3,
        repeat: -1,
      });
      anims.create({
        key: "right",
        frames: anims.generateFrameNames("atlas", {
          prefix: "right.",
          start: 0,
          end: 3,
          zeroPad: 3,
        }),
        frameRate: 3,
        repeat: -1,
      });
      anims.create({
        key: "left",
        frames: anims.generateFrameNames("atlas", {
          prefix: "left.",
          start: 0,
          end: 1,
          zeroPad: 3,
        }),
        frameRate: 3,
        repeat: -1,
      });


      const camera = this.cameras.main;
      camera.startFollow(player);
      
      camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

      cursors = this.input.keyboard.createCursorKeys();
    }

    update(time, delta) {
      // Runs once per frame for the duration of the scene
      const speed = 30;
      const prevVelocity = player.body.velocity.clone();
    
      // Stop any previous movement from the last frame
      player.body.setVelocity(0);
    
      // Horizontal movement
      if (cursors.left.isDown) {
        player.body.setVelocityX(-speed);
      } else if (cursors.right.isDown) {
        player.body.setVelocityX(speed);
      }
    
      // Vertical movement
      if (cursors.up.isDown) {
        player.body.setVelocityY(-speed);
      } else if (cursors.down.isDown) {
        player.body.setVelocityY(speed);
      }
    
      // Normalize and scale the velocity so that player can't move faster along a diagonal
      player.body.velocity.normalize().scale(speed);
    
      // Update the animation last and give left/right animations precedence over up/down animations
      if (cursors.left.isDown) {
        player.anims.play("left-walk", true);
      } else if (cursors.right.isDown) {
        player.anims.play("right-walk", true);
      } else if (cursors.up.isDown) {
        player.anims.play("back-walk", true);
      } else if (cursors.down.isDown) {
        player.anims.play("front-walk", true);
      } else {
    
        // If we were moving, pick and idle frame to use
        if (prevVelocity.x < 0) player.anims.play("left", true);
        else if (prevVelocity.x > 0) player.anims.play("right", true);
        else if (prevVelocity.y < 0) player.anims.play("back", true);
        else if (prevVelocity.y > 0) player.anims.play("front", true);
      }
    }
};

class SplashScene extends Phaser.Scene {
    constructor() {
      super('SplashScene');
    }
  
    preload() {
      this.load.image('logo11', 'assets/images/amys/amysprocess (4).png');
    }
  
    create() {
        
      this.i = this.add.image(this.scale.width / 2, this.scale.height / 2, 'logo11').setInteractive();
      this.i.on('pointerdown', function(){
        this.scene.start('MapScene');
        }, this);
    }

  };


  const config = {
    type: Phaser.AUTO,
    pixelArt: true,
    scene: [SplashScene, MapScene],
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 0 } // Top down game, so no gravity
      }
    },
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width:400,
      height:400,
      zoom: 2,
      min: {
        width: 185,
        height: 90
      },
      max: {
        width: 1600,
        height: 1200
      }
    }
  };
const game = new Phaser.Game(config);

let cursors;
let player;
let showDebug = false;


