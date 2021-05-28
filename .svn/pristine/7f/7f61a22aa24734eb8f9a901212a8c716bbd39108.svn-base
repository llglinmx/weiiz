<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<nav-title-service navTitle="待核销"></nav-title-service>
		</view>
		<view class="box-content">
			<view class="box-content-wrap">
				<view class="box-content-wrap-title">
					<image src="../../static/images/tool.jpg" mode="aspectFill"></image>
					<text>罗约蓝池·温泉SPA</text>
				</view>
				<view class="box-content-wrap-list">
					<view class="box-content-wrap-list-li" v-for="(item,index) in 5" :key="index">
						<view class="box-content-wrap-list-li-image">
							<image src="../../static/images/001.png" mode="aspectFill"></image>
						</view>
						<view class="box-content-wrap-list-li-info">
							<view class="list-li-info-top">
								<view class="list-li-info-top-title">
									泰式古法按摩
								</view>
								<view class="list-li-info-top-price">
									￥298.00
								</view>
							</view>
							<view class="list-li-info-center">
								<view class="list-li-info-center-wrap">
									<view class="list-li-info-center-wrap-item flex-center">60分钟</view>
									<view class="list-li-info-center-wrap-item flex-center">背部按摩</view>
								</view>
								<view class="list-li-info-center-number">
									x1
								</view>
							</view>
						</view>
					</view>
				</view>

				<view class="box-content-wrap-all">
					<view class="box-content-wrap-all-item">
						<view class="box-content-wrap-all-title">
							项目总价
						</view>
						<view class="box-content-wrap-all-price">
							￥280.00
						</view>
					</view>
					<view class="box-content-wrap-all-item">
						<view class="box-content-wrap-all-title">
							使用优惠券
						</view>
						<view class="box-content-wrap-all-price">
							￥80.00
						</view>
					</view>
				</view>
				<view class="box-content-wrap-payment">
					<view class="box-content-wrap-payment-text">
						实付款：
						<text class="icon">￥</text>
						<text class="price">332.70</text>
					</view>
				</view>
			</view>
			<view class="box-content-time">
				<view class="box-content-time-text">
					<view class="box-content-time-text-title">预约时间</view>
					<view class="box-content-time-text-date">
						2021年1月4日 17:00-18:00
					</view>
				</view>
				<view class="box-content-time-btn flex-center" @click="revisionTime">修改时间</view>
			</view>
			<view class="box-content-group-buying">
				<view class="box-content-group-buying-top">
					<view class="box-content-group-buying-top-left">
						<view class="group-buying-top-left-title">团购券</view>
						<view class="group-buying-top-left-text">有效期至2021-01-31</view>
					</view>
					<view class="box-content-group-buying-top-btn flex-center" @click="refund">申请退款</view>
				</view>
				<view class="box-content-group-buying-bottom">
					<view class="group-buying-bottom-image-code">
						<image src="../../static/images/qrcode.png" mode="aspectFill"></image>
					</view>
					<view class="group-buying-bottom-number">券码：8413 6020 49</view>
					<view class="group-buying-bottom-text">
						为保障您的权益，未到店消费前请不要将券号提供给商家
					</view>
				</view>
			</view>
			<view class="box-content-service-info">
				<view class="box-content-service-info-title">服务信息</view>
				<view class="box-content-service-info-list">
					<view class="box-content-service-info-list-li">
						<view class="service-info-list-li-title">服务对象:</view>
						<view class="service-info-list-li-text">张先生 13810071991</view>
					</view>
					<view class="box-content-service-info-list-li">
						<view class="service-info-list-li-title">服务方式:</view>
						<view class="service-info-list-li-text">到店服务91</view>
					</view>
					<view class="box-content-service-info-list-li">
						<view class="service-info-list-li-title">门店名称:</view>
						<view class="service-info-list-li-text">印象诗意·悠然SPA</view>
					</view>
					<view class="box-content-service-info-list-li">
						<view class="service-info-list-li-title">门店地址:</view>
						<view class="service-info-list-li-text" style="color: #4EC494;">
							<!-- <text class="iconfont icondingwei1 icon-font" style="color: #4EC494;font-size: 24rpx;margin-top: 4rpx;"></text> -->
							中国 福建省 厦门市 集美区 杏滨路罗约酒店负一楼
						</view>
					</view>
				</view>
			</view>
			<view class="box-content-order-info">
				<view class="box-content-order-info-title">
					订单信息
				</view>
				<view class="box-content-order-all">
					<text class="box-content-order-all-title">订单编号：</text>
					<text class="box-content-order-all-number">400199110070101</text>
				</view>
				<view class="box-content-order-all">
					<text class="box-content-order-all-title">下单时间：</text>
					<text class="box-content-order-all-number">2021-01-13 10:35:11</text>
				</view>
			</view>
		</view>
		<view class="box-footer">

		</view>
	</view>
</template>

<script>
	import navTitleService from "../../components/navTitleService/navTitleService.vue"
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
			};
		},
		components: {
			navTitleService
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
			// 修改时间
			revisionTime() {
				uni.showToast({
					title: "修改时间",
					icon: "none"
				})
			},
			// 申请退款
			refund() {
				uni.showToast({
					title: "申请退款",
					icon: "none"
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
		background: #F7F7F7;

		.box-head {
			background-color: #FF967D;
		}

		.box-content {
			flex: 1;
			overflow-y: scroll;
			font-family: Source Han Sans CN;
			font-weight: 400;

			.box-content-wrap {
				padding: 0 30rpx;
				box-sizing: border-box;
				background: #fff;

				.box-content-wrap-title {
					display: flex;
					align-items: center;
					padding: 20rpx 0;
					box-sizing: border-box;

					image {
						width: 28rpx;
						height: 28rpx;
					}

					text {
						margin-left: 10rpx;
						font-size: 28rpx;
						color: #000;
					}
				}

				.box-content-wrap-list {
					padding-top: 10rpx;
					padding-bottom: 20rpx;

					.box-content-wrap-list-li:last-child {
						margin-bottom: 0;
					}

					.box-content-wrap-list-li {
						display: flex;
						align-items: center;
						height: 132rpx;
						margin-bottom: 20rpx;

						.box-content-wrap-list-li-image {
							display: flex;
							align-items: center;

							image {
								width: 132rpx;
								height: 132rpx;
							}
						}

						.box-content-wrap-list-li-info {
							height: 100%;
							display: flex;
							flex-direction: column;
							flex: 1;
							margin-left: 20rpx;

							.list-li-info-top {
								display: flex;
								align-items: center;
								justify-content: space-between;

								.list-li-info-top-title {
									font-size: 30rpx;
									color: #000;
								}

								.list-li-info-top-price {
									font-size: 28rpx;
									color: #000;
								}
							}

							.list-li-info-center {
								margin-top: 16rpx;
								display: flex;
								align-items: center;
								justify-content: space-between;

								.list-li-info-center-wrap {
									display: flex;
									flex-wrap: wrap;

									.list-li-info-center-wrap-item {
										width: 108rpx;
										height: 34rpx;
										margin: 0 8rpx 8rpx 0;
										background: #F5F5F5;
										border-radius: 3rpx;
										font-size: 22rpx;
										color: #666666
									}
								}

								.list-li-info-center-number {
									font-size: 28rpx;
									color: #999
								}
							}

						}
					}
				}

				.box-content-wrap-all {
					padding: 10rpx 0 20rpx;
					border-bottom: 1rpx solid #ededed;

					.box-content-wrap-all-item:last-child {
						margin-bottom: 0;
					}

					.box-content-wrap-all-item {
						display: flex;
						align-items: center;
						justify-content: space-between;
						margin-bottom: 20rpx;
						font-size: 28rpx;
						color: #000;

						.box-content-wrap-all-title {}

						.box-content-wrap-all-price {}
					}
				}

				.box-content-wrap-payment {
					display: flex;
					align-items: center;
					justify-content: flex-end;
					height: 72rpx;

					.box-content-wrap-payment-text {
						font-size: 24rpx;
						color: #999;

						.icon {
							color: #FF4D4D;
							font-weight: 500;
						}

						.price {
							font-weight: 500;
							font-size: 32rpx;
							color: #FF4D4D;
						}
					}
				}

			}

			.box-content-time {
				height: 150rpx;
				padding: 30rpx 40rpx;
				margin-top: 20rpx;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				justify-content: space-between;
				background: #fff;

				.box-content-time-text {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					line-height: 60rpx;

					.box-content-time-text-title {
						font-size: 32rpx;
						color: #000;
						font-weight: 500;
					}

					.box-content-time-text-date {
						font-size: 28rpx;
						color: #666;
					}
				}

				.box-content-time-btn {
					width: 176rpx;
					height: 60rpx;
					font-size: 28rpx;
					color: #FFFFFF;
					background: #FF8366;
					border-radius: 32px;
				}
			}

			.box-content-group-buying {
				margin-top: 20rpx;
				padding: 0 40rpx;
				box-sizing: border-box;
				background: #fff;

				.box-content-group-buying-top {
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 30rpx 0;
					height: 72rpx;
					border-bottom: 1rpx solid #ededed;

					.box-content-group-buying-top-left {
						display: flex;
						flex-direction: column;
						justify-content: space-between;

						.group-buying-top-left-title {
							color: #333;
							font-size: 32rpx;
						}

						.group-buying-top-left-text {
							margin-top: 20rpx;
							font-size: 28rpx;
							color: #999;
						}
					}

					.box-content-group-buying-top-btn {
						width: 176rpx;
						height: 60rpx;
						font-size: 28rpx;
						background: #FFFFFF;
						border: 1rpx solid #666666;
						border-radius: 32rpx;
						color: #666666;
					}
				}

				.box-content-group-buying-bottom {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					padding: 30rpx 0;

					.group-buying-bottom-image-code {
						display: flex;
						align-items: center;
						justify-content: center;
						padding: 20rpx;
						width: 310rpx;
						height: 310rpx;
						border: 1rpx dashed #ccc;

						image {
							width: 290rpx;
							height: 290rpx;
						}
					}

					.group-buying-bottom-number {
						margin: 20rpx 0;
						font-size: 32rpx;
						color: #FF8366;
					}

					.group-buying-bottom-text {
						font-size: 24rpx;
						color: #333;
					}
				}
			}

			.box-content-service-info {
				padding: 0 40rpx 30rpx;
				margin-top: 20rpx;
				box-sizing: border-box;
				background: #fff;

				.box-content-service-info-title {

					padding: 30rpx 0;
					color: #000;
					font-size: 32rpx;
				}

				.box-content-service-info-list {

					.box-content-service-info-list-li {
						display: flex;
						padding: 10rpx 0;
						font-size: 28rpx;

						.service-info-list-li-title {
							display: flex;
							width: 140rpx;
							color: #999;
							text-align: sp;
						}

						.service-info-list-li-text {
							flex: 1;
							color: #000;

							.service-info-list-li-text-address {
								margin-top: 10rpx;
								margin-right: 10rpx;
								width: 24rpx;
								height: 28rpx;
							}
						}
					}
				}
			}

			.box-content-order-info {
				margin-top: 20rpx;
				padding: 30rpx 40rpx;
				box-sizing: border-box;
				background: #fff;

				.box-content-order-info-title {
					margin-bottom: 10rpx;
					font-size: 32rpx;
					color: #000;
				}

				.box-content-order-all {
					padding: 10rpx 0;
					font-size: 28rpx;

					.box-content-order-all-title {
						color: #999;
					}

					.box-content-order-all-number {
						color: #000;
					}
				}
			}
		}

		.box-footer {}
	}
</style>
