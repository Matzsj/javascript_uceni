const express = require('express');


const app = express();
const port = 3000;

app.use(express.static('www'));
app.get('/', (req, res) => {
  res.send('Server funguje!');
});

app.listen(port, () => {
  console.log(`Server běží na http://localhost:${port}`);
});