import { FC, Suspense } from 'react'
import Favourites from '../components/Favourites'
import Loader from '../components/Loader'

const FavouritesPage: FC = () => {
	return (
		<>
			<Suspense fallback={<Loader />}>
				<Favourites />
			</Suspense>
		</>
	)
}

export default FavouritesPage
