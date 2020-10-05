<template>
  <view class="pageContainer">
    <headerNavigation title="售后单详情" :backBl="true"></headerNavigation>

    <view class="header">
      <view v-if="detail.state == 'PENDING'">
        <view class="title">申请已提交, 等待商家处理中......</view>
      </view>
      <view v-else-if="detail.state == 'CANCELLED'">
        <view class="title">退款已取消</view>
      </view>
      <view v-else-if="detail.state == 'REFUNDED'">
        <view class="title">退款已完成</view>
      </view>
      <view v-else-if="detail.state == 'REJECTED'">
        <view class="title">商家拒绝退款, 退款失败</view>
      </view>
    </view>
    <view class="detail">
      <!-- 订单商品 -->
      <view class="list">
        <view class="orderGoodItem">
          <view class="flex justify-between align-center itemTop">
            <view class="orderNo">退款单号:{{ detail.id }}</view>
          </view>
          <view
            class="goodList"
            v-for="(element, num) in detail.items"
            :key="num"
          >
            <good :good="element"></good>
          </view>
        </view>
      </view>
      <view class="pageBottom">
        <view class="orderInfo">
          <view class="title">
            <text class="cuIcon-titles"></text>
            <text class="titleText">退款信息</text>
          </view>
          <view class="info">
            <view class="flex justify-start align-center infoItem">
              <view class="infoTitle">退款单号:</view>
              <view class="msg">{{ detail.id }}</view>
            </view>
            <view class="flex justify-start align-center infoItem">
              <view class="infoTitle">状态:</view>
              <view class="msg">{{ detail.state | formatState }}</view>
            </view>

            <view class="flex justify-start align-center infoItem">
              <view class="infoTitle">申请时间:</view>
              <view class="msg">{{
                detail.createdDate ? $timeFormat(detail.createdDate) : ""
              }}</view>
            </view>

            <view class="flex justify-start align-center infoItem">
              <view class="infoTitle">申请原因:</view>
              <view class="msg">{{ detail.reason || "" }}</view>
            </view>
            <view class="flex justify-start align-center infoItem">
              <view class="infoTitle">联系手机:</view>
              <view class="msg">{{ detail.mobile || "" }}</view>
            </view>
            <view class="flex justify-start align-center infoItem">
              <view class="infoTitle">申请说明:</view>
              <view class="msg">{{ detail.description || "" }}</view>
            </view>
            <view class="flex justify-start align-center infoItem">
              <view class="infoTitle">申请金额:</view>
              <view class="msg">￥{{ detail.refundTotalApplied }}</view>
            </view>
          </view>
        </view>
        <view class="orderInfo">
          <view class="title">
            <text class="cuIcon-titles"></text>
            <text class="titleText">订单信息</text>
          </view>
          <view class="info">
            <view class="flex justify-start align-center infoItem">
              <view class="infoTitle">订单编号:</view>
              <view class="msg">{{ detail.id }}</view>
            </view>
            <view class="flex justify-start align-center infoItem">
              <view class="infoTitle">下单时间:</view>
              <view
                v-if="detail.order && detail.order.createdDate"
                class="msg"
                >{{ $timeFormat(detail.order.createdDate) }}</view
              >
            </view>
            <view
              class="flex justify-start align-center infoItem"
              v-if="detail.order.device"
            >
              <view class="infoTitle">使用设备:</view>
              <view class="msg">{{ detail.order.device.id }}</view>
            </view>
            <view
              class="flex justify-start align-center infoItem"
              v-if="detail.order.location"
            >
              <view class="infoTitle">使用场地:</view>
              <view class="msg">{{ detail.order.location.name }}</view>
            </view>
          </view>
        </view>
        <view
          class="orderInfo"
          v-if="detail.state == 'REFUNDED' || detail.state == 'REJECTED'"
        >
          <view class="title">
            <text class="cuIcon-titles"></text>
            <text class="titleText">处理信息</text>
          </view>
          <view class="info">
            <view
              class="flex justify-start align-center infoItem"
              v-if="detail.handledDate"
            >
              <view class="infoTitle">处理时间:</view>
              <view class="msg">{{
                detail.handledDate ? $timeFormat(detail.handledDate) : ""
              }}</view>
            </view>
            <view
              class="flex justify-start align-center infoItem"
              v-if="detail.refundTotal > 0"
            >
              <view class="infoTitle">退款金额:</view>
              <view class="msg">￥{{ detail.refundTotal }}</view>
            </view>
            <view class="flex justify-start align-center infoItem">
              <view class="infoTitle">商家留言:</view>
              <view class="msg">{{ detail.remark || "" }}</view>
            </view>
          </view>
        </view>
      </view>
      <!-- 订单按钮处理 -->

      <view class="flex align-center orderBtnBox">
        <button
          class="cu-btn cancelBtn"
          type="default"
          v-if="detail.state == 'PENDING'"
          @tap="cancelRefund"
        >
          取消退款
        </button>
        <button class="cu-btn orderBtn" type="default" @tap="gotoOrder">
          查看订单
        </button>
      </view>
    </view>
  </view>
</template>

<script>
import RefundApi from "@/api/refund.js/";
import good from "@/components/orderGood/orderGood.vue";

export default {
  data() {
    return {
      detail: {},
    };
  },
  components: {
    good,
  },
  onLoad(options) {
    this.id = options.id;
    this.getDetail();
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

  methods: {
    gotoOrder() {
      if (this.detail.order.id) {
        uni.navigateTo({
          url: `/pages/orderDetails/index?id=${this.detail.order.id}`,
        });
      }
    },
    // 取消订单
    cancelRefund(e) {
      let id = this.id,
        self = this;
      uni.showModal({
        title: "确认取消退款?",
        icon: "none",
        success(res) {
          if (res.confirm) {
            uni.showLoading();
            RefundApi.cancelRefund(id)
              .then((res) => {
                self.getDetail();
              })
              .finally(() => {
                uni.hideLoading();
              });
          }
        },
      });
    },

    // 获取订单详情
    getDetail() {
      uni.showLoading();
      RefundApi.getRefund(this.id)
        .then((res) => {
          this.detail = res;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          uni.hideLoading();
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
