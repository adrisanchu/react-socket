import Chart from 'chart.js/auto';
import { useContext, useEffect } from 'react';
import { SocketContext } from '../context/SocketContext';

let myChart;

export const BandChart = () => {
	const { socket } = useContext(SocketContext);

	useEffect(() => {
		socket.on('current-bands', (bands) => {
			createChart(bands);
		});

		// triggered when the component is destroyed
		return () => {
			myChart.destroy();
			socket.off('current-bands');
		};
	}, [socket]);

	const createChart = (bands = []) => {
		const ctx = document.getElementById('myChart');

		// destroy the chart and recreate it to update
		if (typeof myChart !== 'undefined') myChart.destroy();

		myChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: bands.map((band) => band.name),
				datasets: [
					{
						label: '# of Votes',
						data: bands.map((band) => band.votes),
						borderWidth: 1,
					},
				],
			},
			options: {
				animation: false,
				indexAxis: 'y',
				scale: {
					ticks: {
						precision: 0,
					},
					maintainAspectRatio: false
				},
				scales: {
					y: {
						beginAtZero: true,
						stacked: true,
						display: true
					},
				},
			},
		});

		// setting a specific size for the chart 
		// prevents it from "tickle" when updating data!
		// TODO: use view height and width to make it responsive,
		// but smaller than the screen! 
		myChart.resize(600, 600);
	};

	return <canvas id='myChart'></canvas>;
};
