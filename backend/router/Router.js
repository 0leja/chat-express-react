const Router = require('express')
const { ChatRouter } = require('./ChatRouter')
const { UserRouter } = require('./UserRouter')

const router = new Router

router.use('/user', UserRouter)
router.use('/chat', ChatRouter)


module.exports = router