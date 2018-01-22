import * as jwt from 'jsonwebtoken';
import { Component, Dependencies } from '@nestjs/common';

@Component()
@Dependencies('Config')
export class PassportAuthService {
  constructor(config) {
    this.config = config;
  }

  async createToken(userInfo) {
    const expiresIn = this.config.tokenExpiredTime;
    const secretOrKey = this.config.tokenSshKeys;
    const token = jwt.sign(userInfo, secretOrKey, { expiresIn });

    return {
      expires_in: expiresIn,
      access_token: token,
    };
  }

  async validateUser(signedUser) {
    console.log('进入校验');
    console.log(signedUser);

    // put some validation logic here
    // for example query user by id / email / username

    if (!signedUser) return false;
    return true;
  }
}