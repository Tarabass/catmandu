import React, { FC } from 'react'
import useGetCats from '../hooks/useGetCats'
import { Cat, StarredCat } from '../types/types'
import CatArticle from './CatArticle'
import useGetStarredCats from '../hooks/useGetStarredCats'

const Cats: FC = () => {
	const [cats] = useGetCats()
	const [starredCats, error, isLoading] = useGetStarredCats()

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
						{cats.map((cat: Cat) => (
							<CatArticle key={cat.id} cat={cat} isStarred={starredCats.some(((starredCat: StarredCat) => starredCat.image_id === cat.id))} />
						))}
					</React.Suspense>
				</section>
			</div>
		</div>
	)
}

export default Cats
