import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";

import { AdModule } from "./ad/ad.module";
import { UsersModule } from "./users/uesrs.module";

import { AppController } from './app.controller';

@Module({
  imports: [AdModule, UsersModule, MongooseModule.forRoot("mongodb://47.94.3.28:8060/store")],
  exports: [],
  controllers: [AppController],
  components: []
})
export class ApplicationModule { }
