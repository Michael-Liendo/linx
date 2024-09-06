import type { IUser, IUserForRegister } from '@linx/shared';
import database from './database';

const Users = database<IUser>('users');

export class User {
	/**
	 *  getUserByEmail - get a user with the email
	 * @param id string
	 * @returns string IUser
	 */
	static async getUserByEmail(email: string): Promise<IUser | undefined> {
		const user = await Users.where({ email }).first();
		return user;
	}

	/**
	 *  getUserByID - get a user with the ID
	 * @param id string
	 * @returns string IUser
	 */
	static async getUserByID(id: string): Promise<IUser | undefined> {
		const user = await Users.where({ id }).first();

		return user;
	}

	/**
	 *  createUser - creates a user and returns the id
	 * @param user IUserForRegister
	 * @returns string id
	 */
	static async createUser(user: IUserForRegister): Promise<string> {
		const [id] = await Users.insert(user).select('id');

		return id?.id;
	}
}
