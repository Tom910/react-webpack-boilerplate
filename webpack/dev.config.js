const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map', // developer debugging
  entry: [
    'webpack-hot-middleware/client', // hot reloading
  ],
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(), // order plugins
    new webpack.HotModuleReplacementPlugin(), // hot reloading
    new webpack.NoErrorsPlugin(), // error not perecompliting files
    new HtmlWebpackPlugin({ // copy and inject html
      template: './static/index.html', // Move the index.html file
      inject: true, // inject all files that are generated by webpack,
    }),
    new webpack.DefinePlugin({ // global varios
      __DEV__: true,
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
  _hotPort: 3000,
};