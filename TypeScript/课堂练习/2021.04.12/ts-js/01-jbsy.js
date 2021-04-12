"use strict";
// 基本使用 通过 ：指定变量的类型
var num1 = 10, num2 = 50;
function sum(a, b) {
    return a + b;
}
console.log(sum(num1, num2));
// 注意 ：TypeScript 编译的时候即使报错了，还是会生成编译结果，我们仍然可以使用这个编译之后的文件。
// 如果要在报错的时候终止 js 文件的生成，可以在 tsconfig.json 中配置 compilerOptions 里面 "noEmitOnError":true, 即可。
