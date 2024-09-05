import type { IUser } from '@linx/shared';
import Repository from '../repository';

export default class User {
  static async getByID(userID: string): Promise<IUser | undefined> {
    const user = await Repository.user.getUserByID(userID);

    return user;
  }
}
