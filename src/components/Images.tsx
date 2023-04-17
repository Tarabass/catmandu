import { FC } from 'react'
import { Image, Favourite } from '../types/types'
import ImageArticle from './ImageArticle'
import useGetFavourites from '../hooks/useGetFavourites'
import { useRecoilValue } from 'recoil'
import imagesState from '../state/atoms/imagesState'

const Images: FC = () => {
	const images = useRecoilValue(imagesState)

	return (
		<div className="page">
			<div className="container">
				<section className="card__wrap--outer">
					{images.map((image: Image) => (
						<ImageArticle
							key={image.id}
							image={image}
							isFavourite={false}
							// isFavourite={favourites.some(
							// 	(favourite: Favourite) =>
							// 		favourite.image_id === image.id
							// )}
						/>
					))}
				</section>
			</div>
		</div>
	)
}

export default Images
