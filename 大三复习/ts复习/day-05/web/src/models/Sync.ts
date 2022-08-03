import axios, { AxiosPromise } from "axios";
interface HasId {
    id?: number
}
export class Sync<T extends HasId> {
    constructor(public rootUrl: string) { }
    // 请求服务端数据
    fetch(id: number) {
        return axios.get(`${this.rootUrl}/${id}`)
    }
    save(data: T): AxiosPromise {
        const { id } = data
        if (typeof id != "undefined") {
            return axios.patch(`${this.rootUrl}/${id}`, data);
        } else {
            return axios.post(this.rootUrl, data)
        }
    }
}