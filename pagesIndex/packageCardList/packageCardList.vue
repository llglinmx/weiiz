<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<view class="nav-box">
				<view class="nav-back" @click="Gback">
					<image src="../../static/images/back.png" mode="aspectFill"></image>
				</view>
				<view class="nav-title">套餐卡商城</view>
				<view class="nav-confirm" @click="cardList">
					我的
				</view>
			</view>
		</view>
		<view class="box-content">
			<view class="box-content-wrap">
				<mescroll-uni ref="mescrollRef" @down="downCallback" @up="upCallback" :down="downOption" :up="upOption" :height="mesHeight">
					<view class="box-content-wrap-list">
						<view class="wrap-list-li" v-for="(item,index) in 30" :key="index" @click="cardDetails(item)">
							<view class="wrap-list-li-top">
								<view class="wrap-list-li-top-image">
									<image src="../../static/images/card-001.png" mode="aspectFill"></image>
								</view>
								<view class="wrap-list-li-top-info">
									<view class="wrap-list-li-top-info-title">超值SPA套餐</view>
									<view class="wrap-list-li-top-info-price">￥489.00</view>
									<view class="wrap-list-li-top-info-box">
										<view class="list-li-top-info-box-item flex-center">足底按摩x3次</view>
										<view class="list-li-top-info-box-item flex-center">足底按摩x1次</view>
									</view>
									<view class="wrap-list-li-top-info-bottom">
										<view class="list-li-top-info-bottom-title">
											<image src="../../static/images/tool.jpg" mode="aspectFill"></image>
											<text>罗约蓝池·温泉SPA</text>
										</view>
										<view class="list-li-top-info-bottom-btn flex-center" @click.stop="payment">去付款</view>
									</view>
								</view>
							</view>

						</view>
					</view>
				</mescroll-uni>
			</view>
		</view>
		<view class="box-footer">

		</view>
	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	import MescrollMixin from "../../components/mescroll-uni/mescroll-mixins.js";
	import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
	export default {
		mixins: [MescrollMixin], // 使用mixin
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				mesHeight: 0,
				downOption: { // 下拉刷新配置
					auto: false,
				},
				upOption: { // 上拉加载配置
					noMoreSize: 5,
					textLoading: "正在加载更多数据",
					textNoMore: "——  已经到底了  ——",
					isBounce: true,
					auto: false,
				},
				PageNumber: 1, // 请求页数，
				PageLimt: 10, // 请求条数
			};
		},
		components: {
			navTitle,
			MescrollUni
		},
		onReady() {
			// 获取顶部电量状态栏高度
			uni.getSystemInfo({
				success: (res) => {
					this.barHeight = res.statusBarHeight
				}
			});
		},
		onShow() {
			const sys = uni.getSystemInfoSync();
			var Heigh = sys.windowHeight
			this.mesHeight = (Heigh - 44) * 2
		},
		methods: {
			// 返回
			Gback() {
				uni.navigateBack({
					delta: 1
				})
			},
			// 点击顶部我的套餐卡
			cardList() {
				uni.navigateTo({
					url: "../../pagesMine/packageCard/packageCard"
				})
			},
			// 点击进入套餐卡详情
			cardDetails(item) {
				uni.navigateTo({
					url: "../../pagesIndexTwo/shoppingCardDetails/shoppingCardDetails"
				})
			},

			// 去付款
			payment() {
				uni.navigateTo({
					url: "../../pagesIndexThree/confirmOrder/confirmOrder"
				})
			},



			/*下拉刷新的回调*/
			downCallback() {
				this.PageNumber = 1
				setTimeout(() => {
					this.mescroll.endSuccess() // 请求成功 隐藏加载状态

					// this.mescroll.showNoMore()

				}, 1500)
			},

			/*上拉加载的回调*/
			upCallback(page) {
				this.PageNumber++
				console.log(this.PageNumber)
				setTimeout(() => {
					this.mescroll.endSuccess() // 请求成功 隐藏加载状态
					// if (this.PageNumber > 3) {
					this.mescroll.showNoMore()
					// }
				}, 1500)
				console.log("上拉加载")
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

			.nav-box {
				display: flex;
				align-items: center;
				height: 88rpx;
				background: #fff;

				.nav-back {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 50rpx;
					height: 34rpx;
					margin-left: 20rpx;
					box-sizing: border-box;

					image {
						width: 18rpx;
						height: 34rpx;
					}
				}

				.nav-title {
					display: flex;
					align-items: center;
					justify-content: center;
					flex: 1;
					margin-left: 20rpx;
					font-size: 34rpx;
					font-family: Source Han Sans CN;
					font-weight: 500;
					color: #000000;
				}

				.nav-confirm {
					padding-right: 40rpx;
					font-size: 30rpx;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color: #FF8366;
				}
			}
		}

		.box-content {
			flex: 1;
			overflow-y: scroll;
			font-family: Source Han Sans CN;
			font-weight: 400;

			.box-content-wrap {
				.box-content-wrap-list {
					padding-left: 40rpx;
					box-sizing: border-box;

					.wrap-list-li {
						padding: 30rpx 40rpx 30rpx 0;
						box-sizing: border-box;
						border-bottom: 1rpx solid #ededed;

						.wrap-list-li-top {
							display: flex;

							.wrap-list-li-top-image {
								display: flex;

								image {
									width: 224rpx;
									height: 148rpx;
									border-radius: 10rpx;
								}
							}

							.wrap-list-li-top-info {
								margin-left: 20rpx;
								flex: 1;

								.wrap-list-li-top-info-title {
									font-size: 36rpx;
									color: #000;
									line-height: 32rpx;
								}

								.wrap-list-li-top-info-price {
									margin: 16rpx 0;
									color: #FF4D4D;
									font-size: 34rpx;
									font-weight: 500;
								}

								.wrap-list-li-top-info-box {
									display: flex;
									flex-wrap: wrap;

									.list-li-top-info-box-item {
										width: 197rpx;
										height: 58rpx;
										margin-right: 20rpx;
										margin-bottom: 20rpx;
										border: 1rpx solid #EDEDED;
										border-radius: 3rpx;
										color: #666;
										font-size: 26rpx;
									}

									.list-li-top-info-box-item:nth-child(2n) {
										margin-right: 0;
									}
								}

								.wrap-list-li-top-info-bottom {
									display: flex;
									align-items: center;
									justify-content: space-between;

									.list-li-top-info-bottom-title {
										display: flex;
										align-items: center;

										image {
											width: 28rpx;
											height: 28rpx;
										}

										text {
											margin-left: 8rpx;
											color: #666;
											font-size: 24rpx;
										}
									}

									.list-li-top-info-bottom-btn {
										width: 148rpx;
										height: 60rpx;
										border: 1rpx solid #FF6F4D;
										border-radius: 3rpx;
										color: #FF6F4D;
										font-size: 28rpx;
									}
								}
							}
						}


					}
				}
			}
		}

		.box-footer {}
	}
</style>
