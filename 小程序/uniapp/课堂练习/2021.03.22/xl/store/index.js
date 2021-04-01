// 导入 vue 和 vuex
import Vue from "vue";
import Vuex from "vuex";
// 导入购物车的 vuex 模块
import cartStore from './cartStore.js'
// 将 Vuex 安装为 Vue 的插件
Vue.use(Vuex)

// 创建store实例对象
const store = new Vuex.Store({
	// 挂载 store 模块
	modules: {
		m_cart: cartStore
	},
})

// 导出Store实例对象
export default store
