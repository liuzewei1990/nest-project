import { Component, OnModuleInit, OnModuleDestroy, HttpException, HttpStatus } from "@nestjs/common";
import { AdDto } from "./dto/ad.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Document } from "mongoose";
import { AdInterface } from "./interfaces/ad.interface";
import { AdSchema } from "./schemas/ad.schemas";
import { AdHistorySchema } from "./schemas/ad.history.schemas";
import { AdHistoryDto } from "./dto/ad.history.dto";

@Component()
export class AdService implements OnModuleInit, OnModuleDestroy {

	constructor(
		@InjectModel(AdSchema) private readonly adModel: Model<AdInterface>,
		@InjectModel(AdHistorySchema) private readonly AdHistory: Model<AdInterface>) {

	}

	/**
	 * 增加一个新的广告
	 * @param ad 广告信息对象
	 */
	async createAd(ad: AdDto): Promise<AdInterface> {
		return this.adModel.create(ad);
	}

	updatedAd(id: string, ad: AdDto): object {
		return this.adModel.updateOne({ _ad: id }, ad)
	}

	/**
	 * 查询全部广告信息
	 */
	async findAds(): Promise<AdInterface[]> {

		//需要返回时间就改成 createTime: 1,
		return this.adModel
			.find({}, { updateTime: 0 })
			.sort({ _id: -1 })

		// return this.adModel.aggregate([
			
		// 	{
		// 		$project: {
		// 			customerNo: '$_id',
		// 			_id: '$-',
        //         }
		// 	}
		// ]).exec()


	}

	/**
	 * 删除指定的广告
	 * @param id 广告id
	 */
	deleteAdById(id: string) {
		return this.adModel.deleteOne({ _id: id });
		// return this.adModel.deleteMany({});
	}

	/**
	 * 设置广告位默认
	 * @param id 广告id
	 */
	async setAdDefaultStatus(id: string) {

		await this.adModel.findOne({ _id: id })
		await this.adModel.updateOne({ defaultStatus: true }, { defaultStatus: false });
		return this.adModel.updateOne({ _id: id }, { defaultStatus: true })
	}

	/**
	 * 创建一条历史记录
	 * @param history 广告id
	 */
	createOneAdHistory(history: AdHistoryDto) {
		return this.AdHistory.create(history);
	}

	/**
	 * 查询所有历史数据
	 */
	findAdHistoryAll() {
		return this.AdHistory.find({ createTime: { "$lt": new Date("2018-05-07").toUTCString() } }).count();
	}


	onModuleInit() {
		console.log(`Module's 初始化...`);
	}
	onModuleDestroy() {
		console.log(`Module's 销毁...`);
	}
}


