import { Controller, Get, Post, Res, Body, HttpStatus, Query, ValidationPipe, HttpCode, Put, HttpException, ForbiddenException } from '@nestjs/common';
import { AdService } from "./ad.service";
import { AdDto } from './dto/ad.dto';
import { Ad } from "./ad.decorator";
import * as moment from "moment";
import { logger } from "../../config/log4js.config";
// import { ValidationPipe } from "./validation.pipe";


@Controller('ad')
export class AdController {
	private name: string;
	constructor(private readonly adService: AdService) {
		this.name = "字符串"
	}

	@HttpCode(200)
	@Post()
	public async createAd(@Body(new ValidationPipe()) createAdDto: AdDto) {
		try {
			return await this.adService.createAd(createAdDto);
		} catch (err) {
			throw new ForbiddenException(err);
		}
	}

	@HttpCode(200)
	@Put()
	public async upDateAd(@Body(new ValidationPipe()) createAdDto: AdDto) {
		if (!createAdDto.id) return { resultCode: 1001, resultMsg: "id不能为空" }
		try {
			return await this.adService.updatedAd(createAdDto.id, {
				linkUrl: createAdDto.linkUrl,
				base64: createAdDto.base64,
			})
		} catch (err) {
			throw new ForbiddenException(err);
		}
	}

	@HttpCode(200)
	@Get()
	public async findServiceAdList() {
		try {
			return await this.adService.findAds()
		} catch (err) {
			throw new ForbiddenException(err);
		}
	}

	@HttpCode(200)
	@Post("delete")
	public deleteAdById(@Body() { id }): object {
		if (!id) return { resultCode: 1001, resultMsg: "id不能为空" }
		try {
			return this.adService.deleteAdById(id);
		} catch (err) {
			throw new ForbiddenException(err);
		}
	}


	@HttpCode(200)
	@Post("setDefault")
	public setDefault(@Body() body): object {
		let { id } = body;
		if (!id) return { resultCode: 1001, resultMsg: "id不能为空" }
		logger.info(id)
		try {
			return this.adService.setAdDefaultStatus(id);
		} catch (err) {
			throw new ForbiddenException(err);
		}
	}


	@HttpCode(200)
	@Get("history")
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