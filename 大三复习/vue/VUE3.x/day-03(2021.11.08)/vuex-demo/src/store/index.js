import { createStore } from 'vuex'
import catagtory from './modules/catagtory'
import newlist from './modules/newlist'
export default createStore({
    modules: {
        cate: catagtory,
        newlist
    },
    getters: {
        // 建立快捷访问
        catagtory: state => state.cate.catagtory,
        currentCatagtory: state => state.cate.currentCatagtory
    }
});