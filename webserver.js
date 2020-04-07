
const http = require('http');
const app = require('./server/app');

const server = http.createServer(app);

server.listen(process.env.PORT||8000,(err)=>{
    if(!err)
    console.log('express server running on 8000 ');    

});
