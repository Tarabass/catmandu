import { FC } from 'react'
import { Favourite } from '../types/types'
import useGetFavourites from '../hooks/useGetFavourites'

const Favourites: FC = () => {
	const [favourites, error, isLoading] = useGetFavourites()

	if (isLoading) {
		return (
			<div className="page">
				<div className="container">Loading..</div>
			</div>
		)
	}

	if (error) {
		return (
			<div className="page">
				<div className="container">{error.message}</div>
			</div>
		)
	}

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
