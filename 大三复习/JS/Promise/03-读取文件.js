const fs = require('fs');

// let p = new Promise((resolve, reject) => {
//     fs.readFile('./resource/content.txt', (err, data) => {
//         if (err) reject(err);
//         resolve(data);
//     })
// })

// p.then((value) => {
//     console.log(value.toString());
// }, (reason) => {
//     console.log(reason);
// })

// 将上面封装成函数
const fsReadFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}
fsReadFile('./resource/content.txt')
    .then((value) => {
        console.log(value.toString());
    }, (reason) => {
        console.log(reason);
    })
