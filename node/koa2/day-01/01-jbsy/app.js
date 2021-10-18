// 导包
const Koa = require('koa');
// koa框架创建应用程序
const app = new Koa();

// 响应
app.use(async context => {
    // console.log(context); //上下文
    context.body = "来了老弟,好嗨呦"
})


// 监听
app.listen(3000, () => {
    console.log("服务运行在 http://localhost:3000");
});