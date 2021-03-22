<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="购物车"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content-list">
				<view class="box-content-list-li" v-for="(item,index) in 5">
					<view class="box-content-list-li-top">
						<view class="list-li-top-all">
							<text class="iconfont iconweixuanzhong1 icon-font" style="color: #ccc;font-size: 36rpx;"></text>
							<!-- <text class="iconfont iconxuanzhong icon-font" style="color: #FF967D;font-size: 36rpx;"></text> -->
						</view>
						<view class="list-li-top-text">罗约蓝池·温泉SPA</view>
					</view>
					<view class="box-content-list-li-main">
						<view class="box-content-list-li-main-item" v-for="(j,idx) in 3">
							<view class="list-li-main-item-all">
								<!-- <text class="iconfont iconweixuanzhong1 icon-font" style="color: #ccc;font-size: 36rpx;"></text> -->
								<text class="iconfont iconxuanzhong icon-font" style="color: #FF967D;font-size: 36rpx;"></text>
							</view>
							<view class="list-li-main-item-image">
								<image src="../../static/images/002.png" mode="aspectFill"></image>
							</view>
							<view class="list-li-main-item-info">
								<view class="list-li-main-item-info-top">浪漫玫瑰花漾香水香氛</view>
								<view class="list-li-main-item-info-center">
									<view class="main-item-info-center-li flex-center">浪漫玫瑰 50ml</view>
									<view class="main-item-info-center-li flex-center">浪漫玫瑰 50ml</view>
								</view>
								<view class="list-li-main-item-info-bottom">
									<view class="main-item-info-bottom-price">
										￥49.95
									</view>
									<view class="main-item-info-bottom-stepper">
										<view class="reduce" @click="stepperClick('reduce')">
											<image src="../../static/images/reduce-icon.png" mode="aspectFill"></image>
										</view>
										<view class="num flex-center">
											0
										</view>
										<view class="add" @click="stepperClick('add')">
											<image src="../../static/images/add-icon.png" mode="aspectFill"></image>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="box-footer">
			<view class="box-footer-check">
				<view class="box-footer-check-icon">
					<text class="iconfont iconweixuanzhong1 icon-font" style="color: #ccc;font-size: 36rpx;"></text>
					<!-- <text class="iconfont iconxuanzhong icon-font" style="color: #FF967D;font-size: 36rpx;"></text> -->
				</view>
				<view class="box-footer-select-all">全选</view>
			</view>
			<view class="box-footer-main">
				<view class="box-footer-main-wrap">
					<view class="box-footer-main-wrap-text">结算￥</view>
					<view class="box-footer-main-wrap-pricne">238.00</view>
				</view>
				<view class="box-footer-main-btn flex-center">结算<text>(2)</text></view>
			</view>
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
			// 步进器
			stepperClick(type) {
				switch (type) {
					// case "reduce":
					// 	if (this.num <= 1) {
					// 		uni.showToast({
					// 			title: "已经不能再减了",
					// 			icon: "none"
					// 		})
					// 	} else {
					// 		this.num -= 1
					// 	}
					// 	break;
					// case "add":
					// 	this.num += 1
					// 	break;
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

		.box-head {
			background-color: #fff;
		}

		.box-content {
			flex: 1;
			overflow-y: scroll;

			.box-content-list {

				.box-content-list-li {
					padding: 30rpx;
					box-sizing: border-box;
					margin-top: 20rpx;
					background: #fff;

					.box-content-list-li-top {
						display: flex;
						align-items: center;

						.list-li-top-all {
							display: flex;
							align-items: center;

							image {
								width: 36rpx;
								height: 36rpx;
							}
						}

						.list-li-top-text {
							margin-left: 20rpx;
							color: #000;
							font-size: 30rpx;
						}
					}

					.box-content-list-li-main {
						margin-top: 30rpx;

						.box-content-list-li-main-item:last-child {
							margin-bottom: 0;
						}

						.box-content-list-li-main-item {
							display: flex;
							align-items: center;
							margin-bottom: 30rpx;

							.list-li-main-item-all {
								display: flex;
								align-items: center;

								image {
									width: 36rpx;
									height: 36rpx;
								}
							}

							.list-li-main-item-image {
								margin-left: 20rpx;

								image {
									width: 178rpx;
									height: 178rpx;
								}
							}

							.list-li-main-item-info {
								margin-left: 20rpx;
								display: flex;
								flex-direction: column;
								justify-content: space-between;
								flex: 1;
								height: 178rpx;

								.list-li-main-item-info-top {
									font-size: 30rpx;
									color: #000;
								}

								.list-li-main-item-info-center {
									display: flex;
									flex-wrap: wrap;

									.main-item-info-center-li {
										width: 194rpx;
										height: 48rpx;
										margin-right: 8rpx;
										margin-bottom: 8rpx;
										background: #F5F5F5;
										border-radius: 3rpx;
										font-size: 24rpx;
										color: #999999;
									}
								}

								.list-li-main-item-info-bottom {
									display: flex;
									align-items: center;
									justify-content: space-between;

									.main-item-info-bottom-price {
										color: #FF4D4D;
										font-weight: 500;
										font-size: 34rpx;
									}

									.main-item-info-bottom-stepper {
										display: flex;
										width: 220rpx;
										height: 60rpx;
										background: #FFFFFF;
										border: 1rpx solid #E0E0E0;
										border-radius: 10rpx;

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

					}
				}
			}
		}

		.box-footer {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 108rpx;
			background: #fff;

			.box-footer-check {
				display: flex;
				align-items: center;

				.box-footer-check-icon {
					margin: 0 20rpx 0 30rpx;

					image {
						width: 36rpx;
						height: 36rpx;
					}
				}

				.box-footer-select-all {
					color: #000;
					font-size: 28rpx;
				}
			}

			.box-footer-main {
				display: flex;
				align-items: center;

				.box-footer-main-wrap {
					display: flex;
					align-items: center;

					.box-footer-main-wrap-text {
						color: #000;
						font-size: 28rpx;
					}

					.box-footer-main-wrap-pricne {
						font-size: 40rpx;
						color: #FF8366;
					}
				}

				.box-footer-main-btn {
					width: 220rpx;
					height: 80rpx;
					margin: 0 20rpx;
					background: #FF8366;
					border-radius: 40rpx;
					color: #fff;
					font-size: 32rpx;
				}
			}

		}
	}
</style>
