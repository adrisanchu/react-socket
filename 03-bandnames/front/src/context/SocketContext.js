import { createContext } from 'react';
import { useSocket } from '../hooks/useSocket';

// create a new context for the socket
export const SocketContext = createContext();

// position the socket in this component to use it across the app
export const SocketProvider = ({ children }) => {
	const { socket, online } = useSocket('http://localhost:8080');
	return (
		<SocketContext.Provider value={{ socket, online }}>
			{children}
		</SocketContext.Provider>
	);
};
