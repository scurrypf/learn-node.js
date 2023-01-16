const fs = require('node:fs');
//同步创建目录
//同步的逻辑会阻塞代码的执行
fs.mkdirSync(`${__dirname}/dir`);
fs.rmdirSync(`${__dirname}/dir`);
console.log(fs.readdirSync(__dirname));