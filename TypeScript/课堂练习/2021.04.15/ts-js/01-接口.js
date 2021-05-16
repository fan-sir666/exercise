"use strict";
// interface IPerson {
//     name :string,
//     age:number
// }
// let tom:IPerson = {
//     name:"范志伟",
//     age:18
// }
// 可选属性和只读属性
// interface IPerson {
//     readonly id: number; // readonly 该关键字修饰的属性 只能在对象刚刚创建的时候修改其值
//     name: string;
//     age?: number;  // ? 代表可选属性  属性可以不存在
// }
// let tom: IPerson = {
//     id:1525,
//     name: 'Tom'
// };
// // tom.id = 2655 // 报错
// 任意属性
// interface IPIerson {
//     name: string;
//     age?: number;
//     [propName: string]: any;
// }
// let tom: IPIerson = {
//     name: 'Tom',
//     age: 25,
//     gender: 'male'
// };
// console.log(tom);
// interface PartialPointX { x: number; }
// interface Point extends PartialPointX { 
//   y: number; 
// }
// type PartialPointX = { x: number; };
// type Point = PartialPointX & { y: number; };
// type PartialPointX = { x: number; };
// interface Point extends PartialPointX { y: number; }
// interface PartialPointX { x: number; }
// type Point = PartialPointX & { y: number; };
// interface Point1 {
//     x: number;
//     y: number;
//   }
//   class SomePoint implements Point1 {
//     x = 1;
//     y = 2;
//   }
//   type Point2 = {
//     x: number;
//     y: number;
//   };
//   class SomePoint2 implements Point2 {
//     x = 1;
//     y = 2;
//   }
//   type PartialPoint = { x: number; } | { y: number; };
//   // A class can only implement an object type or 
//   // intersection of object types with statically known members.
//   // Error类只能实现对象类型或对象类型与静态已知成员的交集。
//   class SomePartialPoint implements PartialPoint { 
//     x = 1;
//     y = 2;
//   }
