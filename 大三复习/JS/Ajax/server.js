const express = require('express')
    //解析,用req.body获取post参数
const bodyParser = require('body-parser');
// 处理跨域
// const cors = require('cors')
const app = express();

// 跨域资源共享
app.use((req, response, next) => {
    response.header("Access-Control-Allow-Origin", "*"); //必须重新设置，把origin的域加上去
    response.header(
        "Access-Control-Allow-Methods",
        "GET,HEAD,PUT,PATCH,POST,DELETE"
    );
    response.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept,token"
    );
    response.header("Access-Control-Allow-Credentials", "true"); //和客户端对应，必须设置以后，才能接收cookie.
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors())

// 处理请求
app.get('/server', (request, response) => {
    console.log(request.query);
    //  设置响应体
    response.send('来了老弟好嗨呦!!!')
})

app.post('/server', (request, response) => {
    console.log(request.body);
    const data = {
            name: '哇哈哈',
            age: 20
        }
        // response.send('欢迎光临,男宾三位')
    response.send(JSON.stringify(data))
})

app.post('/delay',(req,res)=>{
    setTimeout(()=>{
        res.send("网络超时！！！")
    },3000)
})
// 监听端口服务
app.listen(8000, () => {
    console.log("服务已开启,8000 端口监听中....");
})