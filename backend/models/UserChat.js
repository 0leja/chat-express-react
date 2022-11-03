const {DataTypes, UUIDV4} = require("sequelize");
const sequelize = require("../db");


const {STRING, INTEGER, UUID} = DataTypes

const UserChat = sequelize.define('user-chat', {
    id: {type: UUID, defaultValue: UUIDV4, primaryKey: true, allowNull: false},
    creator: {type: STRING, allowNull: false},
    reciever: {type: STRING, allowNull: false}
})


module.exports = {UserChat}