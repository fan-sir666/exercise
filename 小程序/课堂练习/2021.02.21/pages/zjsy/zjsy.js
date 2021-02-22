// pages/zjsy/zjsy.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: [{
                id: 0,
                name: "首页",
                isActive: true
            },
            {
                id: 1,
                name: "分类",
                isActive: false
            },
            {
                id: 2,
                name: "结算",
                isActive: false
            },
        ]
    },

    //父组件接收子组件的回调
    handleChange(e) {
        // console.log(e);
        const { index } = e.detail

        let { tabs } = this.data;
        tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
        this.setData({
          tabs
        });
    }
})