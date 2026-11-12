const model = require('../models/postsModel.js');

exports.allPosts = (req, res) => {
	res.render('prispevky', {
		titulek: 'Příspěvky',
		prispevky: model.nacistPrispevky(),
	});
}


// zobrazeni vsech prispevku
exports.showPost = (req, res) => {
	// vyzvednuti parametru z URL
	const id = req.params.id;
	// nacteni dat pomoci modelu    
	const prispevek = model.nacistPrispevek(id);

	res.render('post', {
		titulek: 'Příspěvek',
		prispevek: prispevek,
	});
}

// zobrazeni konkretniho prispevku
exports.deletePost = (req, res) => {
    // vyzvednuti parametru z URL
    const id = req.params.id;
    
    // smazani provadi model
    model.smazatPrispevek(id);

    // presmerovani opet na vypis
    res.redirect('/prispevky');
}

exports.addPost = (req, res) => {
    // vyzvednuti dat z tela POST pozadavku
    const nadpis = req.body.nadpis;
    const obsah = req.body.obsah;

    if(!nadpis || !obsah) {
        return res.redirect('/prispevky');
    }

    // pridavani zajistuje model
    model.pridatPrispevek(nadpis, obsah);

    // presmerovani opet na vypis
    res.redirect('/prispevky');
}