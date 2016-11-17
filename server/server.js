const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const boom = require('express-boom');
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/config/config.json')[env]; TODO: hookup config if needed

const models = path.join(__dirname, './models');
const port = process.env.PORT || 3000;

const app = express();

module.exports = {
  app
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(boom());

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

function listen() {
  app.listen(port);
  console.log('Express app started on port ' + port);
}

listen();
