import { FC, Suspense } from 'react'
import BreedsFilter from './BreedsFilter'
import LimitFilter from './LimitFilter'
import PageFilter from './PageFilter'
import OrderFilter from './OrderFilter'

const Filters: FC = () => {
	return (
		<div className="filters">
			<Suspense fallback={<div>Loading...</div>}>
				<BreedsFilter field="breed_ids" />
			</Suspense>
			<OrderFilter field="order" />
			<LimitFilter field="limit" />
			<PageFilter field="page" />
		</div>
	)
}

export default Filters
