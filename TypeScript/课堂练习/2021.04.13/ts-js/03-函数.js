"use strict";
// 问题 传参  void反而不报错
// function fn(x:number | string,y:number):void {
//     return x + y;
// }
// // fn(1,2,3) // 输入多余的（或者少于要求的）参数，是不被允许的
// fn(1,2) 
// 方式一
function fn1(x, y) {
    return x + y;
}
// fn(1,2,3) // 输入多余的（或者少于要求的）参数，是不被允许的
console.log(fn1(1, 2));
// 方式二
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
// let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
//     return x + y;
// };
// 表达式形式 等号右边是箭头函数
var fn2 = function (x, y) { return x + y; };
console.log(fn2(3, 4));
// :(x: number, y: number) => number 等号左侧不手动添加 ts进行类型推论 结果为number
// 可选参数: 用 ? 表示可选的参数  默认参数当可选参数处理在ts中
// let fn3 = (x:number,y:number,z?:number) => x+y+z; //报错
var fn3 = function (x, y, w, z) {
    if (w === void 0) { w = 11; }
    if (w && z) {
        return x + y + z + w;
    }
    else {
        return x + y;
    }
};
console.log(fn3(10, 20, 10, 22));
// 注意:可选参数后面不允许再出现必需参数
