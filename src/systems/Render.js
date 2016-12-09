module.exports = {
  type: 'Render',
  onUpdate(delta) {
    this.game.renderer.render(this.game.stage);
  },
};
