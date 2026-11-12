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
		prispevky: [
			{ id: 1, nadpis: 'První příspěvek', obsah: 'Toto je první příspěvek.' },
			{ id: 2, nadpis: 'Druhý příspěvek', obsah: 'Toto je druhý příspěvek.' },
			{ id: 3, nadpis: 'Třetí příspěvek', obsah: 'Toto je třetí příspěvek.' },
		],
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