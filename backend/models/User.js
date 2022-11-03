const {DataTypes, UUIDV4} = require("sequelize");
const sequelize = require("../db");


const {STRING, INTEGER, UUID} = DataTypes

const User = sequelize.define('user', {
    id: {type: UUID, defaultValue: UUIDV4, primaryKey: true, allowNull: false},
    username: {type: STRING, unique: true},
    password: {type: STRING}
})


module.exports = {User}