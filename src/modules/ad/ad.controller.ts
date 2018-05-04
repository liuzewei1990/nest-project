import { Controller, Get, Post, Res, Body, HttpStatus, Query, ValidationPipe } from '@nestjs/common';
import { AdService } from "./ad.service";
import { AdDto } from './dto/ad.dto';
import { Ad } from "./ad.decorator";
// import { ValidationPipe } from "./validation.pipe";

@Controller('ad')
export class AdController {
	private name: string;
	constructor(private readonly adService: AdService) {
		this.name = "字符串"
	}

	@Get("add")
	public newCreateAdToServiceSave(@Query(new ValidationPipe()) createAdDto: AdDto) {
		return this.adService.createAd({
			linkUrl: createAdDto.linkUrl,
			base64: createAdDto.base64
		}).then((res) => {
			return { resultCode: 0, resultMsg: "添加成功", data: res }
		}).catch((err) => {
			return { resultCode: 1001, resultMsg: "添加失败", data: err }
		})
	}

	@Get()
	public findServiceAdList(): object {
		return this.adService.findAds()
			.then((dataList) => {
				console.log(dataList)
				return { resultCode: 0, resultMsg: "查询成功", data: dataList }
			}).catch((err) => {
				return { resultCode: 1001, resultMsg: "查询失败", data: err }
			})
	}
}