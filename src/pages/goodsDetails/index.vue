<template>
  <view class="goodsDetails">
    <view class="slideshow">
      <swiper
        class="swiper"
        indicator-active-color="#FF4A4A"
        indicator-dots
        autoplay
        circular
      >
        <swiper-item v-if="goodsDetails.detailVideo">
          <video
            style="width: 100%; height: 750rpx"
            :src="goodsDetails.detailVideo"
            autoplay
          />
        </swiper-item>
        <swiper-item v-for="(v, i) in goodsDetails.displayImages" :key="i">
          <image :src="v" />
        </swiper-item>
      </swiper>
    </view>
    <view class="goods-content">
      <view class="title">{{ goodsDetails.name }}</view>
      <view class="text">{{ goodsDetails.description }}</view>
      <view class="price-num">
        <view class="price">￥{{ goodsDetails.price || 0 }}</view>
      </view>
    </view>
    <view class="goods-presentation">
      <view class="title">商品详情</view>
      <rich-text :nodes="goodsDetails.productDetail"></rich-text>
    </view>
    <view class="footer">
      <view class="home" @click="goHome">
        <text class="iconfont iconzhuye"></text>
      </view>
      <view class="buy" @click="buyGoods">立即购买</view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      goodsDetails: {
        detailVideo: "",
        displayImages: [],
        name: "",
        description: "",
        price: "",
        productDetail: "",
      },
    };
  },
  onLoad(e) {},
  onShow() {},
  computed: {},
  onShareAppMessage() {},
  methods: {
    // 去下单
    buyGoods() {},
    // 回首页
    goHome() {
      uni.navigateBack({
        delta: 1,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.goodsDetails {
  padding-bottom: 117rpx;
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  width: 100%;
  .home {
    flex: 1;
    height: 100rpx;
    line-height: 100rpx;
    text-align: center;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0rpx -1rpx 6rpx rgba(133, 133, 133, 0.16);
    text {
      font-size: 66rpx;
    }
  }
  .buy {
    flex: 1;
    height: 100rpx;
    line-height: 100rpx;
    text-align: center;
    background: #ff5f5f;
    box-shadow: 0rpx -1rpx 6rpx rgba(133, 133, 133, 0.16);
    font-size: 28rpx;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }
}
.slideshow {
  width: 100%;
  height: 750rpx;
  image {
    width: 100%;
  }
  .swiper,
  swiper-item {
    width: 100%;
    height: 750rpx;
    image {
      width: 100%;
      height: 750rpx;
    }
  }
}
.goods-content {
  padding: 24rpx 30rpx;
  border-bottom: 20rpx solid #f9f9f9;
  .title {
    font-size: 30rpx;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(12, 12, 12, 1);
    margin-bottom: 20rpx;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .text {
    font-size: 24rpx;
    font-family: PingFang SC;
    font-weight: 300;
    color: rgba(125, 125, 125, 1);
    margin-bottom: 30rpx;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .price-num {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .price {
      font-size: 40rpx;
      font-weight: bold;
      color: #ff5f5f;
    }
  }
}
.goods-presentation {
  .title {
    width: 100%;
    height: 86rpx;
    line-height: 86rpx;
    text-align: center;
    font-size: 32rpx;
    font-weight: 400;
    color: rgba(26, 26, 26, 1);
    background-color: #fff;
  }
  image {
    width: 100%;
  }
}
</style>
