import { Controller, Get, Post, Res, Body, HttpStatus } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Res() res, @Body() body) {
    res.status(HttpStatus.CREATED).send();
  }

  @Get()
  findAll(@Res() res) {
     res.status(HttpStatus.OK).json([]);
  }
}