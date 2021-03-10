<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<view class="box-head-nav">
				<view class="head-nav-back flex-center" @click="Gback">
					<image src="../../static/images/back-white.png" mode="aspectFill"></image>
				</view>
				<view class="head-nav-title">领券中心</view>
			</view>
		</view>
		<view class="box-content">
			<mescroll-uni ref="mescrollRef" @down="downCallback" @up="upCallback" :down="downOption" :up="upOption" :height="mesHeight">
				<view class="box-content-list">
					<view class="box-content-list-li" v-for="(item,index) in dataList" :key="index">
						<view class="list-li-top">
							<view class="list-li-top-left">
								<image src="../../static/images/tool.jpg" mode=""></image>
								<text>罗约蓝池·温泉SPA</text>
							</view>
							<view class="list-li-top-right">
								<image src="../../static/images/address-gray.png" mode="aspectFill"></image>
								<text>6.1km</text>
							</view>
						</view>
						<view class="list-li-bottom">
							<view class="list-li-bottom-left">
								<view class="list-li-bottom-money">
									20
									<text>元</text>
								</view>
							</view>
							<view class="list-li-bottom-center">
								<view class="list-li-center-title">
									店铺优惠券
								</view>
								<view class="list-li-center-text">
									满200减20
								</view>
							</view>
							<view class="list-li-bottom-right">
								<!-- <view class="list-li-bottom-btn flex-center">立即领取</view> -->
								<view class="list-li-bottom-btn flex-center" style="background: none;color: #FF4040;">去使用</view>
							</view>
						</view>
					</view>
				</view>
			</mescroll-uni>
		</view>
	</view>
</template>

<script>
	import MescrollMixin from "../../components/mescroll-uni/mescroll-mixins.js";
	import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
	export default {
		mixins: [MescrollMixin], // 使用mixin
		data() {
			return {
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
				barHeight: 0, //顶部电量导航栏高度
				dataList: [{
						money: "20.00"
					},

					{
						money: "20.00"
					},
					{
						money: "20.00"
					},
					{
						money: "20.00"
					},
					{
						money: "20.00"
					},

				],
			}
		},
		components: {
			MescrollUni
		},
		onShow() {
			const sys = uni.getSystemInfoSync();
			var Heigh = sys.windowHeight
			this.mesHeight = (Heigh - 66) * 2

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
// 返回
			Gback() {
				uni.navigateBack({
					delta: 1
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

<style lang="scss" scoped>
	.box {
		display: flex;
		flex-direction: column;
		height: 100%;
		overflow-y: scroll;
		background: #F7F7F7;

		.box-head {

			background: #FF4040;

			.box-head-nav {
				display: flex;
				align-items: center;
				height: 88rpx;

				.head-nav-back {
					width: 65rpx;
					height: 65rpx;
					margin-left: 10rpx;

					image {
						width: 18rpx;
						height: 34rpx;
					}
				}

				.head-nav-title {
					display: flex;
					align-items: center;
					justify-content: center;
					margin-left: -50rpx;
					flex: 1;
					font-size: 34rpx;
					font-family: Source Han Sans CN;
					font-weight: 500;
					color: #FFFFFF;
				}
			}
		}

		.box-content {
			flex: 1;
			padding: 20rpx 30rpx;
			box-sizing: border-box;
			overflow-y: scroll;

			.box-content-list {

				.box-content-list-li {
					display: flex;
					flex-direction: column;
					height: 216rpx;
					margin-bottom: 20rpx;
					border-radius: 20rpx;
					background: #fff;

					.list-li-top {
						display: flex;
						align-items: center;
						justify-content: space-between;
						padding: 0 20rpx;
						height: 69rpx;
						box-sizing: border-box;
						border-bottom: 1rpx #e6e6e6 dashed;

						.list-li-top-left {
							display: flex;
							align-items: center;

							image {
								width: 28rpx;
								height: 28rpx;
							}

							text {
								margin-left: 8rpx;
								font-size: 28rpx;
								font-family: Source Han Sans CN;
								font-weight: 500;
								color: #000000;
							}
						}

						.list-li-top-right {
							display: flex;
							align-items: center;

							image {
								width: 19rpx;
								height: 24rpx;
							}

							text {
								margin-left: 8rpx;
								font-size: 24rpx;
								font-family: Source Han Sans CN;
								font-weight: 400;
								color: #999999;
							}
						}
					}

					.list-li-bottom {
						display: flex;
						align-items: center;
						justify-content: space-between;
						flex: 1;
						padding: 0 20rpx;
						box-sizing: border-box;

						.list-li-bottom-left {
							margin-left: 40rpx;
							font-family: Lato;
							font-weight: 400;
							color: #FF4040;

							.list-li-bottom-money {
								font-size: 72rpx;

								text {
									font-size: 22rpx;

								}
							}
						}

						.list-li-bottom-center {
							margin-left: -56rpx;
							font-family: Source Han Sans CN;
							font-weight: 500;

							.list-li-center-title {
								font-size: 28rpx;
								color: #000000;
							}

							.list-li-center-text {
								font-size: 24rpx;
								color: #666666;
							}
						}

						.list-li-bottom-right {
							.list-li-bottom-btn {
								width: 163rpx;
								height: 57rpx;
								font-size: 26rpx;
								border: 1rpx solid #FF4040;
								background: #FF4040;
								border-radius: 30rpx;
								color: #fff;
							}
						}
					}
				}
			}

		}
	}
</style>
