const Sequelize = require('sequelize');
const path = require("path");

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname,"db.sqlite")
});

const User = sequelize.define('users',{
    id : {
        type : Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false,
    }
});


const FormData = sequelize.define("form", {
    id : {
        type : Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
})


module.exports = {
    User : User,
    FormData : FormData,
}


sequelize.sync()
.then(() => console.log('users table has been successfully created, if one doesn\'t exist'))
.catch(error => console.log('This error occurred' ,error));
