const { ChatMessage } = require("../models/ChatMessages");

const MessagesController = {
    async createNew(req, res, next) {
        const  {sender, userChatId, text} = req.body;
        console.log('Здесь')

        if(!sender || !userChatId || !text) {
            return next({status: 404, message: "Не всё указано"});
        }

        const newMessage = await ChatMessage.create({sender, userChatId, text});

    

        return res.json(newMessage)
    }
}

module.exports = {MessagesController}