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
import {
  getGoodsDetails,
  getOrdersCalculateTotal,
  getPlaceAnOrderData,
  getPlaceAnOrderId,
} from "@/api/goods/index.js";
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
  onLoad(e) {
    this.goodsId = e.id;
    this.number = e.number;
    this.deviceId = e.deviceId;
  },
  onShow() {
    this.list();
  },
  computed: {},
  onShareAppMessage() {},
  methods: {
    list() {
      let obj = {
        id: this.goodsId,
        number: this.number, //货道号
        deviceId: this.deviceId, //设备id
      };
      let url = "/quxia/api/public/products/detail";
      getGoodsDetails(url, obj).then((res) => {
        if (res) {
          if (res.productDetail) {
            let regex = new RegExp("<img", "gi");
            res.productDetail = res.productDetail.replace(
              regex,
              `<img style="max-width: 100%;"`
            );
          } else {
            res.productDetail = `<p><img src="${res.detailImage}" style="max-width: 100%" /></p>`;
          }
          if (!res.displayImages) {
            res.displayImages = [res.image];
          }
          this.goodsDetails = res;
        }
      });
    },
    // 去下单
    async buyGoods() {
      let that = this;
      let obj = {
        deviceId: that.deviceId, //设备id
        products: [
          {
            id: that.goodsId, //商品id
            quantity: 1, //商品数量
            number: that.number, //货道号
          },
        ],
      };
      let notify_url = "/cityfx/order/notify";
      let successful_jump = "pages/paySuccess/index";
      let fail_jump = "pages/payFail/index";
      let e = await getPlaceAnOrderId(obj);
      getPlaceAnOrderData(obj).then((res) => {
        let obj = {
          partner_id: "",
          out_trade_no: e.id,
          goods_name: res.products.name,
          buy_num: res.totalQuantity,
          cost_price: res.products.price,
          sales_price: res.products.price,
          total_fee: res.subTotal,
          device_no: that.deviceId,
          gate_no: res.products.number,
          notify_url,
          successful_jump,
          fail_jump,
        };
        jWeixin.miniProgram.getEnv(function (res) {
          jWeixin.miniProgram.redirectTo({
            url: `/pages/index/index?partner_id=${""}&out_trade_no=${
              e.id
            }&goods_name=${res.products.name}&buy_num=${
              res.totalQuantity
            }&cost_price=${res.products.price}&sales_price=${
              res.products.price
            }&total_fee=${res.subTotal}&device_no=${that.deviceId}&gate_no=${
              res.products.number
            }&notify_url=${notify_url}&successful_jump=${successful_jump}&fail_jump=${fail_jump}`,
          });
          jWeixin.miniProgram.postMessage({
            data: obj,
          });
        });
      });
    },
    // 回首页
    goHome() {
      uni.redirectTo({
        url: "/pages/index/index",
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
