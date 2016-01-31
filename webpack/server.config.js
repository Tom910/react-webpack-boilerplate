/* eslint no-console: 0 */
require('./server.babel.js');

const express = require('express');
const webpack = require('webpack');
const config = require('./common.config');

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false,
  },
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(`${__dirname}/dist`));

app.listen(config._hotPort, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }

  console.info(`==> 🌎 Listening on port ${config._hotPort}. Open up http://localhost:${config._hotPort}/ in your browser.`);
});
