const path = require('node:path');

//
console.log(__dirname);
console.log(__filename);

const roadPath = path.join(__dirname,'text.txt');
//文件名
console.log(path.basename(roadPath));
console.log(roadPath);
//拓展名
console.log(path.extname(roadPath));
// 你需要程序的启动目录
// console.log(path.resolve('test.txt'))