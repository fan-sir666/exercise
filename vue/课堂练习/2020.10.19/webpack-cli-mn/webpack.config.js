const path = require('path');

// 导入自动生成html文件
const htmlWebpackPlugin = require('html-webpack-plugin');
// 导入自动清除dist文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader-v16/dist/plugin.js').default;
module.exports={
    mode: "development",
    // 入口
    entry:'./src/main.js',
    // 出口
    output:{
        // 出口的路径
        path:path.resolve(__dirname,'dist'),
        // 输出的文件名称
        filename:'bundle.js'
    },
    // loader
    module:{
        // 规则
        rules:[{
            test:/\.css$/,
            // 切记use 里面的东西有顺序必须这样写否则会报错
            use:['style-loader','css-loader']
        },
        {
            test:/\.vue$/,
            loader:'vue-loader-v16'
        }
    ]
    },
    // 插件
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // title:'自动生成html文件'
            template:'./public/index.html'
        }),
        new VueLoaderPlugin()
    ]
}