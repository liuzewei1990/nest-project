import { Module, MiddlewaresConsumer } from "@nestjs/common";
import { AdController } from "./ad.controller";
import { AdService } from "./ad.service";
import { AdMiddleware } from "../../middlewares/ad.middleware";

@Module({
  controllers: [AdController],
  components: [AdService],
  exports: [AdService]
})
export class AdModule {
  configure(consumer: MiddlewaresConsumer): void {
    consumer.apply(AdMiddleware).forRoutes(AdController)
  }
}