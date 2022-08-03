import { User } from './User'
import { Company } from "./Company";
import { Map } from "./Map";
// 创建用户
const user = new User()
// 创建公司
const company = new Company();
// 创建地图
const map = new Map("map");
map.addMarker(user);
map.addMarker(company);
