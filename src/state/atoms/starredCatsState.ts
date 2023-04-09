import { atom } from 'recoil'
import { StarredCat } from '../../types/types'

type StarredCats= {
    cats: Array<StarredCat>
}

const starredCatsState = atom<StarredCats>({
	key: 'starredCatsState',
	default: { cats: [] },
})

export default starredCatsState
