<template>
	<view class="flex justify-between align-start good">
		<image class="goodImage" :src="good.productImage"></image>
		<view class="flex justify-start align-start info">
			<!-- 商品名 -->
			<view class="text-cut1 name">{{good.productName}}</view>
			<!-- 商品规格 -->
			<view class="specification">
				<view v-if="good.options != ''" class="specificationBox">
					<view class="specificationItem" v-if="locationName" >
                        <text v-if="orderStateIdx!=1">购买场地：{{locationName}}</text>
                    </view>
					<view 
					v-if="createdDate"
					class="specificationItem orderTime">
					下单时间：{{$timeFormat(createdDate)}}</view>
				</view>
			</view>
			<!-- 商品价格、数量 -->
			<view v-if="total>0" class="flex justify-start align-center infoBottom">
				<view class="tipText">实付款：</view>
				<view class="price">￥{{total}}</view>
			</view>
			<view v-else class="flex justify-start align-center infoBottom">
				<view class="price">￥{{good.price}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "good",
		props: {
			good: {
				type: Object,
				default: {}
			},
			locationName: {
				type: String,
				default: ''
			},
			createdDate: {
				type: Number,
				default: 0
			},
			total: {
				type: Number,
				default: 0
			},
			orderStateIdx: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {

			};
		},
		created: function(e) {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.good {
		width: 100%;
		padding: 22rpx 30rpx 53rpx 30rpx;
		background-color: #FFFFFF;
        display: flex;
		.goodImage {
			width: 238rpx;
			height: 238rpx;
		}
		.info {
			flex: 1;
			flex-direction: column;
			padding-left: 20rpx;
			.name {
				/*width: 100%;*/
				font-size:28rpx;
				font-weight:400;
				line-height:20px;
				color:rgba(0,0,0,1);
				opacity:1;
			}
			.text-cut1{
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}
			.specification {
				width: 100%;
				margin-top: 49rpx;
				.specificationBox {
					width: 100%;
					.specificationItem {
						font-size:24rpx;
						font-weight:400;
						line-height:35rpx;
						color:rgba(112,112,116,1);
						opacity:1;
						margin-bottom: 4rpx;
					}
					.specificationItem:last-child {
						margin-top: 27rpx;
					}
				}
				.kongTip {
					font-size:28rpx;
					font-weight:400;
					line-height:40rpx;
					color:rgba(0,0,0,1);
					opacity:1;
				}
			}
			.infoBottom {
				width: 100%;
				margin-top: 15rpx;
				.price {
					font-size:24rpx;
					font-weight:400;
					color:rgba(255,122,122,1);
					line-height:35rpx;
					opacity:1;
				}
				.tipText {
					font-size:24rpx;
					font-weight:400;
					color:rgba(57,57,57,1);
					line-height:35rpx;
					opacity:1;
				}
			}
		}
	}
</style>
