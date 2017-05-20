// ────────────────────────────────────────────────────────────────────────────────
// MODULES

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');

// ────────────────────────────────────────────────────────────────────────────────

const outputDir = path.resolve(__dirname, '..', 'dist');

module.exports = {
  target: 'electron-renderer',
  entry: {
    app: [ path.resolve(__dirname, '..', 'app', 'index.ts') ],
  },
  output: {
    path: outputDir,
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map'
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue'],
    modules: [ 'node_modules' ]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              esModule: true,
              postcss: [autoprefixer]
            }
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.ts$/,
        exclude: /node_modules|vue\/src/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/]
            }
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /(node_modules)/,
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin([ outputDir ], { verbose: false }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ]
};
