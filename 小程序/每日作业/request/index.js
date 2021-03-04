/* 微信请求的封装 */
// 同时发送异步请求的次数
let aiaxTiems = 0;
export const request = (params) => {
    aiaxTiems++
    // 显示加载中 效果
    wx.showLoading({
        title: "加载中",
        mask: true
    })

    // 定义基准路径
    const baseUrl = "https://www.uinav.com/api/public/v1";
    return new Promise((resolve, reject) => {
        wx.request({
            ...params,
            url: baseUrl + params.url,
            // 成功
            success: (result) => {
                resolve(result);
            },
            // 失败
            fail: (err) => {
                reject(err);
            },
            // 成功失败都触发
            complete: () => {
                aiaxTiems--
                if (aiaxTiems === 0) {
                    // 关闭加载中 效果
                    wx.hideLoading();
                }
            }
        })
    })
}