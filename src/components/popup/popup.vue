<template>
	<view class="popup" @touchmove.stop="discard" :class="defaultClass" @click="hide">
		<view class="mask">
			<view class="content" :class="[popupBg,radius?'popup_radius':'']" @click.stop="discard">
				<image @click="hide" :src="require('./cancel-icon.png')" class="hide_icon" mode="aspectFit"></image>
				<view class="title">{{title}}</view>
				<view style="clear: both;"></view>
				<slot name="content"></slot>
				<slot name="bottom"></slot>
				<view class="content_bottom" v-if="bottom">
					<view @click="allRight" class="bottom">{{bottomText}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			isShow: {
				type: Boolean,
				default: false
			},
			popupBg: {
				type: String,
				default: ''
			},
			title:{
				type:String,
			},
			bottom: {
				type: Boolean,
				default: true
			},
			bottomText: {
				type: String,
				default: '完成'
			},
			radius:{
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				defaultClass:''
			}
		},
		watch:{
			isShow(newD){
				if(newD) {
					this.show()
				}else{
					this.hide()
				}
			}
		},
		methods: {
			// 点击按钮
			allRight() {
				this.$emit('success');
			},

			discard() {
				// 阻止父级穿透用的
			},
			show() {
				this.defaultClass = '';
				this.defaultClass = 'show';
			},
			hide() {
				this.defaultClass = 'hide';
				this.$emit('hide',false)
				setTimeout(() => {
					this.defaultClass = '';
					this.$emit('update:isShow',false)
				}, 150)
			},
		}
	}
</script>


<style lang="scss" scoped>
	.bg-white {
		background-color: white;
	}

	@keyframes showPopup {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes showcontent {
		0% {
			transform: translateY(0);
		}

		100% {
			transform: translateY(-100%);
		}
	}

	@keyframes hidePopup {
		0% {
			opacity: 1;
		}

		100% {
			opacity: 0;
		}
	}

	@keyframes hidecontent {
		0% {
			transform: translateY(-100%);
		}

		100% {
			transform: translateY(0);
		}
	}

	.popup {
		display: none;

		&.show {
			display: block;

			.mask {
				animation: showPopup 0.15s linear both;
			}

			.content {
				animation: showcontent 0.15s linear both;
			}
		}

		&.hide {
			display: block;

			.mask {
				animation: hidePopup 0.15s linear both;
			}

			.content {
				animation: hidecontent 0.15s linear both;
			}
		}

		.mask {
			background-color: rgba(0, 0, 0, .5);
			position: fixed;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			z-index: 11;
		}

		.content {
			width: 100%;
			position: fixed;
			z-index: 12;
			top: calc(100% - var(--window-bottom));
			height: 400rpx;
			background-color: white;
			.hide_icon {
				position: absolute;
				width: 50rpx;
				height: 50rpx;
				right: 20rpx;
				top: 20rpx;
			}
			.title{
				text-align: center;
				color: #3A3A3A;
				margin-top:30rpx;
				font-size: 32rpx;
				font-weight: bold;
			}
		}
	}

	.content_bottom {
		position: absolute;
		bottom: 0;
		width: 100%;

		.bottom {
			background: linear-gradient(to right, rgba(255, 83, 59, 0.7), #ff533b);
			display: flex;
			justify-content: center;
			align-items: center;
			color: white;
			border-radius: 50rpx;
			padding: 20rpx;
			margin: 20rpx 30rpx;
			font-size: 26rpx;
		}
	}
	.popup_radius {
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		height: 600rpx;
	}
</style>
