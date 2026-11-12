const controller = require('../controllers/defaultController.js');


const router = require('express').Router();



router.get(['/udalosti'], controller.udalosti);

router.get(['/pamatky'], controller.pamatky);

router.get(['/restaurace'], controller.restaurace);

router.get(['/doprava'], controller.doprava);

router.get(['/kontakt'], controller.kontakt);



router.use('/prispevky', require('./postsRouter.js'));
// indexova stranka cele aplikace
router.get(['/','/index'], controller.index);
// jakakoli jina URL je chybou
router.use(controller.error);






// exportovani routeru pro pouziti v aplikaci
module.exports = router;