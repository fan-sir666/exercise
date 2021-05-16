"use strict";
var Person = /** @class */ (function () {
    function Person(msg) {
        this.name = msg;
    }
    Person.prototype.sHai = function () {
        console.log(this.name + "\u5728\u5B66\u4E60");
    };
    return Person;
}());
var p1 = new Person("张三");
p1.sHai();
