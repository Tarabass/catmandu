import { FC } from 'react'
import BreedsFilter from './BreedsFilter'
import LimitFilter from './LimitFilter'
import PageFilter from './PageFilter'
import OrderFilter from './OrderFilter'

const Filters: FC = () => {
	return (
		<div className='filters'>
			<BreedsFilter field="breed_ids" />
			<OrderFilter field="order" />
			<LimitFilter field="limit" />
			<PageFilter field="page" />
		</div>
	)
}

export default Filters
