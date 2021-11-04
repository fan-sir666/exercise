const router = require('koa-router')()
const { loginUser } = require('../controller/login')

router.post('/login', loginUser)

module.exports = router