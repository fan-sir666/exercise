// 全局中间件
export default () => {
    const server = process.server ? '服务端' : '客户端';
    console.log(`全局中间件执行在${server}`);
}