// 类型别名用来给一个类型起个新名字
type Name = string;
type NameOrNumber = Name | number;
function Fn(n:NameOrNumber):void {
    if(typeof n === 'string'){
        console.log(`我叫${n}`);
    }else{
        console.log(`我今年${n}岁了`);
    }
}
Fn('范志伟');
Fn(24);