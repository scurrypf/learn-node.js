const { count } = require('node:console');
const {stdin,stdout} = require('node:process');

const readline = require('node:readline');

const rl = readline.createInterface({
    input:stdin,
    output:stdout,
})

//问答式输入数据
// rl.question('your name?', (answer) => {
//     console.log(answer)
// })

// 第一个数字代表有几个数据
// 第二个数字代表有几行数据
// 下面依次输入数据
let isNums = true;isFlag = true,lineCount = 0,numCount = 0,res = [],counts = 0;
rl.on('line',(input)=>{
    if(isNums){
        numCount = parseInt(input);
        isNums = false;
    }else if(isFlag){
        lineCount = parseInt(input);
        isFlag = false;
    }else{
        res.push(input);
    }        
    counts+=lineCount;
    if(counts === res.length){
        numCount--;
        lineCount=0;
            isFlag = true;
    }
    if(numCount === 0){
        exec(res)
    }
})

// 我们自己的handle函数
function exec(nums) {
    console.log(nums)
}