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
