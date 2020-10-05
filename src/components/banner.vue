<template>
  <view>
    <view class="header">
      <swiper indicator-dots autoplay>
        <swiper-item v-for="(v, i) in ads" :key="i">
          <image :src="v.url" />
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>
<script>
import AdApi from "@/api/ad.js";
let app = getApp();
export default {
  data() {
    return {
      ads: [],
    };
  },
  created() {
    this.deviceId = app.globalData.deviceId;
    AdApi.getAds({
      deviceId: this.deviceId,
      type: "banner",
    }).then((ads) => {
      if (ads && ads.length > 0) {
        this.ads = ads;
      }
    });
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
.header {
  padding: 20rpx;
  margin-bottom: 20rpx;
  background-color: #fff;
  swiper,
  swiper-item,
  image {
    width: 100%;
    height: 320rpx;
    border-radius: 8rpx;
  }
}
</style>