import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { AdModule } from "../ad/ad.module";


@Module({
  imports: [AdModule],
  controllers: [UsersController]
})
export class UsersModule {

}