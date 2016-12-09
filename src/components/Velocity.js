module.exports = {
  type: 'Velocity',
  onCreate({ vx, vy }) {
    this.x = vx;
    this.y = vy;
  },
};
