const Router = require('koa-router')
const router = new Router()

const homeRouter = require('./homeRouter')

router.use(homeRouter.routes(), homeRouter.allowedMethods());

module.exports = router;