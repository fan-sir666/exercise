<template>
	<view>
		<!-- 搜索区域 start-->
		<view class="search-box">
			<my-search bgcolor="#c00000" radius="20" @click="handleSearch"></my-search>
		</view>

		<!-- 搜索区域 end -->
		<view>
			<!-- 轮播图 start -->
			<view class="swiper_list">
				<swiper autoplay indicator-dots circular>
					<swiper-item v-for="(item,index) in swiperList" :key="index">
						<navigator :url="'/subpkg/goods_detail/goods_detail?goods_id=' + item.goods_id">
							<image mode="widthFix" :src="item.image_src"></image>
						</navigator>
					</swiper-item>
				</swiper>
			</view>
			<!-- 轮播图 end -->
			<!-- 导航 start -->
			<view class="nav_list">
				<navigator url="/pages/cate/cate" :open-type="item.open_type" v-for="(item,index) in navList"
					:key="index">
					<image :src="item.image_src" mode="widthFix"></image>
				</navigator>
			</view>
			<!-- 导航 end -->
			<!-- 楼层 start -->
			<view class="floor_list" v-for="(item,index) in floorList" :key="index">
				<!-- 标题 -->
				<view class="floor_title">
					<image :src="item.floor_title.image_src" mode="widthFix"></image>
				</view>
				<!-- 楼层项 -->
				<view class="floor_item">
					<navigator :url="item1.url" v-for="(item1,index1) in item.product_list" :key="index1">
						<image :style="{width: item1.image_width + 'rpx'}" :src="item1.image_src"
							:mode="[index1 == 0 ? 'widthFix':'heightFix']"></image>
					</navigator>
				</view>
			</view>
			<!-- 楼层 end -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 1.1轮播图数据
				swiperList: [],
				// 2.导航数据
				navList: [],
				// 3.楼层数据
				floorList: []
			};
		},
		methods: {
			// 1.2 获取轮播图数据
			async getSwiperList() {
				const {
					data: res
				} = await uni.$http.get('home/swiperdata');
				// console.log(res)
				if (res.meta.status !== 200) return uni.$toast();
				// 数据赋值
				this.swiperList = res.message;
			},
			// 2.2 获取轮播图数据
			async getNavList() {
				const {
					data: res

				} = await uni.$http.get('home/catitems');
				// console.log(res)
				if (res.meta.status !== 200) return uni.$toast();
				// 数据赋值
				this.navList = res.message;
			},
			// 3.2 获取楼层数据
			async getFloorList() {
				const {
					data: res
				} = await uni.$http.get('home/floordata');
				// console.log(res)
				if (res.meta.status !== 200) return uni.$toast();
				// 跳转到商品列表 处理数据
				res.message.forEach(item => {
					// console.log(item)
					item.product_list.forEach(query => {
						query.url = '/subpkg/goods_list/goods_list?' + query.navigator_url.split('?')[
							1]
					})
				})
				// // 数据赋值
				this.floorList = res.message;
			}
		},
		onLoad() {
			// 3.调用请求数据方法
			this.getSwiperList();
			this.getNavList();
			this.getFloorList();
		}
	}
</script>

<style lang="scss">
	/* 轮播图 */
	.swiper_list {
		swiper {
			width: 750rpx;
			height: 340rpx;

			image {
				width: 100%;
			}
		}
	}

	/* 导航 */
	.nav_list {
		display: flex;

		navigator {
			flex: 1;
			padding: 20rpx;

			image {
				width: 100%;
			}
		}
	}

	/* 楼层 */
	.floor_list {
		.floor_title {
			margin: 20rpx 0;
		}

		.floor_item {
			margin-left: 10rpx;
			overflow: hidden;

			navigator {
				float: left;

				&:nth-last-child(-n+4) {
					height: 188rpx;
					border-left: 20rpx solid #FFFFFF;
				}

				&:nth-child(2),
				&:nth-child(3) {
					border-bottom: 10rpx solid #FFFFFF;
				}

				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
