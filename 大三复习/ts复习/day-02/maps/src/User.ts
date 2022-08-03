import faker from '@faker-js/faker'
import { Mappable } from './Map';

export class User implements Mappable {
    // 姓名
    name:string;
    // 位置
    localtion:{
        // 纬度
        lat:number,
        // 经度
        lng:number
    }
    constructor(){
        this.name = faker.name.firstName();
        this.localtion={
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude())
        }
    }
    markerContent(): string {
        return `用户名：${this.name}`
    }
}