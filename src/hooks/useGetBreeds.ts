import { useEffect, useState } from 'react'
import { Breed } from '../types/types'
import axios from 'axios'

const useGetBreeds = () => {
	const [breeds, setBreeds] = useState(Array<Breed>)

	const fetchData = async () => {
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_API_ENDPOINT}/breeds`,
				{
					headers: {
						'Content-Type': 'application/json',
						'x-api-key': process.env.REACT_APP_API_KEY,
					},
				}
			)

			setBreeds(res.data || [])
		} catch (error) {
			// Handle errors
			throw error
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	return { breeds }
}

export default useGetBreeds
