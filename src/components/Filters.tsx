import { FC, Suspense } from 'react'
import BreedsFilter from './BreedsFilter'
import LimitFilter from './LimitFilter'
import PageFilter from './PageFilter'
import OrderFilter from './OrderFilter'

const Filters: FC = () => {
	return (
		<div className="filters">
			<div>
				<Suspense fallback={'Loading..'}>
					<BreedsFilter field="breed_ids" />
				</Suspense>
			</div>
			<OrderFilter field="order" />
			<LimitFilter field="limit" />
			<div>
				<Suspense fallback={'Loading..'}>
					<PageFilter field="page" />
				</Suspense>
			</div>
		</div>
	)
}

export default Filters
