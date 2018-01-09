import * as config from 'config';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import 'reflect-metadata';

import { loggerMiddleware } from './modules/@common/middlewares/logger.middleware';
import * as bodyParser from 'body-parser';
// import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);

  /* 通用中间件 */

  // body解析
  await app.use(bodyParser.json());
  // await app.use(cookieParser());
  await app.use(loggerMiddleware);

  /* 全局配置 */

  // 设置请求前缀
  await app.setGlobalPrefix('api');
  
  await app.listen(config.port || 3000);
}

bootstrap();
