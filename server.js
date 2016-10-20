const express = require('express'),
      app = express(),
      path = require('path'),
      morgan = require('morgan'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose');

// config
const port = process.env.PORT || 8080,
      db = require('./config/db');

// connect mongoose to db
mongoose.connect(db.db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(morgan('dev'));

app.use((req,res, next) => {
    // set permissive CORS header
    res.setHeader('Access-Control-Allow-Origin', '*');

    // disable caching so we get updated comments
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

// set up static files path
app.use(express.static(__dirname + '/public'));

// routes
require('./routes/app_routes')(app);

// server
app.listen(port);

console.log("connected on " + port);

exports = module.exports = app;
