const express = require('express');
const mainController = require('../controller/mainController');
const signUpController = require('../controller/signUpController');
const loginController = require('../controller/loginController');

const router = express.Router();
const app = express();

router.route('/').get(mainController.login)
router.route('/singup').get(mainController.singup);

module.exports = router;