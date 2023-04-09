import { FC } from 'react'
import { useRecoilValue } from 'recoil'
import starredCatsSelector from '../state/selectors/starredCatsSelector'
import { StarredCat } from '../types/types'

const Starred: FC = () => {	
	const starredCats = useRecoilValue(starredCatsSelector)

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
