const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['@babel/polyfill','./src/index.js'],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  devServer: {
    static: './dist'
  },
  plugins: [
    new HTMLPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ],
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}