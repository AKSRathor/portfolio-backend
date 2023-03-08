const connectToMongoose = require("./db")
const express = require('express')
var cors = require('cors') //to fix the cors error

connectToMongoose();

const app = express()
app.use(cors()) //to fix the cors error
// const password = "BQrStvgn3gRZJwzf"
const port = process.env.PORT || 5000

app.use(express.json())

app.use('/api/message', require('./routes/message'))

app.listen(port, () => {
  console.log(`Portfolio backend listening on port ${port}`)
})