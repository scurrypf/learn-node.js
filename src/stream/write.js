const fs = require('node:fs');

const soucefile = require('node:path').join(__dirname,'./text.txt');
const aimFile = require('node:path').join(__dirname,'./aim.txt');

const writeStream = fs.createWriteStream(aimFile);
const readStream = fs.createReadStream(soucefile)

//实现可写流
for(let i = 0;i<10000;i++){
    writeStream.write('hhhhhhhhhhh,so,easy/n'); 
}

//实现赋值功能
readStream.pipe(writeStream)
