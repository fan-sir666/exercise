// 导包
const Koa = require('koa');
// koa框架创建应用程序
const app = new Koa();

// 响应
app.use(async context => {
    // 获取get请求传递的参数
    console.log(context.query); // { name: '漳卅和' }
    // console.log(context.querystring);

    // 返回浏览器
    context.body = "来了老弟,好嗨呦"
})

// 监听
app.listen(3000, () => {
    console.log("服务运行在 http://localhost:3000");
});