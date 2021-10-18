export default ({ store, redirect }) => {
    // 是否登录
    if (!store.state.auth) {
        redirect('/login')
    }
}