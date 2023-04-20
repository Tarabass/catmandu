import { FC, Suspense } from 'react'
import BreedsFilter from './BreedsFilter'
import LimitFilter from './LimitFilter'
import PageFilter from './PageFilter'
import OrderFilter from './OrderFilter'
import Loader from './Loader'

const Filters: FC = () => {
	return (
		<div className="filters">
			<div>
				<Suspense fallback={<Loader />}>
					<BreedsFilter field="breed_ids" />
				</Suspense>
			</div>
			<OrderFilter field="order" />
			<LimitFilter field="limit" />
			<PageFilter field="page" />
		</div>
	)
}

export default Filters
