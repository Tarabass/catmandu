import Images from '../components/Images'
import Filters from '../components/Filters'
import Loader from '../components/Loader'
import { Suspense } from 'react'

const Home = () => {
	return (
		<>
			<Filters />
			<Suspense fallback={<Loader />}>
				<Images />
			</Suspense>
		</>
	)
}

export default Home
