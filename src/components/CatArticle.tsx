import { FC } from 'react'
import { Cat } from '../types/types'

type CatArticleProps = {
	cat: Cat
}

const CatArticle: FC<CatArticleProps> = ({ cat }) => {
	async function onClick() {
		alert('Not yet implemented')
		return

		// try {
		// 	await axios.post(
		// 		`${process.env.REACT_APP_API_ENDPOINT}/favourites`,
		// 		{
		// 			image_id: cat.id,
		// 			sub_id: process.env.REACT_APP_SUB_ID,
		// 		},
		// 		{
		// 			headers: {
		// 				'Content-Type': 'application/json',
		// 				'x-api-key': `${process.env.REACT_APP_API_KEY}`,
		// 			},
		// 		}
		// 	)
		// } catch (error) {
		// 	// Handle errors
		// 	throw error
		// }
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
					<a className="pull" href="#" onClick={onClick}>
						<small>Star</small>
					</a>
					{/* <a className="push" href="#">
						<small>Share</small>
					</a> */}
				</div>
			</div>
		</article>
	)
}

export default CatArticle
