import { Component } from "@nestjs/common";

class Ad {
  readonly name: string;
}

@Component()
export class AdService {
  private readonly ads: Ad[] = [];

  createAd(ad: Ad) {
    this.ads.push(ad);
  }

  findAds() {
    return this.ads;
  }
}