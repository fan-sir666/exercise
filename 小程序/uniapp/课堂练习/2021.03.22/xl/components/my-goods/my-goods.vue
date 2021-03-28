<template>
	<view>
			<view class="goods-item">
				<!-- 商品左侧图片区域 -->
				<view class="goods-item-left">
					<image :src="goods.goods_small_logo || defaultPic" mode="widthFix" class="goods-pic"></image>
				</view>
				<!-- 商品右侧信息区域 -->
				<view class="goods-item-right">
					<!-- 商品标题 -->
					<view class="goods-name">{{goods.goods_name}}</view>
					<view class="goods-info-box">
						<!-- 商品价格 -->
						<view class="goods-price"> &yen; {{fixedPrice(goods.goods_price)}}</view>
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
			}
		},
		data() {
			return {
				// 默认的空图片
				defaultPic: 'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png'
			};
		},
		methods: {
			// 处理价格
			fixedPrice(price){
				// 保留两位小数 ==》 23.45
				return Number(price).toFixed(2)
			}
		}
	}
</script>

<style lang="scss">
	.goods-item {
		display: flex;
		padding: 10px 5px;
		border-bottom: 1px solid #f0f0f0;

		.goods-item-left {
			margin-right: 5px;

			image {
				width: 100px;
			}
		}

		.goods-item-right {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.goods-name{
				font-size: 28rpx;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}
			.goods-price {
				font-size: 32rpx;
				color: #c00000;
			}
		}
	}
</style>
