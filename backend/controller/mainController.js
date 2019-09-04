const dbConn = require("../database/db.js"); 
const User = dbConn.User;

function signup(req,res){
    res.render("signUp");
}

function login(req,res){
    if(req.session.user){
        res.redirect("profile")
    }
    else{
        res.render("login");
    }
}

module.exports = {
    login : login,
    signup : signup,
}