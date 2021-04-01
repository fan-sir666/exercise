<template>
	<view>
		<!-- 购物车商品列表的标题区域 -->
		<view class="cart-title">
			<!-- 左侧的图标 -->
			<uni-icons type="shop" size="18"></uni-icons>
			<!-- 描述文本 -->
			<text class="cart-title-text">购物车</text>
		</view>
		<!-- 商品列表区域 -->
		<block v-for="(item, index) in cart" :key="i">
		  <my-goods :goods="item" :show-radio="true" :show-num="true" @radio-change="checkedChange" @num-change="numChange"></my-goods>
		</block>
	</view>
</template>

<script>
	// 导入自己封装的 mixin 模块
	import badgeMix from '@/mixins/tabbar-badge.js';
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		mixins: [badgeMix],
		computed: {
			...mapState('m_cart', ['cart']),
		},
		data() {
			return {

			};
		},
		methods:{
			...mapMutations('m_cart',['updateGoodsState','updateGoodsCount']),
			// 调用 修改状态的方法
			checkedChange(e){
				this.updateGoodsState(e);
			},
			// 调用 修改数量的方法
			numChange(e){
				this.updateGoodsCount(e);
			}
		}
	}
</script>

<style lang="scss">
	/* 购物车商品列表 */
	.cart-title {
		display: flex;
		height: 40px;
		align-items: center;
		font-size: 14px;
		padding-left: 5px;
		border-bottom: 1px solid #efefef;

		.cart-title-text {
			margin-left: 10px;
		}
	}
</style>
