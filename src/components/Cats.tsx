import React, { FC } from 'react'
import useGetImages from '../hooks/useGetCats'
import { Image, Favourite } from '../types/types'
import ImageArticle from './CatArticle'
import useGetFavouriteImages from '../hooks/useGetStarredCats'

const Images: FC = () => {
	const [images] = useGetImages()
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
					<React.Suspense fallback={<div>Loading...</div>}>
						{images.map((image: Image) => (
							<ImageArticle
								key={image.id}
								image={image}
								isFavourite={favouriteImages.some(
									(favouriteImage: Favourite) =>
										favouriteImage.image_id === image.id
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
