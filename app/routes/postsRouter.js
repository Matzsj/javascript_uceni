
const controller = require('../controllers/postsController.js');

// priprava routeru
const router = require('express').Router();

router.use((req, res, next) => {
    if(!req.session.prihlasenyUzivatel) {
        return res.redirect('/users/login');
    }

    next();
});

router.post('/delete/:id', controller.deletePost);
router.post('/new', controller.addPost);
router.get('/:id', controller.showPost);
router.get('/', controller.allPosts);


module.exports = router;