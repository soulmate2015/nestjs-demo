import { Logger } from '@nestjs/common';
const logger = new Logger('httpLoggerMiddleware');

// TODO: https://stackoverflow.com/questions/19215042/express-logging-response-body

export function loggerMiddleware(req, res, next) {

  // 获取静态资源的接口不做日志记录，会报错
  const ignoreList = ['favicon.ico', '/api-doc', '/webSocket'];
  if (ignoreList.some(url => req.originalUrl.indexOf(url) > -1)) {
    logger.log(`${req.method} ${req.originalUrl}`);
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
      const reqBody = req.method === 'POST' ? `- ${JSON.stringify(req.body)}` : '';
      // 接口返回缓存值的（304），不会再写入输出流
      let resBody = Buffer.concat(chunks).toString('utf8') || '304';
      // 接口返回html格式，返回体太大，不再写入日志
      resBody = resBody && resBody.indexOf('<!DOCTYPE html>') > -1 ? 'html' : resBody;
      logger.log(`${req.originalUrl} - ${resBody}`);
    } catch (e) {
      logger.log(`${req.originalUrl}`);
      logger.error(e);
      return oldEnd.apply(res, arguments);
    }

    oldEnd.apply(res, arguments);
  };

  next();
}
