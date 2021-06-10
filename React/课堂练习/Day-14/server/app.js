const express = require('express');
// 通过express创建一个服务
const app = express();
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/getData', (req,res) => {
    res.send({
        list: [{
                id: 1,
                info: "我周六去百盟物流园 打沙包",
                status: false
            },
            {
                id: 2,
                info: "我明天下午 去操场打篮球",
                status: true
            }
        ],
        activeKey: 'all'
    })
})

app.listen(80,()=>{
  console.log("服务启动：http://localhost");
})