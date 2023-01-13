const net = require('node:net');

const host = '127.0.0.1';
const port = 3000;

//创建客户端
const client = net.createConnection(port,host);

//监听服务端是否返回数据
client.on('data',(dataFromserver)=>{
    console.log(dataFromserver.toString('utf-8'));
})

//当与服务端连接成功时，向服务端写数据
client.on('connect',()=>{
    client.write('你好，服务端！')
})