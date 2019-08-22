const path = require('path');
module.exports = {
  // mode: 'development',
    entry: './lib/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        //test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', {modules: false}],
            'react',
            'stage-2'
          ]
        }
      }
    ]
  }
};
