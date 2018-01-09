import { Component, Dependencies } from '@nestjs/common';

export function serviceFactory(namespace) {

  @Component()
  @Dependencies('LoggerProvider')
  class LoggerService {
    constructor(logger) {
      this.logger = logger;
    }

    output(message, level) {
      this.logger.log({
        namespace,
        level,
        message,
      });
    }

    info(...msg) {
      this.output(msg, 'info');
    }

    warn(...msg) {
      this.output(msg, 'warn');
    }

    error(...msg) {
      this.output(msg, 'error');
    }
  }

  return {
    provide: 'LoggerHelper',
    useClass: LoggerService,
    inject: [namespace],
  };

}
