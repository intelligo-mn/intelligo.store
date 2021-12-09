'use strict';

const express = require( 'express'),
      cors = require('cors'),
      path           = require('path'),
      morgan         = require('morgan'),
      bodyParser     = require('body-parser'), 
      mongoose       = require('mongoose'),
      config         = require('config'),
      serveStatic = require('serve-static'),
      passport       = require("passport");

const app = express();

const DB_JISHO = (process.env.DB_JISHO) ?
  (process.env.DB_JISHO) :
  config.get('DB_JISHO');
  
const SECRET = (process.env.SECRET) ?
  (process.env.SECRET) :
  config.get('SECRET');
  
app.set('port', process.env.PORT || 5000);
app.use(morgan('combined'));
app.use(cors())

app.use(express.static(path.join(__dirname, "frontend/dist")));

app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
    limit: '250mb',
    parameterLimit: 52428800,
    extended: false 
}));

app.use(bodyParser.json({
    limit: '250mb'
}));

mongoose.Promise = global.Promise;
mongoose.connect(DB_JISHO, { useMongoClient: true });

app.use('/app', express.static(path.join(__dirname, 'frontend/dist')));


var routes = require('./routes/routes.js');
app.use('/', routes);

app.listen(app.get('port'), () => {
    console.log('Express is listening on port', app.get('port'));
});
