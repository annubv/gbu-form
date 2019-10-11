const dbConn = require("../database/db.js");
const User = dbConn.User;
const FormData = dbConn.FormData;

function signup(req, res) {
  res.render("signup");
}

function login(req, res) {
  res.render("login");
}

const form = (req, res) => {
  FormData.findOne({
    where :{
      email:req.session.user.email
    }
  })
  .then(user =>{
    res.render("form", {
      user: user
    });
  })
};

module.exports = {
  login,
  signup,
  form
};
