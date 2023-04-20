import { atom } from 'recoil'
import { Image } from '../../types/types'
import imagesSelectorFamily from '../selectors/imagesSelector'

const imagesState = atom<Array<Image>>({
	key: 'imageState',
	default: imagesSelectorFamily,
})

export default imagesState
