const mongoose = require('mongoose')
const userschema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:[true,"password is requried"]

    }
})
module.exports = mongoose.model('User',userschema)