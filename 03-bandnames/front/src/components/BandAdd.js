import React, { useState } from 'react';

export const BandAdd = ({ addBand }) => {
	// handle form submission
	const [val, setVal] = useState('');

	/**
	 * Handle form submission
	 * @param {Event} e The submit event
	 */
	const onSubmit = (e) => {
		e.preventDefault();
		// check if the form is not empty
		if (val.trim().length > 0) {
			// TODO
			addBand(val);
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
