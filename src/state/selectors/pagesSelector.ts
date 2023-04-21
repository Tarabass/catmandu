import { selector } from 'recoil'
import searchState from '../atoms/searchState'

const pagesSelector = selector<Array<number>>({
	key: 'pagesSelector',
	get: ({ get }) => {
		const searchResult = get(searchState)
		const totalCount = searchResult.pagination.count
		const totalPages = Math.ceil(
			(totalCount ? +totalCount : 0) / searchResult.pagination.limit
		)
		const pages = new Array<number>()

		for (let i = 0; i < totalPages; i++) pages.push(i)

		return pages
	},
})

export default pagesSelector
