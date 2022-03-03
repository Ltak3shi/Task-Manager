require('dotenv').config()

const connectDB = require('./db/connect')

const express = require('express')
const app = express()

port = 3000 || process.env.PORT

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()