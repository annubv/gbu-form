const dbConn = require("../database/db.js"); 
const User = dbConn.User; 
var session = require('express-session');



function signup(req,res){
    const {fName , lName , email , password} = req.body;
    console.log(fName)
    console.log(lName)
    console.log(email)
    console.log(password)

    User.create({
        fName,
        lName,
        email,
        password
    })
    .then(user => {
        res.render("form", { 
            msg : "Welcome",
            user : user,
        })
    })
}

module.exports = {
    signup: signup
};
