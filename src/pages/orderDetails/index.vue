<template>
  <view class="pageContainer">
    <headerNavigation title="订单详情" :backBl="true"></headerNavigation>
    <view class="detail">
      <!-- 地址 -->
      <view class="address">
        <view class="addressTop">
          <view class="name"
            >购买场地：{{
              orderMsg.location ? orderMsg.location.name : ""
            }}</view
          >
          <view class="phone"
            >联系电话：{{
              orderMsg.location
                ? orderMsg.location.mobile
                  ? orderMsg.location.mobile
                  : ""
                : ""
            }}</view
          >
        </view>
        <view class="addressMiddle" v-if="orderMsg.location">
          <view class="addressMsg1"
            >{{ orderMsg.location.province }}{{ orderMsg.location.city
            }}{{ orderMsg.location.district }}{{ orderMsg.location.street
            }}{{ orderMsg.location.name }}</view
          >
        </view>
      </view>
      <!-- 订单商品 -->
      <view class="list">
        <view class="orderGoodItem">
          <view class="itemTop">
            <view class="orderNo">订单号:{{ orderMsg.id }}</view>
          </view>
          <view
            class="goodList"
            v-for="(element, num) in orderMsg.items"
            :key="num"
          >
            <good
              :good="element"
              :locationName="orderMsg.locationName"
              :createdDate="orderMsg.createdDate"
            ></good>
          </view>
          <view class="itemBottom">
            <view class="num">共{{ orderMsg.totalQuantity || 0 }}件商品</view>
            <view class="totalPrice">
              <view class="title">小计：</view>
              <view class="price">￥{{ orderMsg.total || 0 }}</view>
            </view>
          </view>
        </view>
      </view>
      <view class="pageBottom">
        <!-- 订单信息 -->
        <view class="orderInfo">
          <view class="title">
            <text class="cuIcon-titles"></text>
            <text class="titleText">费用明细</text>
          </view>
          <view class="info">
            <view class="infoItem">
              <view class="infoTitle">商品总额：</view>
              <view class="msg">{{ orderMsg.total || 0 }}</view>
            </view>
            <view class="infoItem">
              <view class="infoTitle">优惠券:</view>
              <view class="msg">{{
                orderMsg.coupon
                  ? orderMsg.coupon.couponName
                    ? orderMsg.coupon.couponName
                    : "无优惠券"
                  : ""
              }}</view>
            </view>
            <view class="infoItem">
              <view class="infoTitle">积分抵扣:</view>
              <view class="msg">{{ orderMsg.creditsReduction || 0 }}</view>
            </view>
            <view class="infoItem">
              <view class="infoTitle">实付款：</view>
              <view class="msg">{{ orderMsg.totalPaid || 0 }}</view>
            </view>
          </view>
        </view>
        <!-- 物流信息 -->
        <view class="logisticsInfo">
          <view class="title">
            <text class="cuIcon-titles"></text>
            <text class="titleText">订单信息</text>
          </view>
          <view class="info">
            <view class="infoItem">
              <view class="infoTitle">订单状态:</view>
              <view class="msg">{{
                orderMsg.state == "PENDING"
                  ? "待付款"
                  : orderMsg.state == "WAITING_GROUP"
                  ? "待成团"
                  : orderMsg.state == "CANCELLED"
                  ? "已取消"
                  : orderMsg.state == "TO_SHIP"
                  ? "待发货"
                  : orderMsg.state == "SHIPPED"
                  ? "待收货"
                  : orderMsg.state == "COMPLETED"
                  ? "已完成"
                  : ""
              }}</view>
            </view>
            <view class="infoItem">
              <view class="infoTitle">订单编号:</view>
              <view class="msg">{{ orderMsg.id }}</view>
            </view>
            <view class="infoItem">
              <view class="infoTitle">下单时间:</view>
              <view class="msg">{{
                orderMsg.createdDate ? $timeFormat(orderMsg.createdDate) : ""
              }}</view>
            </view>
            <view class="infoItem">
              <view class="infoTitle">付款时间:</view>
              <view class="msg">{{
                orderMsg.payTime ? $timeFormat(orderMsg.payTime) : ""
              }}</view>
            </view>
          </view>
        </view>
      </view>
      <!-- 订单按钮处理 -->
      <view class="orderBtnBox">
        <navigator
          v-if="
            orderMsg.state == 'COMPLETED' &&
            refundable &&
            orderMsg.type === 'QUXIA'
          "
          :url="'/pages/afterSales/afterSales?orderId=' + orderMsg.id"
          class="cu-btn applyBtn"
          type="default"
          :data-id="item.id"
          >申请退款</navigator
        >
      </view>
    </view>
  </view>
</template>

<script>
import { orderInfo } from "@/api/orderList/orderList.js";
import good from "@/components/orderGood/orderGood.vue";

export default {
  data() {
    return {
      id: "",
      orderMsg: {},
      refundable: false,
    };
  },
  components: {
    good,
  },
  onLoad(options) {
    console.log("options", options);
    this.id = options.id;
    this.refundable = options.refundable === "true";
    this.getOrderInfo();
  },
  onShareAppMessage() {
    return {
      title: "自定义分享标题",
      path: "/pages/index/index",
    };
  },
  methods: {
    // 获取订单详情
    getOrderInfo() {
      orderInfo({ id: this.id }).then((res) => {
        this.orderMsg = res;
      });
    },
  },
};
</script>
<style>
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
