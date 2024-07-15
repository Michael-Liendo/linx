import type { IUserForRegister } from '@linx/shared';
import fetch from '../utils/fetch';

export default class Auth {
  static async register(data: IUserForRegister) {
    try {
      const request = await fetch('/auth/register', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      const response = await request.json();

      return response;
    } catch (error) {
      console.error(error);
    }
  }
}
