const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

// def
const pathBuild = (...paths) => path.join(__dirname, '..', 'dist', ...paths)
const pathSrc = (...paths) => path.join(__dirname, '..', 'src', ...paths)
const jsEntry = pathSrc('index.js')

// init config
const config = {
  context: pathSrc(),
  entry: ['react-hot-loader/patch', jsEntry],
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
  filename: 'assets/js/[name].js',
  sourceMapFilename: 'assets/js/[name].map',
  publicPath: '/'
}

// ----------------------------------------------------------
// dev server
config.devServer = {
  port: 9090,
  host: '0.0.0.0',
  compress: true,
  historyApiFallback: true,
  disableHostCheck: true,
  publicPath: '/'
}

config.devtool = 'eval'

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

// copy public folder
config.plugins.push(
  new CopyWebpackPlugin([
    {
      from: pathSrc('..', 'public'),
      to: pathBuild()
    }
  ])
)

// ----------------------------------------------------------
// plugins
// show named module of hot reload
config.plugins.push(new webpack.NamedModulesPlugin())

// browserSync
config.plugins.push(
  new BrowserSyncPlugin(
    {
      host: 'localhost',
      port: 3000,
      proxy: 'http://0.0.0.0:9090/'
    },
    {
      reload: false
    }
  )
)

// copy HTML entry file
config.plugins.push(
  new HtmlWebpackPlugin({
    filename: pathBuild('index.html'),
    template: pathSrc('index.html'),
    htmlVersion: 'DEV'
  })
)

// define env
config.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  })
)

module.exports = config
