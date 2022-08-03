import { CharacterCollection } from "./CharacterCollection";
import { NumbersCollection } from "./NumbersCollection";

// const numArr = new NumbersCollection([5, -8, 22, 4])
// const sorter = new Sorter(numArr)
// sorter.sort()
// console.log(numArr.data);

// const str = new CharacterCollection('yza');
// const sorter = new Sorter(str)
// sorter.sort()
// console.log(str.data)


const numArr = new NumbersCollection([5, -8, 22, 4])
numArr.sort()
console.log(numArr.data);
const str = new CharacterCollection('yza');
str.sort()
console.log(str.data)