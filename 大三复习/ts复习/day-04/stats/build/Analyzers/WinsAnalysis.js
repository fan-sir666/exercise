"use strict";
// 分析球队赢得比晒的次数
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResult_1 = require("../MatchResult");
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        // 记录赢得比赛的次数
        let wins = 0;
        // 开始分析
        for (let match of matches) {
            // 记录球队为主场赢得比赛的情况
            if (match[1] === this.team && match[5] === MatchResult_1.MatchResult.homeWin) {
                wins++;
                // 记录球队为客场赢得比赛的情况
            }
            else if (match[2] === this.team && match[5] === MatchResult_1.MatchResult.awayWin) {
                wins++;
            }
        }
        return `${this.team} 球队赢得了 ${wins} 场球赛`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
