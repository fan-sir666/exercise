import { Toast } from 'vant';
const { httpcode } = require('./httpcode');
export default function({ $axios, store, redirect }) {
    // 请求拦截
    $axios.onRequest(() => {
        // 设置请求头 token
        if (store.state.token) {
            $axios.setHeader('Authorization', `Bearer ${store.state.token}`);
        }else {
            $axios.setHeader('Authorization', '');
        }
    })

    // 响应拦截
    $axios.onResponse(res => {
        const { status, message } = res.data;
        if (!status) {
            Toast(message);
        }
    })

    // 错误拦截
    $axios.onError(error => {
        // http错误码
        const code = parseInt(error.response && error.response.status);
        // 提示错误信息
        Toast(httpcode[code]);
        // 错误处理
        if (code === 400) {
            redirect('/400')
        } else if (code === 401) {
            // 401 未授权 去登录页
            redirect('/my/login')

            // 返回成功的Promise
            return Promise.resolve(false);
        }
    })

}