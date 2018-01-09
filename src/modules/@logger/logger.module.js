// import { Global } from '@nestjs/common';
import { loggerProviders } from './logger.provider';
import { serviceFactory } from './logger.service';

export class LoggerModule {
  static forRoot(namespace) {
    return {
      module: LoggerModule,
      components: [...loggerProviders, serviceFactory(namespace)],
      exports: [serviceFactory(namespace)]
    };
  }
}
