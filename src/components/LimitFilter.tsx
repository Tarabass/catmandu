import { FC } from 'react'
import { useRecoilState } from 'recoil'
import filterState from '../state/atoms/filterState'
import { FilterProps } from '../types/types'

const LimitFilter: FC<FilterProps> = ({ field }) => {
	const [filter, setFilter] = useRecoilState(filterState)
	const limitArray = [5, 10, 25]

	const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setFilter({
			...filter,
			pagination: { ...filter.pagination, [field]: event.target.value },
		})
	}

	return (
		<div>
			<select
				id={field}
				name={field}
				value={filter.pagination['limit']}
				onChange={onChange}
			>
				{limitArray.map((limit) => (
					<option key={limit} value={limit} selected={limit === 10}>
						{limit}
					</option>
				))}
			</select>
		</div>
	)
}

export default LimitFilter
