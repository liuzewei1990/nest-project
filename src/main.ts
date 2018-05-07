import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import * as express from "express";
import * as bodyParser from "body-parser";

async function bootstrap() {

  const instance = express();
  instance.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  });

  // instance.use(bodyParser.json());
  // instance.use(bodyParser.urlencoded({ extended: false }));
  const app = await NestFactory.create(ApplicationModule, instance, null);
  // app.setGlobalPrefix('v1');
  await app.listen(8070);
}
bootstrap();
