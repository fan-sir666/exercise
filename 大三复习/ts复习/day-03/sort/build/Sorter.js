"use strict";
// export interface Sortable {
//     length: number;
//     compare(curIndex: number, nextIndex: number): boolean;
//     swap(curIndex: number, nextIndex: number): void;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// 使用类的继承 让子类有sort方法 父类定义为抽象类 ，抽象类的属性需要子类实现
class Sorter {
    // 排序方法 this指向子类
    sort() {
        const { length } = this;
        for (let i = 0; i < length - 1; i++) {
            for (let j = 0; j < length - 1 - i; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
