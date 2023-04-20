import { FC } from 'react'
import { useRecoilValue } from 'recoil'
import favouritesState from '../state/atoms/favouritesState'
import { Favourite } from '../types/types'

const Favourites: FC = () => {
	const favourites = useRecoilValue(favouritesState)

	return (
		<div className="page">
			<div className="container">
				<section className="card__wrap--outer">
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
				</section>
			</div>
		</div>
	)
}

export default Favourites
