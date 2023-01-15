const stream = require('node:stream');

const aimFile = require('node:path').join(__dirname, './pdf')
console.log(aimFile)

const fs = require('node:fs');
// createReadStream 塞入 目标文件构成可读流机制
// 组合起来的机器，就是fileString
const fileSream = fs.createReadStream(aimFile);

// 1，通过buffer读取数据，如何获取buffer：通过监听data事件
// 监听状态，data -> paused=>flow
// fileSream.on('data',(chunk)=>{
//     console.log(chunk);
// });
// fileSream.on('close',()=>{
//     console.log('结束了');
// })
// 2. 通过读流中的pipe函数，将读流和写流连接
fileSream.pipe(process.stdout);