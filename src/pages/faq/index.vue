<template>
  <view class="faq">
    <view class="title">
      <view class="iconfont iconwenhao"></view>常见问题
    </view>
    <view class="faqList" v-for="(v, i) in faqArr" :key="i">
      <view class="one">{{ v.title }}</view>
      <view class="two" v-if="v.text">{{ v.text }}</view>
      <view class="there" v-if="v.texts">{{ v.texts }}</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      faqArr: [
        {
          title: "Q：提示连接失败或长时间未连接成功，请关闭蓝牙再打开重连",
          text:
            "A：请检查手机蓝牙是否已连接其他设备，　如蓝牙耳机；设备是否已被人使用中；请查看蓝牙是否成功打开，如果是开启状态，请关闭再重新打开尝试连接。",
          texts: "",
        },
        {
          title: "Q：IOS 13连接接蓝牙失败",
          text: "A：IOS 13开始微信蓝牙功能需要系统授权才能使用",
          texts:
            "打开手机“设置”下拉列表找到“微信”点击进入菜单, 打开微信蓝牙授权。",
        },
        {
          title: "Q：手机连接蓝牙提示蓝牙未开启(实际已开启)",
          text:
            "A：打开手机“设置”，“应用管理”找到“微信”，授权蓝牙功能，苹果手机可直接在“设置”中找到微信应用授权蓝牙功能",
        },

        {
          title: "Q：支持成功后开门失败",
          text:
            "A：请确保已经点击支付后的“完成”按钮，支付成功后会跳转支付成功页面，可点击重新开门按钮重新开门; 首页也可点击重新开门按钮，都可在规定时间内重新打开售货机柜门; 如果以上方法都无效，请联系客服人员。",
          texts: "",
        },
        {
          title: "Q：门打开后没货",
          text: "A：请联系酒店人员或在线客服。",
          texts: "",
        },
        {
          title: "Q：扫码后无法进行购买，提示设备电量过低",
          text:
            "A：当蓝牙售货机电量过低，无法正常购物，请联系酒店人员或在线客服。",
          texts: "",
        },
      ],
    };
  },
  onLoad() {},
  onShow() {},
  onShareAppMessage() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
page {
  background-color: #f5f5f5;
}
.faq {
  padding: 0 30rpx;
}
.title {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  font-size: 40rpx;
  font-weight: 400;
  color: rgba(41, 41, 41, 1);
  padding: 34rpx 0;
  view {
    padding-right: 10rpx;
  }
}
.faqList {
  padding: 20rpx 30rpx;
  background: rgba(255, 255, 255, 1);
  border-radius: 8rpx;
  margin-bottom: 24rpx;
  .one {
    font-size: 28rpx;
    font-family: PingFang SC;
    font-weight: 600;
    color: rgba(45, 45, 45, 1);
    padding-bottom: 24rpx;
  }
  .two,
  .there {
    font-size: 24rpx;
    font-family: PingFang SC;
    font-weight: 300;
    color: rgba(120, 120, 120, 1);
    padding-bottom: 24rpx;
  }
}
</style>
