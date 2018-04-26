import { Module } from "@nestjs/common";
import { AdController } from "./ad.controller";
import { AdService } from "./ad.service";

@Module({
  controllers: [AdController],
  components: [AdService],
  exports: [AdService]
})
export class AdModule {

}