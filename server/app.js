
const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use((req,res,next)=>{
    console.log('This line is always called');
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Method','GET,POST,PUT,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers','Origin,Content-Type,Accept');
    next();
    res.send('This is the response from Express!!');
});


//get request 
app.get('/jobs', (req,res,next)=>{
    res.status(200).json({message:"Currently no Job Posted!!"});
});

//post requests 
app.post('/signup',(req,res,next)=>{
    res.status(200).json({message:"You are now signed up please register"});  


});


 module.exports = app;