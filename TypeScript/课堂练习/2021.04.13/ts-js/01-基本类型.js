"use strict";
// JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）。
// 原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol 和 BigInt。
// 1. 布尔值 boolean (1true 0false)
// 方式1
// let isDone:boolean = false;
// 方式2
// let isDone:boolean = Boolean(0);
// 注意 使用构造函数 Boolean 创造的对象不是布尔值,返回的是一个 Boolean 对象
// let createdByNewBoolean: Boolean = new Boolean(1);
// console.log(createdByNewBoolean);
// 2. 数值 number
// let num:number = 6;
// let num16:number = 0xf00d; // 0x代表16进制
// let num2:number = 0b1010; // 0b代表二进制
// let num8:number = 0o744; // 0o代表八进制
// let numNaN:number = NaN;
// let numUq:number = Infinity;
// 编译结果 其中 0b1010 和 0o744 是 ES6 中的二进制和八进制表示法，它们会被编译为十进制数字。
// 3. 字符串 string
// let myName:string = 'Tom', myAge:number = 25;
// let str:string = `我叫${myName},今年${myAge + 1}岁了.`;
// 编译结果 变为变量拼接的形式，有运算会加上()进行包裹
// 4. 空置 void 可以用来表示没有任何返回值的函数
// function fn():void {
//     alert("来了老弟");
// }
// fn();
// 注意: 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null
// 5.Null 和 Undefined 是所有类型的子类型
// let u: undefined = undefined;
// let n: null = null;
// 注意 非严格模式下 "strict": false 可以对任何类型 进行赋值
// let num1:string = undefined;
// let num2:number = null;
// 6. 任意值类型 any 表示允许赋值为任意类型。
// let anyThing: any = 'hello';
// 如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
// let something;
// something = 'seven';
// 等价于
// let something: any;
// something = 'seven';
// 7. Unknown 允许赋值为任意类型 (解决了any类型带来的问题)
// let value: unknown;
// let value1: unknown = value; // OK
// let value2: any = value; // OK
// let value3: boolean = value; // Error
// let value4: number = value; // Error
// let value5: string = value; // Error
// let value6: object = value; // Error
// let value7: any[] = value; // Error
// let value8: Function = value; // Error
// 8. Never类型 永不存在的值的类型
// type Foo = string | number | boolean;
// function controlFlowAnalysisWithNever(foo: Foo) {
//   if (typeof foo === "string") {
//     // 这里 foo 被收窄为 string 类型
//   } else if (typeof foo === "number") {
//     // 这里 foo 被收窄为 number 类型
//   } else {
//     // 方式一
//     // const check: never = foo;
//     // 方式二
//     throw new Error("联合类型没有对应的实现");
//   }
// }
// controlFlowAnalysisWithNever(true);
// 9. 元组
// let tom: [string, number] = ['Tom', 25];
// let tom: [string, number];
// tom = ['Tom', 25];
// tom[0] = "dsaas"
// console.log(tom);
// 10. 枚举
// enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
// console.log(Days["Sun"] === 0); // true
// console.log(Days["Mon"] === 1); // true
// console.log(Days["Tue"] === 2); // true
// console.log(Days["Sat"] === 6); // true
// console.log(Days[0] === "Sun"); // true
// console.log(Days[1] === "Mon"); // true
// console.log(Days[2] === "Tue"); // true
// console.log(Days[6] === "Sat"); // true
// enum Days {Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat};
// console.log(Days["Sun"] === 3); // true
// console.log(Days["Wed"] === 3); // true
// console.log(Days[3] === "Sun"); // false
// console.log(Days[3] === "Wed"); // true
// enum Days {Sun = 7, Mon = 1.5, Tue, Wed, Thu, Fri, Sat};
// console.log(Days["Sun"] === 7); // true
// console.log(Days["Mon"] === 1.5); // true
// console.log(Days["Tue"] === 2.5); // true
// console.log(Days["Sat"] === 6.5); // true
// enum Direction {
//     NORTH = "N",
//     SOUTH = "S",
//     EAST = "E",
//     WEST = "W",
//   }
//   console.log(Direction["SOUTH"]); // S
// //   console.log(Direction[1] === "SOUTH"); // 报错
// const enum Directions {
//     Up,
//     Down,
//     Left,
//     Right
// }
// let directions:number[] = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
