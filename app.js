const compression = require('compression');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(compression());

app.get('/robots.txt', function(req, res) {
  res.type('text/plain');
  res.send('User-agent: *\nDisallow: /');
});

app.get('/', (req, res) => {
  res.send('This one runs an express server!');
});

app.get('/demo', (req, res) => {
  res.set('X-full-stack', '4life');
  res.status(418);
  res.send('I prefer coffee');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
