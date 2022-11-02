const {DataTypes} = require("sequelize");
const sequelize = require("../db");


const {STRING, INTEGER} = DataTypes

const ChatMessage = sequelize.define('chat-messages', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    text: {type: STRING, allowNull: false}
})


module.exports = {ChatMessage}