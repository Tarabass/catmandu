import { FC } from 'react'
import useGetCats from '../hooks/useGetCats'
import { Cat } from '../types/types'
import CatArticle from './CatArticle'

const Cats: FC = () => {
	const [cats, error, isLoading] = useGetCats()

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
					{cats.map((cat: Cat) => (
						<CatArticle key={cat.id} cat={cat} />
					))}
				</section>
			</div>
		</div>
	)
}

export default Cats
