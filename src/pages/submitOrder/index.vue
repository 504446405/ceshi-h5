<template>
  <view class="content">
    <view class="goods-list">
      <image src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=819635182,2054230561&fm=111&gp=0.jpg">
      <view class="goods-data">
        <view class="top">
          <view class="name">维他柠檬茶250ml</view>
          <view class="ml">123</view>
        </view>
        <view class="bottom">
          <text class="number">x1</text>
          <text class="price">123</text>
        </view>
      </view>
    </view>
    <view class="aggregate">
      <view class="text">共两件商品</view>
      <view class="price">
        <text class="left">小计：</text>
        <text class="right">123</text>
      </view>
    </view>
    <view class="footer-btn">
      <view class="left">
        <text class="text">总计：</text>
        <text class="price">123</text>
      </view>
      <button class="right">确认</button>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style lang='scss' scoped>
page {
  background-color: #f1f1f1;
}
.goods-list {
  display: flex;
  align-items: center;
  padding: 20rpx 30rpx;
  background-color: #fff;
  margin-bottom: 20rpx;
  image {
    width: 200rpx;
    height: 200rpx;
    border-radius: 8rpx;
    margin-right: 20rpx;
  }
  .goods-data {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200rpx;
    .top {
    }
    .bottom {
      display: flex;
      justify-content: space-between;
    }
    .name {
      padding-bottom: 10rpx;
      font-size: 30rpx;
      font-weight: 600;
    }
    .ml {
      font-size: 20rpx;
      color: #999999;
    }
    .number {
      font-size: 20rpx;
      color: #999999;
    }
    .price {
      font-size: 32rpx;
      font-weight: 600;
    }
  }
}
.aggregate {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100rpx;
  padding: 20rpx 30rpx;
  background-color: #fff;
  .text {
    font-size: 30rpx;
  }
  .left {
    font-size: 30rpx;
  }
  .right {
    font-size: 34rpx;
    font-weight: 700;
    color: #ff4a4a;
  }
}
.footer-btn {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 140rpx;
  padding: 20rpx 30rpx;
  background-color: #fff;
  .text {
    font-size: 30rpx;
  }
  .price {
    font-size: 34rpx;
    font-weight: 700;
    color: #ff4a4a;
  }
  .right {
    width: 280rpx;
    background-color: #ff4a4a;
    padding: 20rpx 0;
    border-radius: 12rpx;
    font-size: 32rpx;
    color: #fff;
  }
}
</style>