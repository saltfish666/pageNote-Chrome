const path = require('path')

const conf = {
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, './chrome-extension/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              'limit': 2048000,
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  }
}

module.exports = conf
