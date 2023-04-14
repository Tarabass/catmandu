import { FC, useState } from 'react'
import { Image } from '../types/types'
import useSetImageFavourite from '../hooks/useSetCatStarred'

type ImageArticleProps = {
	image: Image
	isFavourite: Boolean
}

const ImageArticle: FC<ImageArticleProps> = ({ image, isFavourite }) => {
	const [isFavouriteImage, setIsFavouriteImage] = useState(isFavourite)
	const setImageFavourite = useSetImageFavourite()

	const onClick = () => {
		setIsFavouriteImage(!isFavouriteImage)

		setImageFavourite(image.id, isFavouriteImage)
			.then((res: Object) => console.log('res', res))
			.catch((err: String) => {
				console.log('err', err)
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
						className={
							isFavouriteImage ? 'is-favourite' : 'is-not-favourite'
						}
						onClick={onClick}
					></span>
				</div>
			</div>
		</article>
	)
}

export default ImageArticle
