// interface Iuser {
//     name:string,
//     age:number
// }

// function getUser({name,age}:Iuser):void {
//     console.log(`我叫${name},今天${age}岁`);
// }
// getUser({name:"范志伟",age:18});

interface Iuser {
    (name:string,age:number):string;
}
let getUser:Iuser = (name,age)=>{
    return `我叫${name},今年${age}`;
}
getUser("范志伟",18)

// // 报错
// function getUser:Iuser(name,age):string {
//     return `我叫${name},今年${age}`;
// }
// getUser("范志伟",18);

