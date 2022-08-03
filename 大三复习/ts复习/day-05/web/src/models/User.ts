import { AxiosResponse } from 'axios';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Sync } from './Sync';
export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

const rootUrl = 'http://localhost:3000/users'
export class User extends Model {
    // 事件系统
    public events: Eventing = new Eventing();
    // 同步状态功能
    public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl)
    public attributes: Attributes<UserProps>;
    constructor(user: UserProps) {
        this.attributes = new Attributes<UserProps>(user)
    }

    get on() {
        return this.events.on;
    }
    get trigger() {
        return this.events.trigger;
    }
    get get() {
        return this.attributes.get;
    }

    // 数据变化自动触发change
    set(update: UserProps) {
        this.attributes.set(update)
        this.events.trigger('change')
    }
    // 同步服务端数据
    fetch(): void {
        const id = this.get('id')
        // 如果没有id或者类型错误
        if (typeof id !== "number") {
            // 报错: 输出错误信息
            throw new Error("没有id不能获取数据");
        }
        this.sync.fetch(id).then((response: AxiosResponse): void => {
            this.set(response.data)
        })
    }

    save(): void {
        this.sync.save(this.attributes.getAll())
            .then((response) => {
                this.attributes.set(response.data)
                this.trigger("save")
            })
            .catch(() => this.trigger("error"))
    }
}