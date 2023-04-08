import { FC } from 'react'
import useGetCats from '../hooks/useGetCats'
import { Cat } from '../types/types'

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
						<article className="card__wrap--inner" key={cat.id}>
							<div className="card">
								<img
									// key={cat.id}
									alt=""
									src={cat.url}
									width={cat.width / 2}
									height={cat.height / 2}
								/>
								{/* <div className="card__item">
                                    <h2>First Card Title</h2>
                                </div>
                                <div className="card__sub">
                                    <small>New York</small>
                                </div> */}
								<div className="card__item flexible">
									{/* <small>Vexillologist mustache heirloom plaid adaptogen subway tile. Biodiesel microdosing pinterest, cloud bread vice kickstarter pickled PBR&B. Prism palo santo craft beer cold-pressed, heirloom tofu snackwave fashion axe ramps iPhone.</small> */}
								</div>
								{/* <div className="card__item">
                                    <small>Reading Time: 4min</small>
                                </div> */}
								<div className="card__footer">
									<a className="pull" href="#">
										<small>Read more</small>
									</a>
									<a className="push" href="#">
										<small>Share</small>
									</a>
								</div>
							</div>
						</article>
					))}
				</section>
			</div>
		</div>
	)
}

export default Cats
