import { Controller, Get, Post, Res, Body, HttpStatus } from '@nestjs/common';
import { AdService } from "./ad.service";

@Controller('ad')
export class AdController {
  constructor(private readonly adService: AdService) {

  }

  @Post() create(@Body() body): object {
    this.adService.createAd(body);
    return { resultCode: 0, resultMsg: "添加成功" }
  }

  @Get() findAll(): object {
    return this.adService.findAds();
  }
}