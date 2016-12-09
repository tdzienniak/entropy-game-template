module.exports = {
  type: 'SpritePosition',
  onCreate() {
    this.spriteEntitiesQuery = this.game.createQuery(['Position', 'Sprite']);
  },
  onUpdate(delta) {
    const spriteEntities = this.game.engine.getEntities(this.spriteEntitiesQuery);

    for (let i = 0; i < spriteEntities.length; i++) {
      const e = spriteEntities.entities[i].components;

      e.sprite.sprite.position.x = e.position.x;
      e.sprite.sprite.position.y = e.position.y;
    }
  },
};
