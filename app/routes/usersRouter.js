const controller = require('../controllers/usersController.js');
const router = require('express').Router();

router.get('/', controller.oneForm);
router.get('/login', controller.loginForm);
router.post('/login', controller.login);
router.get('/register', controller.registerForm);
router.post('/register', controller.register);
router.get('/profile', controller.profile);
router.post('/signout', controller.getOut);
router.post('/delete', controller.deleteAccount);

module.exports = router;