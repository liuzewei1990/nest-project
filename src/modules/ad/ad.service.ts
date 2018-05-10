import { Component, OnModuleInit, OnModuleDestroy, HttpException, HttpStatus } from "@nestjs/common";
import { AdDto } from "./dto/ad.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Document } from "mongoose";
import { AdInterface } from "./interfaces/ad.interface";
import { AdSchema } from "./schemas/ad.schemas";
import { AdHistorySchema } from "./schemas/ad.history.schemas";
import { AdHistoryDto } from "./dto/ad.history.dto";
import { SuccessResponseJson, FailResponseJson } from "../../config/responseStatusJson.config";

@Component()
export class AdService implements OnModuleInit, OnModuleDestroy {

	constructor(
		@InjectModel(AdSchema) private readonly adModel: Model<AdInterface>,
		@InjectModel(AdHistorySchema) private readonly AdHistory: Model<AdInterface>) {

	}

	public async createAd(ad: AdDto): Promise<any> {
		try {
			let newAd = await new this.adModel(ad)
			newAd.save()
			return new SuccessResponseJson("添加成功", newAd)
		} catch (err) {
			return new FailResponseJson(err.message);
		}
	}

	public async updatedAd(id: string, ad: AdDto): Promise<any> {
		try{
			let newAd = await this.adModel.updateOne({ _ad: id }, ad)
			return new SuccessResponseJson("修改成功", newAd)
		}catch(err){
			return new FailResponseJson(err.message);
		}
	}

	public async findAds(): Promise<any> {
		//需要返回时间就改成 createTime: 1,
		try{
			let list = await this.adModel.find({}).sort({ _id: -1 });
			let count = await this.adModel.count({});
			return new SuccessResponseJson("查询成功", {count,list})
		}catch(err){
			return new FailResponseJson(err.message);
		}
	}

	public async deleteAdById(id: string): Promise<any> {
		try {
			let d = await this.adModel.deleteOne({ _id: id })
			return new SuccessResponseJson("删除成功");
		} catch (err) {
			return new FailResponseJson(err.message);
		}
	}

	public async setAdDefaultStatus(id: string): Promise<any> {
		return this.adModel.findOne({ _id: id })
			.then(async doc => {
				if (doc) {
					await this.adModel.updateOne({ defaultStatus: true }, { defaultStatus: false });
					await this.adModel.updateOne({ _id: id }, { defaultStatus: true });
					return new SuccessResponseJson("设置成功")
				} else {
					return new FailResponseJson("数据不存在", FailResponseJson.FAIL_CODE_1001);
				}
			})
			.catch(err => {
				return new FailResponseJson(err.message);
			})
	}

	public createOneAdHistory(history: AdHistoryDto) {
		return this.AdHistory.create(history);
	}

	public findAdHistoryAll() {
		return this.AdHistory.find({ createTime: { "$lt": new Date("2018-05-07").toUTCString() } }).count();
	}

	onModuleInit() {
		console.log(`Module's 初始化...`);
	}
	onModuleDestroy() {
		console.log(`Module's 销毁...`);
	}
}


