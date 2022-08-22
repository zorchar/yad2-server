const sql = require('mssql')

const getAllAssets = async (req, res, next) => {
    try {
        const result = await sql.query`select * from tblRealEstate`
        console.dir(result)

        res.locals.data = result
        res.locals.status = 200
        next()
    } catch (error) {
        console.log(error);
    }
}

const getAssets = async (req, res, next) => {

    let queryString = ''
    let count = 0
    for (const key in req.query) {

        if (count === 0)
            queryString += 'WHERE ' + key + `=N'` + req.query[key] + "'"
        else
            queryString += ' AND ' + key + `=N'` + req.query[key] + "'"

        count++
    }

    try {
        const result = await sql.query(`SELECT * FROM tblRealEstate ${queryString}`)

        res.locals.data = result
        res.locals.status = 200
        next()
    } catch (error) {
        console.log('error');
        next(error)
    }
}

const newAsset = async (req, res, next) => {
    let keys = ''
    let values = ''
    let count = 0

    for (const key in req.body) {
        if (count === 0) {
            keys = key
            values = "N'" + req.body[key] + "'"
        }
        else {
            keys += ', ' + key
            values += ", N'" + req.body[key] + "'"
        }

        count++
    }

    let queryString = `INSERT INTO tblRealEstate (${keys}) VALUES (${values})`

    try {
        console.log(queryString);
        const result = await sql.query(queryString)

        res.locals.data = result
        res.locals.status = 200
        next()
    } catch (error) {
        console.log('error');
        next(error)
    }
}

module.exports = {
    getAllAssets,
    getAssets,
    newAsset
}