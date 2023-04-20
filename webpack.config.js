const path = require('path');

module.exports = {
  entry: './src/styles.css',
  output: {
    path: path.resolve(__dirname, 'dist/micro-header'),
    filename: 'styles.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
