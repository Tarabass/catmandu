import React, { FC, useState } from 'react'
import axios from 'axios'

type ImageUploadProps = {
	onUploadSuccess:
		| (() => void)
		| (() => { uploadedImages: never[]; loading: boolean })
}

// TODO: Make typescript happy
// @ts-ignore
const ImageUpload: FC<ImageUploadProps> = ({ onUploadSuccess }) => {
	const [selectedFile, setSelectedFile] = useState<string | Blob>(new Blob())
	const [isSelected, setIsSelected] = useState(false)
	const [isUploading, setIsUploading] = useState(false)

	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		const files: FileList | null = event.target.files
		const file: File | null = files ? files[0] : null

		if (!file) return

		setSelectedFile(file)
		setIsSelected(true)
	}

	async function submit() {
		setIsUploading(true)
		const formData = new FormData()

		formData.append('file', selectedFile)
		formData.append('sub_id', `${process.env.REACT_APP_SUB_ID}`)

		try {
			await axios.post(
				`${process.env.REACT_APP_API_ENDPOINT}/images/upload`,
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
						'x-api-key': process.env.REACT_APP_API_KEY,
					},
					params: {
						sub_id: process.env.REACT_APP_SUB_ID,
					},
				}
			)

			onUploadSuccess()
		} catch (error) {
			// Handle errors
			throw error
		} finally {
			setIsUploading(false)
			setIsSelected(false)
		}
	}

	if (isUploading) {
		return <div>Is uploading..</div>
	}

	if (!isUploading) {
		return (
			<div>
				<label className="text-white">Select File :</label>
				<input
					type="file"
					name="upload_file"
					onChange={handleInputChange}
					accept="image/png, image/jpeg"
				/>
				<button disabled={!isSelected} type="submit" onClick={submit}>
					Save
				</button>
			</div>
		)
	}
}

export default ImageUpload
