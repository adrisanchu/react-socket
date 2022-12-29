import React, { useState, useContext } from 'react';
import { SocketContext } from '../context/SocketContext';

export const BandAdd = () => {
	// handle form submission
	const [val, setVal] = useState('');
	const { socket } = useContext(SocketContext);

	/**
	 * Handle form submission
	 * @param {Event} e The submit event
	 */
	const onSubmit = (e) => {
		e.preventDefault();
		// check if the form is not empty
		if (val.trim().length > 0) {
			socket.emit('add-band', { name: val });
			// reset input form after submission
			setVal('');
		}
	};

	return (
		<>
			<h3>Agregar Banda</h3>
			<form onSubmit={onSubmit}>
				<input
					className='form-control'
					placeholder='Nueva banda'
					value={val}
					onChange={(e) => setVal(e.target.value)}
				/>
			</form>
		</>
	);
};
