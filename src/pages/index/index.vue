<template>
  <view class="content">
    <!-- <Banner></Banner> -->
    <GoodsData v-if="deviceId"></GoodsData>
    <!-- <FooterBtn state="home" @anewOpen="anewOpen"></FooterBtn> -->
  </view>
</template>

<script >
import { mapState } from "vuex";
import FooterBtn from "../../components/tabble.vue";
import Banner from "../../components/banner.vue";
import GoodsData from "../../components/goodsData.vue";
export default {
  computed: {
    ...mapState(["deviceId"]),
  },
  components: {
    FooterBtn,
    GoodsData,
    Banner,
  },
  data() {
    return {};
  },
  onLoad() {
    if (!this.deviceId) {
      uni.showModal({
        title: "提示",
        content: "获取不到设备编号",
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            jWeixin.miniProgram.getEnv(function (res) {
              jWeixin.miniProgram.navigateBack({});
            });
          }
        },
      });
    }
  },
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
