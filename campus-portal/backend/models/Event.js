
const mongoose = require('mongoose')
const eventmodel = new mongoose.Schema({
    heading:{
        type:String,
        required:true
    },
    content:{
        type:String
    },
    date:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String
    }
})
const Event = mongoose.model("Event",eventmodel)
module.exports = Event