import React, { useEffect, useState } from 'react';

export const BandList = ({ data }) => {
	const [bands, setBands] = useState(data);

	// For the moment, set the bands to the data passed
	// by using useEffect. This will be changed later
	useEffect(() => {
		setBands(data);
	}, [data]);

	const createRows = () => {
		return bands.map((band) => (
			<tr key={band.id}>
				<td>
					<button className='btn btn-primary'> +1 </button>
				</td>
				<td>
					<input className='form-control' value={band.name}></input>
				</td>
				<td>
					<h3>15</h3>
				</td>
				<td>
					<button className='btn btn-danger'>Borrar</button>
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
