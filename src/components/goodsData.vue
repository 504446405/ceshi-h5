<template>
  <view class="box">
    <view class="goods-data">
      <image
        src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=819635182,2054230561&fm=111&gp=0.jpg"
      />
      <view class="text a-single-file"
        >广州富力足球俱乐部今日(1月4 日)宣布,从即日起</view
      >
      <view class="price">￥1.00</view>
    </view>
    <view class="goods-data">
      <image
        src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=819635182,2054230561&fm=111&gp=0.jpg"
      />
      <view class="text a-single-file"
        >广州富力足球俱乐部今日(1月4 日)宣布,从即日起</view
      >
      <view class="price">￥1.00</view>
    </view>
    <view class="goods-data">
      <image
        src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=819635182,2054230561&fm=111&gp=0.jpg"
      />
      <view class="text a-single-file"
        >广州富力足球俱乐部今日(1月4 日)宣布,从即日起</view
      >
      <view class="price">￥1.00</view>
    </view>
  </view>
</template>
<script >
export default {
  props: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style lang='scss' scoped>
.box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20rpx;
  background-color: #fff;
  .goods-data {
    width: 344rpx;
    padding-bottom: 20rpx;
    margin-bottom: 20rpx;
    border-radius: 8rpx;
    overflow: hidden;
    border: 1px solid #e5e5e5;
    image {
      width: 340rpx;
      height: 340rpx;
    }
    .text {
      font-size: 22rpx;
      font-weight: 400;
      color: #333333;
      padding: 20rpx 10rpx;
    }
    .price {
      font-size: 36rpx;
      font-weight: 600;
      color: #ff4b34;
      padding: 0 10rpx;
    }
  }
}
</style>