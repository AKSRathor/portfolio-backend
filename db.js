require("dotenv").config();
const express = require('express')

// const mongoose = require('mongoose')
const mongoose = require("mongoose")
// const { default: mongoose } = require("mongoose")
const password = "BQrStvgn3gRZJwzf"
// const mongoURI = "mongodb://127.0.0.1:27017/portfolio"
// const uri = `mongodb+srv://aksr2003:${password}@portfolio.qrnpgxw.mongodb.net/`
const uri = process.env.MONGO_URI
// const urc = (uri + "/?retryWrites=true&w=majority").toString()
console.log(typeof uri)
// const uri = process.env.MONGOLAB_URI
// const uri = process.env.URI + "?retryWrites=true&w=majority"
// console.log("THe code is ",urc)
// mongodb+srv://aksr2003:$BQrStvgn3gRZJwzf@portfolio.qrnpgxw.mongodb.net/?retryWrites=true&w=majority
const connectToMongoose =()=>{
    // mongoose.set('strictQuery', true);
    try { 
        mongoose.connect(uri, ()=>{
            console.log(uri)
            console.log("connected to mongoose")
        })
    } catch (error) {
        console.log(error)
        process.exit()
    }
    // .catch(err => console.log(err))

}


module.exports = connectToMongoose