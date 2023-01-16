const fs = require('node:fs');
const path = require('node:path');

//同步写文件
fs.writeFileSync(`${__dirname}/text.txt`,'hello zpf',{flag:'a'});
//同步读取文件
console.log(fs.readFileSync(`${__dirname}/text.txt`).toString('utf-8'))
//同步删除文件
fs.unlinkSync(`${__dirname}/text.txt`)