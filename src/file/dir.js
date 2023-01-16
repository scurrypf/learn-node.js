const fs = require('node:fs')
//目录的创建（异步创建）
fs.mkdir(`${__dirname}/dir`,(err,dirpath)=>{
    if(err){
        console.log(err);
    }else{
        console.log(dirpath);
    }
})
//删除目录
fs.rmdir(`${__dirname}/dir`,(err)=>{
    if(err){
        console.log(err)
    }
})
//读取目录
fs.readdir(__dirname,(err,files)=>{
    if(err){
        console.log(err);
    }else{
        console.log(files);
    }
})