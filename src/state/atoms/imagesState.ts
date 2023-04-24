import { atom } from 'recoil'
import { Image } from '../../types/types'
import imagesSelector from '../selectors/imagesSelector'

const imagesState = atom<Array<Image>>({
	key: 'imageState',
	default: imagesSelector,
})

export default imagesState
