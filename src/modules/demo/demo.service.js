import { Component, HttpException } from '@nestjs/common';

@Component()
export class DemoService {
  constructor() {
    this.arr = ['default'];
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
}