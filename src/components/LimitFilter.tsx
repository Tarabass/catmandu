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
		<select id={field} name={field} onChange={onChange} defaultValue={10}>
			{limitArray.map((limit) => (
				<option key={limit} value={limit}>
					{limit}
				</option>
			))}
		</select>
	)
}

export default LimitFilter
