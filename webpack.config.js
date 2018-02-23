var path = require('path');
const Dotenv = require('dotenv-webpack');

const config = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '.env')
    })
  ],
  target: 'node'
}

module.exports = config