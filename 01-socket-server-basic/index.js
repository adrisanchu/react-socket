// Express server
const express = require("express");
const app = express();

// Socket server
const server = require("http").createServer(app);

// Socket server config
const io = require("socket.io")(server);

// Deploy public directory
app.use(express.static(__dirname + "/public"));

io.on("connection", (socket) => {
  socket.emit("welcome", {
    msg: "Bienvenido al servidor",
    date: new Date(),
  });
  console.log("A client connected to the server");
});

server.listen(8080, () => {
  console.log("Server running in port :8080");
});
