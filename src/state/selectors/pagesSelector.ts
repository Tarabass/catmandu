import { selector } from 'recoil'
import filterState from '../atoms/filterState'

const pagesSelector = selector<Array<Number>>({
	key: 'pagesSelector',
    //@ts-ignore
	get: ({ get }) => {
		const totalCount = localStorage.getItem('count')
		const filter = get(filterState)
		const totalPages = Math.ceil(
			(totalCount ? +totalCount : 0) / filter.limit
		)
		const pages = []

		for (let i = 0; i < totalPages; i++)
			pages.push(i)

		return pages
	},
})

export default pagesSelector
