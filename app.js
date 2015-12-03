var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Configuration de la base de données MongoDB.
var mongoose = require('mongoose');
var utilisateur = '...';
var mdp = '...';
var adresse = '...';
mongoose.connect('mongodb://' + utilisateur + ':' + mdp + adresse);

var routes = require('./routes/index');
var creationJoueur = require('./routes/creationJoueur')
var pageJeu = require('./routes/pageJeu');
var pages = require('./routes/api/pages');
var joueurs = require('./routes/api/joueurs');
var combat = require('./routes/api/combat');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// session setup
app.use(session({ secret: "secreetttt", resave: true, saveUninitialized: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/', creationJoueur);
app.use('/', pageJeu);

app.use('/api/*', bodyParser.json({ type: 'application/json' }));
app.use('/api/pages', pages);
app.use('/api/joueurs', joueurs);
app.use('/api/combat', combat);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
