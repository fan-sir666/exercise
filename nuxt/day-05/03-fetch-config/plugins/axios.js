import axios from 'axios';

export default (context, inject) => {
    axios.defaults.baseURL = "https://cnodejs.org/api/v1"
    inject('api', {
        // 列表
        getTopics(path) {
            return axios.get(path)
        },
        // 详情
        getTopicsDetail(path) {
            return axios.get(path)
        }
    })
}