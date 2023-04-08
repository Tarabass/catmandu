import { FC } from 'react'
import { useRecoilState } from 'recoil'
import filterState from '../state/atoms/filterState'
import useGetCount from '../hooks/useGetCount'
import { FilterProps } from '../types/types'

const PageFilter: FC<FilterProps> = ({ field }) => {
	const [filter, setFilter] = useRecoilState(filterState)
	const { count } = useGetCount()
	const totalPages = Math.ceil(count / filter.limit)
	const options = []

	for (let i = 0; i < totalPages; i++) 
		options.push({ value: i, label: i + 1 })

	const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setFilter({ ...filter, [field]: event.target.value })
	}

	return (
		<div>
			<label htmlFor={field}>{field.toUpperCase()}: </label>
			<select
				id={field}
				name={field}
				value={filter.page}
				onChange={onChange}
			>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	)
}

export default PageFilter
