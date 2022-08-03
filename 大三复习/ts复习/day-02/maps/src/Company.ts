import faker from "@faker-js/faker";
import { Mappable } from "./Map";

export class Company implements Mappable {
    // 公司名称
    companyName: string;
    // 公司口号
    catchPhrase: string;
    // 位置
    localtion: {
        // 纬度
        lat: number,
        // 经度
        lng: number
    }

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        // 随机创建公司位置
        this.localtion = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
    }
    markerContent(): string {
        return `
      <h2>公司名称: ${this.companyName}</h2>
      <h4>公司口号: ${this.catchPhrase}</h4>
    `;
    }
}