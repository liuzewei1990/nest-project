import { Module, MiddlewaresConsumer } from "@nestjs/common";
import { AdController } from "./ad.controller";
import { AdService } from "./ad.service";
import { AdMiddleware } from "../../middlewares/ad.middleware";
import { MongooseModule } from "@nestjs/mongoose";
import { AdSchema } from "./schemas/ad.schemas";

@Module({
  //forFeature 是使用模式注册模型
  imports: [MongooseModule.forFeature([{ name: "cat", schema: AdSchema }])],
  controllers: [AdController],
  components: [AdService],
  exports: [AdService]
})
export class AdModule {
  configure(consumer: MiddlewaresConsumer): void {
    consumer.apply(AdMiddleware).forRoutes(AdController)
  }
}