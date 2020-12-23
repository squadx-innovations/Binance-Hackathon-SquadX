const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const isWebAuth = require('./middleware/is-web-auth');

const indexRouter = require('./routes/index.routes.js');
const dashboardRouter = require('./routes/dashboard.routes.js');
const http = require('http');
const fs = require('fs');

const app = express();

// caching disabled for every route



app.use((req, res, next) => {
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  next();
});

app.use(session({
  secret: 'NftToken',
  resave: false,
  saveUninitialized: true,
  // cookie: {
  //   path: "/",
  //   httpOnly: false,
  //   secure: false,
  //   maxAge: 31536000000,
  // },
}));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// Web routes
app.use('/', indexRouter);
app.use('/dashboard', isWebAuth, dashboardRouter);

// Admin routes
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {
    title: '',
    activeBar: '',
    session: []
  });
});

module.exports = app;
http.createServer(app).listen(3000);
