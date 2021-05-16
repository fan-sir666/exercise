class Person {
    name:string
    constructor(msg:string){
        this.name = msg
    }
    sHai(){
        console.log(`${this.name}在学习`);
    }
}

let p1 = new Person("张三");
p1.sHai(); 