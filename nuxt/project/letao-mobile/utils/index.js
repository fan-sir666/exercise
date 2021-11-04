//#region 表单校验规则
// 用户名 
const username = (username) => {
    // 必填
    if (!username) return '用户名不能为空,请重新输入';
    // 位数
    if (username.trim().length < 2 || username.trim().length > 20) {
        return "用户名长度必须是大于2位或者小于20位";
    }
}

// 密码
const password = (password, repeatPassword) => {
    if (!password) {
        return '用户密码不能为空,请重新输入';
    }
    if (!/^[a-zA-Z0-9]{6,20}$/.test(password.trim())) {
        return '用户密码长度在6到20位';
    }
    if (repeatPassword && password !== repeatPassword) {
        return "两次输入的密码不一致, 重新输入";
    }
}

// 手机号
const mobile = (moble) => {
    if (!moble) {
        return "手机号不能为空，请重新输入";
    }
    if (!/^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/.test(moble)) {
        return "手机号格式不正确,请重新输入手机号";
    }
}

//#endregion

export {
    username,
    password,
    mobile
}