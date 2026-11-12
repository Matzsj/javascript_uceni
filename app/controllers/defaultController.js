exports.index = (req, res) => {
	res.render('index', {
		titulek: 'Průvodce městem Trutnov',
		nazevMesta: 'Trutnov'
		
	});
}

exports.doprava = (req, res) => {
	res.render('doprava', {
		
	});
}

exports.kontakt = (req, res) => {
	res.render('kontakt', {

		
	});
}

exports.pamatky = (req, res) => {
	res.render('pamatky', {

	});
}

exports.restaurace = (req, res) => {
	res.render('restaurace', {

		
	});
}

exports.udalosti = (req, res) => {
	res.render('udalosti', {

		
	});
}

// chybova stranka
exports.error = (req, res) => {
    res.render('error', {
		titulek: 'Chyba',
	});
}