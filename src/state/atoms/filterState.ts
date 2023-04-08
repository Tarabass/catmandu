import { atom } from 'recoil'
import { Filter } from '../../types/types'

const filterState = atom<Filter>({
	key: 'filter',
	default: { limit: 10, page: 0, order: 'ASC', breed_ids: '' },
})

export default filterState