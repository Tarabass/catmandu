import { FC, useState } from 'react'
import { useRecoilState } from 'recoil'
import axios from 'axios'
import { Cat, StarredCat } from '../types/types'
import starredCatsSelector from '../state/selectors/starredCatsSelector'

type CatArticleProps = {
	cat: Cat,
	isStarred: Boolean
}

const CatArticle: FC<CatArticleProps> = ({ cat, isStarred }) => {
	const [starredCats, setStarredCats] = useRecoilState(starredCatsSelector)
	const starredCat: StarredCat | undefined = starredCats.find(
		(starredCat) => starredCat.image_id === cat.id
	)
	const [isStarredCat, setIsStarredCat] = useState(isStarred)	

	async function onClick() {
		// TODO: Should we move this to the setter of the StarredCatsSelector??
		try {
			const url = `${process.env.REACT_APP_API_ENDPOINT}/favourites`
			const apiKey = process.env.REACT_APP_API_KEY
			const subId = process.env.REACT_APP_SUB_ID

			setIsStarredCat(!isStarredCat)

			if (!isStarredCat) {
				// Add cat to favourites
				const response = await axios.post(
					url,
					{
						image_id: cat.id,
						sub_id: process.env.REACT_APP_SUB_ID,
					},
					{
						headers: {
							'Content-Type': 'application/json',
							'x-api-key': apiKey,
						},
					}
				)

				// Get favourite and put in state
				if (
					response &&
					response.status === 200 &&
					response.statusText === 'OK'
				) {
					const newId = response.data && response.data.id

					await axios
						.get(url, {
							headers: {
								'Content-Type': 'application/json',
								'x-api-key': apiKey,
							},
							params: {
								favourite_id: newId,
								sub_id: subId,
								image_id: cat.id,
							},
						})
						.then((res) => {
							if (
								res &&
								res.status === 200 &&
								res.statusText === 'OK'
							) {
								setStarredCats((current) => [
									...current,
									res.data[0],
								])
							}
						})
				}
			} else {
				// Remove cat from favourites
				if (starredCat)
					await axios
						.delete(`${url}/${starredCat.id}`, {
							headers: {
								'Content-Type': 'application/json',
								'x-api-key': apiKey,
							},
						})
						.then((res) => {
							if (
								res &&
								res.status === 200 &&
								res.statusText === 'OK'
							) {
								setStarredCats(() =>
									starredCats.filter(
										(cat) => cat.id !== starredCat.id
									)
								)
							}
						})
			}
		} catch (error) {
			setIsStarredCat(isStarredCat)
			// Handle errors
			throw error
		}
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
					<span
						className={isStarredCat ? 'is-starred' : 'is-not-starred'}
						onClick={onClick}
					></span>
					{/* <a className="push" href="#">
						<small>Share</small>
					</a> */}
				</div>
			</div>
		</article>
	)
}

export default CatArticle
