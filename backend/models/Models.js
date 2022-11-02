const { ChatMessage } = require("./ChatMessages");
const { UserChat } = require("./UserChat");
const { User } = require("./User");


User.hasMany(UserChat)
UserChat.belongsTo(User)


UserChat.hasMany(ChatMessage)
ChatMessage.belongsTo(UserChat)


module.exports = {
    ChatMessage,
    UserChat,
    User
}