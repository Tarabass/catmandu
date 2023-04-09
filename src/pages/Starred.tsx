import { FC } from 'react'
import { useRecoilValue } from 'recoil'
import starredCatsState from '../state/selectors/starredCatsState'
import { StarredCat } from '../types/types'

const Starred: FC = () => {
	const starredCats = useRecoilValue(starredCatsState)

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
