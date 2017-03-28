const { resolve } = require('path')
const Webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.js',
    login: './src/login.js'
  },
  output: {
    filename: '[chunkhash].[name].js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.svg$/,
        use: [ 'raw-loader' ]
      },
      {
        test: /\.(woff|woff2|png)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      chunks: ['main']
    }),
    new HTMLWebpackPlugin({
      filename: 'login.html',
      template: 'src/login.html',
      chunks: ['login']
    }),
    new Webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true
    })
  ]
}
