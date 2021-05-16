"use strict";
// interface Iuser {
//     name:string,
//     age:number
// }
var getUser = function (name, age) {
    return "\u6211\u53EB" + name + ",\u4ECA\u5E74" + age;
};
getUser("范志伟", 18);
// // 报错
// function getUser:Iuser(name,age):string {
//     return `我叫${name},今年${age}`;
// }
// getUser("范志伟",18);
