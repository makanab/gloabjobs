const mongoose = require('mongoose');

const jobSchema =  new mongoose.Schema({
    jobTitle:{
        type:String,
        required:true
    },
    jobDescription:{
        type:String,
        required:true
    },
    jobRequirement:{
        type:String,
        required:true
    },
    Deadline:{
        type:String,
        required:true
    },
    postedOn:{
        type:Date,
        default:Date.now
    }



});


module.exports = mongoose.model('Job',jobSchema,'Jobs');