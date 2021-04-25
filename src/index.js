const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

require('dotenv').config()

const routes = require('./routes')

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, console.log("Connected to database"))


app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333, () => console.log("Server running"))

