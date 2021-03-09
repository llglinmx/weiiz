<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="支付订单"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content-wrap">
				<view class="box-content-wrap-msg-time">
					支付剩余时间 44:50
				</view>
				<view class="box-content-wrap-price">
					￥<text>80.00</text>
				</view>
				<view class="box-content-wrap-text">
					罗约蓝池·温泉SPA(集美门店)
				</view>
			</view>
			<view class="box-content-info">
				<view class="box-content-info-left">
					<view class="box-content-info-text">
						余额支付
					</view>
					<view class="box-content-info-msg">
						当前余额:￥50.00
					</view>
				</view>
				<view class="box-content-info-check">
					<image src="../../static/images/no-check-coupons.png" mode="aspectFill"></image>
				</view>
			</view>

			<view class="box-content-list">
				<view class="box-content-list-li" v-for="(item,index) in 3">
					<view class="box-content-list-li-all">
						<view class="box-content-list-li-all-image"></view>
						<view class="box-content-list-li-all-title">微信</view>
					</view>
					<view class="box-content-list-li-check">
						<image src="../../static/images/no-check-coupons.png" mode="aspectFill"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="box-footer">
			<btn-pink btnName="确认支付" @btnClick="confirmPay"></btn-pink>
		</view>
	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	import btnPink from "../../components/btnPink/btnPink.vue"
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
			};
		},
		components: {
			navTitle,
			btnPink
		},
		onReady() {
			// 获取顶部电量状态栏高度
			uni.getSystemInfo({
				success: (res) => {
					this.barHeight = res.statusBarHeight
				}
			});
		},
		methods: {
			// 确认支付按钮
			confirmPay() {
				uni.navigateTo({
					url: "../paymentSuccessful/paymentSuccessful"
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
		background: #fff;

		.box-head {
			background-color: #fff;
		}

		.box-content {
			flex: 1;
			overflow-y: scroll;
			padding: 0 40rpx;
			box-sizing: border-box;

			.box-content-wrap {
				padding: 40rpx 0 80rpx;
				box-sizing: border-box;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				border-bottom: 1rpx solid #ededed;

				.box-content-wrap-msg-time {
					text-align: center;
					font-size: 28rpx;
					color: #999;
				}

				.box-content-wrap-price {
					margin: 30rpx 0;
					text-align: center;
					font-size: 40rpx;
					color: #000;
					font-weight: 500;

					text {
						font-size: 72rpx;
					}
				}

				.box-content-wrap-text {
					text-align: center;
					font-size: 28rpx;
					color: #999;
				}
			}

			.box-content-info {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-top: 80rpx;

				.box-content-info-left {
					display: flex;
					align-items: center;
					font-size: 28rpx;

					.box-content-info-text {
						color: #333;
						line-height: 24rpx;
					}

					.box-content-info-msg {
						padding-left: 20rpx;
						box-sizing: border-box;
						margin-left: 20rpx;
						border-left: 1rpx solid #ccc;
						color: #999999;
						line-height: 24rpx;
					}
				}

				.box-content-info-check {
					image {
						width: 36rpx;
						height: 36rpx;
					}
				}
			}

			.box-content-list {
				.box-content-list-li {
					display: flex;
					align-items: center;
					justify-content: space-between;
					height: 180rpx;

					.box-content-list-li-all {
						display: flex;
						align-items: center;

						.box-content-list-li-all-image {
							width: 48rpx;
							height: 48rpx;
							background: purple;

							image {
								width: 48rpx;
								height: 48rpx;
							}
						}

						.box-content-list-li-all-title {
							margin-left: 24rpx;
							font-size: 28rpx;
							font-family: Source Han Sans CN;
							font-weight: 400;
							color: #333333;
						}
					}

					.box-content-list-li-check {
						image {
							width: 36rpx;
							height: 36rpx;
						}
					}
				}

			}
		}

		.box-footer {
			padding: 0 40rpx;
			box-sizing: border-box;
			margin-bottom: 30rpx;
		}
	}
</style>
