const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');

const Sockets = require('./sockets');

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;

		// Http server
		this.server = http.createServer(this.app);

		// Socket server config
		this.io = socketio(this.server, {});
	}

	middlewares() {
		// Deploy public directory
		this.app.use(express.static(path.resolve(__dirname, '../public')));
	}

	socketsConfig() {
		new Sockets(this.io);
	}

	execute() {
		// Init middlewares
		this.middlewares();

		// Sockets config
		this.socketsConfig();

		// Init server
		this.server.listen(this.port, () => {
			console.log('Server running in port:', this.port);
		});
	}
}

module.exports = Server;
