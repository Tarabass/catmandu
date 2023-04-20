import { FC, Suspense } from 'react'
import { Favourite } from '../types/types'
import { useRecoilValue } from 'recoil'
import favouritesState from '../state/atoms/favouritesState'

const Favourites: FC = () => {
	const favourites = useRecoilValue(favouritesState)

	return (
		<div className="page">
			<div className="container">
				<section className="card__wrap--outer">
				<Suspense fallback={<div>Loading..</div>}>
					{favourites.map((favourite: Favourite) => (
						<article
							className="card__wrap--inner"
							key={favourite.id}
						>
							<div className="card">
								<img
									alt=""
									src={favourite.image.url}
									width="10%"
									height="10%"
								/>
							</div>
						</article>
					))}
					</Suspense>
				</section>
			</div>
		</div>
	)
}

export default Favourites
