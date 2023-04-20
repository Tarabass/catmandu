import { FC, useEffect, useState } from 'react'
import { Favourite, Image } from '../types/types'
import { useRecoilCallback } from 'recoil'
import favouritesState from '../state/atoms/favouritesState'
import useSetImageFavourite from '../hooks/useSetImageFavourite'
import classNames from 'classnames'

type ImageArticleProps = {
	image: Image
}

const ImageArticle: FC<ImageArticleProps> = ({ image }) => {
	const [isFavouriteImage, setIsFavouriteImage] = useState(Boolean)
	const [isLoading, setIsLoading] = useState(true)
	const checkIfImageIsFavourite = useRecoilCallback(
		({ snapshot }) =>
			async () => {
				const favourites = await snapshot.getPromise(favouritesState)
				setIsLoading(false)

				setIsFavouriteImage(
					favourites.some(
						(favourite: Favourite) =>
							favourite.image_id === image.id
					)
				)
			},
		[]
	)
	const setFavourite = useSetImageFavourite()

	useEffect(() => {
		checkIfImageIsFavourite()
	}, [image, checkIfImageIsFavourite])

	const onClick = () => {
		setIsFavouriteImage(!isFavouriteImage)
		setFavourite(image.id, isFavouriteImage).catch((err: String) => {
			setIsFavouriteImage(isFavouriteImage)
		})
	}

	return (
		<article className="card__wrap--inner" key={image.id}>
			<div className="card">
				<img
					alt=""
					src={image.url}
					width={image.width / 2}
					height={image.height / 2}
				/>
				<div className="card__item flexible"></div>
				<div className="card__footer">
					<span
						className={classNames({
							'is-favourite': isFavouriteImage && !isLoading,
							'is-not-favourite': !isFavouriteImage && !isLoading,
							'is-loading': isLoading,
						})}
						onClick={onClick}
					></span>
				</div>
			</div>
		</article>
	)
}

export default ImageArticle
