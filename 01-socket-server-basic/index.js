// Express server
const app = require("express")();

// Socket server
const server = require("http").createServer(app);

// Socket server config
const io = require("socket.io")(server);

io.on("connection", () => {
  /* … */
});
server.listen(8080, () => {
  console.log("Server running in port :8080");
});
