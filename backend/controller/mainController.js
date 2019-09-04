const dbConn = require("../database/db.js"); 
const User = dbConn.User;

function singup(req,res){
    res.render("signup");
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
    singup : singup,
}