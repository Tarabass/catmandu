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