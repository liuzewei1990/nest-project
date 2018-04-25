import { Get, Post, Controller, Req, Res, Next, Session, Param, Body, Query, Headers, HttpCode} from '@nestjs/common';

class CreateAppDto{
  readonly name:string;
  readonly age:string;
  readonly sex:number;
}


@Controller()
export class AppController {
  @Get()
  root(): string {
    return 'Hello World!';
  }

  @Get("ad")
  root2(): object {
    let json:number[] = [1,2,3,4,5,6,7,8];
    return json;
  }

  @Get("test/:id")
  findCustomerInfoById(@Req() req, @Res() res, @Next() next,@Session() session, @Param() param, @Body() body, @Query() query, @Headers() headers){
    console.log(param.id)
    console.log(body)
    console.log(query)
    res.json({a:1})
  }

  @HttpCode(302)
  @Get("http")
  testHttpCodeStatus(){
    return "http:code";
  }

  @Post("dto")
  createDto(@Body() createAppDto:CreateAppDto): object{
    console.log(createAppDto)
    return createAppDto
  }
}
