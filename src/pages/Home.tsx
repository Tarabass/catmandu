import Images from '../components/Images'
import Filters from '../components/Filters'
import { Suspense } from 'react'

const Home = () => {
	return (
		<>
			<Filters />
			<Suspense fallback={<div>Loading..</div>}>
				<Images />
			</Suspense>
		</>
	)
}

export default Home
