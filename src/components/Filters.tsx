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
				<label htmlFor={'page'}>{'page'.toUpperCase()}: </label>
				<Suspense fallback={<select><option>0</option></select>}>
					<PageFilter field="page" />
				</Suspense>
			</div>
		</div>
	)
}

export default Filters
