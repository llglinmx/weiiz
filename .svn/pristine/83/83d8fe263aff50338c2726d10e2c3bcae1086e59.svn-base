<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<view class="box-head-title flex-center">
				支付成功
			</view>
		</view>
		<view class="box-content">
			<view class="box-content-wrap">
				<view class="box-content-wrap-icon">
					<text class="iconfont iconzhifuchenggong icon-font"
						style="color: #26BF82;font-size: 160rpx;"></text>
				</view>
				<view class="box-content-wrap-title">
					订单支付成功
				</view>
				<view class="box-content-wrap-text">
					支付金额：<text style="color: red;">￥{{price | toFixed}}</text>
				</view>
				<view class="box-content-wrap-list">
					<view class="box-content-wrap-btn-order flex-center" @click="viewOrder">查看订单</view>
					<view class="box-content-wrap-btn-color flex-center" @click="goIndex">回到首页</view>
				</view>
			</view>
			<view class="box-content-main">
				<view class="box-content-main-text">
					温馨提示：
				</view>
				<view class="box-content-main-text">
					平台不会以订单异常、系统升级为由要求您点击任何网址链接进行退款操作。
				</view>
			</view>
		</view>
		<view class="box-footer">

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				price: 0,
			};
		},
		filters: {
			toFixed(val) {
				return val.toFixed(2)
			},
		},
		onReady() {
			// 获取顶部电量状态栏高度
			uni.getSystemInfo({
				success: (res) => {
					this.barHeight = res.statusBarHeight
				}
			});
		},
		onLoad(options) {
			this.price =Number( options.price)
		},
		methods: {
			// 查看订单
			viewOrder() {
				uni.navigateTo({
					url: "../../pagesMineTwo/allOrder/allOrder?listIndex=2"
				})
			},
			// 回到首页
			goIndex() {
				uni.redirectTo({
					url: "../../pages/index/index"
				})
			},
		}
	}
</script>

<style lang="scss">
	.box {
		display: flex;
		flex-direction: column;
		height: 100%;

		.box-head {
			background-color: #fff;

			.box-head-title {
				height: 88rpx;
				font-size: 34rpx;
				font-family: Source Han Sans CN;
				font-weight: 500;
				color: #000000;
			}
		}

		.box-content {
			display: flex;
			flex-direction: column;
			flex: 1;
			padding: 0 40rpx;
			box-sizing: border-box;
			overflow-y: scroll;
			font-family: Source Han Sans CN;
			font-weight: 400;

			.box-content-wrap {
				flex: 1;
				border-bottom: 1rpx solid #ededed;

				.box-content-wrap-icon {
					display: flex;
					align-items: center;
					justify-content: center;
					margin-top: 100rpx;

					image {
						width: 160rpx;
						height: 160rpx;
					}
				}

				.box-content-wrap-title {
					margin: 30rpx 0 40rpx;
					font-size: 36rpx;
					color: #1A1717;
					text-align: center;
				}

				.box-content-wrap-text {
					font-size: 28rpx;
					text-align: center;
					color: #999999;
				}

				.box-content-wrap-list {
					display: flex;
					align-items: center;
					justify-content: center;
					margin-top: 100rpx;
					font-size: 28rpx;

					.box-content-wrap-btn-order {
						width: 256rpx;
						height: 68rpx;
						margin-right: 40rpx;
						border-radius: 34rpx;
						border: 1px solid #CCCCCC;

						color: #666666;
					}

					.box-content-wrap-btn-color {
						width: 256rpx;
						height: 68rpx;
						border-radius: 34rpx;
						border: 1rpx solid #FF8366;

						color: #FF8366;
					}
				}

			}

			.box-content-main {
				padding-top: 50rpx;
				flex: 1;

				.box-content-main-text {
					font-size: 24rpx;
					color: #999;
				}
			}
		}

		.box-footer {}
	}
</style>
