import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { AdModule } from "../ad/ad.module";


@Module({
  //如果需要使用ad模块中的service方法 需要将该模块导入，或者可以使用@Global全局导入。
  imports: [AdModule],
  controllers: [UsersController]
})
export class UsersModule {

}