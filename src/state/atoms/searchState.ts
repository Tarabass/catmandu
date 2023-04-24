import { atom } from 'recoil'
import { SearchResult } from '../../types/types'
import searchSelector from '../selectors/searchSelector'

const searchState = atom<SearchResult>({
	key: 'imageState',
	default: searchSelector,
})

export default searchState
