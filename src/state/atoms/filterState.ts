import { atom } from 'recoil'
import { Filter } from '../../types/types'

const filterState = atom<Filter>({
	key: 'filterState',
	default: {
		order: 'ASC',
		breed_ids: '',
		pagination: { count: 0, limit: 10, page: 0 },
	},
})

export default filterState
