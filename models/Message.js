const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
    Name:{
        type:String,
        require: true
    },
    Phone:{
        type:Number,
        require: true
    },
    Email:{
        type:String,
        require:true
    },
    Message:{
        type:String,
        require: true
    },
    date:{
        type:Date,
        default: Date.now
    }
  });

  const message  = mongoose.model("message", messageSchema)
//   user.createIndexes() //to minimise replication 
  module.exports = message