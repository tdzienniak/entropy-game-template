import * as PIXI from 'pixi.js';

module.exports = {
  type: 'Ball',
  onCreate(opts) {
    this.addComponent('Position', opts);
    this.addComponent('Velocity', opts);

    const sprite = new PIXI.Sprite(new PIXI.Texture.fromImage('./assets/textures/ball.png'));

    sprite.position.x = opts.x;
    sprite.position.y = opts.y;
    sprite.anchor.x = 0.5;
    sprite.anchor.y = 0.5;
    sprite.width = 64;
    sprite.height = 64;

    this.game.stage.addChild(sprite);

    this.addComponent('Sprite', sprite);
  },
};
