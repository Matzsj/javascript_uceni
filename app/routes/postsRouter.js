
const controller = require('../controllers/postsController.js');

// priprava routeru
const router = require('express').Router();

router.get('/delete/:id', controller.deletePost);
router.post('/new', controller.addPost);
router.get('/:id', controller.showPost);
router.get('/', controller.allPosts);


module.exports = router;