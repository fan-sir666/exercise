export default ({ $axios }, inject) => {
    inject('api', {
        //#region 登录
        Login(val) {
            return $axios.$post('/login', val);
        },
        //#endregion
        //#region 注册
        Register(val) {
            return $axios.$post('/register', val);
        }
        //#endregion
    })
}