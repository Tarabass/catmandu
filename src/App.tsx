import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Starred from './pages/Starred'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
	const items = [
		{ text: 'Home', url: '/' },
		{ text: 'Starred', url: 'starred' },
	]

	return (
		<div>
			<BrowserRouter>
				<Navbar title="Catmandu" items={items} />
				<Routes>
					<Route path="/" Component={Home}></Route>
					<Route path="/starred" Component={Starred}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
