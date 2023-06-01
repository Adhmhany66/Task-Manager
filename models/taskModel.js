const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,'please enter your name'],
        item:true  
    },
    completed:{
       type: Boolean,
       default:false
    }
})

module.exports = mongoose.model('Task',taskSchema)