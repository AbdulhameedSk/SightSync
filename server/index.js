const express = require("express");
const { Server } = require("socket.io");
const bodyParser = require("body-parser");

const io = new Server();
const app = express();

app.user(bodyParser.json());

const emailToSocketMapping=new Map();

io.on("connection", (socket) => {
  socket.on("join-room", (data) => {
    const { roomId, email } = data;
    emailToSocketMapping.set(email, socket.id);
    console.log(`${email} joined room ${roomId}`);
    socket.join(roomId);
    socket.broadcast.to(roomId).emit("user-connected", email);
  });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
io.listen(8001);
