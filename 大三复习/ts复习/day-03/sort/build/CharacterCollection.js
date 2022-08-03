"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharacterCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(curIndex, nextIndex) {
        return (this.data[curIndex].toLocaleLowerCase() >
            this.data[nextIndex].toLocaleLowerCase());
    }
    swap(curIndex, nextIndex) {
        const characters = this.data.split('');
        const temp = characters[curIndex];
        characters[curIndex] = characters[nextIndex];
        characters[nextIndex] = temp;
        this.data = characters.join('');
    }
}
exports.CharacterCollection = CharacterCollection;
