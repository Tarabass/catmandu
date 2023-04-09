import { selector } from 'recoil'
import axios from 'axios'

/**
 * Be aware that Recoil will cache your selector values, so asynchronous 
 * selectors are best utilized when the data is not meant to change 
 * throughout the life-cycle of an application. Fetching a user's avatar 
 * would be a good use case.
 * 
 * TODO: Should we move this to a react use instead of using a state selector??
 * 
 * We don't want it to be cached but update the starred cats everytime the 
 * page is loaded
 */
const starredCatsState = selector({
	key: 'starredCatsState',
	get: async () => {
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_API_ENDPOINT}/favourites`,
				{
					headers: {
						'Content-Type': 'application/json',
						'x-api-key': process.env.REACT_APP_API_KEY,
					},
					params: {
						limit: 10,
						sub_id: process.env.REACT_APP_SUB_ID,
					},
				}
			)

			return res.data || []
		} catch (error) {
			// Handle errors
			throw error
		}
	},
})

export default starredCatsState
