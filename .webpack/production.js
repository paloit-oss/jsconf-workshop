const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// def
const pathBuild = (...paths) => path.join(__dirname, '..', 'dist', ...paths)
const pathSrc = (...paths) => path.join(__dirname, '..', 'src', ...paths)
const jsEntry = pathSrc('index.js')

// init config
const config = {
  context: pathSrc(),
  entry: jsEntry,
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', pathSrc()]
  },
  module: { rules: [] },
  plugins: []
}

// ----------------------------------------------------------
// output
config.output = {
  path: pathBuild(),
  filename: 'assets/js/[name].[hash].js',
  sourceMapFilename: 'assets/js/[name].[hash].map',
  publicPath: '/'
}

// ----------------------------------------------------------
// rules
// handle js/jsx
config.module.rules.push({
  test: /\.jsx?$/,
  use: ['cache-loader', 'babel-loader']
})

// add rule to support images
config.module.rules.push({
  test: /\.(png|gif|jpe?g|svg)$/,
  loader: 'file-loader',
  options: { name: 'assets/images/[name].[ext]' }
})

// add rule to support fonts
config.module.rules.push({
  test: /\.(woff|ttf)$/,
  loader: 'file-loader',
  options: { name: 'assets/fonts/[name].[ext]' }
})

// add rule to support css
config.module.rules.push({
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
})

// ----------------------------------------------------------
// plugins
// copy HTML entry file
config.plugins.push(
  new HtmlWebpackPlugin({
    filename: pathBuild('index.html'),
    template: pathSrc('index.html'),
    htmlVersion: 'PROD'
  })
)

// define env
config.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  })
)

// copy public folder
config.plugins.push(
  new CopyWebpackPlugin([
    {
      from: pathSrc('..', 'public'),
      to: pathBuild()
    }
  ])
)

// uglify
config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    uglifyOptions: {
      ie8: false,
      ecma: 8,
      output: {
        comments: false,
        beautify: false
      },
      compress: true,
      warnings: false
    }
  })
)

module.exports = config
