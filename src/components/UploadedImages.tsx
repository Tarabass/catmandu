import { FC } from 'react'
import { UploadedImage } from '../types/types'
import Loader from './Loader'

type UploadedImagesProps = {
	uploadedImages: Array<UploadedImage>
	isLoading: Boolean
}

const UploadedImages: FC<UploadedImagesProps> = ({
	uploadedImages,
	isLoading,
}) => {
	if (isLoading) {
		return <Loader />
	}

	if (!isLoading) {
		return (
			<div>
				{uploadedImages.map((image) => (
					<img
						key={image.id}
						alt=""
						width="10%"
						height="10%"
						src={image.url}
					/>
				))}
			</div>
		)
	}

	return null
}

export default UploadedImages
