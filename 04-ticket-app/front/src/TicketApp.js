import React from 'react';
import { UiProvider } from './context/UiContext';
import RouterPage from './pages/RouterPage';

function TicketApp() {
	return (
		<UiProvider>
			<RouterPage />
		</UiProvider>
	);
}

export default TicketApp;
