import { UserSchema } from '@linx/shared';
import { z } from 'zod';
import fetch from '../utils/fetch';

export default class User {
  static async me() {
    try {
      const request = await fetch('/user/me');

      const response = await request.json();

      return UserSchema.parse(response.data.user);
    } catch (error) {
      console.error('UserServices', error);
      throw error;
    }
  }
}
