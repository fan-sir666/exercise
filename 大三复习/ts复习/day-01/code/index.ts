// 构造函数参数
// class Father {
//   color: string;
//   constructor(color: string) {
//     this.color = color
//   }
// }

// ----------等价于下面的代码---------

class Father {
  constructor(public color: string) { }
}

// const father = new Father('orange')
// console.log(father.color);

// ---------继承---------
class Son extends Father {
  constructor(public age: number, color: string) {
    super(color)
  }
}

const son = new Son(4,'orange')
console.log(son.age);
console.log(son.color);




