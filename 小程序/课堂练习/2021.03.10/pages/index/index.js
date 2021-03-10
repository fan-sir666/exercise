// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 轮播图数据
        swiperList: [],
        // 九宫格数据
        sudokuList: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.getSwiperList();
        this.getSudokuList();
    },

    //#region 获取轮播图数据
    getSwiperList() {
        wx.request({
            url: 'https://www.escook.cn/slides',
            success: (result) => {
                // console.log(result);
                this.setData({
                    swiperList: result.data
                })
            },

        });

    },
    //#endregion

    //#region 获取九宫格数据
    getSudokuList() {
        wx.request({
            url: 'https://www.escook.cn/categories',
            success: (result) => {
                // console.log(result);
                this.setData({
                    sudokuList: result.data
                })
            },

        });

    }
    //#endregion
})