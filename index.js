require('dotenv').config()

const connectDb = require('./src/db/mssql')

const app = require('./app');

const port = process.env.PORT

app.listen(port, async () => {
    await connectDb()
    console.log('Server connected, port:', port)
})