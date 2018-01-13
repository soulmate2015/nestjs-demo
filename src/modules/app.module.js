import { MiddlewaresConsumer, Module } from '@nestjs/common';

/* 基础节点 */

import { CommonModule } from './@common/common.module';
import { ConfigModule } from './@config/config.module';
import { ModelModule } from './@model/model.module';
// import { DatabaseModule } from './@database/database.module';
import { EnumModule } from './@enum/enum.module';
import { LoggerModule } from './@logger/logger.module';
import { RequestModule } from './@request/request.module';

/* 业务节点 */

import { DemoModule } from './demo/demo.module';

@Module({
  modules: [CommonModule, ConfigModule, LoggerModule, ModelModule, EnumModule, RequestModule, DemoModule],
})
export class ApplicationModule {

  configure(consumer) {
    // consumer
    //   .apply(LoggerMiddleware)
    //   .with('ApplicationModule')
    //   .forRoutes(DemoController);
  }
}
