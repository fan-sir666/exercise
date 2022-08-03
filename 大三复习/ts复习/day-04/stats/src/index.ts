import { WinsAnalysis } from "./Analyzers/WinsAnalysis";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./ReportTargets/ConsoleReport";
import { Summary } from "./Summary";

const reader = new CsvFileReader("football.csv")
const matchReader = new MatchReader(reader)
matchReader.load()


// const summary  = new Summary(
//     new WinsAnalysis('Man United'),
//     new ConsoleReport()
// )

// 通过调用类的静态方法简化调用
const summary = Summary.winsAnalysisWithHtmlReport('Man United')
summary.buildAndPrintReport(matchReader.matches)






