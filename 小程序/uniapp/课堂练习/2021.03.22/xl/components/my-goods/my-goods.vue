<template>
	<view>
		<view class="goods-item">
			<!-- 商品左侧图片区域 -->
			<view class="goods-item-left">
				<!-- 购物车商品勾选按按钮 -->
				<radio :checked="goods.goods_state" color="#C00000" v-if="showRadio" @click="checkedHandle"></radio>
				<image :src="goods.goods_small_logo || defaultPic" mode="widthFix" class="goods-pic"></image>
			</view>
			<!-- 商品右侧信息区域 -->
			<view class="goods-item-right">
				<!-- 商品标题 -->
				<view class="goods-name">{{goods.goods_name}}</view>
				<view class="goods-info-box">
					<!-- 商品价格 -->
					<view class="goods-price"> &yen; {{fixedPrice(goods.goods_price)}}</view>
					<!-- 商品数量 -->
					<uni-number-box :min="1" :value="goods.goods_count" v-if="showNum" @change="numHandle">
					</uni-number-box>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "my-goods",
		props: {
			// 循环数据项
			goods: {
				type: Object,
				default: {}
			},
			showRadio: {
				type: Boolean,
				// 如果外界没有指定 show-radio 属性的值，则默认不展示 radio 组件
				default: false,
			},
			showNum: {
				type: Boolean,
				// 默认不展示价格右侧的 NumberBox 组件
				default: false,
			},
		},
		data() {
			return {
				// 默认的空图片
				defaultPic: 'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png'
			};
		},
		methods: {
			// 处理价格
			fixedPrice(price) {
				// 保留两位小数 ==》 23.45
				return Number(price).toFixed(2)
			},
			// 处理购物车商品信息状态给改变所需的参数
			checkedHandle() {
				this.$emit('radio-change', {
					// 商品的 Id
					goods_id: this.goods.goods_id,
					// 商品最新的勾选状态
					goods_state: !this.goods.goods_state
				})
			},
			// 处理购物车商品信息数量给改变所需的参数
			numHandle(val) {
				this.$emit('num-change', {
					// 商品的 Id
					goods_id: this.goods.goods_id,
					// 商品的最新数量
					goods_count: +val
				})
			}
		}
	}
</script>

<style lang="scss">
	.goods-item {
		// 让 goods-item 项占满整个屏幕的宽度
		width: 750rpx;
		// 设置盒模型为 border-box
		box-sizing: border-box;
		display: flex;
		padding: 10px 5px;
		border-bottom: 1px solid #f0f0f0;


		.goods-item-left {
			margin-right: 5px;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.goods-pic {
				width: 100px;
				height: 100px;
				display: block;
			}
		}

		.goods-item-right {
			display: flex;
			flex: 1;
			flex-direction: column;
			justify-content: space-between;

			.goods-name {
				font-size: 13px;
			}

			.goods-info-box {
				display: flex;
				align-items: center;
				justify-content: space-between;
			}

			.goods-price {
				font-size: 16px;
				color: #c00000;
			}
		}
	}
</style>
