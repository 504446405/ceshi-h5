<template>
  <view class="pageContainer">
    <!-- 订单状态列表 -->
    <scroll-view
      scroll-x
      class="bg-white nav flex-box jc-sb"
      scroll-with-animation
      :scroll-left="scrollLeft"
    >
      <view
        class="cu-item"
        :class="item.id == state ? 'activeColor cur' : ''"
        v-for="(item, index) in states"
        :key="index"
        @tap="tabSelect"
        :data-id="item.id"
        style="width: 20%; text-align: center"
        >{{ item.name ? item.name : "" }}</view
      >
    </scroll-view>
    <view class="list">
      <view
        class="orderGoodItem"
        v-for="(item, index) in listData"
        :key="index"
        :data-id="item.id"
      >
        <view class="flex justify-between align-center itemTop">
          <view class="orderNo">售后单号: {{ item.id }}</view>
          <view class="orderPayType">{{ item.state | formatState }}</view>
        </view>
        <view class="goodList" v-for="(element, num) in item.items" :key="num">
          <good :good="element" :total="item.total"></good>
        </view>
        <view class="flex justify-between align-center itemBottom">
          <view class="flex justify-end align-center btnBox">
            <button
              class="cu-btn msgBtn"
              type="default"
              :data-id="item.id"
              @tap="linkToInfo"
            >
              查看详情
            </button>
            <view
              v-if="item.state == 'PENDING'"
              class="cu-btn applyBtn"
              style="margin-left: 50rpx"
              type="default"
              :data-id="item.id"
              @tap="cancelRefund"
              >取消退款</view
            >
          </view>
        </view>
      </view>
      <view
        v-if="listData.length <= 0"
        class="flex justify-center align-center kongList"
      >
        <image
          class="kongImage"
          src="./../../static/kong.png"
          mode="widthFix"
        />
      </view>
    </view>
  </view>
</template>

<script>
import RefundApi from "@/api/refund.js";
import { getOrderList, cancelOrder } from "@/api/orderList/orderList.js";
import good from "@/components/orderGood/orderGood.vue";

const states = [
  {
    id: "PENDING",
    name: "处理中",
  },
  {
    id: "REFUNDED",
    name: "退款成功",
  },
  {
    id: "REJECTED",
    name: "退款失败",
  },
  {
    id: "CANCELLED",
    name: "已取消",
  },
];

export default {
  data() {
    return {
      state: "PENDING",
      tabCur: 0,
      scrollLeft: 0,
      listData: [],
      from: 0,
      size: 10,
      moreType: false,
      isLoad: true,
    };
  },

  components: {
    good,
  },
  computed: {
    states: function () {
      return states;
    },
  },

  methods: {
    // 申请退款
    cancelRefund(e) {
      let id = e.currentTarget.dataset.id,
        self = this;
      uni.showModal({
        title: "确认取消退款?",
        icon: "none",
        success(res) {
          if (res.confirm) {
            uni.showLoading({
              title: "加载中",
            });
            RefundApi.cancelRefund(id)
              .then((res) => {
                self.from = 0;
                self.getList();
              })
              .catch((err) => {
                uni.showToast({
                  title: "退款失败",
                  icon: "none",
                });
              })
              .finally(() => {
                uni.hideLoading();
              });
          }
        },
        fail(err) {
          console.error(err);
        },
      });
    },

    // 跳转到订单详情
    linkToInfo(e) {
      uni.navigateTo({
        url: `/pages/afterSalesDetail/index?id=${e.currentTarget.dataset.id}`,
      });
    },
    // 导航栏切换
    tabSelect(e) {
      console.log(e);
      let id = e.currentTarget.dataset.id,
        self = this,
        index = states.findIndex((item) => item.id === id);
      self.state = id;
      self.scrollLeft = index * 60;
      self.from = 0;
      self.listData = [];
      self.getList();
    },
    // 获取订单列表
    getList() {
      let self = this,
        param = {
          from: this.from,
          size: this.size,
          state: this.state,
        };

      uni.showLoading({});
      RefundApi.listRefunds(param)
        .then((res) => {
          self.updateList(res);
        })
        .finally(() => {
          uni.hideLoading();
        });
    },
    updateList(res) {
      if (this.from) {
        this.listData = this.listData.concat(res);
      } else {
        this.listData = res;
      }
      if (res.length < 10) {
        this.isLoad = false;
      } else {
        this.moreType = false;
        this.isLoad = true;
      }
    },
  },
  filters: {
    formatState(state) {
      if (state === "PENDING") {
        return "处理中";
      } else if (state === "REFUNDED") {
        return "退款成功";
      } else if (state === "REJECTED") {
        return "退款失败";
      } else if (state === "CANCELLED") {
        return "已取消";
      }
    },
  },
  onReachBottom(e) {
    console.log(e);
    if (!this.isLoad) return false;
    this.from += 10;
    this.getList();
  },
  onLoad(options) {
    this.tabCur = options.tabCur;
    this.scrollLeft = options.tabCur * 60;
    this.getList();
  },
};
</script>
<style>
page {
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  opacity: 1;
}
</style>
<style lang="scss" scoped>
@import "./index.scss";
</style>
