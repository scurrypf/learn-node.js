const fs = require('node:fs');
// 创建文件writeFile
// 1.通过参数控制文件是否创建
fs.writeFile(`${__dirname}/text.txt`,'hello file\n',{flag:'a'},(err)=>{
    console.log('文件');
})
//删除文件unlink
// fs.unlink(`${__dirname}/text.txt`,(err)=>{
//     if(!err){
//         console.log('删除成功');
//     }
// })
//读取文件
// 每次要把整个文件读取了，会占用大量内存
fs.readFile(`${__dirname}/text.txt`,(err,data)=>{
    if(!err){
        console.log(data.toString('utf-8'));
    }
})
