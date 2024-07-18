import type { IUser, IUserForRegister } from '@linx/shared';
import fetch from '../utils/fetch';

export default class User {
  static async me() {
    try {
      const request = await fetch('/user/me');

      const response = await request.json();

      return response as IUser;
    } catch (error) {
      console.error('UserServices', error);
      throw error;
    }
  }
}
