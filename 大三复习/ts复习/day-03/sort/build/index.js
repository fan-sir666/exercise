"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharacterCollection_1 = require("./CharacterCollection");
const NumbersCollection_1 = require("./NumbersCollection");
// const numArr = new NumbersCollection([5, -8, 22, 4])
// const sorter = new Sorter(numArr)
// sorter.sort()
// console.log(numArr.data);
// const str = new CharacterCollection('yza');
// const sorter = new Sorter(str)
// sorter.sort()
// console.log(str.data)
const numArr = new NumbersCollection_1.NumbersCollection([5, -8, 22, 4]);
numArr.sort();
console.log(numArr.data);
const str = new CharacterCollection_1.CharacterCollection('yza');
str.sort();
console.log(str.data);
