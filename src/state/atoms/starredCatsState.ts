import { atom } from 'recoil'
import { StarredCat } from '../../types/types'

type StarredCats = Array<StarredCat>

const starredCatsState = atom<StarredCats>({
	key: 'starredCatsState',
	default: new Array<StarredCat>(),
})

export default starredCatsState
