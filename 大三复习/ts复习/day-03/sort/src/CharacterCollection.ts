import { Sorter } from "./Sorter";

export class CharacterCollection extends Sorter {
    constructor(public data: string) {
        super()
    }
    get length(): number {
        return this.data.length
    }

    compare(curIndex: number, nextIndex: number): boolean {
        return (
            this.data[curIndex].toLocaleLowerCase() >
            this.data[nextIndex].toLocaleLowerCase()
        )
    }

    swap(curIndex: number, nextIndex: number): void {
        const characters = this.data.split('');
        const temp = characters[curIndex];
        characters[curIndex] = characters[nextIndex];
        characters[nextIndex] = temp;
        this.data = characters.join('')
    }
}