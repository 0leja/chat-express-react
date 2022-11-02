
const { updateUsers } = require("../index");
const { User } = require("../models/User")


const UserController = {
    async getUsers (req, res, next) {
        console.log(req);
        const io = req.io
        const users = await User.findAll()
        req.on('connection', socket => {
            socket.emit('message', 'sdsds')
        })

        return res.json(users)


    },

    async register(req, res, next) {
        const {username, password} = req.body

        if(!username || !password) {
            return next({status: 404, message: 'Не всё введено'})
        }

        const user = await User.create({username, password})
        req.updateUsers();
        return res.json(user)
    },

    async login(req, res, next) {
        const {username, password} = req.body

        if(!username || !password) {
            return next({status: 404, message: 'Не всё введено'})
        }

        const isNone = !(await User.findOne({where: {username}}))

        if(isNone) {
            return next({status: 404, message: 'Нет такого пользователя'})
        }

        const user = await User.findOne({where: {username, password}})

        return res.json(user)
        
    }
}



module.exports = {
    UserController
}