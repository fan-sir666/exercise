type Callback = () => void;
export class Eventing {
    events: { [key: string]: Callback[] } = {}
    // 事件侦听器
    on = (eventName: string, callback: Callback): void => {
        const handlers = this.events[eventName] || [];
        handlers.push(callback)
        this.events[eventName] = handlers;
    }
    // 事件触发器
    trigger = (eventName: string): void => {
        const handlers = this.events[eventName]
        if (!handlers || handlers.length === 0) return;
        handlers.forEach(callback => callback())
    }
}