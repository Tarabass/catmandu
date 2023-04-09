import { useEffect } from 'react'
import useGetUploadedImages from '../hooks/useGetUploadedImages'
import ImageUpload from '../components/ImageUpload'
import UploadedImages from '../components/UploadedImages'
// import Filters from '../components/Filters'

const Upload = () => {
	// TODO: Make typescript happy
	// @ts-ignore
	const [{ uploadedImages, loading }, refetch] = useGetUploadedImages()

	useEffect(() => {
		// TODO: Make typescript happy
		// @ts-ignore
		refetch()
	}, [refetch])

	return (
		<>
			{
				// TODO: Make typescript happy
				// @ts-ignore
				<ImageUpload onUploadSuccess={refetch} />
			}
			{
				// TODO: Make typescript happy
				// @ts-ignore
				<UploadedImages images={uploadedImages} isLoading={loading} />
			}
		</>
	)
}

export default Upload
