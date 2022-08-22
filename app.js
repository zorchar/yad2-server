const express = require('express')
const cors = require('cors')

const sucessHandlerMiddleware = require('./src/middleware/successHandlerMiddleware');
const errorHandlerMiddleware = require('./src/middleware/errorHandlerMiddleware')

const realEstateRouter = require('./src/routers/realEstateRouter')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/realestate', realEstateRouter)

app.use(sucessHandlerMiddleware)
app.use(errorHandlerMiddleware)

module.exports = app;