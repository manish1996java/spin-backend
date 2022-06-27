const http = require('http');
const express = require('express');
const app = require('./app/app');





const PORT = process.env.PORT || 4500;

const option = {}

const server = http.createServer(option,app);
server.listen(PORT);
server.on('listening',()=>{
    console.log('listening');
})
server.on('close',(a)=>{
    console.log('close',a);
})
server.on('connect',(a)=>{
    console.log('connect',a);
})
server.on('error',(e)=>{
    console.log('error',e);
})