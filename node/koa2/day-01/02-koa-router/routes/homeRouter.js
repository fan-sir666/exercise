const Router = require('koa-router')

const homeRouter = new Router({
    prefix: "/home"
})

homeRouter.get('/', context => {
    context.body = "home页面"
})

homeRouter.get('/aaa', context => {
    context.body = "home下的aaa页面"
})

module.exports = homeRouter;