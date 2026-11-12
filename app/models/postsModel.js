const jsondb = require('simple-json-db');
// vytvoreni databaze z datoveho souboru na disku
const db = new jsondb('../data/posts.json');

// nabizena funkcnost modelu
exports.nacistPrispevky = () => {
    return db.JSON();
}