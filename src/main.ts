import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import * as express from "express";
import * as bodyParser from "body-parser";
import { configure, getLogger } from 'log4js';

import log4jsConfig from "./config/log4js.config";

async function bootstrap() {

  const instance = express();

  /* 全局headers */
  instance.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  });

  /*POST request body-parser */
  instance.use(bodyParser.json());
  instance.use(bodyParser.urlencoded({ extended: false }));

  /* 日志配置 */
  // configure('./logs');
  const logger = getLogger();

  configure(log4jsConfig);



  /* APP实例 */
  const app = await NestFactory.create(ApplicationModule, instance, null);
  // app.setGlobalPrefix('v1');
  await app.listen(8070);
  // logger.level = 'info';
  logger.info("APP启动1");
}
bootstrap();
