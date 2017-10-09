const path = require('path');
const express = require('express');
const compression = require('compression');

const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';

const app = express();
app.use(compression());

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'assets', req.path))
})

if (require.main === module) {
  app.listen(port, host, function(err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Server started on http://${host}:${port}`);
  })
}
