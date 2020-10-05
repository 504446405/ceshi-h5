<template>
  <view class="pageContainer">
    <!-- 个人信息 -->
    <view class="info">
      <!-- 背景图片 -->
      <image class="infoBg" src="./../../static/bg-mime-top.png" />
      <!-- 姓名、头像 -->
      <view class="msg">
        <image class="avatar" src="../../static/default.png" />
        <view class="name">匿名用户</view>
      </view>
    </view>
    <!-- 功能列表 -->
    <view class="funList">
      <navigator url="/pages/orderList/index" class="funItem">
        <text class="iconfont icondingdan funIcon"></text>
        <view class="funRight">
          <view class="funText">我的订单</view>
          <view class="iconBox">
            <view class="cuIcon-right"></view>
          </view>
        </view>
      </navigator>
      <navigator url="/pages/afterSalesList/index" class="funItem">
        <text class="iconfont iconhuiguishouhouhong funIcon"></text>
        <view class="funRight">
          <view class="funText">售后/退款</view>
          <view class="iconBox">
            <view class="cuIcon-right"></view>
          </view>
        </view>
      </navigator>
      <navigator url="/pages/faq/index" class="funItem">
        <text class="iconfont iconchangjianwenti funIcon"></text>
        <view class="funRight">
          <view class="funText">常见问题</view>
          <view class="iconBox">
            <view class="cuIcon-right"></view>
          </view>
        </view>
      </navigator>
    </view>
    <FooterBtn state="mine" @anewOpen="anewOpen"></FooterBtn>
  </view>
</template>

<script>
import FooterBtn from "../../components/tabble.vue";
export default {
  components: {
    FooterBtn,
  },
  data() {
    return {};
  },
  methods: {},
  onLoad() {},
  onShareAppMessage() {},
};
</script>

<style lang="scss">
page {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
}
</style>
<style lang="scss" scoped>
@import "./index.scss";
</style>
