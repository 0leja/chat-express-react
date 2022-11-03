const {DataTypes, UUIDV4} = require("sequelize");
const sequelize = require("../db");


const {STRING, INTEGER, UUID} = DataTypes

const ChatMessage = sequelize.define('chat-messages', {
    id: {type: UUID, defaultValue: UUIDV4, primaryKey: true, allowNull: false},
    sender: {type: UUID, allowNull: false},
    text: {type: STRING, allowNull: false}
})


module.exports = {ChatMessage}