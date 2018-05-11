import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import * as express from "express";
import * as bodyParser from "body-parser";
import { connectMyLogger } from './config/log4js.config';


async function bootstrap() {

  const app = express();

  /* 全局headers */
  app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  });

  /*POST request body-parser */
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  /* 连接日志记录器 */
  app.use(connectMyLogger)

  /* server实例 */
  const server = await NestFactory.create(ApplicationModule, app, null);
  // server.useStaticAssets()
  // server.setGlobalPrefix('v1');
  await server.listen(8070);

}
bootstrap();
