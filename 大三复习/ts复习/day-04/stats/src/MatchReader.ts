
// 方式一 子类继承
// import { CsvFileReader } from "./CsvFileReader";
// import MatchData from "./MatchData";
// import { MatchResult } from "./MatchResult";
// import { dateStringToDate } from "./utils";



// export class MatchReader extends CsvFileReader<MatchData> {
//     mapRow(row: string[]): MatchData {
//         return [
//             dateStringToDate(row[0]),
//             row[1],
//             row[2],
//             parseInt(row[3]),
//             parseInt(row[4]),
//             row[5] as MatchResult,
//             row[6],
//         ];
//     }
// }

// 负责处理
import MatchData from "./MatchData";
import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";
interface DataReader {
    read(): void;
    data: string[][];
}
export class MatchReader{
    matches: MatchData[] = [];
    constructor(public reader:DataReader){}
    load() {
        // 读
        this.reader.read();
        // 处理
        this.matches = this.reader.data.map((row: string[]): MatchData => {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult,
                row[6],
            ];
        });
    }
}
