const mongoose = require('mongoose');

const candidateSchema =  new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    skills:{
        type:String,
        required:true
    },
    coverletter:{
        type:String,
        required:true
    }



});


module.exports = mongoose.model('Candidate',candidateSchema,'Candidates');