const jsondb = require('simple-json-db');
const path = require('path');

const db = new jsondb(path.resolve(__dirname, '../../data/posts.json'));

const nacistPolePrispevku = () => {
    const data = db.JSON();
    return Array.isArray(data) ? data : [];
}

// nabizena funkcnost modelu
exports.nacistPrispevky = () => {
    return nacistPolePrispevku();
}

exports.nacistPrispevek = (id) => {
    const prispevky = nacistPolePrispevku();

    for(let i = 0; i < prispevky.length; i++) {
        if(prispevky[i].id == id) {
            return prispevky[i];
        }
    }

    return false;
}; 

// smazani konkretniho prispevku
exports.smazatPrispevek = (id, autor) => {
    const prispevky = nacistPolePrispevku();

    for(let i = 0; i < prispevky.length; i++) {
        if(String(prispevky[i].id) === String(id) && prispevky[i].autor === autor) {
            prispevky.splice(i, 1);
            db.JSON(prispevky);
            db.sync();
            return true;
        }
    }

    return false;
}

exports.smazatPrispevkyAutora = (autor) => {
    const prispevky = nacistPolePrispevku();
    const zbyvajiciPrispevky = prispevky.filter(prispevek => prispevek.autor !== autor);
    const smazano = prispevky.length - zbyvajiciPrispevky.length;

    if(smazano > 0) {
        db.JSON(zbyvajiciPrispevky);
        db.sync();
    }

    return smazano;
}

exports.pridatPrispevek = (nadpis, obsah, autor) => {
    const prispevky = nacistPolePrispevku();

    // urceni noveho ID
    let noveId = 1;
    if(prispevky.length > 0) {
        noveId = prispevky[prispevky.length - 1].id + 1;
    }

    prispevky.push({
        id: noveId,
        nadpis,
        obsah,
        autor,
    });

    db.JSON(prispevky);
    db.sync();
}