import { FC, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import ImageArticle from './ImageArticle'
import { Image } from '../types/types'
import searchState from '../state/atoms/searchState'

const Images: FC = () => {
	const searchResult = useRecoilValue(searchState)

	useEffect(() => {
		console.log('searchResult updated, place to update other atoms?')
	}, [searchResult])

	return (
		<div className="page">
			<div className="container">
				<section className="card__wrap--outer">
					{searchResult.images.map((image: Image) => (
						<ImageArticle key={image.id} image={image} />
					))}
				</section>
			</div>
		</div>
	)
}

export default Images
