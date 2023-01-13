const os = require('node:os')

//os 模块提供了一些基本的系统操作函数
console.log(os.version())
console.log('返回操作系统名:',os.type())
console.log('返回编译时的操作系统名:',os.platform())
//返回一个对象数组，包含所安装的每个 CPU/内核的信息：型号、速度（单位 MHz）、时间
//（一个包含 user、nice、sys、idle 和 irq 所使用 CPU/内核毫秒数的对象）。
console.log(os.cpus())
console.log('返回操作系统 CPU 架构，可能的值有 "x64"、"arm" 和 "ia32"',os.arch())
console.log('返回操作系统的主机名:',os.hostname())