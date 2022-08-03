"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
// 方式一 抽象类负责读文件 ，子类继承处理数据
// export abstract class CsvFileReader<T> {
//     data: T[] = [];
//     constructor(public filename: string) { }
//     abstract mapRow(row:string[]):T;
//     read(): void {
//         this.data = fs.readFileSync(this.filename, { encoding: "utf-8" })
//             .split('\n')
//             .map((row: string): string[] => row.split(','))
//             .map(this.mapRow)
//     }
// }
// 方式二  组合 本类只负责读文件
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        this.data = fs_1.default.readFileSync(this.filename, { encoding: "utf-8" })
            .split('\n')
            .map((row) => row.split(','));
    }
}
exports.CsvFileReader = CsvFileReader;
