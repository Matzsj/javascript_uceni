const router = require('express').Router();


router.get(['/','/index'], (req, res) => {
	res.render('index');
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



// vsechny ostatni URL jsou chyba
router.use((req, res) => {
    res.render('error');
});

// exportovani routeru pro pouziti v aplikaci
module.exports = router;