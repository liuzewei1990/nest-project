import { Controller, Get, HttpStatus, RequestTimeoutException, NotFoundException, HttpCode, Render } from "@nestjs/common";
import { AdService } from "../ad/ad.service";
import { HttpException } from "@nestjs/core";
import { ForbiddenHttpException } from "../../httpException/forbidden.exception";

@Controller("user")
export class UsersController {
  constructor(private readonly adService: AdService) {
  }

  @Get()
  // @Render("index")
  findUsers(): object {
    return this.adService.findAds();
  }

  @Get("branch4")
  findUse4(): string {
    return "新开发的路由4-上线-测试webhooks2-测试环境123";
  }

  @Get("branch3")
  findUse3(): string {
    return "新开发的路由3发布上线-我是在bug4分支做的修改-再改-再改-测试邮件";
  }

  @Get("branch2")
  findUse2(): string {
    return "新开发的要上线 -hooks";
  }


  @Get("branch1")
  findUse(): object {
    return this.adService.findAds();
  }

  @Get("branch")
  findUser(): object {
    return {};
  }

  @HttpCode(200)
  @Get("error") exception() {

    //自定义异常一
    throw new HttpException("这是服务器手动抛出的异常错误55555555", HttpStatus.FORBIDDEN);

    //自定义异常二
    // throw new HttpException({
    //   resultCode: HttpStatus.FORBIDDEN,
    //   resultMsg: "这是服务器手动抛出的异常错误"
    // }, HttpStatus.FORBIDDEN);

    //使用继承HttpException抛出异常
    // throw new ForbiddenHttpException();

    //nest内置异常
    // throw new RequestTimeoutException()
    // throw new NotFoundException();
  }
}