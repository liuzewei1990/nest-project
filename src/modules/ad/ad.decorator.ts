import { createRouteParamDecorator } from "@nestjs/common";


export const Ad = createRouteParamDecorator((data, req) => {
  let { a } = req.query;
  console.log(data)
  return a;
})