import React, { useState } from 'react';
import { useSocket } from '../hooks/useSocket';

export const BandAdd = () => {
	// handle form submission
	const [val, setVal] = useState('');
	const { socket } = useSocket('http://localhost:8080');

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
