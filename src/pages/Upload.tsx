import { useEffect } from 'react'
import useGetUploadedImages from '../hooks/useGetUploadedImages'
import ImageUpload from '../components/ImageUpload'
import UploadedImages from '../components/UploadedImages'

const Upload = () => {
	const [{ uploadedImages, loading }, refetch] = useGetUploadedImages()

	useEffect(() => {
		refetch()
	}, [refetch])

	return (
		<>
			<ImageUpload onUploadSuccess={refetch} />
			<UploadedImages
				uploadedImages={uploadedImages}
				isLoading={loading}
			/>
		</>
	)
}

export default Upload
