// pages/shopList/shopList.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 存储上一页传递的参数
        query: {},
        // 商铺列表数据
        shopList: [],
        // 页码
        page: 1,
        // 每页展示的条数
        pageSize: 10,
        // 数据列表总数
        total: 0,
        // 节流阀：false代表没有发起任何数据请求
        isLoading: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        // console.log(options);
        this.setData({
            query: options
        });

        // 初始化页面，调用获取数据的方法
        this.getShopList();
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
        wx.setNavigationBarTitle({
            title: this.data.query.title
        });
    },

    // 上拉加载
    onReachBottom: function() {
        if (this.data.shopList.length >= this.data.total) return wx.showToast({
            title: '没有更多了...',
            icon: 'none',
        });
        if (this.data.isLoading) return;
        this.setData({
            page: this.data.page + 1
        })
        this.getShopList()
    },

    // 下拉刷新
    onPullDownRefresh: function() {
        // 1. 重置关键性的数据
        this.setData({
                // 重置页码为1
                page: 1,
                // 清空原有数据，否则我们获取的数据会被追加在末尾
                shopList: [],
                // 清空总数
                total: 0
            })
            // 2. 重新获取最新的数据,传递 关闭下拉刷新的回调回调函数
        this.getShopList(() => {
            wx.stopPullDownRefresh()
        })
    },


    //#region 获取商铺列表数据
    getShopList() {
        // 1. 开启loading
        wx.showLoading({
            title: '数据加载中...',
        })

        // 2.开启节流阀
        this.setData({
            isLoading: true
        })

        // 3.发起网络请求获取数据
        wx.request({
            url: `https://www.escook.cn/categories/${this.data.query.id}/shops`,
            data: {
                _page: this.data.page,
                _limit: this.data.pageSize
            },
            success: res => {
                // 4.将数据存储在data中
                this.setData({
                    shopList: [...this.data.shopList, ...res.data],
                    total: res.header['X-Total-Count'] - 0
                })
            },
            complete: () => {
                // 5.关闭loading
                wx.hideLoading()
                    // 6.关闭节流阀
                this.setData({
                    isLoading: false
                })

            }
        });
    }
    //#endregion
})
