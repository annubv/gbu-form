const dbConn = require("../database/db.js");
const User = dbConn.User;

function login(req, res) {
  const { email, password } = req.body;
  User.findOne({
    where: {
      email: email
    }
  }).then(user => {
    if (password !== user.password) {
      res.render("login");
    } else {
      const newUser = {
        emailid: email,
        fname: user.fName,
        lname: user.lName,
        userId: user.id
      };

      console.log(newUser);
      req.session.user = newUser;
      res.redirect("/form");
    }
  });
}

module.exports = {
  login: login
};
