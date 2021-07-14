import { httpGet } from '../axios/http'
import { HomeAPI } from '../../api'
import { getCity, setCity } from '../myStorage/myStorage'
const getCurCity = () => {
    // 本地存储的当前定位城市
    const curCity = getCity();
    if (!curCity) {
        return new Promise(resolve => {
            var myCity = new window.BMap.LocalCity();
            myCity.get(async(pointVal) => {
                // console.log(pointVal); 使用百度地图需要设置密钥
                const result = await httpGet(HomeAPI.curcity, { name: pointVal.name })

                // console.log(result);
                if (result.status === 200) {

                    // 设置本地存储当前定位城市
                    setCity(result.body)

                    // 返回成功的结果
                    resolve(result.body)
                }
            })
        })
    } else {
        // 本地存在当前定位城市
        return Promise.resolve(curCity)
    }
}
export default getCurCity;