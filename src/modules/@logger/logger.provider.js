import { resolve } from 'path';
import { createLogger, format, transports } from 'winston';
const { combine, timestamp, label, printf, prettyPrint } = format;


// TODO: winston日志模块的 format， message只能打印String类型

export const loggerProviders = [
  {
    provide: 'LoggerProvider',
    useFactory: (config) => {
      const logDirPath = resolve(__dirname, '../../../', 'log');
      const logger = createLogger({
        level: 'info',
        format: (
          printf(info => {
            if (info.level === 'error') {

              if (info.message.length < 1) {
                return;
              }
              else if (info.message.length === 1 && info.message[0] instanceof Error) {
                return `[${new Date(Date.now()).toLocaleString()}] [${info.level.toUpperCase()}] ${process.pid} - [${info.namespace}] - ${info.message[0].stack}`;
              }
            }
            return `[${new Date(Date.now()).toLocaleString()}] [${info.level.toUpperCase()}] ${process.pid} - [${info.namespace}] - ${JSON.stringify(info.message)}`;
          })
        ),
        transports: [
          new transports.File({ filename: resolve(logDirPath, 'server.log'), level: 'info' }),
        ]
      });

      return logger;
    },
    inject: ['Config']
  }
];
