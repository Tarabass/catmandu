import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Upload from './pages/Upload'
import Starred from './pages/Starred'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
	const navbarItems = [
		{ text: 'Home', url: '/' },
		{ text: 'Upload', url: 'upload' },
		{ text: 'Starred', url: 'starred' },
	]

	return (
		<>
			<BrowserRouter>
				<Navbar title="Catmandu" items={navbarItems} />
				<React.Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route path="/" Component={Home}></Route>
						<Route path="/Upload" Component={Upload}></Route>
						<Route path="/starred" Component={Starred}></Route>
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</React.Suspense>
			</BrowserRouter>
		</>
	)
}

export default App
