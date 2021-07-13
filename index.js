const express = require('express');
const http = require('http');
const mailRouter = require('./routers/mail');

const hostname = 'localhost';
const port = 5000;

const app = express();

app.use(mailRouter);

app.use(express.json());

const server = http.createServer(app);

server.listen(port,hostname, ()=>{
    console.log('Connection Successfull');
});