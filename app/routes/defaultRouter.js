const model = require('../models/postsModel.js');


const router = require('express').Router();


router.get(['/','/index'], (req, res) => {
		res.render('index', {
		nazevMesta: 'Trutnov',
    titulek: 'Průvodce městem Trutnov',
	});
});

router.get('/udalosti', (req, res) => {
  res.render('udalosti');
});

router.get('/restaurace', (req, res) => {
  res.render('restaurace');
});

router.get('/pamatky', (req, res) => {
  res.render('pamatky');
});

router.get('/doprava', (req, res) => {
  res.render('doprava');
});

router.get('/kontakt', (req, res) => {
  res.render('kontakt');
});



router.get('/prispevky', (req, res) => {
	res.render('prispevky', {
		titulek: 'Příspěvky',
    prispevky: model.nacistPrispevky(),
	});
});


// vsechny ostatni URL jsou chyba
router.use((req, res) => {
    res.status(404).render('error', {
		  titulek: 'Chyba',
	});
});

// exportovani routeru pro pouziti v aplikaci
module.exports = router;