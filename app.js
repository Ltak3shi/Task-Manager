require('dotenv').config()

//connectDB 
const connectDB = require('./db/connect')

//Routes
const tasks = require('./routes/tasks')

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('./public'))

app.use('/api/v1/tasks', tasks)

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