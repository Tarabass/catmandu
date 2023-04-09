import { useState } from 'react'
import axios from 'axios'

const useGetStarredCats = () => {
	const [cats, setCats] = useState()

	const fetchData = async () => {
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_API_ENDPOINT}/favourites`,
				{
					headers: {
						'Content-Type': 'application/json',
						'x-api-key': process.env.REACT_APP_API_KEY,
					},
					params: {
						limit: 10,
						sub_id: process.env.REACT_APP_SUB_ID,
					},
				}
			)
			
			setCats(res.data || [])
		} catch (error) {
			// Handle errors
			throw error
		}
	}

	// useEffect(() => {
		fetchData()
	// 	//@ts-ignore
	// 	setStarredCats(cats)
	// }, [starredCatsState])

	return { cats }
}

export default useGetStarredCats
