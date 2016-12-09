import * as PIXI from 'pixi.js';

export default {
  name: 'Initial',
  onInit() {
    this.game.WIDTH = 800;
    this.game.HEIGHT = 600;

    const view = document.getElementsByTagName("canvas")[0];

    this.game.renderer = new PIXI.WebGLRenderer(this.game.WIDTH, this.game.HEIGHT, {
      view: view,
      transparent: true,
      antialias: true
    });

    this.game.stage = new PIXI.Container();
  },
  onEnter() {
    this.game.addEntity('Ball', {
      x: this.game.WIDTH / 2,
      y: this.game.HEIGHT / 2,
      vx: 40 + Math.round(Math.random() * 80),
      vy: 40 + Math.round(Math.random() * 80),
    })

    this.game.addSystem('Render');
    this.game.addSystem('Movement');
    this.game.addSystem('WallsCollision');
    this.game.addSystem('SpritePosition');

    this.game.start();
  },
  onExit() {
    this.game.stop();
  }
};