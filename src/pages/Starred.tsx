import { ComponentType } from 'react'
import { useRecoilValue } from 'recoil'
import starredCatsState from '../state/selectors/starredCatsState'

const Starred: ComponentType = () => {
	const starredCats = useRecoilValue(starredCatsState)
	console.log(starredCats);
	

	return <div>Starred</div>
}

export default Starred
