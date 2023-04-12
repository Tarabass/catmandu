import { FC, useState } from 'react'
import { Cat } from '../types/types'
import useSetCatStarred from '../hooks/useSetCatStarred'

type CatArticleProps = {
	cat: Cat
	isStarred: Boolean
}

const CatArticle: FC<CatArticleProps> = ({ cat, isStarred }) => {
	const [isStarredCat, setIsStarredCat] = useState(isStarred)
	const setCatStarred = useSetCatStarred()

	const onClick = () => {
		setIsStarredCat(!isStarredCat)

		setCatStarred(cat.id, isStarredCat)
			.then((res: Object) => console.log('res', res))
			.catch((err: String) => {
				console.log('err', err)
				setIsStarredCat(isStarredCat)
			})
	}

	return (
		<article className="card__wrap--inner" key={cat.id}>
			<div className="card">
				<img
					alt=""
					src={cat.url}
					width={cat.width / 2}
					height={cat.height / 2}
				/>
				<div className="card__item flexible"></div>
				<div className="card__footer">
					<span
						className={
							isStarredCat ? 'is-starred' : 'is-not-starred'
						}
						onClick={onClick}
					></span>
				</div>
			</div>
		</article>
	)
}

export default CatArticle
