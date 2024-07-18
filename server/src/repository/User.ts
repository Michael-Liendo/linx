import type { IUser, IUserForRegister } from '@linx/shared';
import database from './database';

export class User {
  /**
   *  getUserByEmail - get a user with the email
   * @param id string
   * @returns string IUser
   */
  static async getUserByEmail(email: string): Promise<IUser | null> {
    const user = await database('users').where({ email }).first();
    return user;
  }

  /**
   *  getUserByID - get a user with the ID
   * @param id string
   * @returns string IUser
   */
  static async getUserByID(id: string): Promise<IUser | null> {
    const user = await database('users').where({ id }).first();

    return user;
  }

  /**
   *  createUser - creates a user and returns the id
   * @param user IUserForRegister
   * @returns string id
   */
  static async createUser(user: IUserForRegister): Promise<string> {
    const [id] = await database('users').insert(user).returning('id');
    return id;
  }
}
