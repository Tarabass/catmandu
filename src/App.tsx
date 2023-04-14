import Navbar from './components/Navbar'
import Home from './pages/Home'
import Upload from './pages/Upload'
import Favourites from './pages/Starred'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
	const navbarItems = [
		{ text: 'Home', url: '/' },
		{ text: 'Upload', url: 'upload' },
		{ text: 'Favourites', url: 'favourites' },
	]

	return (
		<>
			<BrowserRouter>
				<Navbar title="Catmandu" items={navbarItems} />
				<Routes>
					<Route path="/" Component={Home}></Route>
					<Route path="/Upload" Component={Upload}></Route>
					<Route path="/favourites" Component={Favourites}></Route>
					<Route path="*" element={<h1>Not found!</h1>} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
