const dbConn = require("../database/db.js");
const User = dbConn.User;

function signup(req, res) {
  res.render("signup");
}

function login(req, res) {
  res.render("login");
}

const home = (req, res) => {
  res.render("form", {
    user: req.session.user
  });
};

module.exports = {
  login,
  signup,
  home
};
