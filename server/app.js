// require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.port || 3000

const cors = require('cors')

const Router = require('./routes/index')
// const ErrorHandler = require('./middleware/errorHandler')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res)=>res.send('personnel move'))

app.use('/', Router )

// app.use(ErrorHandler)

app.listen(port,()=>console.log(`listening on port ${port}`))