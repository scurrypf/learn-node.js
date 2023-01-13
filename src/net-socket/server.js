//commonjs模块，导入是以require赋值形式导入
//ES模块是以import导入模块

const { Server } = require('node:http');
const net = require('node:net');

//server
//1.创建
const server = net.createServer((socket)=>{

    //监听客户端，客户端发送数据后，回复客户端
    socket.on('data',(dataFromclient)=>{
        console.log(dataFromclient.toString('utf-8'));
        //向客户端发送数据
        socket.write('你好，客户端！')
    })
})

//2.启动（端口号1~65535）
server.listen(3000,'127.0.0.1',()=> console.log('Server Is Listening port 3000 !'))
