import { Get, Post, Controller, Req, Res, Next, Session, Param, Body, Query, Headers, HttpCode } from '@nestjs/common';

class CreateAppDto {
  readonly name: string;
  readonly age: string;
  readonly sex: number;
}

@Controller()
export class AppController {

  @Get() root(): string {
    return 'Hello World!';
  }

  @Get("demo") root2(): object {
    let msg: string = "成功222222";
    let json: object = { resultCode: 0, resultMsg: msg };
    return json;
  }

  @Get("test/:id") findCustomerInfoById(@Req() req, @Res() res, @Next() next, @Session() session, @Param() param, @Body() body, @Query() query, @Headers() headers) {
    console.log(param.id)
    console.log(body)
    console.log(query)
    res.json({ a: 1 })
  }

  @HttpCode(302) @Get("http") estHttpCodeStatus() {
    return "http:code";
  }

  @Post("dto") createDto(@Body() createAppDto: CreateAppDto): object {
    console.log(createAppDto)
    return createAppDto
  }
}
