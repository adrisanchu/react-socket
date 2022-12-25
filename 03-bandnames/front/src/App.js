import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { BandAdd } from './components/BandAdd';
import { BandList } from './components/BandList';

/**
 *
 * @returns {SocketIO} A socketIO connection instance
 */
const connectSocketServer = () => {
	const socket = io.connect('http://localhost:8080', {
		transports: ['websocket'],
	});
	return socket;
};

function App() {
	// handle socket connection
	const [socket] = useState(connectSocketServer());
	// handle socket status
	const [online, setOnline] = useState(false);
	// handle the list of bands from the server
	const [bands, setBands] = useState([]);

	useEffect(() => {
		setOnline(socket.connected);
	}, [socket]);

	useEffect(() => {
		socket.on('connect', () => {
			setOnline(true);
		});
	}, [socket]);

	useEffect(() => {
		socket.on('disconnect', () => {
			setOnline(false);
		});
	}, [socket]);

	useEffect(() => {
		socket.on('current-bands', (bands) => {
			setBands(bands);
		});
	}, [socket]);

	/**
	 * Tell the server to update a vote
	 * @param {string} id The id of the band
	 */
	const vote = (id) => {
		socket.emit('vote-band', id);
	};

	/**
	 * Tell the server to delete a band
	 * @param {string} id The id of the band
	 */
	const deleteBand = (id) => {
		socket.emit('delete-band', id);
	};

	/**
	 * Tell the server to update a band with a new name
	 * @param {string} id The id of the band
	 * @param {string} name The new name of the band
	 */
	const changeBandName = (id, name) => {
		socket.emit('change-name-band', {id, name})
	};

	return (
		<div className='container'>
			<div className='alert'>
				<p>
					Service status:
					{online ? (
						<span className='text-success'> Online</span>
					) : (
						<span className='text-danger'> Offline</span>
					)}
				</p>
			</div>

			<h2>Bandnames</h2>
			<hr></hr>

			<div className='row'>
				<div className='col-8'>
					<BandList data={bands} vote={vote} deleteBand={deleteBand} changeName={changeBandName} />
				</div>

				<div className='col-4'>
					<BandAdd />
				</div>
			</div>
		</div>
	);
}

export default App;
