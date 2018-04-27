import { HttpException } from "@nestjs/core";
import { HttpStatus } from "@nestjs/common";

export class ForbiddenHttpException extends HttpException {
    constructor() {
        super({
            resultCode: HttpStatus.FORBIDDEN,
            resultMsg: "继承HttpException抛出的自定义异常"
        }, HttpStatus.FORBIDDEN)
    }
}