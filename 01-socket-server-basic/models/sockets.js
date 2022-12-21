class Sockets {
	constructor(io) {
		this.io = io;

		this.socketEvents();
	}

	socketEvents() {
		// On connection
		this.io.on('connection', (socket) => {
			socket.emit('welcome', {
				msg: 'Bienvenido al servidor',
				date: new Date(),
			});
			console.log('A client connected to the server');

			socket.on('msg-client', (data) => {
				console.log('Client says:', data);
			});

			socket.on('chat-to-server', (data) => {
				console.log(data);

				// tell all clients that a new message arrived!
				// we do so by using io instead of socket!
				this.io.emit('new-message', data);
			});
		});
	}
}

module.exports = Sockets;
