import Chart from 'chart.js/auto';
import { useEffect } from 'react';

export const BandChart = () => {
	useEffect(() => {
		const ctx = document.getElementById('myChart');

		new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
				datasets: [
					{
						label: '# of Votes',
						data: [12, 19, 3, 5, 2, 3],
						borderWidth: 1,
					},
				],
			},
			options: {
				indexAxis: 'y',
				scales: {
					x: {
						stacked: true,
					},
					y: {
						beginAtZero: true,
					},
				},
			},
		});
	}, []);

	return <canvas id='myChart'></canvas>;
};
