const Router = require('express')
const { ChatController } = require('../controllers/ChatController')



const ChatRouter = new Router

ChatRouter.get('/', ChatController.getChat)
ChatRouter.post('/new', ChatController.cerateOne)


module.exports = {ChatRouter}