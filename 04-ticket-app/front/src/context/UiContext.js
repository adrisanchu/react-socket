import React, { createContext, useState } from 'react';

export const UiContext = createContext();

export const UiProvider = ({ children }) => {
	// state to control sidebar display
	const [displayedMenu, setDisplayedMenu] = useState(false);

	const showMenu = () => {
		setDisplayedMenu(false);
	};

	const hideMenu = () => {
		setDisplayedMenu(true);
	};

	return (
		<UiContext.Provider
			value={{
				displayedMenu,
				showMenu,
				hideMenu,
			}}
		>
			{children}
		</UiContext.Provider>
	);
};
