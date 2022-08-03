"use strict";
// 方式一 子类继承
// import { CsvFileReader } from "./CsvFileReader";
// import MatchData from "./MatchData";
// import { MatchResult } from "./MatchResult";
// import { dateStringToDate } from "./utils";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("./utils");
class MatchReader {
    constructor(reader) {
        this.reader = reader;
        this.matches = [];
    }
    load() {
        // 读
        this.reader.read();
        // 处理
        this.matches = this.reader.data.map((row) => {
            return [
                (0, utils_1.dateStringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6],
            ];
        });
    }
}
exports.MatchReader = MatchReader;
