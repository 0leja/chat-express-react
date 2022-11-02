const Router = require('express');
const { UserController } = require('../controllers/UserController');

const UserRouter = new Router

UserRouter.get('/', UserController.getUsers)
UserRouter.post('/reg', UserController.register)
UserRouter.post('/log', UserController.login)



module.exports = {UserRouter}