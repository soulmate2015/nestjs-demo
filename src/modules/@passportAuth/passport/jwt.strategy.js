import * as passport from 'passport';
import { Strategy } from 'passport-jwt';
import { Component, Dependencies } from '@nestjs/common';

@Component()
@Dependencies('PassportAuthService', 'Config')
export class JwtStrategy extends Strategy {
  constructor(authService, config) {

    super(
      {
        jwtFromRequest: (req) => {
          let token = null;
          if (req && req.cookies) {
            token = req.cookies['jwt'];
          }
          return token;
        },
        passReqToCallback: true,
        secretOrKey: config.tokenSshKeys,
      },
      async (req, payload, next) => {
        const ret = await this.verify(req, payload, next);
        return ret;
      }
    );
    this.authService = authService;
    passport.use(this);
  }

  async verify(req, payload, done) {
    const isValid = await this.authService.validateUser(payload);
    if (!isValid) {
      return done('Unauthorized', false);
    }
    done(null, payload);
  }
}