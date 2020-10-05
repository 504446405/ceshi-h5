<template>
  <view class="pageContainer">
    <!-- 订单状态列表 -->
    <view class="list">
      <view
        class="orderGoodItem"
        v-for="(item, index) in listData"
        :key="index"
        :data-id="item.id"
      >
        <view class="itemTop">
          <view class="orderNo">订单号:{{ item.id }}</view>
          <block v-if="tabId != 'tongcheng'">
            <view v-if="item.state == 'PENDING'" class="orderPayType"
              >待付款</view
            >
            <view v-if="item.state == 'WAITING_GROUP'" class="orderPayType"
              >待成团</view
            >
            <view v-if="item.state == 'CANCELLED'" class="orderPayType"
              >已取消</view
            >
            <view v-if="item.state == 'TO_SHIP'" class="orderPayType"
              >待发货</view
            >
            <view v-if="item.state == 'SHIPPED'" class="orderPayType"
              >待收货</view
            >
            <view v-if="item.state == 'COMPLETED'" class="orderPayType"
              >已完成</view
            >
            <view v-if="item.state == 'PAID'" class="orderPayType">已支付</view>
          </block>
        </view>
        <view class="goodList" v-for="(element, num) in item.items" :key="num">
          <good
            :good="element"
            :locationName="item.locationName"
            :createdDate="item.createdDate"
            :total="item.total"
          ></good>
        </view>
        <view class="itemBottom">
          <view class="btnBox">
            <view class="timer" v-if="item.timer">{{ item.timerStr }}</view>
            <button
              class="cu-btn msgBtn"
              type="default"
              :data-id="item.id"
              @tap="linkToInfo(item.id, item.refundable)"
            >
              查看详情
            </button>
            <button
              v-if="item.state == 'COMPLETED' && item.refundable"
              class="cu-btn applyBtn com-active"
              style="margin-left: 50rpx"
              type="default"
              :data-id="item.id"
              @tap="returnOrder"
            >
              {{ "申请退款" }}
            </button>
          </view>
        </view>
      </view>
      <view v-if="listData.length <= 0" class="kongList">
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
import good from "@/components/orderGood/orderGood.vue";
import { getOrderList, cancelOrder } from "@/api/orderList/orderList.js";
export default {
  data() {
    return {
      tabId: "",
      scrollLeft: 0,
      listData: [],
      from: 0,
      size: 10,
      params: {
        from: 0,
        state: "COMPLETED",
        size: 10,
      },
      moreType: false,
      isLoad: true,
    };
  },
  components: {
    good,
  },
  computed: {
    tabs: function () {
      return this.getTabs();
    },
  },
  methods: {
    returnOrder(e) {
      let id = e.currentTarget.dataset.id;
      uni.navigateTo({
        url: `/pages/afterSales/afterSales?orderId=${id}`,
      });
    },
    getTabs() {
      let tabs = [
        {
          id: "QUXIA",
          name: "售货机订单",
        },
      ];
      return tabs;
    },
    // 跳转到订单详情
    linkToInfo(id, refundable) {
      let url = "";
      url = `/pages/orderDetails/index?id=${id}&refundable=${refundable}`;
      uni.navigateTo({
        url,
      });
    },
    // 导航栏切换
    tabSelect(e) {
      // self.getList();
    },
    // 获取订单列表
    getList() {
      let param = {
        from: this.from,
        size: this.size,
        type: this.tabId,
        state: "COMPLETED",
      };
      getOrderList(param).then((res) => {
        this.updateList(res);
      });
    },
    updateList(res) {
      let that = this;
      if (this.from) {
        that.listData = that.listData.concat(res);
      } else {
        that.listData = res;
      }
      // 分页相关
      if (res.length < 10) {
        that.isLoad = false;
      } else {
        that.moreType = false;
        that.isLoad = true;
      }
    },
  },
  onReachBottom(e) {
    if (!this.isLoad) return;
    this.from += 10;
    this.getList();
  },
  onLoad(options) {
    this.tabId = this.tabs[0].id;
  },
  onShow() {
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
