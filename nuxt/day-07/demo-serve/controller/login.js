const { loginUser: loginUser_db } = require('../model/login')
const loginUser = async(ctx) => {
    // console.log(ctx.request.body);
    const result = await loginUser_db(ctx.request.body)
    // console.log(result);
    ctx.body = {
        status: 200,
        message: '登录成功'
    }
}

module.exports = {
    loginUser
}