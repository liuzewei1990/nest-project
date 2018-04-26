import { Module } from '@nestjs/common';

import { AdModule } from "./ad/ad.module";
import { UsersModule } from "./users/uesrs.module";

import { AppController } from './app.controller';

@Module({
  imports: [AdModule, UsersModule],
  exports: [],
  controllers: [AppController],
  components: []
})
export class ApplicationModule { }
