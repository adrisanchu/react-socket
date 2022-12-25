import React, { useEffect, useState } from 'react';

export const BandList = ({ data, vote, deleteBand }) => {
	const [bands, setBands] = useState(data);

	// For the moment, set the bands to the data passed
	// by using useEffect. This will be changed later
	useEffect(() => {
		setBands(data);
	}, [data]);

	// trigger a change every time we type in the input
	// (this is less efficient than sending the changes to the backend when onBlur!)
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

	// this is more convenient when sending data to a server
	const handleBlur = (id, name) => {
		console.log({ id, name });
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
					<button className='btn btn-danger' onClick={() => deleteBand(band.id)}>Borrar</button>
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
