import { HttpException } from '@nestjs/common';

export class DemoException extends HttpException {
  constructor() {
    super('Demo exception message', 999);
  }
}