import { selector } from 'recoil'
import axios from 'axios'
import filterState from '../atoms/filterState'
import { Image } from './../../types/types'

const imagesSelector = selector<Array<Image>>({
	key: 'imagesSelector',
	get: async ({ get }) => {
		const filter = get(filterState)
		const url = `${process.env.REACT_APP_API_ENDPOINT}/images/search`
		const apiKey = process.env.REACT_APP_API_KEY
		const response = await axios.get(`${url}`, {
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': apiKey,
			},
			params: {
				limit: filter.limit,
				page: filter.page,
				order: filter.order,
				has_breeds: true,
				breed_ids: filter.breed_ids || null,
			},
		})

		localStorage.setItem('count', response.headers['pagination-count'])
		window.dispatchEvent(new Event('storage'))

		return response.data || []
	},
})

export default imagesSelector
