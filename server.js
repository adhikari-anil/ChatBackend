const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);

const {Server} = require('socket.io');
const io = new Server(server, {
    cors: {
        origin: "*"
    }
});


io.on('connection', (socket)=>{
    console.log(" New User ", socket.id);

    socket.on("chat", (payload)=>{       
        io.emit("chat", payload); 
    })
})

server.listen(5000,()=>{
    console.log(`Server is started at http://localhost:5000`);
});