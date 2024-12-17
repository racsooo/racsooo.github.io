class MapScene extends Phaser.Scene {
    constructor() {
        super('MapScene');
      }
  
    preload() {
        this.load.image('logo', 'assets/images/humanities/humanitieslogo.png');
      }
    
      create() {
        this.add.image(this.scale.width / 2, this.scale.height / 2, 'logo');
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
    width: 800,
    height: 600,
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [SplashScene, MapScene],
  };
const game = new Phaser.Game(config);


