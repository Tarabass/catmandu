import { FC } from 'react'

// TODO: Make typescript happy
// @ts-ignore
const UploadedImages: FC = ({ images, isLoading }) => {
	if (isLoading) {
		return <div>Fetching images..</div>
	}

	if (!isLoading) {
		return (
			<div>
				{
					// TODO: Make typescript happy
					// @ts-ignore
					images.map((image) => (
						<img
							key={image.id}
							alt=""
							width="10%"
							height="10%"
							src={image.url}
						/>
					))
				}
			</div>
		)
	}
}

export default UploadedImages
