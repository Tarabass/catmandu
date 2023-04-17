import { FC } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import filterState from '../state/atoms/filterState'
import { FilterProps } from '../types/types'
import breedsSelector from '../state/selectors/breedsSelector'

const BreedsFilter: FC<FilterProps> = ({ field }) => {
	const [filter, setFilter] = useRecoilState(filterState)
	const breeds = useRecoilValue(breedsSelector)

	const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setFilter({ ...filter, page: 0, [field]: event.target.value })
	}

	return (
		<select
			id={field}
			name={field}
			value={filter['breed_ids']}
			onChange={onChange}
		>
			<option defaultValue={0} value={''}>
				Select a breed
			</option>
			{breeds.map((breed) => (
				<option key={breed.id} value={breed.id}>
					{breed.name}
				</option>
			))}
		</select>
	)
}

export default BreedsFilter
