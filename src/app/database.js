const mysql = require('mysql2')
const connectionPool = mysql.createPool({
    host:'localhost',
    port:3306,
    user:'root',
    password:'12345678',
    database:'vue3G',
    connectionLimit:10
})
connectionPool.getConnection((err,connection)=>{
    if (err){
        console.log('连接失败',err)
        return
    }
    connection.connect(err=>{
        if (err){
            console.log('数据库交互失败')
            return
        }
        else {
            console.log('数据库连接成功，可以操作数据库')
        }
    })
})

const connection  = connectionPool.promise()

module.exports = {
    connection
}