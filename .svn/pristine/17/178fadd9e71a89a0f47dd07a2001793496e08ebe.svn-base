<template>
	<view class="sub-content-list">
		<view class="sub-content-list-li" v-for="(item,index) in goodsList" :key="item.id">
			<view class="content-list-li-top">
				<view class="list-li-top-title flex-center">
					<image src="../../static/images/tool.jpg" mode="aspectFill"></image>
					<text>罗约蓝池·温泉SPA</text>
				</view>
				<view class="list-li-top-state">
					<text>待核销</text>
				</view>
			</view>
			<view class="list-li-wrap">
				<view class="list-li-wrap-item" v-for="(j,idx) in 3">
					<view class="list-li-item-info-image">
						<image src="../../static/images/001.png" mode="aspectFill"></image>
					</view>
					<view class="list-li-item-info">
						<view class="list-li-info-top">
							<view class="list-li-info-top-title">罗约蓝池·温泉SPA</view>
							<view class="list-li-info-top-text">￥298.00</view>
						</view>
						<view class="list-li-info-center-box">
							<view class="list-center-box-wrap">
								<view class="list-center-box-wrap-item flex-center">
									60分钟
								</view>
								<view class="list-center-box-wrap-item flex-center">
									背部按摩
								</view>
								<view class="list-center-box-wrap-item flex-center">
									60分钟
								</view>
							</view>
							<view class="list-center-box-number">
								x1
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="content-list-li-bottom">
				<view class="content-list-li-payment">
					<view class="list-li-payment-text">实付款：</view>
					<view class="list-li-payment-money">
						<text>￥1200.00</text>
					</view>
				</view>
				<view class="content-list-li-all-btns">
					<view class="more-list-li-btn flex-center more-list-li-btn-border">取消订单
					</view>
					<view class="more-list-li-btn flex-center more-list-li-btn-border-red">查看券码
					</view>
					<!-- <view class="more-list-li-btn flex-center">去付款</view> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "order-list",
		data() {
			return {

			};
		},
		props:{
			goodsList:{
				type:Array,
				default:[]
			}
		},
	}
</script>

<style lang="scss">
	.sub-content-list {

		.sub-content-list-li {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: 20rpx 40rpx;
			margin-top: 20rpx;
			box-sizing: border-box;
			background: #fff;

			.content-list-li-top {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.list-li-top-title {
					image {
						width: 28rpx;
						height: 28rpx;
					}

					text {
						margin-left: 8rpx;
						font-size: 28rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #000000;
					}
				}

				.list-li-top-state {
					font-size: 28rpx;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color: #FF6F4D;
				}
			}

			.list-li-wrap {
				padding: 30rpx 0;
				box-sizing: border-box;

				.list-li-wrap-item {
					display: flex;
					margin-bottom: 20rpx;

					.list-li-item-info-image {
						width: 132rpx;
						height: 132rpx;

						image {
							width: 132rpx;
							height: 132rpx;
						}
					}

					.list-li-item-info {
						flex: 1;
						margin-left: 20rpx;

						.list-li-info-top {
							display: flex;
							justify-content: space-between;

							.list-li-info-top-title {
								font-size: 30rpx;
								font-family: Source Han Sans CN;
								font-weight: 500;
								color: #000000;
							}

							.list-li-info-top-text {
								font-size: 28rpx;
								font-family: Source Han Sans CN;
								font-weight: 400;
								color: #000000;
							}
						}

						.list-li-info-center-box {
							display: flex;
							justify-content: space-between;

							.list-center-box-wrap {
								display: flex;
								flex-wrap: wrap;
								margin-top: 10rpx;

								.list-center-box-wrap-item {
									padding: 6rpx 10rpx;
									margin-right: 8rpx;
									margin-bottom: 8rpx;
									font-size: 22rpx;
									font-family: Source Han Sans CN;
									font-weight: 400;
									line-height: 22rpx;
									color: #666666;
									background: #F5F5F5;
									border-radius: 3px;
								}

								.list-center-box-wrap-item:last-child {
									margin-right: 0;
								}
							}

							.list-center-box-number {
								margin-left: 10rpx;
								font-size: 28rpx;
								font-family: Source Han Sans CN;
								font-weight: 400;
								color: #999999;
							}
						}
					}
				}

				.list-li-wrap-item:last-child {
					margin-bottom: 0;
				}
			}

			.content-list-li-bottom {
				display: flex;
				justify-content: space-between;

				.content-list-li-payment {
					display: flex;
					align-items: center;

					.list-li-payment-text {
						font-size: 24rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #999999;
					}

					.list-li-payment-money {
						font-size: 24rpx;
						font-family: Source Han Sans CN;
						font-weight: 500;
						color: #FF4D4D;

						text {
							font-size: 32rpx;
						}
					}
				}

				.content-list-li-all-btns {
					display: flex;

					.more-list-li-btn {
						width: 176rpx;
						height: 60rpx;
						margin-right: 20rpx;
						background: #FF8366;
						border-radius: 32rpx;
						font-size: 28rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #fff;
					}

					.more-list-li-btn-border {
						background: none !important;
						border: 1px solid #666666;
						color: #666666 !important;
					}

					.more-list-li-btn-border-red {
						background: none !important;
						border: 1px solid #FF6F4D;
						color: #FF6F4D !important;
					}

					.more-list-li-btn:last-child {
						margin-right: 0;
					}
				}
			}
		}
	}
</style>
