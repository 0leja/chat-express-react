const Router = require('express')
const { ChatRouter } = require('./ChatRouter')
const { MessagesRouter } = require('./MessagesRouter')
const { UserRouter } = require('./UserRouter')

const router = new Router

router.use('/user', UserRouter)
router.use('/chat', ChatRouter)
router.use('/message', MessagesRouter)


module.exports = router