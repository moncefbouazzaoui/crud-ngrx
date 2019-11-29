export interface User {
	id: number;
	name: string;
	email: string;
	email_verified_at?: any;
	created_at: string;
	updated_at: string;
}

export interface IUser {
	user: User;
}

export interface IUsers {
	users: User[];
}