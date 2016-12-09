
module.exports = {
  type: 'WallsCollision',
  onCreate() {
    this.ballsQuery = this.game.createQuery({
      entityType: 'Ball',
    });
  },
  onUpdate() {
    const balls = this.game.getEntities(this.ballsQuery);

    for (let i = 0; i < balls.length; i++) {
      const e = balls.entities[i].components;

      if (e.position.y > this.game.HEIGHT - 32) {
        e.position.y = this.game.HEIGHT - 32;
        e.velocity.y *= -1;
      }

      if (e.position.y < 32) {
        e.position.y = 32;
        e.velocity.y *= -1;
      }

      if (e.position.x > this.game.WIDTH - 32) {
        e.position.x = this.game.WIDTH - 32;
        e.velocity.x *= -1;
      }

      if (e.position.x < 32) {
        e.position.x = 32;
        e.velocity.x *= -1;
      }
    }
  },
};
