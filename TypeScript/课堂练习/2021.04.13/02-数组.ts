// 数组类型
// 方式一
let arr: number[] = [1,2,3]; // 指定类型后 元素 不允许出现其他类型
// arr.push("8"); 数组相关的方法 参数也会被限定类型
let newArr:any[] = [1,"dsa",true,undefined,null,arr];
// 方式二 (泛型定义)
// let arr:Array<number> = [1,2,3];
// 问题: 编译的js文件 为啥一有接口 其他的东西都不存在了
// // 方式三 (接口表示)
// interface NumberArray{
//     [index:number] : number;
// }
// let arr:NumberArray = [1,2,3];