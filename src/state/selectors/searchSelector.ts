import { selector } from 'recoil'
import axios from 'axios'
import { SearchResult } from '../../types/types'
import filterState from '../atoms/filterState'

const searchSelector = selector<SearchResult>({
	key: 'searchSelector',
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
				limit: filter.pagination.limit,
				page: filter.pagination.page,
				order: filter.order,
				has_breeds: true,
				breed_ids: filter.breed_ids || null,
			},
		})

		return {
			pagination: {
				count: response.headers['pagination-count'],
				limit: response.headers['pagination-limit'],
				page: response.headers['pagination-page'],
			},
			images: response.data || [],
		}
	},
})

export default searchSelector
