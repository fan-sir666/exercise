export default ({ $axios }, inject) => {
    inject('api', {
        //#region 首页接口
        //#region 轮播图接口
        IndexSwipper() {
            return $axios.$get('/banners');
        },
        //#endregion
        //#region 宫格接口
        IndexGridList() {
            return $axios.$get('/gridlist');
        },
        //#endregion
        //#region 运动专区接口
        IndexSport() {
            return $axios.$get('/sports');
        },
        //#endregion

        //#endregion

        //#region 分类接口
        //#region 一级分类
        OneCategory() {
            return $axios.$get('/oneCategory');
        },
        //#endregion
        //#region 二级分类
        TwoCategory(cid) {
            return $axios.$get(`/twoCategory?id=${cid}`);
        },
        //#endregion
        //#endregion
        //#region 用户接口
        //#region 短信
        Sendsms(mobile) {
            return $axios.$post('/sendsms', { mobile });
        },
        //#endregion
        //#region 注册
        Register(values) {
            return $axios.$post('/users/register', { values });
        },
        //#endregion
        //#region 登录
        Login(values) {
            return $axios.$post('/users/login', { values });
        },
        //#endregion
        //#endregion
    })
}