export interface ILink {
	id: string;
	url: string;
	shorter_name: string;
	user_id: string;
	created_at: Date;
	updated_at: Date;
}

export interface ILinkForCreate {
	url: string;
	shorter_name: string;
	user_id?: string;
}

export interface ILinkForUpdate {
	id: string;
	url: string;
	shorter_name: string;
}

export interface ILinkForUpdateDTO {
	url: string;
	shorter_name: string;
}

export interface ILinkForDelete {
	id: string;
}
