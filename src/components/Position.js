module.exports = {
  type: 'Position',
  onCreate({ x, y }) {
    this.x = x;
    this.y = y;
  },
};
