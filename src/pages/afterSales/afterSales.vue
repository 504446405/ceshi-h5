<template>
  <view>
    <view class="order">
      <view class="orderNum">订单号：{{ order.id }}</view>
      <view class="commodity" v-for="(item, index) in order.items" :key="index">
        <image :src="item.productImage" mode="aspectFill" />
        <view class="commodity_right" style="min-width: 0">
          <view class="title">{{ item.productName }}</view>
          <view>
            <view class="count">
              <view class="money">￥{{ item.price }}</view>
              <view class="num">x{{ item.quantity }}</view>
            </view>
            <view>实付款：￥{{ order.total }}</view>
          </view>
        </view>
      </view>

      <view
        @click="showReasons = true"
        class="item"
        style="justify-content: space-between"
      >
        <view class="d-f">
          <view class="title">申请原因</view>
          <view class="type">{{ form.reason }}</view>
        </view>
        <image
          src="/static/images/icon/down.png"
          mode="aspectFit"
          class="down_icon"
        />
      </view>
    </view>
    <view class="list">
      <view class="title">退款金额</view>
      <view class="money">
        <text style="font-size: 24rpx">￥</text>
        &nbsp;{{ order.total }}
      </view>
    </view>
    <view class="list">
      <view class="title">联系电话</view>
      <input type="number" placeholder="输入号码" v-model="form.mobile" />
    </view>
    <view class="list">
      <textarea
        placeholder="请详细填写申请说明（必填）"
        v-model="form.description"
      ></textarea>
    </view>

    <view class="btn" @click="submit">提交</view>

    <!-- popup -->
    <popup :isShow.sync="showReasons" title="选择原因" :bottom="false">
      <view slot="content">
        <radio-group @change="onReasonChange">
          <view class="group" v-for="(item, index) in reasons" :key="index">
            <label class>
              <radio
                style="transform: scale(0.7)"
                color="#d81e06"
                :value="item"
              />
              <text>{{ item }}</text>
            </label>
          </view>
        </radio-group>
      </view>
    </popup>
  </view>
</template>
<script>
import popup from "@/components/popup/popup.vue";
import { orderInfo } from "@/api/orderList/orderList.js";
import RefundApi from "@/api/refund.js";
import debounce from "debounce";
const reasons = ["设备不出货", "货品质量问题", "其他"];
export default {
  components: {
    popup,
  },
  data() {
    return {
      showReasons: false,
      form: {
        reason: "",
        description: "",
        mobile: "",
      },
      order: {},
    };
  },

  computed: {
    reasons() {
      return reasons;
    },
  },
  onLoad(e) {
    let orderId = e.orderId;
    this.orderId = orderId;
    if (isNaN(orderId)) {
      uni.showToast({
        title: "缺少订单号参数",
        duration: 2000,
      });
      return;
    }
    orderInfo({
      id: orderId,
    }).then((res) => {
      if (!res.refundable) {
        uni.showToast({
          title: "订单异常",
          duration: 2000,
        });
        return;
      }

      this.order = res;
    });
  },
  methods: {
    onReasonChange(e) {
      this.showReasons = false;
      this.form.reason = e.detail.value || "";
    },
    submit: debounce(
      function () {
        let form = this.form;
        if (!form.reason) {
          uni.showToast({
            icon: "none",
            title: "请选择申请原因",
            duration: 2000,
          });
          return;
        }

        if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(form.mobile)) {
          uni.showToast({
            icon: "none",
            title: "请输入正确联系号码",
            duration: 2000,
          });
          return;
        }
        if (!form.description) {
          uni.showToast({
            icon: "none",
            title: "请输入申请说明",
            duration: 2000,
          });
          return;
        }

        let data = {
          ...form,
          orderId: this.orderId,
        };
        uni.showLoading();
        RefundApi.applyRefund(data)
          .then((res) => {
            uni.showToast({
              icon: "success",
              title: "提交成功",
              duration: 1000,
            });
            uni.redirectTo({
              url: "/pages/afterSalesList/index",
            });
          })
          .catch((err) => {
            uni.showToast({
              title: "提交失败",
              icon: "none",
              duration: 2000,
            });
          })
          .finally((res) => {
            uni.hideLoading();
          });
      },
      2000,
      true
    ),
  },
};
</script>
<style>
page {
  background-color: #f2f2f2;
}
</style>
<style lang="scss" scoped>
.order {
  background-color: white;
  .orderNum {
    padding: 15rpx 30rpx;
    border-bottom: 2rpx solid rgba(242, 242, 242, 1);
  }
  .commodity {
    padding: 30rpx;
    display: flex;
    border-bottom: 2rpx solid rgba(242, 242, 242, 1);
    image {
      height: 238rpx;
      width: 238rpx;
      min-width: 238rpx;
    }
  }

  .commodity_right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20rpx;
    .title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .count {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20rpx;
      .money {
        color: #ff5f5f;
      }
      .num {
        color: #aaaaaa;
      }
    }
  }
}

.item {
  padding: 30rpx 25rpx;
  display: flex;
  align-items: center;
  border-bottom: 2rpx solid rgba(242, 242, 242, 1);
  .type {
    font-size: 24rpx;
    margin-left: 30rpx;
  }
  .down_icon {
    height: 40rpx;
    width: 40rpx;
  }
}
.d-f {
  display: flex;
  align-items: center;
}

.list {
  background: white;
  padding: 22rpx 30rpx;
  margin-top: 20rpx;
  display: flex;
  justify-content: space-between;
  .money {
    color: #ff5f5f;
    font-size: 28rpx;
  }
  input {
    text-align: right;
  }
  textarea {
    width: 100%;
  }
}

.title {
  font-weight: bold;
  font-size: 28rpx;
}

.btn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #ff7a7a;
  width: 100%;
  height: 110rpx;
  margin-top: 20rpx;
  text-align: center;
  color: white;
  font-size: 32rpx;
  line-height: 110rpx;
}

.group {
  padding: 10rpx 30rpx;
  text {
    margin-left: 40rpx;
  }
}
</style>