// 购物车 数据共享
export default {
	// 为当前模块开启命名空间
	namespaced: true,
	state: {
		// 获取本地存的商品信息
		cart: JSON.parse(uni.getStorageSync('cart') || '[]')
	},
	mutations: {
		addToCart(state, goods) {
			// console.log(goods)
			const findResult = state.cart.find(item => item.goods_id === goods.goods_id);
			// 商品信息不在cart中
			if (!findResult) {
				state.cart.push(goods);
			} else {
				// 商品信息数量++
				findResult.goods_count++;
			};
			this.commit('m_cart/saveToStorage');
		},
		// 将数据存到本地
		saveToStorage(state){
			uni.setStorageSync('cart',JSON.stringify(state.cart));
		},
		// 修改购物车商品信息状态
		updateGoodsState(state,goods){
			const findResult = state.cart.find(item=>item.goods_id === goods.goods_id);
			if(findResult){
				findResult.goods_state = goods.goods_state;
				this.commit('m_cart/saveToStorage');
			}
		},
		// 调用 修改数量的方法
		updateGoodsCount(state,goods){
			const findResult = state.cart.find(item=>item.goods_id === goods.goods_id);
			if(findResult){
				findResult.goods_count = goods.goods_count;
				this.commit('m_cart/saveToStorage');
			}
		}
		
	},
	getters: {
		// 统计购物车的商品总数量
		total(state) {
			let c = 0;
			state.cart.forEach(item => c += item.goods_count)
			return c;
		}
	}
}
