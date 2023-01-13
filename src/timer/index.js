let count = 0
const timerId = setInterval(() => {
    console.log('哈哈哈')
    count++
    if (count === 5) {
        // 定时器取消
        clearInterval(timerId)
    }
}, 1000)