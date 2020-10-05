<template>
  <view class="footer">
    <view class="left" @click="anewOpen">
      <view class="icon iconfont iconshouye com-img-active"></view>首页
    </view>
    <view class="center" @click="anewOpen">
      <view class="content">
        <image src="../static/icon_open_nor.png" />重新开门</view
      >
    </view>
    <view class="right" @click="goMine">
      <view class="icon iconfont icongerenye com-img-active"></view>我的
    </view>
  </view>
</template>
<script >
export default {
  props: {
    deviceId: {
      type: String,
      default: "",
    },
    loginBl: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    anewOpen() {
      this.$emit("anewOpen");
    },
    scanCode() {
      this.$emit("scanCode");
    },
    goMine() {
      this.$emit("goMine");
    },
  },
};
</script>
<style lang='scss' scoped>
// 底部
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  width: 100%;
  height: 120rpx;
  box-shadow: 0rpx 1rpx 20rpx rgba(206, 206, 206, 0.24);
  background-color: #fff;

  .left {
    flex: 1;
    text-align: center;
    font-size: 24rpx;
    font-weight: 400;
    color: #ff4a4a;

    .icon {
      font-size: 60rpx;
    }
  }

  .center {
    flex: 1;
    position: relative;
    .content {
      position: absolute;
      top: -104rpx;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      font-size: 24rpx;
      font-weight: 400;
      color: #999999;
      image {
        width: 120rpx;
        height: 120rpx;
      }
    }
  }
  .right {
    flex: 1;
    text-align: center;
    font-size: 24rpx;
    font-weight: 400;
    color: #999999;
    .icon {
      font-size: 60rpx;
    }
  }
}
</style>