<template>
	<view>
		<view class="search-box">
			<!-- 使用 uni-ui 提供的搜索组件 -->
			<uni-search-bar type="search" @input="handleInput" :radius="100" cancelButton="none"></uni-search-bar>
		</view>
		<!-- 搜索建议列表 -->
		<view class="sugg-list" v-if="searchResults.length !== 0">
			<view class="sugg-item" v-for="(item, index) in searchResults" :key="index"
				@click="gotoDetail(item.goods_id)">
				<view class="goods-name">{{item.goods_name}}</view>
				<uni-icons type="arrowright" size="16"></uni-icons>
			</view>
		</view>
		<!-- 搜索历史 -->
		<view class="history-box" v-else>
			<!-- 标题区域 -->
			<view class="history-title">
				<text>搜索历史</text>
				<uni-icons type="trash" size="17" @click="cleanHistory"></uni-icons>
			</view>
			<!-- 列表区域 -->
			<view class="history-list">
				<uni-tag :text="item" v-for="(item, i) in historys" :key="i" @click="gotoGoodsList(item)"></uni-tag>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 关键字
				kw: "",
				// 定时器
				timer: null,
				// 搜索列表
				searchResults: [],
				// 搜索关键词的历史记录
				historyList: ['回力', '特步', '雨伞']
			};
		},
		onLoad() {
			// 4.2获取本地存储好的搜索历史记录
			this.historyList = JSON.parse(uni.getStorageSync('kw') || '[]');
		},
		methods: {
			// 1.通过定时器来进行搜索防抖
			handleInput(e) {
				// 清楚定时器
				clearTimeout(this.timer);
				// 防抖处理
				this.timer = setTimeout(() => {
					// 获取输入的值
					this.kw = e.value;
					// 调用请求函数
					this.getSearchList();
				}, 1000)
			},
			// 2.声明获取搜索结果
			async getSearchList() {
				if (this.kw === '') return this.searchResults = [];
				const {
					data: res
				} = await uni.$http.get('goods/qsearch', {
					query: this.kw
				});
				if (res.meta.status !== 200) return uni.$toast();
				// 数据赋值
				this.searchResults = res.message;
				// 4.1调用本地存储历史记录的方法
				this.saveSearchHistory();
			},
			// 3.点击搜索结果  跳转到详情页面
			gotoDetail(id) {
				uni.navigateTo({
					url: "/subpkg/goods_detail/goods_detail?goods_id=" + id
				})
			},
			// 4.将搜索关键词的历史记录持久化存入到本地
			saveSearchHistory() {
				const set = new Set(this.historyList);
				// 去重
				set.delete(this.kw);
				// 添加搜索关键字
				set.add(this.kw);
				// 转为普通数组
				this.historyList = Array.from(set);
				//将历史记录存到本地
				uni.setStorageSync('kw', JSON.stringify(this.historyList));
			},
			// 5.点击搜索历史跳转到商品列表页面
			gotoGoodsList(kw){
				uni.navigateTo({
					url:"/subpkg/goods_list/goods_list?query=" + kw
				})
			},
			// 6.清空搜索历史记录
			cleanHistory() {
			  // 清空 data 中保存的搜索历史
			  this.historyList = []
			  // 清空本地存储中记录的搜索历史
			  uni.clearStorageSync('kw');
			}
		},
		computed: {
			historys() {
				// 4.3将搜索记录前置
				return [...this.historyList].reverse()
			}
		}
	}
</script>

<style lang="scss">
	/* 搜索建议列表 */
	.sugg-list {
		padding: 0 5px;

		.sugg-item {
			font-size: 12px;
			padding: 13px 0;
			border-bottom: 1px solid #efefef;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.goods-name {
				// 文字不允许换行（单行文本）
				white-space: nowrap;
				// 溢出部分隐藏
				overflow: hidden;
				// 文本溢出后，使用 ... 代替
				text-overflow: ellipsis;
				margin-right: 3px;
			}
		}
	}

	/* 搜索历史 */
	.history-box {
		padding: 0 5px;

		.history-title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 40px;
			font-size: 13px;
			border-bottom: 1px solid #efefef;
		}

		.history-list {
			display: flex;
			flex-wrap: wrap;

			.uni-tag {
				margin-top: 5px;
				margin-right: 5px;
			}
		}
	}
</style>
