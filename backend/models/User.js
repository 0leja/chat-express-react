const {DataTypes} = require("sequelize");
const sequelize = require("../db");


const {STRING, INTEGER} = DataTypes

const User = sequelize.define('user', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    username: {type: STRING, unique: true},
    password: {type: STRING}
})


module.exports = {User}