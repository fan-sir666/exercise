// 1. 引入redux
import { createStore } from 'redux'

import reducer from "./reducer"

// 4. 创建并导出 store
export default createStore(reducer)