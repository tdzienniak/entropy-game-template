module.exports = {
  entry: {
    game: './src/Game.js',
  },
  output: {
    path: './dist',
    filename: 'game.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(bower_components|node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
}