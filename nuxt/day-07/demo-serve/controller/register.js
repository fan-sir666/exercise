const { registerUser: registerUser_db } = require('../model/register')

const registerUser = async(ctx) => {
    // console.log(ctx.request.body);
    const result = await registerUser_db(ctx.request.body);
    // console.log(result);
    ctx.body = {
        status: 200,
        message:'注册成功'
    }
}

module.exports = {
    registerUser
}