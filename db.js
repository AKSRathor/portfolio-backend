require("dotenv").config();

const mongoose = require("mongoose")
const mongoURI = "mongodb://127.0.0.1:27017/portfolio"
const uri = process.env.MONGO_URI + "?retryWrites=true&w=majority"

const connectToMongoose =()=>{
    
    try { 
        mongoose.connect(uri || mongoURI, ()=>{
            console.log(uri)
            console.log("connected to mongoose")
        })
    } catch (error) {
        console.log(error)
        process.exit()
    }

}


module.exports = connectToMongoose
