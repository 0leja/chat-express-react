const { ChatMessage } = require("./ChatMessages");
const { UserChat } = require("./UserChat");
const { User } = require("./User");



UserChat.hasMany(ChatMessage, { as: 'messages' })
ChatMessage.belongsTo(UserChat)


module.exports = {
    ChatMessage,
    UserChat,
    User
}