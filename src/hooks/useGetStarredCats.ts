import { useState, useEffect } from 'react'
import starredCatsState from './../state/atoms/starredCatsState'
import { useSetRecoilState } from 'recoil'
import axios from 'axios'

const useGetStarredCats = () => {
	const [cats, setCats] = useState()
	const setStarredCats = useSetRecoilState(starredCatsState)

	useEffect(() => {
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
				
				setStarredCats(res.data || [])
				setCats(res.data || [])
			} catch (error) {
				// Handle errors
				throw error
			}
		}

		fetchData()
	}, [setStarredCats])

	return { cats }
}

export default useGetStarredCats
