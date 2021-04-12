// pages/cart/cart.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    //#region 获取收货地址
    handleChooseAddress() {
        // 1 获取权限状态
        wx.getSetting({
            success: (result) => {
                wx.chooseAddress({
                    success: (result1) => {
                        // console.log(result1);
                        wx.setStorageSync("address", result1);
                    }
                });
                const scopeAddress = result.authSetting["scope.address"];
                if (scopeAddress === true || scopeAddress === undefined) {
                    wx.chooseAddress({
                        success: (result1) => {
                            console.log(result1);
                        }
                    });
                } else {
                    // 打开权限设置
                    wx.openSetting({
                        success: (result2) => {
                            wx.chooseAddress({
                                success: (result3) => {
                                    console.log(result3);
                                }
                            });
                        }
                    });
                }
            }
        });
    }
    //#endregion

})