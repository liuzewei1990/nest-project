import { Component, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import { AdDto } from "./ad.dto";
import { InjectModel } from "@nestjs/mongoose";
import { AdSchema } from "./schemas/ad.schemas";
import { Model, Document } from "mongoose";
import { AdInterface } from "./interfaces/ad.interface";

@Component()
export class AdService implements OnModuleInit, OnModuleDestroy {

	constructor(@InjectModel(AdSchema) private readonly adModel: Model<AdInterface>) {

	}

	async createAd(ad: AdDto): Promise<AdInterface> {
		return this.adModel.create(ad);
	}

	async findAds(): Promise<AdInterface[]> {
		return this.adModel.find();
	}

	onModuleInit() {
		console.log(`Module's 初始化...`);
	}
	onModuleDestroy() {
		console.log(`Module's 销毁...`);
	}
}


