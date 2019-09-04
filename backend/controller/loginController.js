const dbConn = require("../database/db.js"); 
const User = dbConn.User; 

function login(req,res){
    const {email,password} = req.body;
    User.findOne({
        where : {
            email : email
        }
    })
    .then(user => {
        if(password !== user.password){
            res.render("login")
        }
        else{
            const newUser = {
                id: email,
                name : user.fName,
                userId : user.id
                };
            
            console.log(newUser);
            req.session.user = newUser;
            res.render("form" , {
                msg : "Welcome",
                user : user,
            })
        }
    })
}


module.exports = {
    login : login,
}