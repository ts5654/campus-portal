const mongoose = require('mongoose')
const Facultyscheme = new mongoose.Schema({
    Image:{
        type:String
    },
    heading:{
       type: String
    },
    content:{
        type:String
    }
})

module.exports=mongoose.model('Faculty',Facultyscheme)