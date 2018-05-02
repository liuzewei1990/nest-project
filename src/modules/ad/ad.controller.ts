import { Controller, Get, Post, Res, Body, HttpStatus, Query, ValidationPipe } from '@nestjs/common';
import { AdService } from "./ad.service";
import { AdDto } from './ad.dto';
import { Ad } from "./ad.decorator";
// import { ValidationPipe } from "./validation.pipe";

@Controller('ad')
export class AdController {
  constructor(private readonly adService: AdService) {

  }

  @Get("add")
  create(@Query(new ValidationPipe()) createAdDto: AdDto) {
    this.adService.createAd(createAdDto)
    return { resultCode: 0, resultMsg: "添加成功" }
  }

  @Get()
  findAll(): object {
    return this.adService.findAds();
  }
}