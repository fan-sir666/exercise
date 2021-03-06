// 引入发送请求的方法
import { request } from "../../request/index"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: [{
            id: 0,
            value: "综合",
            isActive: true
        }, {
            id: 1,
            value: "销量",
            isActive: false
        }, {
            id: 2,
            value: "价格",
            isActive: false
        }],
        goodsList: []
    },
    // 接口参数
    QueryParams: {
        query: "",
        cid: "",
        pagenum: 1,
        pagesize: 10
    },
    // 总页数
    totalPages: 1,
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.QueryParams.cid = options.cid;
        this.getGoodsList();
    },

    //#region 获取商品列表数据
    getGoodsList() {
        request({
            url: '/goods/search',
            data: this.QueryParams
        }).then(result => {
            // 获取总条数
            const total = result.data.message.total;
            this.totalPages = Math.ceil(total / this.QueryParams.pagesize);
            this.setData({
                // 拼接数据数组
                goodsList: [...this.data.goodsList, ...result.data.message.goods]
            });

            // 关闭下拉刷新的窗口
            wx.stopPullDownRefresh();
        })
    },
    //#endregion

    // 接收子组件传给的索引值
    handleTabsItemChange(e) {
        // console.log(e);
        const { index } = e.detail;
        let { tabs } = this.data;
        tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
        this.setData({
            tabs
        })
    },

    /* 滚动条触底事件 */
    onReachBottom() {
        if (this.QueryParams.pagenum >= this.totalPages) {
            wx.showToast({
                title: '没有下一页数据了',
            })
        } else {
            // 当前页++
            this.QueryParams.pagenum++;
            this.getGoodsList();
        }
    },
    /* 下拉刷新事件 */
    onPullDownRefresh() {
        // 1 重置数组
        this.setData({
            goodsList: []
        });
        // 2 重置页码
        this.QueryParams.pagenum = 1;
        // 3 发送请求
        this.getGoodsList();
    }
})