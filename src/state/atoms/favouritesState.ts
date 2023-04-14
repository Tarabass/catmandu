import { atom } from 'recoil'
import { Favourite } from '../../types/types'

type Favourites = Array<Favourite>

const favouritesState = atom<Favourites>({
	key: 'favouritesState',
	default: new Array<Favourite>(),
})

export default favouritesState
