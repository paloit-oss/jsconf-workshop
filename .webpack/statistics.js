const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const StatsPlugin = require('stats-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// def
const pathBuild = (...paths) => path.join(__dirname, '..', 'stats', ...paths)
const pathSrc = (...paths) => path.join(__dirname, '..', 'src', ...paths)
const jsEntry = pathSrc('index.js')

// init config
const config = {
  devtool: 'source-map',
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
  filename: 'assets/js/[name].min.js',
  sourceMapFilename: 'assets/js/[name].min.js.map',
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
    },
    sourceMap: true
  })
)

//create statistics.json
config.plugins.push(
  new StatsPlugin('statistics.json', {
      source: false,
      modules: false
  })
)

//webpack-visualizer-plugin
config.plugins.push(
  new Visualizer({
    filename: './stats-visualizer.html'
  })
)

//webpack-bundle-analyzer
config.plugins.push(
  new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: './stats-analyzer.html',
      openAnalyzer: true
  })
)

module.exports = config
