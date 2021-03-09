<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitleAll navTitle="套餐卡详情"></navTitleAll>
		</view>
		<view class="box-content">
			<view class="box-content-main">
				<view class="box-content-main-image">
					<image src="../../static/images/card-002.png" mode="aspectFit"></image>
				</view>
				<view class="box-content-main-wrap">
					<view class="box-content-main-wrap-price">
						<view class="box-content-main-wrap-present-price">￥580.00</view>
						<view class="box-content-main-wrap-original-price">￥1580.00</view>
					</view>
					<view class="box-content-main-wrap-sold">已售280</view>
				</view>
				<view class="box-content-main-text">超值SPA套餐</view>
			</view>


			<view class="box-content-package-project">
				<view class="box-content-package-project-title">套餐项目</view>
				<view class="box-content-package-project-list">
					<view class="box-content-package-project-list-li" v-for="item in 3">
						<view class="package-project-list-li-image">
							<image src="../../static/images/2.png" mode="aspectFill"></image>
						</view>
						<view class="package-project-list-li-info">
							<view class="package-project-list-li-info-title">
								<text class="title">泰式古法按摩</text>
								<text class="text">x3</text>
							</view>
							<view class="package-project-list-li-info-box">
								<view class="package-project-list-li-info-box-item flex-center">60分钟</view>
								<view class="package-project-list-li-info-box-item flex-center">背部按摩</view>
							</view>
							<view class="package-project-list-li-info-text">市场价值：￥1200.00</view>
							<view class="package-project-list-li-info-text">适用门店：罗约蓝池·温泉SPA</view>
						</view>
					</view>
				</view>
			</view>

			<view class="box-content-applicable-stores">
				<view class="box-content-applicable-stores-title">
					<view class="box-content-applicable-stores-title-text">
						适用门店
					</view>
					<view class="box-content-applicable-stores-title-more">
						<text>共6家可用</text>
						<image src="../../static/images/more-gray.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="box-content-applicable-stores-list">
					<view class="box-content-applicable-stores-list-li" v-for="(item,index) in 3" :key="index">
						<view class="applicable-stores-list-li-image">
							<image src="../../static/images/shop-ico.png" mode="aspectFill"></image>
						</view>
						<view class="applicable-stores-list-li-info">
							<view class="applicable-stores-list-li-info-title">印象诗意·悠然SPA</view>
							<view class="applicable-stores-list-li-info-score">
								<image src="../../static/images/stars-icon.png" mode="aspectFill" v-for="item in 5"></image>
								<text>5分</text>
							</view>
							<view class="applicable-stores-list-li-info-address">
								<view class="applicable-stores-list-li-info-address-name">明发商业广场</view>
								<view class="applicable-stores-list-li-info-address-text">
									<image src="../../static/images/address-icon-green.png" mode="aspectFill"></image>
									<text>6.1km</text>
								</view>
							</view>
							<view class="applicable-stores-list-li-info-wrap">
								<view class="applicable-stores-list-li-info-wrap-item">60分钟</view>
								<view class="applicable-stores-list-li-info-wrap-item">按摩/SPA</view>
							</view>
						</view>

					</view>
				</view>
			</view>

			<view class="box-content-purchase-information">
				<view class="box-content-purchase-information-title">
					购买须知
				</view>
				<view class="box-content-purchase-information-list">
					<view class="purchase-information-list-li">
						<view class="purchase-information-list-li-title">有 效 期:</view>
						<view class="purchase-information-list-li-text">购买后90天内有效</view>
					</view>
					<view class="purchase-information-list-li">
						<view class="purchase-information-list-li-title">预约信息:</view>
						<view class="purchase-information-list-li-text">下单后选择您想要预约的时间并提交</view>
					</view>
					<view class="purchase-information-list-li">
						<view class="purchase-information-list-li-title">规则提醒:</view>
						<view class="purchase-information-list-li-text">不再与其他优惠同享</view>
					</view>
					<view class="purchase-information-list-li">
						<view class="purchase-information-list-li-title">温馨提示:</view>
						<view class="purchase-information-list-li-text">
							为了保障您的权益，建议使用weiiz平台网上支付。若使用其他支付方式导致纠纷，平台不承担任何责任，感谢您的理解！
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="box-footer">
			<btnPink btnName="立即支付" @btnClick="pay"></btnPink>
		</view>
	</view>
</template>

<script>
	import navTitleAll from "../../components/navTitleAll/navTitleAll.vue"
	import btnPink from "../../components/btnPink/btnPink.vue"
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
			};
		},
		components: {
			navTitleAll,
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
			// 立即支付
			pay() {
				uni.navigateTo({
					url: "../../pagesIndexThree/confirmOrder/confirmOrder"
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
			background-color: #fff;
		}

		.box-content {
			flex: 1;
			overflow-y: scroll;
			font-family: Source Han Sans CN;
			font-weight: 400;

			.box-content-main {
				display: flex;
				padding: 30rpx 40rpx;
				box-sizing: border-box;
				background: #fff;

				.box-content-main-image {
					display: flex;
					align-items: center;
					justify-content: center;

					image {
						width: 670rpx;
						height: 443rpx;
					}
				}

				.box-content-main-wrap {
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 30rpx 0;

					.box-content-main-wrap-price {
						display: flex;
						align-items: baseline;

						.box-content-main-wrap-present-price {
							font-size: 44rpx;
							color: #FF4D4D;
							font-weight: 500;
						}

						.box-content-main-wrap-original-price {
							margin-left: 10rpx;
							font-size: 24rpx;
							color: #999;
							text-decoration: line-through;

						}
					}

					.box-content-main-wrap-sold {
						font-size: 24rpx;
						color: #666;
					}
				}

				.box-content-main-text {
					font-size: 36rpx;
					color: #000;
				}
			}


			.box-content-package-project {
				padding-top: 30rpx;
				margin-top: 40rpx;
				background: #fff;

				.box-content-package-project-title {
					color: #000;
					font-size: 32rpx;
					padding-left: 40rpx;
					box-sizing: border-box;
				}

				.box-content-package-project-list {
					padding-left: 40rpx;
					box-sizing: border-box;

					.box-content-package-project-list-li:last-child {
						border-bottom: 0;
					}

					.box-content-package-project-list-li {
						display: flex;
						padding: 30rpx 40rpx 30rpx 0;
						box-sizing: border-box;
						border-bottom: 1rpx solid #EDEDED;

						.package-project-list-li-image {
							image {
								width: 168rpx;
								height: 168rpx;
							}
						}

						.package-project-list-li-info {
							flex: 1;
							margin-left: 20rpx;

							.package-project-list-li-info-title {
								display: flex;
								justify-content: space-between;
								align-items: center;
								line-height: 32rpx;
								color: #000;

								.title {
									font-size: 34rpx;
								}

								.text {
									font-size: 30rpx;
								}
							}

							.package-project-list-li-info-box {
								display: flex;
								flex-wrap: wrap;
								margin: 16rpx 0 20rpx;

								.package-project-list-li-info-box-item {
									padding: 6rpx 10rpx;
									margin-right: 8rpx;
									font-size: 22rpx;
									color: #666;
									border-radius: 3rpx;
									background: #F5F5F5;
								}
							}

							.package-project-list-li-info-text {
								font-size: 24rpx;
								color: #666;
							}
						}
					}
				}
			}

			.box-content-applicable-stores {
				padding: 30rpx 40rpx;
				box-sizing: border-box;
				margin-top: 20rpx;
				background: #fff;

				.box-content-applicable-stores-title {
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-bottom: 30rpx;

					.box-content-applicable-stores-title-text {
						color: #000;
						font-size: 32rpx;
					}

					.box-content-applicable-stores-title-more {
						display: flex;
						align-items: center;

						text {
							margin-right: 8rpx;
							font-size: 24rpx;
							color: #999;
						}

						image {
							width: 28rpx;
							height: 28rpx;
						}
					}

				}

				.box-content-applicable-stores-list {
					.box-content-applicable-stores-list-li:last-child {
						margin-bottom: 0;
					}

					.box-content-applicable-stores-list-li {
						display: flex;
						margin-bottom: 30rpx;

						.applicable-stores-list-li-image {
							image {
								width: 164rpx;
								height: 164rpx;
							}
						}

						.applicable-stores-list-li-info {
							margin-left: 20rpx;
							flex: 1;

							.applicable-stores-list-li-info-title {
								color: #000;
								font-size: 34rpx;
								line-height: 32rpx;
							}

							.applicable-stores-list-li-info-score {
								display: flex;
								align-items: center;
								margin: 10rpx 0;

								image {
									width: 30rpx;
									height: 30rpx;
								}

								text {
									margin-left: 8rpx;
									font-size: 24rpx;
									color: #999;
								}
							}

							.applicable-stores-list-li-info-address {
								display: flex;
								align-items: center;
								justify-content: space-between;

								.applicable-stores-list-li-info-address-name {
									font-size: 24rpx;
									color: #666;
								}

								.applicable-stores-list-li-info-address-text {
									display: flex;
									align-items: center;


									image {
										width: 24rpx;
										height: 24rpx;
									}

									text {
										font-size: 24rpx;
										color: #999;
									}
								}
							}

							.applicable-stores-list-li-info-wrap {
								display: flex;
								flex-wrap: wrap;
								margin-top: 10rpx;

								.applicable-stores-list-li-info-wrap-item {
									padding: 6rpx 10rpx;
									margin-right: 8rpx;
									color: #666;
									font-size: 22rpx;
									background: #F5F5F5;
								}
							}
						}
					}
				}
			}



			.box-content-purchase-information {
				margin-top: 20rpx;
				padding: 30rpx 40rpx;
				background: #fff;

				.box-content-purchase-information-title {
					margin-bottom: 20rpx;
					color: #000;
					font-size: 32rpx;
				}

				.box-content-purchase-information-list {
					.purchase-information-list-li {
						display: flex;
						font-size: 28rpx;
						color: #333;

						.purchase-information-list-li-title {
							width: 120rpx;
							text-align: justify;
						}

						.purchase-information-list-li-text {
							margin-left: 10rpx;
							flex: 1;
						}
					}
				}
			}
		}

		.box-footer {
			padding: 30rpx 40rpx;
			box-sizing: border-box;
			background: #fff;
		}
	}
</style>
