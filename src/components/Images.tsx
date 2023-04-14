import React, { FC } from 'react'
import useGetImages from '../hooks/useGetImages'
import { Image, Favourite } from '../types/types'
import ImageArticle from './ImageArticle'
import useGetFavourites from '../hooks/useGetFavourites'

const Images: FC = () => {
	const [images] = useGetImages()
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
					<React.Suspense fallback={<div>Loading...</div>}>
						{images.map((image: Image) => (
							<ImageArticle
								key={image.id}
								image={image}
								isFavourite={favourites.some(
									(favourite: Favourite) =>
										favourite.image_id === image.id
								)}
							/>
						))}
					</React.Suspense>
				</section>
			</div>
		</div>
	)
}

export default Images
