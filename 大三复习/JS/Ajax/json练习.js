let jsObj = { name: '张三', age: 20, sex: '男' };
let jsonStr = '{ "name": "李四", "age": 25, "sex": "女" }'

// js对象转JSON字符串(键都会被双引号包裹，值是字符串类型的都是双引号包裹)
let resultStr = JSON.stringify(jsObj)
console.log(resultStr); //{"name":"张三","age":20,"sex":"男"}
// JSON字符串转js对象(值是字符串类型的都被单引号包裹)
let resultObj = JSON.parse(jsonStr)
console.log(resultObj); //{ name: '李四', age: 25, sex: '女' }
