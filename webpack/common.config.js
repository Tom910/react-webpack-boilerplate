const path = require('path');
const merge = require('webpack-merge');

const development = require('./dev.config.js'); // loading dev config
const production = require('./prod.config.js'); // loading prod config

const TARGET = process.env.NODE_ENV; // Current env option

const common = {
  entry: [
    path.join(__dirname, '../app/index'), // path start
  ],
  output: {
    path: path.join(__dirname, '../dist/'), // path outh
    filename: '[name]-[chunkhash].js', // name main file
    chunkFilename: '[name]-[chunkhash].js', // name chunk file
    publicPath: '/', // resolve url path
  },
  module: {
    loaders: [
      { // js loader
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
      }, { // css loader
        test: /\.css?$/,
        loaders: [
          'style',
          `css?${TARGET === 'development' ? 'sourceMap' : 'minimize'}&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]`,
          'postcss',
        ],
      }, { // media loader for data uri
        test: /\.(png|jpg|jpeg|svg|woff)?$/,
        loader: 'url?limit=10000',
      }, { // ol media loader only file
        test: /\.(woff2|eot|ttf|gif)?$/,
        loader: 'file',
      },
    ],
  },
  postcss: () => [// Postcss loader options
    require('postcss-cssnext'),
    require('autoprefixer')({
      browsers: ['last 4 versions', '> 4%'],
    }),
    require('cssnano'),
  ],
};
if (TARGET === 'development') {
  module.exports = merge(common, development); // merge two config
}

if (TARGET === 'production') {
  module.exports = merge(common, production); // merge two config
}
