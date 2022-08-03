export class Attributes<T>{
    constructor(private data: T) { }
    // 获取
    get = <K extends keyof T>(key: K): T[K] => {
        return this.data[key]
    }
    // 设置
    set(update: T) {
        Object.assign(this.data, update);
    }

    getAll(): T {
        return this.data
    }
}