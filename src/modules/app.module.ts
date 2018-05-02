import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";

import { AdModule } from "./ad/ad.module";
import { UsersModule } from "./users/uesrs.module";

import { AppController } from './app.controller';

@Module({
  imports: [AdModule, UsersModule, MongooseModule.forRoot("mongodb://localhost:27017/store")],
  exports: [],
  controllers: [AppController],
  components: []
})
export class ApplicationModule { }
