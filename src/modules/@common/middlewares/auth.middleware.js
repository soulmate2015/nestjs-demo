import * as passport from 'passport';
import { Middleware, HttpException } from '@nestjs/common';

@Middleware()
export class AuthMiddleware {
  resolve(...args) {
    let message;
    let code;
    return async (req, res, next) => {
      const ret = await passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if (err) {
          next(
            new HttpException({
              message: err.message || err,
            }, 401)
          );
        }
        else if (typeof info !== 'undefined') {
          switch (info.message)
          {
          case 'No auth token':
          case 'invalid signature':
          case 'jwt malformed':
            message = 'You must provide a valid authenticated access token';
            break;
          case 'jwt expired':
            message = 'Your session has expired. Please log in again';
            break;
          }
          next(new HttpException(message, 401));
        }
        else {
          req.user = user;
          next();
        }
      })(req, res, next);

      return ret;
    };
  }
}
