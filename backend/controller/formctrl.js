const dbConn = require("../database/db.js");
const User = dbConn.User;
const FormData = dbConn.FormData;

function form(req,res){
    // const { email,fName,lName } = req.session.user;
    // console.log(emailid)
    // console.log(fName)
    // console.log(lName);
    const {fName, sName, lName, email, dob, sex, faname, moname, add1, add2, add3, add4, mob, altmob, altemail} = req.body;
    FormData.update({
        fName,
        sName,
        lName,
        email,
        dob,
        sex,
        faname,
        moname,
        add1,
        add2,
        add3,
        add4,
        mob,
        altmob,
        altemail
    },{
        where : {
            email : email
        }
    })
    .then(formData => {
        res.json("Successfully registered");
    })
}

module.exports = {
    form
}