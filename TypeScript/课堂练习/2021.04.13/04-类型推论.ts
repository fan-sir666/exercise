// 如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。
// let myFavoriteNumber = 'seven';
// myFavoriteNumber = 7; //报错

// 原因: 上述代码等价于 默认加上了只能是 string 类型
// let myFavoriteNumber:string = 'seven';

// 注意:如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查
