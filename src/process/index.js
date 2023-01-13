//process为内置变量，可以不用导入直接使用
const process = require('node:process');

console.log('运行时的目录：',process.cwd());
console.log('获取命令行参数',process.argv);
const params = process.argv.slice(2,process.argv.length);
console.log(params);
//通过环境变量传递以些预设值
//console.log('环境变量：',process.env);
// 每一个新创建的进程都会有拥有的三个文件描述符，标准输入，标准输出和标准错误
// fd: file descriptor
console.log('标准输入：',process.stdin.fd)//0
console.log('标准输出：',process.stdout.fd)//1
console.log('标准错误：',process.stderr.fd)//2