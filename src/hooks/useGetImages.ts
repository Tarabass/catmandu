import { useState, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import axios, { AxiosError, isAxiosError } from 'axios'
import filterState from '../state/atoms/filterState'
import { Image } from '../types/types'

// limit	1-100	Number of images to return between	1
// page	0-n	The page number to use when Paginating through the images	0
// order	ASC/DESC/RAND	The Order to return the images in by their upload date. RAND = random	RAND
// has_breeds	1 or 0	Only return images that have breed information	0
// breed_ids	Comma delimited string	The IDs of the breeds to filter the images. e.g. ?breed_ids=beng,abys	none
// category_ids	Comma delimited string	The IDs of the categories to filter the images. e.g. ?breed_ids=1,5,14	none
// sub_id

// TODO: Fix types and make typescript happy
const useGetImages: Function = () => {
	const [images, setImages] = useState(Array<Image>)
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(true)
	const filter = useRecoilValue(filterState)

	// Because useEffect is depend on filter every time filter is mutated the data will be fetched
	useEffect(() => {
		const fetchData = async () => {
			const url = `${process.env.REACT_APP_API_ENDPOINT}/images/search`
			const apiKey = process.env.REACT_APP_API_KEY

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
							has_breeds: true,
							breed_ids: filter.breed_ids || null,
						},
					})
					.then((res) => {
						setImages(res.data || [])

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

	return [images, error, isLoading]
}

export default useGetImages
