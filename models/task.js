const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({   
    name:{
        type:String,
        required:[true, 'Please provide a name'],
        maxlength: 20
    },
    isCompleted:{
        type:Boolean, 
        default:false
    }
})

module.exports = mongoose.model('Task', TaskSchema)