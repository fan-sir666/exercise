"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("./Sorter");
// export class NumbersCollection implements Sorter {
class NumbersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    // 排序数组长度
    get length() {
        return this.data.length;
    }
    // 元素之间比较结果
    compare(curIndex, nextIndex) {
        return this.data[curIndex] > this.data[nextIndex];
    }
    // 元素交互位置
    swap(curIndex, nextIndex) {
        let temp = this.data[curIndex];
        this.data[curIndex] = this.data[nextIndex];
        this.data[nextIndex] = temp;
    }
}
exports.NumbersCollection = NumbersCollection;
