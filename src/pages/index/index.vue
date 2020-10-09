<template>
  <view class="content">
    <!-- <Banner></Banner> -->
    <GoodsData></GoodsData>
    <!-- <FooterBtn state="home" @anewOpen="anewOpen"></FooterBtn> -->
  </view>
</template>

<script >
import FooterBtn from "../../components/tabble.vue";
import Banner from "../../components/banner.vue";
import GoodsData from "../../components/goodsData.vue";
export default {
  components: {
    FooterBtn,
    GoodsData,
    Banner,
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
// .content {
//   padding-bottom: 160rpx;
// }
</style>
