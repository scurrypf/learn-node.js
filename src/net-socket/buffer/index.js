const {Buffer} = require('node:buffer');

//创建一个buffer，并对其初始化，给予其一个长度
const buff = Buffer.alloc(5);
buff[0] = 25;buff[1] = 255;
console.log(buff);
const msg = Buffer.from([72, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 33]);
console.log(msg.toString('utf-8'));

//sql协议传参，前三位表示传递的信息长度，
//第四位表示序列号，后面表示信息
const sql = Buffer.from([0, 0, 12, 1, 72, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 33])
const part = sql.readInt16BE(0);
const msgLength = ( part >> 8 ) + sql.readInt8(2);
console.log(sql.slice(4,4 + msgLength).toString('utf-8')); 