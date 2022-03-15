const { register: userRegister, findUserByusername, findUserInfo } = require('../model/user');
// 服务端表单校验
const Joi = require('joi');
// jwt鉴权生成token
// const jwt = require('jsonwebtoken');
// 密码加密
const { cryptoPassword } = require('../utils');
// 加盐字符串, jwtSecret
const { secret,  jwtSecret } = require('../config');

//#region 用户注册
const register = async(ctx) => {
    // 读取到请求参数
    const { username, password, mobile } = ctx.request.body.values;
    // console.log(username, password, mobile);
    // 参数校验 是否合法   不合法返回提示信息  并return 退出
    const schema = Joi.object({
        username: Joi.string().min(2).max(20).required(),
        password: Joi.string().pattern(/^[a-zA-Z0-9]{6,20}$/),
        repeat_password: Joi.ref('password'),
        mobile: Joi.string().pattern(/^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/)
    });
    const verify = schema.validate({ username, password, mobile });
    // 如果校验不通过，要return
    if (verify.error) {
        ctx.body = {
            status: 0,
            message: verify.error.details[0].message
        }
        return;
    }


    // 查询用户是否已存在
    const isUser = await findUserByusername(username);
    // 已注册
    if (isUser[0]) {
        ctx.body = {
            status: 0,
            message: '您已注册,无需重复注册'
        }

        return;
    }

    // 操作数据数据模型层 model
    const result = await userRegister(username, cryptoPassword(password + secret), mobile)

    ctx.body = {
        status: 200,
        message: '注册成功'
    }
}

//#endregion

//#region 用户登录
const login = async(ctx) => {
    // 读取到请求参数
    const { username, password } = ctx.request.body.values;
    // 查询用户信息
    const result = await findUserInfo(username, cryptoPassword(password + secret));
    if (result[0]) {
        // 根据用户名和密码生成token
        // const token = jwt.sign({
        //     username,
        //     password
        // }, jwtSecret, { expiresIn: '1h' });
        ctx.body = {
            status: 200,
            data: { token, username, mobile: result[0].mobile },
            message: "登录成功"
        }
    } else {
        ctx.body = {
            status: 0,
            message: '登录失败，请检查用户名或者密码'
        }
    }
}

//#endregion

module.exports = {
    register,
    login
}