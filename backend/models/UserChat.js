const {DataTypes} = require("sequelize");
const sequelize = require("../db");


const {STRING, INTEGER} = DataTypes

const UserChat = sequelize.define('user-chat', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    receiverId: {type: INTEGER}
})


module.exports = {UserChat}