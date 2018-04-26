import { Controller, Get } from "@nestjs/common";
import { AdService } from "../ad/ad.service";

@Controller("user")
export class UsersController {
  constructor(private readonly adService: AdService) {
  }

  @Get()
  findUsers(): object {
    return this.adService.findAds();
  }
}