import { useEffect, useState, useMemo } from 'react';
import io from 'socket.io-client';

/**
 *
 * @param {string} serverPath the host and port of the server
 * @returns {{socket: SocketIO, online: string}} A Socket IO instance
 */
export const useSocket = (serverPath) => {
	const socket = useMemo(
		() =>
			io.connect(serverPath, {
				transports: ['websocket'],
			}),
		[serverPath]
	);

	// handle socket status
	const [online, setOnline] = useState(false);

	useEffect(() => {
		setOnline(socket.connected);
	}, [socket]);

	useEffect(() => {
		socket.on('connect', () => {
			setOnline(true);
		});
	}, [socket]);

	useEffect(() => {
		socket.on('disconnect', () => {
			setOnline(false);
		});
	}, [socket]);

	return { socket, online };
};
