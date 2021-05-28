<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="确认订单"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content-list">
				<view class="box-content-list-li">
					<view class="box-content-list-li-top">
						<view class="box-content-list-li-top-image">
							<image :src="dataInfo.simg" mode="aspectFill"></image>
						</view>
						<view class="box-content-list-li-top-text">
							<view class="box-content-list-li-top-text-title">{{dataInfo.name}}</view>
							<view class="box-content-list-li-top-text-price">{{dataInfo.price}}</view>
						</view>
					</view>
					<view class="box-content-list-li-bottom">
						<view class="box-content-list-li-bottom-text">数量</view>
						<stepper :num="num" @add="stepperClick('add')" @reduce="stepperClick('reduce')"></stepper>
					</view>
				</view>
			</view>
			<view class="box-content-coupon">
				<view class="box-content-coupon-top">
					<view class="box-content-coupon-top-title">优惠券</view>
					<view class="box-content-coupon-top-more">
						<text>无可用优惠券</text>
						<image src="../../static/images/more-gray.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="box-content-coupon-bottom">
					<view class="box-content-coupon-bottom-text">
						已优惠￥{{discount}}
					</view>
					<view class="box-content-coupon-bottom-price">
						小计￥<text>{{subtotal}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="box-footer">
			<view class="box-footer-text">
				合计￥<text>{{totalPrice}}</text>
			</view>
			<view class="box-footer-btn flex-center" @click="payment">立即付款</view>
		</view>
	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	import stepper from "../../components/stepper/stepper.vue"
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				num: 1, //数量
				dataInfo: {
					name: '',
					price: 0,
					simg: ''
				},
				discount: 50
			};
		},
		components: {
			navTitle,
			stepper
		},
		computed: {
			subtotal() {
				var price = this.dataInfo.price * this.num
				return price.toFixed(2)
			},

			totalPrice() {
				var price = this.dataInfo.price * this.num - this.discount
				return price.toFixed(2)
			}
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
			var data = JSON.parse(options.data)
			this.num = data.num
			this.getGift(data.id)
		},
		methods: {

			// 获取礼品卡
			getGift(id) {
				let vuedata = {
					id: id
				}
				this.apiget('pc/card/gift', vuedata).then(res => {
					if (res.status == 200) {
						let list = res.data.giftList
						this.dataInfo = res.data.giftList
					}
				});
			},



			// 步进器
			stepperClick(type) {
				switch (type) {
					case "reduce":
						if (this.num <= 1) {
							uni.showToast({
								title: "已经不能再减了",
								icon: "none"
							})
						} else {
							this.num -= 1
						}
						break;
					case "add":
						this.num += 1
						break;
				}
			},
			// 立即付款
			payment() {
				uni.showToast({
					title: "立即付款",
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
			background-color: #fff;
		}

		.box-content {
			flex: 1;
			overflow-y: scroll;
			font-family: Source Han Sans CN;
			font-weight: 400;

			.box-content-list {
				padding: 0 40rpx;
				box-sizing: border-box;
				background: #fff;

				.box-content-list-li {
					.box-content-list-li-top {
						padding: 30rpx 0;
						border-bottom: 1rpx solid #ededed;

						.box-content-list-li-top-image {
							image {
								width: 100%;
								height: 377rpx;
								border-radius: 10rpx;
							}
						}

						.box-content-list-li-top-text {
							display: flex;
							align-items: center;
							justify-content: space-between;
							margin-top: 30rpx;
							font-size: 30rpx;

							.box-content-list-li-top-text-title {
								color: #000;
							}

							.box-content-list-li-top-text-price {
								color: #FF4D4D;
								font-weight: 500;
							}
						}
					}

					.box-content-list-li-bottom {
						height: 100rpx;
						display: flex;
						align-items: center;
						justify-content: space-between;

						.box-content-list-li-bottom-text {
							color: #000;
							font-size: 30rpx;
						}

						.box-content-list-li-bottom-stepper {
							display: flex;
							width: 220rpx;
							height: 68rpx;
							border: 1px solid #E0E0E0;
							border-radius: 20rpx;

							.reduce {
								display: flex;
								align-items: center;
								justify-content: center;
								width: 80rpx;
								height: 68rpx;

								image {
									width: 28rpx;
									height: 28rpx;
								}
							}

							.num {
								flex: 1;
								font-size: 28rpx;
								color: #000;
							}

							.add {
								display: flex;
								align-items: center;
								justify-content: center;
								width: 80rpx;
								height: 68rpx;

								image {
									width: 28rpx;
									height: 28rpx;
								}
							}
						}
					}
				}
			}

			.box-content-coupon {
				margin-top: 20rpx;
				padding: 0 40rpx;
				box-sizing: border-box;
				background: #fff;

				.box-content-coupon-top {
					height: 100rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					border-bottom: 1rpx solid #ededed;

					.box-content-coupon-top-title {
						color: #333;
						font-size: 32rpx;
					}

					.box-content-coupon-top-more {
						display: flex;
						align-items: center;

						text {
							margin-right: 8rpx;
							font-size: 28rpx;
							color: #999;
						}

						image {
							width: 28rpx;
							height: 28rpx;
						}
					}
				}

				.box-content-coupon-bottom {
					padding: 30rpx 0;
					display: flex;
					align-items: baseline;
					justify-content: flex-end;

					.box-content-coupon-bottom-text {
						font-size: 28rpx;
						color: #999;
					}

					.box-content-coupon-bottom-price {
						margin-left: 20rpx;
						font-size: 28rpx;
						color: #333;

						text {
							font-size: 36rpx;
							font-weight: 500;
							color: #000;
						}
					}
				}
			}



		}

		.box-footer {
			padding: 0 20rpx;
			box-sizing: border-box;
			height: 108rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			background: #fff;

			.box-footer-text {
				display: flex;
				align-items: center;
				margin-left: 20rpx;
				font-size: 28rpx;
				color: #000;

				text {
					font-size: 40rpx;
					color: #FF4D4D;
				}
			}

			.box-footer-btn {
				width: 220rpx;
				height: 80rpx;
				background: #FF8366;
				border-radius: 40rpx;
				font-size: 32rpx;
				color: #fff;
			}

		}
	}
</style>
