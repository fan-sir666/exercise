const { oneCategory: cateOne, twoCategory: cateTwo } = require('../model/category');

//#region 一级分类
const oneCategory = async(ctx) => {
    const result = await cateOne();
    // 返回数据
    ctx.body = {
        status: 200,
        oneCategoryList: result
    }
}

//#endregion

//#region 二级分类
const twoCategory = async(ctx) => {
    const { id } = ctx.request.query;
    const result = await cateTwo(id);
    // 返回数据
    ctx.body = {
        status: 200,
        twoCategoryList: result
    }
}

//#endregion


module.exports = {
    oneCategory,
    twoCategory
}