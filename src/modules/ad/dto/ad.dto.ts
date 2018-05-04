import { IsString, IsInt, Contains, MinLength } from "class-validator";


export class AdDto {
  @IsString({ message: "请填写姓名！" })
  @MinLength(3, { message: "名称最少为3个字符" })
  readonly linkUrl: string;

  @IsString({ message: "请填写" })
  readonly base64: string;

}