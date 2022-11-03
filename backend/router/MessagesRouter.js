const Router = require('express');
const { MessagesController } = require('../controllers/MessagesController');




const MessagesRouter = new Router


MessagesRouter.post('/new', MessagesController.createNew)


module.exports = {MessagesRouter}