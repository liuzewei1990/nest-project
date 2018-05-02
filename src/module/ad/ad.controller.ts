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
    return this.adService.createAd(createAdDto)
      .then((data) => {
        return { resultCode: 0, resultMsg: "添加成功", data: data }
      })
      .catch(() => {
        return { resultCode: 1001, resultMsg: "添加失败" }
      })
  }

  @Get()
  findAll(): object {
    return this.adService.findAds();
  }
}