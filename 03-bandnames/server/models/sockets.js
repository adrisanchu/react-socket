const BandList = require('./band-list');

class Sockets {
	constructor(io) {
		this.io = io;

		this.bandList = new BandList();

		this.socketEvents();
	}

	socketEvents() {
		// On connection
		this.io.on('connection', (socket) => {
			console.log('Client connected');
			socket.emit('current-bands', this.bandList.getBands());

			socket.on('vote-band', (id) => {
				this.bandList.increaseVotes(id);
				// refresh all clients connected by resending the list of bands
				this.io.emit('current-bands', this.bandList.getBands());
			});

			socket.on('delete-band', (id) => {
				this.bandList.removeBand(id);
				// refresh all clients connected by resending the list of bands
				this.io.emit('current-bands', this.bandList.getBands());
			});

			socket.on('change-name-band', ({id, name}) => {
				this.bandList.changeName(id, name);
				// refresh all clients connected by resending the list of bands
				this.io.emit('current-bands', this.bandList.getBands());
			});

			// Escuchar evento: mensaje-to-server
			socket.on('mensaje-to-server', (data) => {
				console.log(data);

				this.io.emit('mensaje-from-server', data);
			});
		});
	}
}

module.exports = Sockets;
