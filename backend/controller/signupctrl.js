const dbConn = require("../database/db.js");
const User = dbConn.User;
const FormData = dbConn.FormData;
 
function signup(req, res) {
  const { fName, lName, email, password } = req.body;
  
  User.create({
    fName,
    lName,
    email,
    password
  }).then(user => {
    // console.log(user);
    FormData.create({
      fName,
      lName,
      email
    })
    .then(formData => {

      const newUser = {
        email: email,
        fName: user.fName,
        lName: user.lName,
        userId: user.id
      };

      console.log(newUser);
      req.session.user = newUser;

      res.redirect("/form");
    })
    .catch(err => {
      console.log(err)
    })
  });
}

module.exports = {
  signup: signup
};
