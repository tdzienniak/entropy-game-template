module.exports = {
  type: 'Movement',
  onCreate() {
    this.movingEntitiesQuery = this.game.createQuery(['Position', 'Velocity']);
  },
  onUpdate(delta) {
    const movingEntites = this.game.engine.getEntities(this.movingEntitiesQuery);

    for (let i = 0; i < movingEntites.length; i++) {
      const e = movingEntites.entities[i].components;

      e.position.x += delta / 1000 * e.velocity.x;
      e.position.y += delta / 1000 * e.velocity.y;
    }
  },
};
