import { useSetRecoilState, useRecoilValue } from 'recoil'
import favouritesSelector from '../state/selectors/favouritesSelector'
import { Favourite } from '../types/types'
import axios, { AxiosResponse } from 'axios'

const useSetImageFavourite: Function = () => {
	const setFavourites = useSetRecoilState(favouritesSelector)
	// TODO: We should use a recoil callback here to get values without subscribing to the component
	const favourites = useRecoilValue(favouritesSelector)

	const updateImage = async (imageId: String, isFavourite: Boolean) => {
		const url = `${process.env.REACT_APP_API_ENDPOINT}/favourites`
		const apiKey = process.env.REACT_APP_API_KEY
		const subId = process.env.REACT_APP_SUB_ID
		let resp: AxiosResponse<any, any> = {} as AxiosResponse<any, any>

		try {
			if (!isFavourite) {
				// Add image to favourites
				const response = await axios.post(
					url,
					{
						image_id: imageId,
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
								image_id: imageId,
							},
						})
						.then((res) => {
							if (
								res &&
								res.status === 200 &&
								res.statusText === 'OK'
							) {
								setFavourites((current) => [
									...current,
									res.data[0],
								])

								resp = res
							}
						})
				}
			} else {
				const favourite: Favourite | undefined =
					favourites.find(
						(favourite) => favourite.image_id === imageId
					)

				// Remove image from favourites
				if (favourite)
					await axios
						.delete(`${url}/${favourite.id}`, {
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
								setFavourites(() =>
									favourites.filter(
										(image) =>
											image.id !== favourite.id
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

	return updateImage
}

export default useSetImageFavourite
