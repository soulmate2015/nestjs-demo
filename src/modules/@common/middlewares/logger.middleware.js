// import { existsSync, mkdirSync, writeSync } from 'fs';
// import { resolve } from 'path';

import { Logger } from '@nestjs/common';
const logger = new Logger('httpLoggerMiddleware');

// TODO: https://stackoverflow.com/questions/19215042/express-logging-response-body

export function loggerMiddleware(req, res, next) {
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

    // 接口返回缓存值的（304），不会再写入输出流
    let body = Buffer.concat(chunks).toString('utf8') || 304;

    logger.log(`${req.originalUrl} - ${body}`);

    // const logDirectory = resolve(__dirname, '../../../../', 'log');
    // console.log(logDirectory);
    // existsSync(resolve(logDirectory, 'http')) || mkdirSync(resolve(logDirectory, 'http'));
    // writeSync(resolve(logDirectory, 'http'), `${req.path} - ${body}`);
    // console.log(req.path, body);

    oldEnd.apply(res, arguments);
  };

  next();
}
