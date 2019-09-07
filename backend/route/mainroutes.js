const express = require("express");
const mainctrl = require("../controller/mainctrl");
const signUpctrl = require("../controller/signupctrl");
const loginctrl = require("../controller/loginctrl");
const middle = require("../controller/middlectrl");
const formctrl = require("../controller/formctrl")

const router = express.Router();
const app = express();

router.route("/").get(middle.redirectprofile, mainctrl.login);
router.route("/login").get(middle.redirectprofile, mainctrl.login);
router.route("/login").post(loginctrl.login);

router.route("/signup").get(middle.redirectprofile, mainctrl.signup);
router.route("/signup").post(signUpctrl.signup);

router.route("/form").get(middle.redirectsignin, mainctrl.form);
router.route("/form").post(formctrl.form);

module.exports = router;
