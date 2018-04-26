import { Middleware, NestMiddleware, ExpressMiddleware } from "@nestjs/common";


@Middleware()
export class AdMiddleware implements NestMiddleware {

  resolve(...args: any[]): ExpressMiddleware {
    return (req, res, next) => {
      console.log("验证ad权限的中间件")
      next();
    }
  }
}