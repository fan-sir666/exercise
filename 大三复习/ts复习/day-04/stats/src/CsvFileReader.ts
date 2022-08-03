import fs from 'fs';

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
export class CsvFileReader{
    data: string[][] = [];
    constructor(public filename: string) { }
    read(): void {
        this.data = fs.readFileSync(this.filename, { encoding: "utf-8" })
            .split('\n')
            .map((row: string): string[] => row.split(','))
    }
}


