import { Controller, Get, Post, Res, Body, HttpStatus } from '@nestjs/common';
import { AdService } from "./ad.service";
import { Ad } from './ad.dto';

@Controller('ad')
export class AdController {
  constructor(private readonly adService: AdService) {

  }

  @Post() create(@Body() body): object {
    let data: Ad = { name: "", age: 1 };
    this.adService.createAd(data);
    return { resultCode: 0, resultMsg: "添加成功" }
  }

  @Get() findAll(): object {
    return this.adService.findAds();
  }
}