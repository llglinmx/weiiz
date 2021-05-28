<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="礼品卡详情"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content-order-info">
				<view class="box-content-order-info-title">订单信息</view>
				<view class="box-content-order-info-list">
					<view class="box-content-order-info-list-image">
						<image src="../../static/images/gift.png" mode="aspectFill"></image>
					</view>
					<view class="box-content-order-info-list-text">

					</view>
					<view class="box-content-order-info-list-msg">
						x12
					</view>
				</view>
				<view class="box-content-order-info-wrap">
					<view class="box-content-order-info-wrap-item">
						<view class="order-info-wrap-item-title">订单编号：</view>
						<view class="order-info-wrap-item-text">
							<text>400199110070101</text>
							<text style="color: #5DBDFE;">复制</text>
						</view>
					</view>
					<view class="box-content-order-info-wrap-item">
						<view class="order-info-wrap-item-title">下单时间：</view>
						<view class="order-info-wrap-item-text">2021-01-13 10:35:11</view>
					</view>
					<view class="box-content-order-info-wrap-item">
						<view class="order-info-wrap-item-title">支付方式：</view>
						<view class="order-info-wrap-item-text">余额支付</view>
					</view>
				</view>
				<view class="box-content-order-info-type-list">
					<view class="box-content-order-info-type-list-item">
						<view class="box-content-order-info-type-list-item-title">项目总价</view>
						<view class="box-content-order-info-type-list-item-price">￥300.00</view>
					</view>
					<view class="box-content-order-info-type-list-item">
						<view class="box-content-order-info-type-list-item-title">使用优惠券</view>
						<view class="box-content-order-info-type-list-item-price">￥20.00</view>
					</view>
				</view>
				<view class="box-content-order-info-bottom">
					<view class="box-content-order-info-bottom-text">实付款：</view>
					<view class="box-content-order-info-bottom-price">
						￥<text>380.00</text>
					</view>
				</view>
			</view>
			<view class="box-content-collect-gifts">
				<view class="box-content-collect-gifts-title">领取礼品</view>
				<view class="box-content-collect-gifts-list">
					<view class="collect-gifts-list-li" v-for="(item,index) in 3" :key="index">
						<view class="collect-gifts-list-li-image">
							<image src="../../static/images/001.png" mode="aspectFill"></image>
						</view>
						<view class="collect-gifts-list-li-info">
							<view class="collect-gifts-list-li-info-top">
								<view class="collect-gifts-list-li-info-top-title">泰式古法按摩</view>
								<view class="collect-gifts-list-li-info-top-msg flex-center" :class="index!=0?'top-msg-color':''">领取1/1</view>
							</view>
							<view class="collect-gifts-list-li-info-center-list">
								<view class="collect-gifts-list-li-info-center-list-item">
									60分钟
								</view>
								<view class="collect-gifts-list-li-info-center-list-item">
									背部按摩
								</view>
								<view class="collect-gifts-list-li-info-center-list-item">
									面部按摩
								</view>
							</view>
							<view class="collect-gifts-list-li-info-text" style="margin-top: 10rpx;">市场价值：￥298.00</view>
							<view class="collect-gifts-list-li-info-text">适用门店：罗约蓝池·温泉SPA</view>
						</view>
					</view>
				</view>
			</view>

			<view class="box-content-gift-explain">
				<view class="box-content-gift-explain-title">礼品卡说明</view>
				<view class="box-content-gift-explain-text" style="margin-top: 20rpx;">
					1、购买的礼品卡可赠送给好友
				</view>
				<view class="box-content-gift-explain-text">
					2、该礼品卡购买成功后有效期为2个月
				</view>
				<view class="box-content-gift-explain-text">
					3、礼品卡购买不参与平台的优惠券使用
				</view>
			</view>
		</view>
		<view class="box-footer">
			<view class="box-footer-btn flex-center box-footer-btn-border" @click="receive">一键领取</view>
			<view class="box-footer-btn flex-center" @click="give">转赠礼物</view>
		</view>
	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
			};
		},
		components: {
			navTitle
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
			// 一键领取
			receive() {
				uni.showToast({
					title: "一键领取",
					icon: "none"
				})
			},
			// 赠送礼物
			give() {
				uni.navigateTo({
					url: "../../pagesMineThree/giftGiving/giftGiving"
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
		font-family: Source Han Sans CN;
		font-weight: 400;
		

		.box-head {
			background-color: #fff;
		}

		.box-content {
			flex: 1;
			overflow-y: scroll;

			.box-content-order-info {
				margin-top: 20rpx;
				padding: 30rpx 40rpx 0;
				box-sizing: border-box;
				background: #fff;

				.box-content-order-info-title {
					color: #000;
					font-size: 28rpx;
				}

				.box-content-order-info-list {
					display: flex;
					align-items: center;
					padding: 30rpx 0;

					.box-content-order-info-list-image {
						image {
							width: 232rpx;
							height: 130rpx;
						}
					}

					.box-content-order-info-list-text {
						flex: 1;
						margin-left: 20rpx;
					}

					.box-content-order-info-list-msg {
						width: 40rpx;
						font-size: 28rpx;
						color: #999;
					}
				}

				.box-content-order-info-wrap {
					padding: 29rpx 0;
					border-top: 1rpx dashed #ededed;
					border-bottom: 1rpx dashed #ededed;

					.box-content-order-info-wrap-item {
						display: flex;
						align-items: center;
						margin-bottom: 10rpx;
						font-size: 26rpx;

						.order-info-wrap-item-title {
							color: #666;
						}

						.order-info-wrap-item-text {
							flex: 1;
							color: #000;
							display: flex;
							justify-content: space-between;

							text {}
						}
					}
				}

				.box-content-order-info-type-list {
					padding: 30rpx 0;
					border-bottom: 1rpx solid #ededed;

					.box-content-order-info-type-list-item {
						display: flex;
						align-items: center;
						justify-content: space-between;
						margin-bottom: 10rpx;
						font-size: 28rpx;
						color: #000;

						.box-content-order-info-type-list-item-title {}

						.box-content-order-info-type-list-item-price {}
					}
				}


				.box-content-order-info-bottom {
					display: flex;
					align-items: baseline;
					justify-content: flex-end;
					padding: 20rpx 0;

					.box-content-order-info-bottom-text {
						font-size: 24rpx;
						color: #999;
					}

					.box-content-order-info-bottom-price {
						font-size: 24rpx;
						color: #FF4D4D;
						font-weight: 500;

						text {
							font-size: 32rpx;
						}
					}
				}

			}

			.box-content-collect-gifts {
				margin-top: 20rpx;
				padding: 30rpx 0 0 40rpx;
				box-sizing: border-box;
				background: #fff;

				.box-content-collect-gifts-title {
					color: #000;
					font-size: 32rpx;
				}

				.box-content-collect-gifts-list {
					.collect-gifts-list-li:last-child {
						border-bottom: 0;
					}

					.collect-gifts-list-li {
						padding: 30rpx 40rpx 30rpx 0;
						box-sizing: border-box;
						display: flex;
						border-bottom: 1rpx solid #ededed;

						.collect-gifts-list-li-image {
							display: flex;
							align-items: center;

							image {
								width: 168rpx;
								height: 168rpx;
							}
						}

						.collect-gifts-list-li-info {
							flex: 1;
							margin-left: 20rpx;

							.collect-gifts-list-li-info-top {
								display: flex;
								justify-content: space-between;

								.collect-gifts-list-li-info-top-title {
									line-height: 32rpx;
									font-size: 32rpx;
									color: #000;
								}

								.collect-gifts-list-li-info-top-msg {
									width: 124rpx;
									height: 48rpx;
									background: #CCCCCC;
									border-radius: 29rpx;
									color: #fff;
									font-size: 24rpx;
								}

								.top-msg-color {
									background: #FF8366 !important;
								}
							}

							.collect-gifts-list-li-info-center-list {
								display: flex;
								flex-wrap: wrap;

								.collect-gifts-list-li-info-center-list-item {
									padding: 6rpx 10rpx;
									margin-right: 8rpx;
									font-size: 22rpx;
									color: #666;
									background: #F5F5F5;
									border-radius: 3rpx;
								}
							}

							.collect-gifts-list-li-info-text {
								font-size: 24rpx;
								color: #666;
							}
						}

					}
				}
			}


			.box-content-gift-explain {
				padding: 30rpx 40rpx;
				box-sizing: border-box;
				margin: 20rpx 0;
				color: #000;
				background: #fff;

				.box-content-gift-explain-title {
					font-size: 32rpx;
				}

				.box-content-gift-explain-text {
					font-size: 28rpx;
				}
			}

		}

		.box-footer {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			height: 108rpx;
			background: #fff;

			.box-footer-btn {
				width: 218rpx;
				height: 78rpx;
				margin-right: 20rpx;
				background: #FF967D;
				border-radius: 40rpx;
				border: 1rpx solid #FF967D;
				color: #fff;
				font-size: 32rpx;
			}

			.box-footer-btn-border {
				background: none;
				color: #ff8366 !important;
				border: 1rpx solid #ff8366;
			}
		}
	}
</style>
