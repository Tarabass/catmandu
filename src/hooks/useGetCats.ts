import { useState, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import axios, { AxiosError, isAxiosError } from 'axios'
import filterState from '../state/atoms/filterState'

// limit	1-100	Number of images to return between	1
// page	0-n	The page number to use when Paginating through the images	0
// order	ASC/DESC/RAND	The Order to return the images in by their upload date. RAND = random	RAND
// has_breeds	1 or 0	Only return images that have breed information	0
// breed_ids	Comma delimited string	The IDs of the breeds to filter the images. e.g. ?breed_ids=beng,abys	none
// category_ids	Comma delimited string	The IDs of the categories to filter the images. e.g. ?breed_ids=1,5,14	none
// sub_id

const useGetCats: Function = () => {
	const [cats, setCats] = useState(Array<object>)
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(true)
	const filter = useRecoilValue(filterState)

	// Because useEffect is depend on filter every time filter is mutated the data will be fetched
	useEffect(() => {
		const fetchData = async () => {
			const url = `${process.env.REACT_APP_API_ENDPOINT}/images/search`
			const apiKey = process.env.REACT_APP_API_KEY
			// const subId = `${process.env.REACT_APP_SUB_ID}`

			try {
				await axios
					.get(`${url}`, {
						headers: {
							'Content-Type': 'application/json',
							'x-api-key': apiKey,
						},
						params: {
							limit: filter.limit,
							page: filter.page,
							order: filter.order,
							has_breeds: true, //queryParameters.hasBreeds,
							breed_ids: filter.breed_ids || null,
							// sub_id: queryParameters.subId
						},
						// params: {
						// 	limit: queryParameters.limit,
						// 	page: queryParameters.page - 1,
						// 	order: queryParameters.order,
						// 	has_breeds: true, //queryParameters.hasBreeds,
						// 	breed_ids: queryParameters.breedIds?.toString(),
						// 	// sub_id: queryParameters.subId
						// },
					})
					.then((res) => {
						setCats(res.data || [])

						localStorage.setItem(
							'count',
							res.headers['pagination-count']
						)
						window.dispatchEvent(new Event('storage'))
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
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()
	}, [filter])

	return [cats, error, isLoading]
}

export default useGetCats
