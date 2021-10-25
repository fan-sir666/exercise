const { query } = require('../db/query');
// 一级分类数据
module.exports.oneCategory = async() => {
    return await query('select * from category');
}

// 二级分类数据
module.exports.twoCategory = async(id) => {
    return await query('select * from brand where id = ?', [id]);
}