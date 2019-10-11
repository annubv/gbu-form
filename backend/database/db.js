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
    sName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    lName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dob: {
        type: Sequelize.STRING,
        // allowNull: true
    },
    sex: {
        type: Sequelize.STRING,
        allowNull: true
    },
    faname: {
        type: Sequelize.STRING,
        allowNull: true
    },
    moname: {
        type: Sequelize.STRING,
        allowNull: true
    },
    add1: {
        type: Sequelize.STRING,
        allowNull: true
    },
    add2: {
        type: Sequelize.STRING,
        allowNull: true
    },
    add3: {
        type: Sequelize.STRING,
        allowNull: true
    },
    add4: {
        type: Sequelize.STRING,
        allowNull: true
    },
    mob: {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    altmob: {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    altemail: {
        type: Sequelize.STRING,
        allowNull: true
    }
})


module.exports = {
    User : User,
    FormData : FormData,
}


sequelize.sync()
.then(() => console.log('tables have been successfully created, if one doesn\'t exist'))
.catch(error => console.log('This error occurred' ,error));
