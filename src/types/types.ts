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

export type Breed = {
	id: string
	name: string
}

export type Cat = {
	id: string
	url: string
	width: number
	height: number
}

export type StarredCat = {
	id: string
	user_id: string
	image_id: string
	sub_id: string
	created_at: string
	image: {
		id: string
		url: string
	}
}

export type UploadedCat = {
	breeds_ids: string
	breeds: Array<Object>
	created_at: string
	favourite: {
		id: string
	}
	height: number
	id: string
	original_filename: string
	sub_id: string
	url: string
	vote: {
		id: string
		value: number
	}
	width: number
}