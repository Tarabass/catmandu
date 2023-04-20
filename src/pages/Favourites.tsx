import { FC, Suspense } from 'react'
import Favourites from '../components/Favourites'

const FavouritesPage: FC = () => {
	return (
		<>
			<Suspense fallback={<div>Loading..</div>}>
				<Favourites />
			</Suspense>
		</>
	)
}

export default FavouritesPage
