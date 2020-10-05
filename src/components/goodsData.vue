<template>
  <view class="box">
    <view
      class="goods-data"
      @click="goDetails(v)"
      v-for="v in goodsArr"
      :key="v.number"
    >
      <image :src="v.displayImage || v.image" />
      <view class="text a-single-file">{{ v.name }}</view>
      <view class="price" v-if="v.stock == 0">售 罄</view>
      <view class="price" v-else> ￥{{ v.price }} </view>
    </view>
  </view>
</template>
<script >
import { mapState } from "vuex";
import { getGoodsListLogin } from "../api/home/index.js";
export default {
  props: {},
  data() {
    return {
      goodsArr: [],
    };
  },
  created() {
    this.getList();
  },
  computed: {
    ...mapState(["deviceId"]),
  },
  methods: {
    // 获取商品列表
    getList() {
      let deviceId = this.deviceId; //设备id
      getGoodsListLogin({ deviceId }).then((res) => {
        if (res) {
          this.goodsArr = res;
        }
      });
    },
    goDetails(v) {
      uni.navigateTo({
        url: `/pages/goodsDetails/index?id=${v.productId}&number=${v.number}&deviceId=${this.deviceId}`,
      });
    },
  },
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