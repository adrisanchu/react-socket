import { BandAdd } from './components/BandAdd';
import { BandList } from './components/BandList';

function App() {
	return (
		<div className='container'>
			<div className='alert'>
				<p>
					Service status:
					<span className='text-success'> Online</span>
					<span className='text-danger'> Offline</span>
				</p>
			</div>

			<h2>Bandnames</h2>
			<hr></hr>

			<div className='row'>
				<div className='col-8'>
					<BandList />
				</div>

				<div className='col-4'>
					<BandAdd />
				</div>
			</div>
		</div>
	);
}

export default App;
