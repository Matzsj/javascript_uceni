const express = require('express');


const app = express();

app.set('view engine', 'ejs')


app.use(express.static('public'));
// app.use(express.static('www'));

app.set('views', './app/views')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// o zpracovani URL se stara router
app.use(require('./routes/defaultRouter'));

module.exports = app;