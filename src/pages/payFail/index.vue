<template>
  <view class="paySuccess">
    <view class="top-bgc">
      <image src="../../static/pay-bgc.png" />
      <view class="top-content">
        <view class="icon">
          <view class="iconfont iconhuowu"></view>
        </view>
        <view class="text">支付失败，请重新购买</view>
      </view>
    </view>
    <view class="footer-btn">
      <!-- <view class="one" @click="examineOrder">查看订单</view> -->
      <view class="there" @click="backHome">返回商品列表</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  onLoad(e) {},
  onShow() {},
  onShareAppMessage() {},
  methods: {
    examineOrder() {},
    anewOpen() {},
    backHome() {
      uni.redirectTo({
        url: "/pages/index/index",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.paySuccess {
  .top-bgc {
    position: relative;
    image {
      width: 100%;
      height: 406rpx;
    }
    .top-content {
      position: absolute;
      top: 75rpx;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      text-align: center;
      .icon {
        display: inline-block;
        width: 182rpx;
        height: 182rpx;
        line-height: 182rpx;
        text-align: center;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0rpx 9rpx 6rpx rgba(254, 124, 124, 0.14);
        border-radius: 50%;
        view {
          font-size: 104rpx;
          color: #fa826d;
        }
      }
      .text {
        display: inline-block;
        width: 100%;
        padding-top: 30rpx;
        font-size: 36rpx;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(250, 129, 109, 1);
      }
    }
  }
  .footer-btn {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 30rpx;
    .one,
    .two,
    .there {
      width: 190rpx;
      height: 70rpx;
      text-align: center;
      padding: 0;
      background: rgba(255, 255, 255, 1);
      border: 1rpx solid rgba(207, 207, 207, 1);
      font-size: 28rpx;
      font-family: Source Han Sans CN;
      font-weight: 400;
      line-height: 70rpx;
      color: rgba(146, 146, 146, 1);
      border-radius: 8rpx;
    }
    .two,
    .there {
      background: rgba(238, 86, 70, 1);
      color: rgba(255, 255, 255, 1);
      border: none;
    }
  }
}
</style>
