<template>
  <view class="content">
    <view class="header">
      <swiper indicator-dots autoplay>
        <swiper-item>
          <image
            src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3118956596,1809570833&fm=26&gp=0.jpg"
          />
        </swiper-item>
      </swiper>
    </view>
    <GoodsData></GoodsData>
    <FooterBtn
      @anewOpen="anewOpen"
      @scanCode="scanCode"
      @goMine="goMine"
    ></FooterBtn>
  </view>
</template>

<script >
import FooterBtn from "../../components/tabble.vue";
import GoodsData from "../../components/goodsData.vue";
export default {
  components: {
    FooterBtn,
    GoodsData,
  },
  data() {
    return {};
  },
  onLoad() {},
  methods: {
    anewOpen() {},
    scanCode() {},
    goMine() {},
  },
};
</script>

<style lang='scss' scoped>
page {
  background-color: #f1f1f1;
}
.content {
  padding-bottom: 160rpx;
}
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
