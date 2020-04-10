
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();

const mongoose = require('mongoose');

// require shema 
const User = require('./models/users');


// create a connection to local mongodb instance  
mongoose.connect('mongodb://localhost:27017/IT6203',{useNewUrlParser:true})
.then(()=>{console.log('connected');})
.catch(()=> {console.log('error connecting');})

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(cors());

app.use((req,res,next)=>{
    console.log('This line is always called');
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Method','GET,POST,DELETE,PUT,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers','Origin,Content-Type,Accept');
    next();
    //res.send('This is the response from Express!!');
});


//get request 
app.get('/jobs', (req,res,next)=>{

    res.status(200).json({message:"Currently no Job Posted!!"});
});


// get user
app.get('/users', (req,res,next)=>{

    User.find()
    .then(data=>{        
        res.status(200).json(data);
    })

});

//post requests 
app.post('/signup',(req,res,next)=>{
    res.status(200).json("You are now signed up please Signin"); 
    const user  = new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        password:req.body.password,
        email:req.body.email

    }) ;
    console.log(user);

     user.save()
     // incase of success 
     .then(()=>{console.log('success')})
     // if error 
     .catch(()=>{console.log('an error occured during registration')});


});



// delete user 

app.delete('/user/:id',(req,res,next)=>{

User.deleteOne({_id:req.params.id})
.then((results)=>{
    res.status(200).json("!Deleted ");
});


});


 module.exports = app;