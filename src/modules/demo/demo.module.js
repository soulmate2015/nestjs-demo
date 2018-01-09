import { Module, RequestMethod } from '@nestjs/common';
import { LoggerModule } from '../@logger/logger.module';

import { DemoController } from './demo.controller';
import { DemoService } from './demo.service';
import { demoMiddleware, DemoMiddleware } from './demo.middleware';

@Module({
  imports: [
    LoggerModule.forRoot('demo')
  ],
  controllers: [DemoController],
  components: [DemoService],
})
export class DemoModule {
  configure(consumer) {
    /* 给具体路由，具体请求方法的功能中间件（方法） */
    consumer.apply(demoMiddleware).forRoutes(
      { path: '/demo/noFound', method: RequestMethod.ALL }
    );

    /* 给整个controller的中间件（方法） */
    // consumer.apply(demoMiddleware).forRoutes(DemoController);

    /* 异步中间件，必须通过with传参数（类） */
    // consumer.apply(DemoMiddleware).with('DemoModule').forRoutes(DemoController);
  }
}