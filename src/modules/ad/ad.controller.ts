import { Controller, Get, Post, Res, Body, HttpStatus, Query, ValidationPipe } from '@nestjs/common';
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
				return { resultCode: 0, resultMsg: "查询成功", data: dataList }
			}).catch((err) => {
				return { resultCode: 1001, resultMsg: "查询失败", data: err }
			})
	}

	@Get("delete")
	public deleteAdById(@Query() { id }): object {

		if (!id) return { resultCode: 1001, resultMsg: "id不能为空" }

		return this.adService.deleteAdById(id)
			.then(res => {
				return { resultCode: 0, resultMsg: "删除成功", data: res }
			}).catch((err) => {
				return { resultCode: 1001, resultMsg: "删除失败", data: err }
			})
	}

	@Get("setDelault")
	public setDefault(@Query() { id }): object {

		if (!id) return { resultCode: 1001, resultMsg: "id不能为空" }

		return this.adService.setAdDefaultStatus(id)
			.then(res => {
				return { resultCode: 0, resultMsg: "设置成功", data: res }
			}).catch((err) => {
				return { resultCode: 1001, resultMsg: "设置失败", data: err }
			})
	}

	@Get("history")
	public createAdHistory(@Query("id") id) {

		if (!id) return { resultCode: 1001, resultMsg: "id不能为空" }

		return this.adService.createOneAdHistory({
			adNo: id
		}).then(res => {
			return { resultCode: 0, resultMsg: "创建成功", data: res }
		}).catch((err) => {
			return { resultCode: 1001, resultMsg: "创建失败", data: err }
		})

	}

	@Get("findHistory")
	public findHistory() {

		return this.adService.findAdHistoryAll()
			.then((dataList) => {
				return { resultCode: 0, resultMsg: "查询成功", data: dataList }
			}).catch((err) => {
				return { resultCode: 1001, resultMsg: "查询失败", data: err }
			})
	}


}