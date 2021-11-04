const router = require('koa-router')();
const { registerUser } = require('../controller/register')

router.post('/register', registerUser)

module.exports = router;