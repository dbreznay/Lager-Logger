const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const logger = require('morgan');
const routes = require('./routes');
const app = express();
const passport = require('passport');
const flash = require('connect-flash');
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(flash());
app.use(express.static('public'));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// using morgan logger for log requests
app.use(logger('dev'));

// routes - API/view
app.use(routes);

// using deployed database if it's deployed. If not deployed, it will use the local mongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/lagerLogger'

mongoose
.connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true })
.then(() => console.log('MongoDB connected...'))

app.listen(PORT, () => {
    console.log(`App running now on port ${PORT}`);
})