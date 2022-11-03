const { UserChat } = require("../models/UserChat");
const { Op } = require("sequelize");
const { ChatMessage } = require("../models/ChatMessages");

const ChatController = {
    async cerateOne(req, res, next) {
        const {creator, reciever} = req.body;

        if(!creator || !reciever) {
            return next({status: 404, message: "Не всё указано"});
        }

        const chat = await UserChat.findOne({
            where: {
                [Op.or]: [{creator: reciever, reciever: creator}, {creator, reciever}]
            }
        })

        if(chat) {
            return res.json(chat);
        }
    
        const newChat = await UserChat.create({creator, reciever});

        return res.json(newChat);
    },

    async getChat(req, res, next) {
        const {userId} = req.body;

        if(!userId) {
            return next({status: 404, message: "Не всё указано"});
        }

        const chat = await UserChat.findAll({
            where: {
                [Op.or]: [{creator: userId}, {reciever: userId}]
            }, include: [{model: ChatMessage, as: 'messages'}]
        })

        return res.json(chat)
    }

     
}

module.exports = {ChatController}