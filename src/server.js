import * as config from 'config';
import * as path from 'path';
import * as pkg from '../package.json';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { ApplicationModule } from './modules/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import 'reflect-metadata';

import { loggerMiddleware } from './modules/@common/middlewares/logger.middleware';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';

const logger = new Logger('Server');

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);

  /* 通用中间件 */

  // body解析
  await app.use(bodyParser.json());
  await app.use(cookieParser());
  await app.use(loggerMiddleware);

  /* 全局配置 */

  // 设置模板引擎
  await app.set('views', path.join(__dirname, 'views'));
  await app.set('view engine', 'pug');
  
  /* 生成API文档 */

  if (process.env.NODE_ENV === 'dev') {
    const options = new DocumentBuilder()
      .setTitle('DEMO - API')
      .setDescription('DEMO')
      .setVersion(pkg.version)
      .setBasePath('')
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('/api-doc', app, document);
    logger.log(`Swagger api doc create on "http://localhost:${config.port}/api-doc"`);
  }

  await app.listen(config.port || 4000);
  logger.log(`Http server listend on "http://localhost:${config.port}"`);
}

bootstrap();
