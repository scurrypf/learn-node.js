const url = new URL('https://www.lvkokomi.com/login?name=pjw')
console.log(url.hostname)
console.log(url.pathname)
console.log(url.searchParams)//路径参数
const val = url.searchParams // Map
console.log(val.get('name'))