export default {
	// 开启命名空间
	namespaced: true,

	state: {
		address: JSON.parse(uni.getStorageSync('address') || '{}'),
		// 登录成功之后的 token 字符串
		token: uni.getStorageSync('token') || '',
		// token: '',
		// token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjUzLCJpYXQiOjE2MTc5NTQyMTYsImV4cCI6MTAwMTYxNzk1NDIxNX0.wpJqjziOCXcPMBX-RNC-uobzTQjif7dU0mwvtNi-sYU',
		// 用户的基本信息
		userinfo: JSON.parse(uni.getStorageSync('userinfo') || '{}')
	},
	mutations: {
		updateAddress(state, address) {
			state.address = address;
			this.commit('m_user/saveAddressToStorage')
		},
		saveAddressToStorage(state) {
			uni.setStorageSync('address', JSON.stringify(state.address))
		},
		// 更新用户的基本信息
		updateUserInfo(state, userinfo) {
			state.userinfo = userinfo
			// 通过 this.commit() 方法，调用 m_user 模块下的 saveUserInfoToStorage 方法，将 userinfo 对象持久化存储到本地
			this.commit('m_user/saveUserInfoToStorage')
		},

		// 将 userinfo 持久化存储到本地
		saveUserInfoToStorage(state) {
			uni.setStorageSync('userinfo', JSON.stringify(state.userinfo))
		},
		// 更新 token 字符串
		updateToken(state, token) {
			state.token = token
			// 通过 this.commit() 方法，调用 m_user 模块下的 saveTokenToStorage 方法，将 token 字符串持久化存储到本地
			this.commit('m_user/saveTokenToStorage')
		},

		// 将 token 字符串持久化存储到本地
		saveTokenToStorage(state) {
			uni.setStorageSync('token', state.token)
		}
	},
	getters: {
		// 拼接收货地址
		addstr(state) {
			if (!state.address.provinceName) return '';
			return state.address.provinceName + state.address.cityName + state.address.countyName + state.address
				.detailInfo
		}
	}
}
