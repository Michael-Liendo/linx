import jwt, { type JwtPayload } from 'jsonwebtoken';
import { UnauthorizedError } from './errorHandler.js';

export class Jwt {
  static createToken(payload: object): Promise<string> {
    return new Promise((resolve, reject) => {
      jwt.sign(
        payload,
        process.env.JWT_PRIVATE_KEY as string,
        { expiresIn: '1h' },
        (err, token) => {
          if (err) {
            reject(err);
          } else {
            resolve(token as string);
          }
        },
      );
    });
  }

  static verifyToken(token: string): JwtPayload {
    try {
      const userToken = jwt.verify(
        token,
        process.env.JWT_PRIVATE_KEY as string,
      );
      return userToken as JwtPayload;
    } catch (_error) {
      throw new UnauthorizedError('INVALID_TOKEN');
    }
  }
}
