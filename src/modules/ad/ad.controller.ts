import { Controller, Get, Post, Res, Body, HttpStatus, Query, ValidationPipe, HttpCode } from '@nestjs/common';
import { AdService } from "./ad.service";
import { AdDto } from './dto/ad.dto';
import { Ad } from "./ad.decorator";
import * as moment from "moment";
// import { ValidationPipe } from "./validation.pipe";


@Controller('ad')
export class AdController {
	private name: string;
	constructor(private readonly adService: AdService) {
		this.name = "字符串"
	}

	@HttpCode(200)
	@Post()
	public newCreateAdToServiceSave(@Body(new ValidationPipe()) createAdDto: AdDto) {

		return this.adService.createAd({
			linkUrl: createAdDto.linkUrl,
			base64: createAdDto.base64
		}).then((res) => {
			return { resultCode: 0, resultMsg: "添加成功", data: res }
		}).catch((err) => {
			return { resultCode: 1001, resultMsg: err.message }
		})
	}

	@HttpCode(200)
	@Get()
	public findServiceAdList(): object {

		return this.adService.findAds()
			.then((dataList) => {
				return { resultCode: 0, resultMsg: "查询成功", data: dataList }
			}).catch((err) => {
				return { resultCode: 1001, resultMsg: err.message }
			})
	}

	@HttpCode(200)
	@Post("delete")
	public deleteAdById(@Body() { id }): object {

		if (!id) return { resultCode: 1001, resultMsg: "id不能为空" }

		return this.adService.deleteAdById(id)
			.then(res => {
				return { resultCode: 0, resultMsg: "删除成功", data: res }
			}).catch((err) => {
				return { resultCode: 1001, resultMsg: err.message }
			})
	}

	@HttpCode(200)
	@Post("setDefault")
	public setDefault(@Body() body): object {
		let { id } = body;
		if (!id) return { resultCode: 1001, resultMsg: "id不能为空" }

		return this.adService.setAdDefaultStatus(id)
			.then(res => {
				return { resultCode: 0, resultMsg: "设置成功", data: res }
			}).catch((err) => {
				return { resultCode: 1001, resultMsg: err.message }
			})
	}

	@HttpCode(200)
	@Post("history")
	public createAdHistory(@Query("id") id) {

		if (!id) return { resultCode: 1001, resultMsg: "id不能为空" }

		return this.adService.createOneAdHistory({ adNo: id })
			.then(res => {
				return { resultCode: 0, resultMsg: "创建成功", data: res }
			}).catch((err) => {
				return { resultCode: 1001, resultMsg: err.message }
			})
	}

	@HttpCode(200)
	@Get("findHistory")
	public findHistory() {

		return this.adService.findAdHistoryAll()
			.then((dataList) => {
				return { resultCode: 0, resultMsg: "查询成功", data: dataList }
			}).catch((err) => {
				return { resultCode: 1001, resultMsg: err.message }
			})
	}


}