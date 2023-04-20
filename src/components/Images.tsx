import { FC } from 'react'
import { useRecoilValue } from 'recoil'
import ImageArticle from './ImageArticle'
import { Image } from '../types/types'
import imagesState from '../state/atoms/imagesState'

const Images: FC = () => {
	const images = useRecoilValue(imagesState)

	return (
		<div className="page">
			<div className="container">
				<section className="card__wrap--outer">
					{images.map((image: Image) => (
						<ImageArticle key={image.id} image={image} />
					))}
				</section>
			</div>
		</div>
	)
}

export default Images
