<template>
	<view>
		<view class="goods_list">
			<view v-for="(item,index) in goodsList" :key="index" @click="gotoDetail(item)">
				<my-goods :goods="item"></my-goods>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 请求参数对象
				queryObj: {
					// 查询关键字
					query: "",
					// 商品分类id
					cid: "",
					// 页码值
					pagenum: 1,
					// 每页显示的条数
					pagesize: 10
				},
				// 商品列表数据
				goodsList: [],
				// 数据总量
				total: 0,
				// 2.3 请求数据状态 未请求
				isloading: false
			};
		},
		onLoad(options) {
			// 1.1获取相关页面传来的参数
			this.queryObj.cid = options.cid || "";
			this.queryObj.query = options.query || "";

			this.getGoodsList();
		},
		// 2. 上拉加载
		onReachBottom() {
			// 2.7 判断是否还有下一页数据
			if (this.queryObj.pagenum * this.queryObj.pagesize >= this.total) return uni.$toast('我也是有底线的');
			// 2.6 判断请求状态
			if (this.isloading) return;

			this.queryObj.pagenum += 1;
			// 2.1重新获取数据
			this.getGoodsList();
		},
		// 3.下拉刷新
		onPullDownRefresh() {
			// 3.1 重置关键数据
			this.queryObj.pagenum = 1
			this.total = 0
			this.isloading = false
			this.goodsList = []

			// 3.2 重新发起请求
			this.getGoodsList(() => uni.stopPullDownRefresh())
		},
		methods: {
			// 1.2请求获取数据
			async getGoodsList(cb) {
				// 2.4 开启节流阀
				this.isloading = true;
				const {
					data: res
				} = await uni.$http.get("goods/search", this.queryObj);
				// console.log(res);
				// 2.5 关闭节流阀
				this.isloading = false;
				// 3.3只要数据请求完毕，就立即按需调用 cb 回调函数
				cb && cb();

				if (res.meta.status !== 200) return uni.$toast();

				// 2.2 新旧数据拼接
				this.goodsList = [...this.goodsList, ...res.message.goods]
				this.total = res.message.total;
			},
			// 1.3跳转到商品详情页面
			gotoDetail(item) {
				uni.navigateTo({
					url: '/subpkg/goods_detail/goods_detail?goods_id=' + item.goods_id
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
