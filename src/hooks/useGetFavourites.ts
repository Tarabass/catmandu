import { useState, useEffect } from 'react'
import favouritesState from '../state/atoms/favouritesState'
import { useRecoilState } from 'recoil'
import axios, { AxiosError, isAxiosError } from 'axios'
import { Favourite } from '../types/types'

const useGetFavourites: Function = () => {
	const [favourites, setFavourites] = useState(Array<Favourite>)
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(true)
	const [favouritesFromState, setFavouritesState] =
		useRecoilState(favouritesState)

	useEffect(() => {
		// If state contains already favourites don't refetch them but use state instead
		// TODO: Isn't this what a selector would provide for us out-of-the-box?
		if (favouritesFromState.length) {
			setIsLoading(false)
			setFavourites(favouritesFromState)
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
						setFavouritesState(res.data || [])
						setFavourites(res.data || [])
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return [favourites, error, isLoading]
}

export default useGetFavourites
