import { Controller, Get, HttpStatus, RequestTimeoutException, NotFoundException } from "@nestjs/common";
import { AdService } from "../ad/ad.service";
import { HttpException } from "@nestjs/core";
import { ForbiddenHttpException } from "../../httpException/forbidden.exception";

@Controller("user")
export class UsersController {
  constructor(private readonly adService: AdService) {
  }

  @Get()
  findUsers(): object {
    return this.adService.findAds();
  }

  @Get("branch2")
  findUse2(): string {
    return "新开发的要上线";
  }


  @Get("branch1")
  findUse(): object {
    return this.adService.findAds();
  }

  @Get("branch")
  findUser(): object {
    return {};
  }

  @Get("error") exception() {

    //自定义异常一
    // throw new HttpException("这是服务器手动抛出的异常错误",HttpStatus.FORBIDDEN);

    //自定义异常二
    throw new HttpException({
      resultCode: HttpStatus.FORBIDDEN,
      resultMsg: "这是服务器手动抛出的异常错误"
    }, HttpStatus.FORBIDDEN);

    //使用继承HttpException抛出异常
    // throw new ForbiddenHttpException();

    //nest内置异常
    // throw new RequestTimeoutException()
    // throw new NotFoundException();
  }
}