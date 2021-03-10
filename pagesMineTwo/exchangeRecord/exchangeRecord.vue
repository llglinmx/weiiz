<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="兑换记录"></navTitle>
		</view>
		<view class="box-content" v-if="isData">
			<mescroll-uni ref="mescrollRef" @down="downCallback" @up="upCallback" :down="downOption" :up="upOption" :height="mesHeight">
				<view class="box-content-list">
					<view class="box-content-list-li" v-for="(item,index) in 20" :key="index">
						<view class="box-content-list-li-top">
							<view class="box-content-list-li-top-title">
								兑换单号：400199100711
							</view>
							<view class="box-content-list-li-top-msg">
								已发货
							</view>
						</view>
						<view class="box-content-list-li-center">
							<view class="box-content-list-li-center-image">
								<image src="../../static/images/goods-004.png" mode="aspectFill"></image>
							</view>
							<view class="box-content-list-li-center-info">
								<view class="box-content-list-li-center-info-title">人工智能音箱</view>
								<view class="box-content-list-li-center-info-points">
									<view class="box-content-list-li-center-info-points-left">
										<text class="iconfont iconjifen icon-font" style="font-size: 28rpx;"></text>
										<text>7500</text>
									</view>
									<view class="box-content-list-li-center-info-points-right">
										x1
									</view>
								</view>
								<view class="box-content-list-li-center-info-time">
									兑换时间：2021-01-10 12:00:21
								</view>
							</view>
						</view>
						<view class="box-content-list-li-bottom">
							<view class="box-content-list-li-bottom-item flex-center" v-if="index!=1">
								查看物流
							</view>
							<view class="box-content-list-li-bottom-item list-li-bottom-item-ff6f4d flex-center" v-if="index==1">
								确认收货
							</view>
							<view class="box-content-list-li-bottom-item flex-center" v-if="index==2">
								提醒发货
							</view>
							<view class="box-content-list-li-bottom-item flex-center" v-if="index==3">
								删除记录
							</view>
						</view>
					</view>
				</view>
			</mescroll-uni>
		</view>
		<view class="box-content" v-else>
			<view class="box-content-login">
				<view class="box-content-no-data">
					暂无记录
				</view>
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
				isData: true, //是否有数据
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
				padding: 0 20rpx;
				box-sizing: border-box;

				.box-content-list-li {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					height: 336rpx;
					border-radius: 20rpx;
					padding: 20rpx;
					margin-top: 20rpx;
					box-sizing: border-box;
					background: #fff;

					.box-content-list-li-top {
						display: flex;
						align-items: center;
						justify-content: space-between;
						font-size: 28rpx;

						.box-content-list-li-top-title {
							color: #000;
						}

						.box-content-list-li-top-msg {
							color: #FF6F4D;
							font-size: 29rpx;
						}
					}

					.box-content-list-li-center {
						display: flex;
						align-items: center;

						.box-content-list-li-center-image {
							image {
								width: 148rpx;
								height: 148rpx;
							}
						}

						.box-content-list-li-center-info {
							margin-left: 20rpx;
							flex: 1;

							.box-content-list-li-center-info-title {
								font-size: 28rpx;
								color: #000;
							}

							.box-content-list-li-center-info-points {
								display: flex;
								align-items: center;
								justify-content: space-between;
								margin-top: 40rpx;

								.box-content-list-li-center-info-points-left {
									display: flex;
									align-items: center;

									.icon-font {
										color: #FF967D;
									}

									text {
										margin-left: 10rpx;
										font-size: 28rpx;
										color: #FF8366;
									}
								}

								.box-content-list-li-center-info-points-right {
									font-size: 28rpx;
									color: #999;
								}
							}

							.box-content-list-li-center-info-time {
								font-size: 24rpx;
								color: #999;
							}
						}
					}

					.box-content-list-li-bottom {
						display: flex;
						justify-content: flex-end;

						.box-content-list-li-bottom-item {
							width: 176rpx;
							height: 60rpx;
							border: 1rpx solid #666666;
							border-radius: 32rpx;
							margin-right: 20rpx;
							color: #666;
							font-size: 28rpx;
						}

						.box-content-list-li-bottom-item:last-child {
							margin-right: 0;
						}

						.list-li-bottom-item-ff6f4d {
							border: 1px solid #FF6F4D !important;
							color: #FF6F4D !important;
						}
					}
				}
			}

			.box-content-login {
				height: 100%;

				.box-content-no-data {
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 28rpx;
					color: #999;
				}
			}

		}

		.box-footer {}
	}
</style>
