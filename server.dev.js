const path = require('path');
const webpack = require('webpack');
const express = require('express')
const config = require('./webpack.dev.config');

const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'assets', req.path));
})

if (require.main === module) {
  app.listen(port, host, function(err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Listening on http://${host}:${port}`);
  })
}
