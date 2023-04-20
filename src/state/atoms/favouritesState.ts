import { atom } from 'recoil'
import { Favourite } from '../../types/types'
import favouritesSelector from '../selectors/favouritesSelector'

const favouritesState = atom<Array<Favourite>>({
	key: 'favouritesState',
	default: favouritesSelector,
})

export default favouritesState
