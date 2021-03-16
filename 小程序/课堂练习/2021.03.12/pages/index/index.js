import { wxp } from "../../utils/wxp"
Page({
    data: {},
    onLoad: function(options) {
        // 生命周期函数--监听页面加载
        wx.getSystemInfo().then((res) => {
            // console.log(res);
        })
    },
})