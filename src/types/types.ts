export type Filter = {
	limit: number
	page: number
	order: string
	breed_ids: string
}

export type FilterProps = {
	field: string
}

export enum Order {
	ASC = 'ASC',
	DESC = 'DESC',
	RAND = 'RAND',
}

// From Cat API
export type Breed = {
	id: string
	name: string
	reference_image_id: string
	// image: {
	// 	id: string
	// 	url: string
	// 	width: number
	// 	height: number
	// }
	image: Cat
}

export type Category = {
	id: number
	name: string
}

export type Vote = {
	id: number
	user_id: string
	image_id: string
	sub_id: string
	created_at: string
	value: number
	country_code: string
	// image: {
	// 	id: string
	// 	url: string
	// }
	image: Cat
}

export type StarredCat = {
	id: number
	user_id: string
	image_id: string
	sub_id: string
	created_at: string
	// image: {
	// 	id: string
	// 	url: string
	// }
	image: Cat
}

export type Cat = {
	id: string
	url: string
	width: number
	height: number
	breeds: Array<Breed>
}

export type UploadedCat = Cat & {
	breed_ids: string
	created_at: string
	original_filename: string
	sub_id: string
	vote: Vote
	favourite: StarredCat
}
