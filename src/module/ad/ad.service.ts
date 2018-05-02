import { Component, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import { AdDto } from "./ad.dto";


@Component()
export class AdService implements OnModuleInit, OnModuleDestroy {
  private readonly ads: AdDto[] = [];

  onModuleInit() {
    console.log(`Module's 初始化...`);
  }
  onModuleDestroy() {
    console.log(`Module's 销毁...`);
  }

  createAd(ad: AdDto) {
    return new Promise((resole, reject) => {
      try {
        this.ads.push(ad);
        resole(ad);
      } catch (error) {
        reject(error)
      }
    })
  }

  findAds() {
    return this.ads;
  }
}