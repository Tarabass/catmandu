import { FC } from 'react'
import { StarredCat } from '../types/types'
import useGetStarredCats from '../hooks/useGetStarredCats'

const Starred: FC = () => {	
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
					{starredCats.map((starredCat: StarredCat) => (
						<article
							className="card__wrap--inner"
							key={starredCat.id}
						>
							<div className="card">
								<img
									alt=""
									src={starredCat.image.url}
									width="10%"
									height="10%"
								/>
							</div>
						</article>
					))}
				</section>
			</div>
		</div>
	)
}

export default Starred
