

const express = require('express')
const bodyParser = require('body-parser')


const db = require('./db')
const userRouter = require('./routes/users-router')

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', userRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))