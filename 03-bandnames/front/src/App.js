import { useEffect, useState } from 'react';
import { BandAdd } from './components/BandAdd';
import { BandList } from './components/BandList';
import { useSocket } from './hooks/useSocket';

function App() {
	// handle socket connection
	const { socket, online } = useSocket('http://localhost:8080');
	// handle the list of bands from the server
	const [bands, setBands] = useState([]);

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
		socket.emit('change-name-band', { id, name });
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
					<BandList
						data={bands}
						vote={vote}
						deleteBand={deleteBand}
						changeName={changeBandName}
					/>
				</div>

				<div className='col-4'>
					<BandAdd />
				</div>
			</div>
		</div>
	);
}

export default App;
