import { selector } from 'recoil'
import axios from 'axios'
import { Favourite } from '../../types/types'

/**
 * Be aware that Recoil will cache your selector values, so asynchronous
 * selectors are best utilized when the data is not meant to change
 * throughout the life-cycle of an application. Fetching a user's avatar
 * would be a good use case.
 *
 * TODO: Should we move this to a react use instead of using a state selector??
 *
 * We don't want it to be cached but update the favourites everytime the
 * page is loaded
 */
const favouritesSelector = selector<Array<Favourite>>({
	key: 'favouritesSelector',
	get: async ({ get }) => {
		const limit = 25
		let page = 0
		let total = 0
		let data = new Array<Favourite>()

		while (page <= Math.round(total / limit)) {
			const url = `${process.env.REACT_APP_API_ENDPOINT}/favourites`
			const apiKey = process.env.REACT_APP_API_KEY
			const subId = process.env.REACT_APP_SUB_ID
			const response = await axios.get(`${url}`, {
				headers: {
					'Content-Type': 'application/json',
					'x-api-key': apiKey,
				},
				params: {
					sub_id: subId,
					limit: limit,
					page: page,
				},
			})

			data.push(...response.data)
			total = response.headers['pagination-count']
			page++
		}

		return data
	},
})

export default favouritesSelector
