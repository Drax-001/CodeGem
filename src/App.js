import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './nav/Nav';
import Home from './home/Home';
import Error from './error/Error';

function App() {
  return (
	  <BrowserRouter>
		<Routes>
			<Route path="/" element={<Nav />}>
				<Route index element={<Home />} />
			  </Route>
			  <Route path='*' element={<Error />}></Route>
		</Routes>
	</BrowserRouter>
	);
}

export default App;
