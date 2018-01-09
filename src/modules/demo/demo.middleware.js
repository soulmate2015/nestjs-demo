import { Middleware } from '@nestjs/common';

@Middleware()
export class DemoMiddleware {
  resolve(...args) {
    return (req, res, next) => {
      console.log('Request...');
      next();
    };
  }
}

export const demoMiddleware = (req, res, next) => {
  console.log(`Request... - ${req.url}`);
  next();
};
