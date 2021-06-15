import {put, takeEvery} from 'redux-saga/effects'
import { GET_DATA } from './actionTypes'
import {saveData} from './action'

// 发请求并保存数据
function* getData() {
    const result = yield fetch('http://localhost:80/getData')
    .then(res=>{
        // console.log(res);
        return res.json();
    })
    .then(json=>json)

    // 保存数据
    yield put(saveData(result))
}

export default function* mySaga() {
    yield takeEvery(GET_DATA,getData);
}