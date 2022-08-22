const sql = require('mssql')

// for connecting with config object
const sqlConfig = {
    // user: process.env.DB_USER,
    // password: process.env.DB_PWD,
    // database: process.env.DB_NAME,
    user: 'admin',
    password: 'admin',
    database: 'yad2Db',
    server: 'localhost\\MSSQLSERVER02',
    options: {
        trustedConnection: true,
        keepAlive: true,
        trustServerCertificate: true // change to true for local dev / self-signed certs
    },
}

const connectDb = async () => {
    try {
        await sql.connect(sqlConfig)
        const result = await sql.query`select * from tblRealEstate`/* where id = ${value}*/
        console.dir(result)
    } catch (err) {
        console.log(`mssql err conection: ${err}`)
        // ... error checks
    }
}


module.exports = connectDb