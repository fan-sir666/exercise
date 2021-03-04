// 引入发送请求的方法
import { request } from "../../request/index"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodsObj: {}
    },
    // 商品对象
    GoodsInfo: {},
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        // console.log(options);
        const { goods_id } = options;
        this.getGoodsDetail(goods_id);
    },

    //#region 获取商品的详情数据
    getGoodsDetail(goods_id) {
        request({
            url: '/goods/detail',
            data: { goods_id }
        }).then(result => {
            this.GoodsInfo = result.data.message;
            this.setData({
                goodsObj: {
                    goods_name: result.data.message.goods_name,
                    goods_price: result.data.message.goods_price,

                    // iphone部分不识别  webp图片格式 字符串替换
                    goods_introduce: result.data.message.goods_introduce.replace(/\.webp/g, '.jpg'),
                    pics: result.data.message.pics
                }
            })
        })
    },
    //#endregion
    //#region 点击轮播图放大预览
    handlePrevewImage(e) {
        // 构造预览图片的数组
        const urls = this.GoodsInfo.pics.map(v => v.pics_mid);
        // 接收传递过来的图片url
        const current = e.currentTarget.dataset.url;
        wx.previewImage({
            current: current,
            urls: urls,

        })
    },
    //#endregion
    //#region 点击加入购物车
    handleCartAdd() {
        // 1获取缓存中的购物车数组
        let cart = wx.getStorageSync("cart") || [];
        // 2判断 商品对象是否存在数组中
        let index = cart.findIndex(v => v.goods_id === this.GoodsInfo.goods_id);
        if (index == -1) {
            this.GoodsInfo.num = 1;
            cart.push(this.GoodsInfo);
        } else {
            cart[index].num++
        }
        // 3 把购物车重新添加到缓存中
        wx.setStorageSync("cart", cart);
        // 4 弹窗提示
        wx.showToast({
            title: '加入成功',
            icon: 'success',
            mask: true,
        });

    },
    //#endregion
})