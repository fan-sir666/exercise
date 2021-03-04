// 引入发送请求的方法
import { request } from "../../request/index"
Page({
    data: {
        // 轮播图数组
        swiperList: [],
        // 导航数组
        catesList: [],
        // 楼层数据
        floorList:[]
    },
    //页面开始加载触发
    onLoad: function(options) {
        this.getSwiperList();
        this.getCateList();
        this.getFloorList();
    },

    //#region 获取轮播图数据方法
    getSwiperList() {
        // wx.request({
        //     // 接口地址 
        //     url: 'https://www.uinav.com/api/public/v1/home/swiperdata',
        //     // 成功的回调
        //     success: (result) => {
        //         // console.log(result);
        //         this.setData({
        //             swiperList: result.data.message
        //         })
        //     },
        // });
        request({
            url: '/home/swiperdata',
        }).then(result => {
            this.setData({
                swiperList: result.data.message
            })
        })
    },
    //#endregion
    //#region 获取导航数据方法
    getCateList() {
        request({
            url: '/home/catitems',
        }).then(result => {
            this.setData({
                catesList: result.data.message
            })
        })
    },
    //#endregion
    //#region 获取楼层数据方法
    getFloorList() {
        request({
            url: '/home/floordata',
        }).then(result => {
            this.setData({
              floorList: result.data.message
            })
        })
    }
    //#endregion
});