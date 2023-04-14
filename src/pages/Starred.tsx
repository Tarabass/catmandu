import { FC } from 'react'
import { Favourite } from '../types/types'
import useGetFavouriteImages from '../hooks/useGetStarredCats'

const Favourites: FC = () => {
	const [favouriteImages, error, isLoading] = useGetFavouriteImages()

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
					{favouriteImages.map((favouriteImage: Favourite) => (
						<article
							className="card__wrap--inner"
							key={favouriteImage.id}
						>
							<div className="card">
								<img
									alt=""
									src={favouriteImage.image.url}
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
