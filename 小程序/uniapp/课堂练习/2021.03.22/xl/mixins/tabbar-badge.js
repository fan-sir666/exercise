import {
	mapGetters
} from "vuex";
// 设置 tabBar 徽标 导出一个 mixin 对象 
export default {
	computed: {
		...mapGetters('m_cart', ['total'])
	},
	watch: {
		// 监听 total 值的变化
		total() {
			// 调用 methods 中的 setBadge 方法，重新为 tabBar 的数字徽章赋值
			this.setBadge()
		},
	},
	onShow() {
		this.setBadge();
	},
	methods: {
		setBadge() {
			uni.setTabBarBadge({
				index: 2,
				text: this.total + '', // 注意：text 的值必须是字符串，不能是数字
			})
		}
	}
}
