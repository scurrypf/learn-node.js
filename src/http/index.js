const http = require('node:http');
const { writeUpload } = require('./writeUp')
const { queryAll } = require('../mySql/index')

const host = '127.0.0.1';
const port = 3000;

// const server  = http.createServer((req,res)=>{
//     console.log(req);
//     console.log(res);
//     res.end('执行成功')
// })

// server.listen(port,host,()=>{console.log('web服务器启动成功，http://127.0.0.1:3000')})

// 1.根据请求路径进行路由
const router = [
    {
        path: '/',
        handler: (res, query) => { 
            console.log(query)
            res.end(JSON.stringify(query))
        }
    },
    {
        path: '/weather',
        handler: (res, query) => { 
            // TODO: 网络请求，数据库查询
            console.log(query)
            res.end(JSON.stringify(query))
         }
    },
    {
        path: '/upload',
        handler:(res,query,req)=>{
            //将客户端的文件上传到本地
            //req在服务端可以作为可读流
            const filename = query?.fileName || 'no';
            const writeTo = writeUpload(filename);
            //也可以使用监听的方式来传送
            //req.on('data',(chunk)=>{
            //     console.log(chunk);
            // })
            req.pipe(writeTo);
            res.end('保存成功')
        }
    },
    {
        path:'/mysql',
        handler:async (res,query)=>{
            console.log(query);
            const result = await queryAll();
            res.end(JSON.stringify(result));
        }
    }
]
// 2.查询参数的解析
const server = http.createServer((req, res) => {

    const splitUrl = req.url.split('?');
    // splitUrl ['/', 'name=pjw&password=123456']
    const inComePath = splitUrl[0]
    const queryPair = {}
    if (splitUrl.length === 2) {
        const query = splitUrl[1]
        query.split('&').forEach(pairStr => {
            const pairArr = pairStr.split('=')
            queryPair[pairArr[0]] = pairArr[1]
        })
    }
    // 路由逻辑
    router.forEach(route => {
        if (inComePath === route.path) {
            route.handler(res, queryPair,req)
        }
    })
})

server.listen(port, host, () => console.log('web服务器成功启动，http://127.0.0.1:3000'))