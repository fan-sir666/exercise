const HKZF_KEY = "hkzf_key";
// 获取localstorage的值
export const getCity = ()=>{
    return JSON.parse(localStorage.getItem(HKZF_KEY));
}
// 设置localstorage的值
export const setCity = (value)=>{
    return localStorage.setItem(HKZF_KEY,JSON.stringify(value));
}