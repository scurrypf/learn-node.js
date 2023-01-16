const mysql2 = require('mysql2/promise')

// const connection = mysql2.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'781514',
//     database:'mydatabase',
//     port: 3306,
// })

// const [rows] = connection.execute(`select * from cj;`)

async function queryAll() {
    const mysqlIns = await mysql2.createConnection({
        host:'127.0.0.1', 
        user: 'root', 
        database: 'mydatabase', 
        password: '781514', 
        port: 3306
    });
    const [rows] = await mysqlIns.execute(`SELECT * FROM cj;`)
    return rows;
}

module.exports = {
    queryAll,
}