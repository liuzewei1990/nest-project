import { Component } from "@nestjs/common";
import { Ad } from "./ad.dto";


@Component()
export class AdService {
  private readonly ads: Ad[] = [{ name: "111", age: 0 }];

  createAd(ad: Ad) {
    this.ads.push(ad);
  }

  findAds() {
    return this.ads;
  }
}