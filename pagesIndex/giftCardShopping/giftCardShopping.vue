<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<view class="nav-box">
				<view class="nav-back" @click="Gback">
					<image src="../../static/images/back.png" mode="aspectFill"></image>
				</view>
				<view class="nav-title">礼品卡商城</view>
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
							<view class="wrap-list-li-image">
								<image src="../../static/images/gift.png" mode="aspectFill"></image>
							</view>
							<view class="wrap-list-li-info">
								<view class="wrap-list-li-info-title">
									春节礼品卡
								</view>
								<view class="wrap-list-li-info-price">
									￥89.99
								</view>
								<view class="wrap-list-li-info-text">
									包含了全身按摩、背部按摩产品以及2张优惠券
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
			// 点击顶部我的礼品卡
			cardList() {
				uni.navigateTo({
					url:"../../pagesMine/giftCard/giftCard"
				})
			},
			// 点击进入套餐卡详情
			cardDetails(item) {
				uni.navigateTo({
					url: "../../pagesIndexTwo/mallGiftCardDetails/mallGiftCardDetails"
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
						display: flex;
						padding: 30rpx 40rpx 30rpx 0;
						box-sizing: border-box;
						border-bottom: 1rpx solid #ededed;

						.wrap-list-li-image {
							display: flex;
							align-items: center;

							image {
								width: 310rpx;
								height: 174rpx;
							}
						}

						.wrap-list-li-info {
							margin-left: 20rpx;
							flex: 1;

							.wrap-list-li-info-title {
								font-size: 32rpx;
								color: #333;
								line-height: 32rpx;
							}

							.wrap-list-li-info-price {
								margin: 10rpx 0 20rpx 0;
								color: #FF4D4D;
								font-size: 32rpx;
							}

							.wrap-list-li-info-text {
								font-size: 24rpx;
								color: #999;
							}
						}


					}
				}
			}
		}

		.box-footer {}
	}
</style>
