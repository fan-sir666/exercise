//#region 首页宫格数据
const gridlist = async(ctx) => {
    ctx.body = {
        status: 200,
        gridList: [{
                id: 1,
                img_src: "/images/nav1.png"
            },
            {
                id: 2,
                img_src: "/images/nav2.png"
            },
            {
                id: 3,
                img_src: "/images/nav3.png"
            },
            {
                id: 4,
                img_src: "/images/nav4.png"
            },
            {
                id: 5,
                img_src: "/images/nav5.png"
            },
            {
                id: 6,
                img_src: "/images/nav6.png"
            }
        ]
    }
}
//#endregion
//#region 首页轮播图数据
const banners = async(ctx) => {
    ctx.body = {
        status: 200,
        swipperList: [{
                id: 1,
                img_src: "/images/banner1.png",
            },
            {
                id: 2,
                img_src: "/images/banner2.png",
            },
            {
                id: 3,
                img_src: "/images/banner3.png",
            },
            {
                id: 4,
                img_src: "/images/banner4.png",
            },
            {
                id: 5,
                img_src: "/images/banner5.png",
            },
        ]
    }
}
//#endregion
//#region 首页运动专区数据
const sports = async(ctx) => {
    ctx.body = {
        status: 200,
        sports: [{
                name: 'adidas阿迪达斯 男式 场下休闲篮球鞋S83700',
                img: '/images/product.jpg',
                price: 1.00,
                oldPrice: 888.00
            },
            {
                name: 'FORUM 84 LOW 新款低帮经典运动鞋',
                img: '/images/product.jpg',
                price: 1.00,
                oldPrice: 899.00
            },
            {
                name: 'adidas阿迪达斯 男式 场下休闲篮球鞋S83700',
                img: '/images/product.jpg',
                price: 1.00,
                oldPrice: 888.00
            },
            {
                name: 'adidas阿迪达斯 男式 场下休闲篮球鞋S83700',
                img: '/images/product.jpg',
                price: 1.00,
                oldPrice: 888.00
            }
        ]
    }
}
//#endregion

module.exports = {
    gridlist,
    banners,
    sports
}