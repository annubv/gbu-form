const express = require('express');
const mainController = require('../controller/mainController');
const signUpController = require('../controller/signUpController');
const loginController = require('../controller/loginController');

const router = express.Router();
const app = express();

router.route('/').get(mainController.login)

router.route('/login').get(mainController.login);
// router.route('/login').post(loginController.login);

router.route('/signup').get(mainController.signup);
router.route('/signup').post(signUpController.signup);


module.exports = router;