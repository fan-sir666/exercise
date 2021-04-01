<template>
	<view>
		<!-- 搜索区域 start-->
		<view class="search-box">
			<my-search bgcolor="#c00000" radius="20" @click="handleSearch"></my-search>
		</view>
		<!-- 搜索区域 end -->
		<!-- 分类区域 start -->
		<view class="cate_container">
			<!-- 滚动左侧 -->
			<scroll-view class="scroll-left" scroll-y :style="{height: wh + 'px'}">
				<block v-for="(item,i) in cateList" :key="i">
					<view :class="['scroll-left-item', i == active ? 'active':'']" @click="activeTab(i)">
						{{item.cat_name}}
					</view>
				</block>
			</scroll-view>
			<!-- 滚动右侧 -->
			<scroll-view class="scroll-right" scroll-y :style="{height: wh + 'px'}" :scroll-top="scrollTop">
				<view class="cate-lv2" v-for="(item2, i2) in cateErList" :key="i2">
					<view class="cate-lv2-title">/ {{item2.cat_name}} /</view>
					<!-- 动态渲染三级分类的列表数据 -->
					<view class="cate-lv3-list">
						<!-- 三级分类 Item 项 -->
						<view class="cate-lv3-item" v-for="(item3, i3) in item2.children" :key="i3"
							@click="gotoGoodsList(item3)">
							<!-- 图片 -->
							<image :src="item3.cat_icon"></image>
							<!-- 文本 -->
							<text>{{item3.cat_name}}</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 分类区域 end -->
	</view>
</template>

<script>
	// 导入自己封装的 mixin 模块
	import badgeMix from '@/mixins/tabbar-badge.js'
	export default {
		mixins: [badgeMix],
		data() {
			return {
				// 滚动容器高度初始值
				wh: 0,
				// 分类数据列表
				cateList: [],
				// 选中初始值
				active: 0,
				// 二三级数据
				cateErList: [],
				// 滚动条距离顶部的距离
				scrollTop: 0
			};
		},
		onLoad() {
			// 获取微信视口高度
			this.wh = uni.getSystemInfoSync().windowHeight - 50;
			this.getCateList();
		},
		methods: {
			// 获取分类数据
			async getCateList() {
				const {
					data: res
				} = await uni.$http.get('categories');
				if (res.meta.status !== 200) return uni.$toast();
				// console.log(res);
				this.cateList = res.message;
				this.cateErList = res.message[0].children;
			},
			// 选中一级分类切换
			activeTab(i) {
				this.active = i;
				// 点击一级分类切换 为 二三级分类数据重新赋值
				this.cateErList = this.cateList[i].children;
				this.scrollTop = this.scrollTop === 0 ? 1 : 0;
			},
			// 跳转到商品列表页面
			gotoGoodsList(item3) {
				uni.navigateTo({
					url: "/subpkg/goods_list/goods_list?cid=" + item3.cat_id
				})
			}
		}
	}
</script>

<style lang="scss">
	.cate_container {
		display: flex;

		.scroll-left {
			width: 120px;

			.scroll-left-item {
				line-height: 60px;
				background-color: #f7f7f7;
				text-align: center;
				font-size: 12px;

				&.active {
					background-color: #FFFFFF;
					position: relative;

					&::before {
						content: '';
						display: block;
						width: 3px;
						height: 30px;
						background-color: #c00000;
						position: absolute;
						top: 50%;
						left: 0;
						transform: translateY(-50%);
					}
				}
			}
		}

		.cate-lv2-title {
			font-size: 12px;
			font-weight: bold;
			text-align: center;
			padding: 15px 0;
		}

		.cate-lv3-list {
			display: flex;
			flex-wrap: wrap;

			.cate-lv3-item {
				width: 33.33%;
				margin-bottom: 10px;
				display: flex;
				flex-direction: column;
				align-items: center;

				image {
					width: 60px;
					height: 60px;
				}

				text {
					font-size: 12px;
				}
			}
		}
	}
</style>
