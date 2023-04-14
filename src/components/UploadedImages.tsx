import { FC } from 'react'
import { UploadedCat } from '../types/types'

type UploadedImagesProps = {
	uploadedImages: Array<UploadedCat>
	isLoading: Boolean
}

const UploadedImages: FC<UploadedImagesProps> = ({
	uploadedImages,
	isLoading,
}) => {
	if (isLoading) {
		return <div>Fetching images..</div>
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
