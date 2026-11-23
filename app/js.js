const express = require('express');

const session = require('express-session');

const app = express();

app.set('view engine', 'ejs')


app.use(express.static('public'));
// app.use(express.static('www'));

app.set('views', './app/views')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: require('dotenv').config().parsed.SECRET,
    resave: false,
    saveUninitialized: true,
}));

// o zpracovani URL se stara router
app.use(require('./routes/defaultRouter'));

module.exports = app;