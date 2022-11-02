const Router = require('express')
const { ChatController } = require('../controllers/ChatController')



const ChatRouter = new Router

// const WSServer = require('express-ws')(ChatRouter)



// ChatRouter.ws('/', ChatController.sendMessage)




module.exports = {ChatRouter}