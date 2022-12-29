import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../context/SocketContext';

export const BandList = () => {
	const [bands, setBands] = useState([]);
	const { socket } = useContext(SocketContext);

	useEffect(() => {
		socket.on('current-bands', (bands) => {
			setBands(bands);
		});

		// triggered when the component is destroyed
		return () => socket.off('current-bands');
	}, [socket]);

	/**
	 * Update input field with the new value typed by user
	 * @param {React.ChangeEvent} event
	 * @param {string} id The id of the band
	 */
	const changeBandName = (event, id) => {
		setBands((bands) =>
			bands.map((band) => {
				if (band.id === id) {
					band.name = event.target.value;
				}
				return band;
			})
		);
	};

	/**
	 * Tell the server to update a band with a new name when on blur
	 * @param {string} id The id of the band
	 * @param {string} name The new name of the band
	 */
	const handleBlur = (id, name) => {
		socket.emit('change-name-band', { id, name });
	};

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

	const createRows = () => {
		return bands.map((band) => (
			<tr key={band.id}>
				<td>
					<button className='btn btn-primary' onClick={() => vote(band.id)}>
						+1
					</button>
				</td>
				<td>
					<input
						className='form-control'
						value={band.name}
						onChange={(event) => changeBandName(event, band.id)}
						onBlur={() => handleBlur(band.id, band.name)}
					/>
				</td>
				<td>
					<h3>{band.votes}</h3>
				</td>
				<td>
					<button
						className='btn btn-danger'
						onClick={() => deleteBand(band.id)}
					>
						Borrar
					</button>
				</td>
			</tr>
		));
	};

	return (
		<>
			<table className='table table-stripped'>
				<thead>
					<tr>
						<th></th>
						<th>Nombre</th>
						<th>Votos</th>
						<th>Borrar</th>
					</tr>
				</thead>
				<tbody>{createRows()}</tbody>
			</table>
		</>
	);
};
