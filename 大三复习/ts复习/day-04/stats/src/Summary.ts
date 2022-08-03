import { WinsAnalysis } from "./Analyzers/WinsAnalysis";
import MatchData from "./MatchData";
import { ConsoleReport } from "./ReportTargets/ConsoleReport";

// 行为接口  要查询啥的次数
export interface Analyzer {
    run(matches: MatchData[]): string;
}

// 输出结果的方式约束

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) { }
    static winsAnalysisWithHtmlReport(team: string): Summary {
        return new Summary(new WinsAnalysis(team),new ConsoleReport())
    }
    buildAndPrintReport(matches: MatchData[]) {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output)
    }
}