import { FC } from 'react'
import { useRecoilState } from 'recoil'
import filterState from '../state/atoms/filterState'
import { FilterProps } from '../types/types'

const LimitFilter: FC<FilterProps> = ({ field }) => {
	const [filter, setFilter] = useRecoilState(filterState)

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		// TODO: Set page given on current limit settings
		setFilter({
			...filter,
			pagination: { ...filter.pagination, [field]: event.target.value },
		})
	}

	return (
		<div>
			<label htmlFor={field}>{field.toUpperCase()}: </label>
			<input
				id={field}
				name={field}
				type="number"
				min="1"
				max="10"
				value={filter.pagination['limit']}
				onChange={onChange}
			/>
		</div>
	)
}

export default LimitFilter
