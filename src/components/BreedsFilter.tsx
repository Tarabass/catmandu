import { FC } from 'react'
import { useRecoilState } from 'recoil'
import filterState from '../state/atoms/filterState'
import useGetBreeds from '../hooks/useGetBreeds'
import { FilterProps } from '../types/types'

const BreedsFilter: FC<FilterProps> = ({ field }) => {
	const [filter, setFilter] = useRecoilState(filterState)
	const { breeds } = useGetBreeds()

	const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setFilter({ ...filter, page: 0, [field]: event.target.value })
	}

	return (
		<div>
			<label htmlFor={field}>{field.toUpperCase()}: </label>
			<select
				id={field}
				name={field}
				value={filter['breed_ids']}
				onChange={onChange}
			>
				<option defaultValue={0} value={''}>
					Select a breed
				</option>
				{breeds.map((option) => (
					<option key={option.id} value={option.id}>
						{option.name}
					</option>
				))}
			</select>
		</div>
	)
}

export default BreedsFilter
