<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<nav-title-confirm navTitle="选择优惠券" @confirm="confirmBtn"></nav-title-confirm>
		</view>
		<view class="box-content">
			<view class="box-content-tabs">
				<liuyuno-tabs ref="boxTabs" :tabData="tabs" :activeIndex="defaultIndex" @tabClick='tabClick' />
			</view>
			<view class="box-content-wrap">
				<view class="box-content-wrap-item">
					<swiper class="swiper-box" :current="defaultIndex" @change="tabChange">
						<swiper-item class="swiper-box-item-list">
							<view class="available-coupons-list">
								<view class="available-coupons-list-li" v-for="(item,index) in 10" :key="index" @click="checkCoupons(index)">
									<view class="available-coupons-list-li-left" :class="index%2!=0?'available-coupons-list-li-left-sky-blue':'available-coupons-list-li-left-yellow'">
										<view class="coupons-list-li-left-money">
											20 <text>元</text>
										</view>
										<view class="coupons-list-li-left-text">
											满200元可用
										</view>
									</view>
									<view class="available-coupons-list-li-right">
										<view class="list-li-right-content">
											<view class="list-li-right-content-title">全平台通用券</view>
											<view class="list-li-right-content-text">
												<view class="list-li-right-content-text-store">门店：全平台</view>
												<view class="list-li-right-content-text-limited-period">有效期：2020.01.09-2020.01.18</view>
											</view>
										</view>
										<view class="list-li-right-check">
											<text class="iconfont iconxuanzhong icon-font" style="color:#26BF82;font-size: 40rpx" v-if="isCheckIco==index"></text>
											<text class="iconfont iconweixuanzhong1 icon-font" style="color: #ccc;font-size: 40rpx" v-else></text>
										</view>
									</view>
								</view>
							</view>
						</swiper-item>
						<swiper-item class="swiper-box-item-list">
							<view class="available-coupons-list">

								<view class="available-coupons-list-li" v-for="(item,index) in 10" :key="index" style="margin-bottom: 64rpx;">
									<view class="available-coupons-list-li-left available-coupons-list-li-left-gray">
										<view class="coupons-list-li-left-money">
											20 <text>元</text>
										</view>
										<view class="coupons-list-li-left-text">
											满200元可用
										</view>
									</view>
									<view class="available-coupons-list-li-right">
										<view class="list-li-right-content">
											<view class="list-li-right-content-title" style="color: #ccc;">全平台通用券</view>
											<view class="list-li-right-content-text" style="color: #ccc;">
												<view class="list-li-right-content-text-store">门店：全平台</view>
												<view class="list-li-right-content-text-limited-period">有效期：2020.01.09-2020.01.18</view>
											</view>
										</view>
									</view>
									<view class="available-coupons-list-msg">
										仅适用[花·SUN SPA]门店商品
									</view>
								</view>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<view class="box-footer">

		</view>
	</view>
</template>

<script>
	import navTitleConfirm from "../../components/navTitleConfirm/navTitleConfirm.vue"
	import liuyunoTabs from "@/components/liuyuno-tabs/liuyuno-tabs.vue";
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				defaultIndex: 0, //当前显示的页面
				tabs: ["可用优惠券", "不可用优惠券"],
				isCheckIco: -1, //是否选中
			};
		},
		components: {
			navTitleConfirm,
			liuyunoTabs
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
			// tabs 点击
			tabClick(e) {
				this.defaultIndex = e
			},
			// 滑动切换列表
			tabChange(e) {
				this.$refs.boxTabs.tabToIndex(e.detail.current)
				this.defaultIndex = e.detail.current
			},

			// 选中优惠券点击
			checkCoupons(index) {
				if (index != this.isCheckIco) {
					this.isCheckIco = index;
				} else {
					this.isCheckIco = -1;
				}
			},

			// 确认按钮
			confirmBtn() {
				uni.navigateBack({
					delta: 1
				})
			}
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

			box-sizing: border-box;
			overflow-y: scroll;

			.box-content-tabs {}

			.box-content-wrap {
				height: calc(100% - 90rpx);
				overflow-y: scroll;
				font-family: Source Han Sans CN;
				font-weight: 400;

				.box-content-wrap-item {
					height: 100%;

					.swiper-box {
						height: 100%;
						overflow-y: scroll;

						.swiper-box-item-list {
							height: 100%;
							overflow-y: scroll;
							padding: 0 30rpx;
							box-sizing: border-box;
							margin-top: 20rpx;



							.available-coupons-list-li {
								position: relative;
								display: flex;
								margin-bottom: 20rpx;

								.available-coupons-list-msg {
									position: absolute;
									left: 0;
									right: 0;
									bottom: -50rpx;
									margin: auto;
									text-align: center;
									color: #FF3333;
									font-size: 24rpx;
								}

								.available-coupons-list-li-left {
									display: flex;
									flex-direction: column;
									align-items: center;
									justify-content: center;
									width: 200rpx;
									height: 200rpx;
									color: #fff;

									.coupons-list-li-left-money {
										font-size: 72rpx;

										text {
											font-size: 22rpx;
										}
									}

									.coupons-list-li-left-text {
										font-size: 22rpx;
									}

								}

								.available-coupons-list-li-left-sky-blue {
									background: url(../../static/images/coupone-sky-blue.png) no-repeat;
									background-size: contain;
								}

								.available-coupons-list-li-left-yellow {
									background: url(../../static/images/coupons-yellow.png) no-repeat;
									background-size: contain;
								}

								.available-coupons-list-li-left-gray {
									background: url(../../static/images/coupons-gray.png) no-repeat;
									background-size: contain;
								}

								.available-coupons-list-li-right {
									display: flex;
									justify-content: space-between;
									align-items: center;
									flex: 1;
									padding: 0 30rpx 0 20rpx;
									box-sizing: border-box;
									background: #fff;

									.list-li-right-content {
										display: flex;
										flex-direction: column;
										justify-content: space-around;

										.list-li-right-content-title {
											color: #000;
										}

										.list-li-right-content-text {
											font-size: 22rpx;
											color: #999;
											margin-top: 40rpx;

											.list-li-right-content-text-store {}

											.list-li-right-content-text-limited-period {}
										}
									}

									.list-li-right-check {
										image {
											width: 40rpx;
											height: 40rpx;
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
			padding: 0 40rpx;
			box-sizing: border-box;
			margin-bottom: 30rpx;
			transition: 0.5s;
			opacity: 1;
		}

	}
</style>
