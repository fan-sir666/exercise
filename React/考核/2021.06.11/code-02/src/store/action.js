import { GET_NUM } from "./actionTypes"

const data = (num)=>{
    return{
        type:GET_NUM,
        num:num
    }
}

export const getNum = (diapatch)=>{
    fetch('http://localhost:8080/getNum')
    .then(res=>res.json())
    .then(json=>{
        console.log(json);
        diapatch(data(json.num));
    })
}