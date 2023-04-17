import axios from 'axios'
import { selector } from 'recoil'
import { Breed } from '../../types/types'

const breedsSelector = selector<Array<Breed>>({
	key: 'breedsSelector',
	get: async () => {
		const res = await axios.get(
			`${process.env.REACT_APP_API_ENDPOINT}/breeds`,
			{
				headers: {
					'Content-Type': 'application/json',
					'x-api-key': process.env.REACT_APP_API_KEY,
				},
			}
		)

		return res.data || []
	},
})

export default breedsSelector
