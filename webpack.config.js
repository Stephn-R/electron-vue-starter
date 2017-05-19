/*=============================================>>>>>
= MODULES =
===============================================>>>>>*/

const path = require('path');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');

/*= End of MODULES =*/
/*=============================================<<<<<*/

process.env = require('./config/settings.json');

module.exports = {
  entry:          {
    app: [ './app/index.js' ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map'
  },
  resolve: {
    extensions: ['.js', '.ts'],
    modules: ['node_modules'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          'vue-loader',
        ],
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /(node_modules)/,
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: [
          'file-loader?name=[name].[ext]',
        ],
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    // HOT FIX FOR WEIRD WARNINGS ON DEV SERVER
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      __dirname
    ),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new WebpackNotifierPlugin({
      title: 'Webpack Bundler',
      alwaysNotify: true,
    }),
  ]
};
