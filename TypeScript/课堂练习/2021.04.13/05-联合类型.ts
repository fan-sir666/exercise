let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
// 表示赋值只能是定义的多种类型中其中一种
function getString(something: string | number): string {
    // toString 是两个类型都有的
    return something.toString();
}
// 注意:只能访问此联合类型的所有类型里共有的属性或方法