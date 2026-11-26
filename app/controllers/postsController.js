const model = require('../models/postsModel.js');

exports.allPosts = (req, res) => {
	res.render('prispevky', {
		titulek: 'Příspěvky',
		prispevky: model.nacistPrispevky(),
		autorAktualni: req.session.prihlasenyUzivatel,
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
		autorAktualni: req.session.prihlasenyUzivatel,
	});
}

// zobrazeni konkretniho prispevku
exports.deletePost = (req, res) => {
    // vyzvednuti parametru z URL
    const id = req.params.id;
    
    // smazani provadi model
    model.smazatPrispevek(id, req.session.prihlasenyUzivatel);

    // presmerovani opet na vypis
    res.redirect('/prispevky');
}

exports.addPost = (req, res) => {
    // vyzvednuti dat z tela POST pozadavku
    const nadpis = req.body.nadpis;
    const obsah = req.body.obsah;

    if(typeof nadpis !== 'string' || !nadpis.trim() ||
        typeof obsah !== 'string' || !obsah.trim()) {
        return res.redirect('/prispevky');
    }

    // pridavani zajistuje model
    model.pridatPrispevek(nadpis.trim(), obsah.trim(), req.session.prihlasenyUzivatel);

    // presmerovani opet na vypis
    res.redirect('/prispevky');
}