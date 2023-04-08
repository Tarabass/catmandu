import { useEffect, useState } from 'react'

const useGetCount: Function = () => {
	const [count, setCount] = useState(0)

	useEffect(() => {
		function setCountEvent() {
			const countFromLocalStorage = localStorage.getItem('count')

			if (countFromLocalStorage) {
				setCount(+countFromLocalStorage)
			}
		}

		window.addEventListener('storage', setCountEvent)

		// Cleanup function
		return () => {
			window.removeEventListener('storage', setCountEvent)
		}
	}, [])

	return { count }
}

export default useGetCount
