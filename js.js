const express = require('express');


const app = express();
const port = 3000;

app.set('view engine', 'ejs')


app.use(express.static('public'));
// app.use(express.static('www'));

app.set('views', './app/views')



app.get('/', (req, res) => {
  res.render('index');
});

app.get('/udalosti', (req, res) => {
  res.render('udalosti');
});

app.get('/restaurace', (req, res) => {
  res.render('restaurace');
});

app.get('/pamatky', (req, res) => {
  res.render('pamatky');
});

app.get('/doprava', (req, res) => {
  res.render('doprava');
});

app.get('/kontakt', (req, res) => {
  res.render('kontakt');
});

app.listen(port, () => {
  console.log(`Server běží na http://localhost:${port}`);
});