import { Component, HttpException, Dependencies } from '@nestjs/common';

@Component()
@Dependencies('PassportAuthService')
export class DemoService {
  constructor(authService) {
    this.arr = ['default'];
    this.authService = authService;
  }

  create(item) {
    this.arr.push(item);
    return item;
  }

  findAll() {
    return this.arr;
  }

  findOne(index) {
    return this.arr[index];
  }

  noFound(user) {
    if (!user) {
      throw new HttpException('Demo no found', 404);
    }
    return Promise.resolve(user);
  }

  async login(userInfo) {
    const token = await this.authService.createToken(userInfo);
    return token;
  }
}