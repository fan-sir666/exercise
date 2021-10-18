// 导包
const Koa = require('koa');
// const Router = require('koa-router');
const router = require('./routes')

// koa框架创建应用程序
const app = new Koa();
// const router = new Router();

app.use(router.routes(), router.allowedMethods());

// router.get('/home', async context => {
//     context.body = "我是/home"
// })

// 监听
app.listen(3000, () => {
    console.log("服务运行在 http://localhost:3000");
});