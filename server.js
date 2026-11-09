// nacteni nastaveni ze souboru .env
require('dotenv').config();

// pouzite nastaveni
const port = process.env.PORT;

// spusteni serveru pro aplikaci
require('http').createServer(require('./js.js'))
.listen(port, () => {
    console.log(`Server běží na http://localhost:${port}`);
});