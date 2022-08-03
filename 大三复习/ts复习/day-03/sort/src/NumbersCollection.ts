import { Sorter } from "./Sorter"

// export class NumbersCollection implements Sorter {
export class NumbersCollection extends Sorter {
    constructor(public data: number[]) {
        super()
    }

    // 排序数组长度
    get length(): number {
        return this.data.length
    }

    // 元素之间比较结果
    compare(curIndex: number, nextIndex: number): boolean {
        return this.data[curIndex] > this.data[nextIndex]
    }

    // 元素交互位置
    swap(curIndex: number, nextIndex: number): void {
        let temp = this.data[curIndex]
        this.data[curIndex] = this.data[nextIndex]
        this.data[nextIndex] = temp
    }
}