import { useSetRecoilState, useRecoilValue } from 'recoil'
import starredCatsSelector from '../state/selectors/starredCatsSelector'
import { StarredCat } from '../types/types'
import axios, { AxiosResponse } from 'axios'

const useSetCatStarred: Function = () => {
	const setStarredCats = useSetRecoilState(starredCatsSelector)
	// TODO: We should use a recoil callback here to get values without subscribing to the component
	const starredCats = useRecoilValue(starredCatsSelector)

	const updateCat = async (catId: String, isStarred: Boolean) => {
		const url = `${process.env.REACT_APP_API_ENDPOINT}/favourites`
		const apiKey = process.env.REACT_APP_API_KEY
		const subId = process.env.REACT_APP_SUB_ID
		let resp: AxiosResponse<any, any> = {} as AxiosResponse<any, any>

		try {
			if (!isStarred) {
				// Add cat to favourites
				const response = await axios.post(
					url,
					{
						image_id: catId,
						sub_id: subId,
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
								image_id: catId,
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

								resp = res
							}
						})
				}
			} else {
				const starredCat: StarredCat | undefined = starredCats.find(
					(starredCat) => starredCat.image_id === catId
				)

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

								resp = res
							}
						})
			}

			return resp
		} catch (error) {
			// Handle errors
			throw error
		}
	}

	return updateCat
}

export default useSetCatStarred
