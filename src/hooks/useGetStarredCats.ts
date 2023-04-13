import { useState, useEffect } from 'react'
import starredCatsState from './../state/atoms/starredCatsState'
import { useRecoilState } from 'recoil'
import axios, { AxiosError, isAxiosError } from 'axios'
import { StarredCat } from '../types/types'

const useGetStarredCats: Function = () => {
	const [starredCats, setStarredCats] = useState(Array<StarredCat>)
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(true)
	const [starredCatsFromState, setStarredCatsState] =
		useRecoilState(starredCatsState)

	useEffect(() => {
		// If state contains already starred cats don't refetch them but use state instead
		// TODO: Isn't this what a selector would provide for us out-of-the-box?
		if (starredCatsFromState.length) {
			setIsLoading(false)
			setStarredCats(starredCatsFromState)
			return
		}

		const fetchData = async () => {
			const url = `${process.env.REACT_APP_API_ENDPOINT}/favourites`
			const apiKey = process.env.REACT_APP_API_KEY
			const subId = process.env.REACT_APP_SUB_ID

			try {
				await axios
					.get(url, {
						headers: {
							'Content-Type': 'application/json',
							'x-api-key': apiKey,
						},
						params: {
							sub_id: subId,
						},
					})
					.then((res) => {
						setStarredCatsState(res.data || [])
						setStarredCats(res.data || [])
					})
					.catch((err: Error | AxiosError) => {
						setError(
							isAxiosError(err)
								? err.response?.data.error
								: 'Sorry, something went wrong'
						)
					})
					.finally(() => {
						setIsLoading(false)
					})
			} catch (error) {
				// Handle errors
				throw error
			}
		}

		fetchData()
	}, [])

	return [starredCats, error, isLoading]
}

export default useGetStarredCats
