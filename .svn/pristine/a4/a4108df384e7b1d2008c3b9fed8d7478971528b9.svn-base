<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="礼品卡详情"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content-main">
				<view class="box-content-main-image">
					<image :src="dataInfo.simg" mode="aspectFill"></image>
				</view>
				<view class="box-content-main-center">
					<view class="box-content-main-center-price">
						<view class="present-price">{{dataInfo.price}}</view>
						<view class="original-price">1580.00</view>
					</view>
					<stepper :num="num" @add="stepperClick('add')" @reduce="stepperClick('reduce')"></stepper>
				</view>
				<view class="box-content-main-wrap-text">
					<view class="box-content-main-wrap-text-title">{{dataInfo.name}}</view>
					<view class="box-content-main-wrap-text-msg">已售{{dataInfo.sold}}</view>
				</view>
				<view class="box-content-main-text">
					包含了全身按摩、背部按摩产品以及2张优惠券
				</view>
			</view>

			<view class="box-content-collect-gifts">
				<view class="box-content-collect-gifts-title">卡内包含</view>
				<view class="box-content-collect-gifts-list">
					<view class="collect-gifts-list-li" v-for="(item,index) in dataInfo.coupon_list" :key="item.id">
						<view class="collect-gifts-list-li-image">
							<image :src="item.simg" mode="aspectFill"></image>
						</view>
						<view class="collect-gifts-list-li-info">
							<view class="collect-gifts-list-li-info-top">
								<view class="collect-gifts-list-li-info-top-title">{{item.name}}</view>
								<view class="collect-gifts-list-li-info-top-msg">x{{item.times}}</view>
							</view>
							<view class="collect-gifts-list-li-info-center-list" v-if="index!=2">
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
							<view class="collect-gifts-list-li-info-center-price" v-else>
								<view class="gifts-present-price">￥80.00</view>
								<view class="gifts-present-msg">
									满5元可用
								</view>
							</view>
							<view class="collect-gifts-list-li-info-text" style="margin-top: 10rpx;">市场价值：￥298.00</view>
							<view class="collect-gifts-list-li-info-text">{{item.store_name}}</view>
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
			<view class="box-footer-main">
				<view class="box-footer-main-price">
					合计￥<text>{{totalPrice}}</text>
				</view>
				<view class="box-footer-btn flex-center" @click="receive">立即领取</view>
			</view>
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
				num: 1, //当前数量
				id: '',
				dataInfo: {
					price:0,
					name:'',
					sold:0
				}
			};
		},
		components: {
			navTitle,
			stepper
		},
		computed: {
			totalPrice() {
				var price = this.dataInfo.price * this.num
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
			this.id = options.id
			this.getGift(this.id)
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



			// 立即领取
			receive() {
				var str={
					num:this.num,
					id:this.id
				}
				uni.navigateTo({
					url: "../../pagesIndexThree/giftCardConfirmation/giftCardConfirmation?data="+JSON.stringify(str)
				})
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

			.box-content-main {
				margin-top: 20rpx;
				padding: 0 40rpx 30rpx;
				box-sizing: border-box;
				background: #fff;

				.box-content-main-image {
					padding: 30rpx 0;

					image {
						width: 100%;
						height: 377rpx;
						border-radius: 10rpx;
					}
				}

				.box-content-main-center {
					display: flex;
					justify-content: space-between;
					align-items: center;

					.box-content-main-center-price {
						display: flex;
						align-items: baseline;

						.present-price {
							font-size: 44rpx;
							color: #FF4D4D;
							font-weight: 500;
						}

						.original-price {
							margin-left: 10rpx;
							text-decoration: line-through;
							font-size: 24rpx;
							color: #999;
						}
					}

					.box-content-main-center-stepper {
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

				.box-content-main-wrap-text {
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin: 20rpx 0;

					.box-content-main-wrap-text-title {
						font-size: 36rpx;
						color: #000;
					}

					.box-content-main-wrap-text-msg {
						font-size: 24rpx;
						color: #666;
					}
				}

				.box-content-main-text {
					font-size: 24rpx;
					color: #999;
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
									color: #000;
									font-size: 28rpx;
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

							.collect-gifts-list-li-info-center-price {
								display: flex;
								align-items: baseline;
								color: #FF4D4D;

								.gifts-present-price {
									font-size: 36rpx;
								}

								.gifts-present-msg {
									margin-left: 10rpx;
									font-size: 24rpx;
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
			height: 108rpx;
			background: #fff;
			padding: 0 20rpx;
			box-sizing: border-box;

			.box-footer-main {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.box-footer-main-price {
					display: flex;
					align-items: baseline;
					margin-left: 20rpx;
					color: #000;
					font-size: 28rpx;

					text {
						font-size: 40rpx;
						font-weight: 500;
						color: #FF4D4D;
					}
				}

				.box-footer-btn {
					width: 220rpx;
					height: 80rpx;
					background: #FF8366;
					border-radius: 40rpx;
					color: #fff;
					font-size: 32rpx;
				}
			}
		}
	}
</style>
