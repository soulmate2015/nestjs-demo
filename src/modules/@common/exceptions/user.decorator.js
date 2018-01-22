import { createRouteParamDecorator, HttpException } from '@nestjs/common';

export const User = createRouteParamDecorator((data, req) => {
  if (!req.user) {
    throw new HttpException('Decode userInfo from token error.', 401);
  }
  return req.user;
});