// 引入发送请求的方法
import { request } from "../../request/index"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 左侧菜单数据
        leftMenuList: [],
        // 右侧的商品数据
        rightContent: [],
        // 被点击的左侧的菜单
        currentIndex: 0,
        // 右侧滚动条的初始位置
        scrollTop: 0
    },
    // 接口的返回数据
    Cates: [],
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        /* 数据缓存
        1. 判断本地存储有没有旧的数据
        2. 如果没有 直接发送请求
        3. 有旧数据且数据没有过期  即可使用
        */
        const Cates = wx.getStorageSync('cates');
        if (!Cates) {
            this.getCates();
        } else {
            if (Date.now() - Cates.time > 1000 * 10) {
                this.getCates();
            } else {
                this.Cates = Cates.data;
                // 构造菜单数据
                let leftMenuList = this.Cates.map(v => v.cat_name);
                // 构造右侧商品数据
                let rightContent = this.Cates[0].children;
                this.setData({
                    leftMenuList,
                    rightContent
                });
            }
        }
    },

    //#region 获取分类数据
    getCates() {
        request({
            url: "/categories"
        }).then(result => {
            // console.log(result);
            this.Cates = result.data.message;
            // 将获取的数据存入到本地存储中
            wx.setStorageSync("catse", { time: Date.now(), data: this.Cates });
            // 构造菜单数据
            let leftMenuList = this.Cates.map(v => v.cat_name);
            // 构造右侧商品数据
            let rightContent = this.Cates[0].children;
            this.setData({
                leftMenuList,
                rightContent
            });
        })
    },
    //#endregion
    //#region 左侧菜单点击事件
    handleItemTap(e) {
        // console.log(e);
        const { index } = e.currentTarget.dataset;

        let rightContent = this.Cates[index].children;
        this.setData({
            currentIndex: index,
            rightContent,
            // 重新设置右侧距离顶部的距离
            scrollTop: 0
        })

    }
    //#endregion
})