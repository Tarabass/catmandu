import { FC } from 'react'
import { useRecoilState } from 'recoil'
import filterState from '../state/atoms/filterState'
import { FilterProps, Order } from '../types/types'

const OrderFilter: FC<FilterProps> = ({ field }) => {
	const [filter, setFilter] = useRecoilState(filterState)

	const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setFilter({
			...filter,
			[field]: filter.order === Order.ASC ? Order.DESC : Order.ASC,
		})
	}

	return (
		<div>
			<button onClick={onClick} style={{ cursor: 'pointer' }}>
				{filter.order === Order.ASC ? '\u2193' : '\u2191'}
			</button>
		</div>
	)
}

export default OrderFilter
