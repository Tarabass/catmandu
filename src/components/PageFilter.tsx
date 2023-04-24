import { FC, Suspense } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import filterState from '../state/atoms/filterState'
import { FilterProps } from '../types/types'
import pagesSelector from '../state/selectors/pagesSelector'

const PageFilter: FC<FilterProps> = ({ field }) => {
	const [filter, setFilter] = useRecoilState(filterState)
	const pages = useRecoilValue(pagesSelector)

	const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setFilter({
			...filter,
			pagination: { ...filter.pagination, [field]: event.target.value },
		})
	}

	return (
		<select
			id={field}
			name={field}
			value={filter.pagination.page}
			onChange={onChange}
		>
			{pages.map((page) => (
				<option key={page} value={page}>
					{page + 1}
				</option>
			))}
		</select>
	)
}

export default PageFilter
