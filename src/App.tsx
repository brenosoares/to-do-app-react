import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes
  } from "react-router-dom";
import Home from './pages/home/Home';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './AppStyle'
import ItemDetails from './pages/itemDetails/ItemDetails';

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<h1>To Do List App</h1>
			<main>
			<Router>
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/detail/:id/:name" element={<ItemDetails />} />
				</Routes>
			</Router>
			</main>
		</ThemeProvider>
	);
}
	
export default App;
	