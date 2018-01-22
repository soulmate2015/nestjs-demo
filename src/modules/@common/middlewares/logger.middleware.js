import { Logger } from '@nestjs/common';
const logger = new Logger('httpLoggerMiddleware');

// TODO: https://stackoverflow.com/questions/19215042/express-logging-response-body

export function loggerMiddleware(req, res, next) {

  // 获取静态资源的接口不做日志记录，会报错
  if (req.originalUrl.indexOf('favicon.ico') > -1 || req.originalUrl.indexOf('/static') > -1) {
    logger.log(req.originalUrl);
    return next();
  }

  const oldWrite = res.write;
  const oldEnd = res.end;
  let chunks = [];

  res.write = function(chunk) {
    chunks.push(chunk);
    oldWrite.apply(res, arguments);
  };

  res.end = function(chunk) {
    
    if (chunk) {
      chunks.push(chunk);
    }

    try {
      // 接口返回缓存值的（304），不会再写入输出流
      let body = Buffer.concat(chunks).toString('utf8') || 304;
      logger.log(`${req.originalUrl} - ${body}`);
    } catch (e) {
      logger.log(`${req.originalUrl}`);
      logger.error(e);
      return oldEnd.apply(res, arguments);
    }

    oldEnd.apply(res, arguments);
  };

  next();
}
