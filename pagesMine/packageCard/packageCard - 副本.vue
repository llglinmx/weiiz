<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="套餐卡"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content-tabs">
				<liuyuno-tabs ref="boxTabs" :tabData="tabs" :activeIndex="defaultIndex" @tabClick='tabClick' />
			</view>
			<view class="box-content-wrap">
				<view class="box-content-wrap-item">
					<swiper class="swiper-box" :current="defaultIndex" @change="tabChange">
						<swiper-item class="swiper-box-item-list">
							<view class="box-package-card-list">
								<view class="box-package-card-list-li" v-for="(item,index) in 10" :key="index" @click="cardDetails(item)">
									<view class="box-package-card-list-li-top">
										<view class="box-package-card-list-li-top-left">
											<view class="card-list-li-top-left-title">超值SPA套餐</view>
											<view class="card-list-li-top-left-price">489.00元</view>
											<view class="card-list-li-top-left-time">有效期至：2021-01-31</view>
											<view class="card-list-li-top-left-store">适用门店：印象诗意·悠然SPA</view>
										</view>
										<view class="box-package-card-list-li-top-right">
											<image src="../../static/images/card-001.png" mode="aspectFill"></image>
										</view>
									</view>
									<view class="box-package-card-list-li-bottom">
										<view class="card-list-li-bottom-title">
											<view class="card-list-li-bottom-title-item">项目</view>
											<view class="card-list-li-bottom-title-item">使用次数</view>
											<view class="card-list-li-bottom-title-item">已使用</view>
											<view class="card-list-li-bottom-title-item">剩余次数</view>
										</view>
										<view class="card-list-li-bottom-main" v-for="j in 2">
											<view class="card-list-li-bottom-title-item">足底按摩</view>
											<view class="card-list-li-bottom-title-item">9</view>
											<view class="card-list-li-bottom-title-item">6</view>
											<view class="card-list-li-bottom-title-item" style="color:#FF967D">3</view>
										</view>
									</view>
								</view>
							</view>
						</swiper-item>
						<swiper-item class="swiper-box-item-list">
							<view class="box-package-card-list">
								<view class="box-package-card-list-li" v-for="(item,index) in 2" :key="index"  @click="cardDetails(item)">
									<view class="box-package-card-list-li-top">
										<view class="box-package-card-list-li-top-left">
											<view class="card-list-li-top-left-title">超值SPA套餐</view>
											<view class="card-list-li-top-left-price">489.00元</view>
											<view class="card-list-li-top-left-time">有效期至：2021-01-31</view>
											<view class="card-list-li-top-left-store">适用门店：印象诗意·悠然SPA</view>
										</view>
										<view class="box-package-card-list-li-top-right">
											<image src="../../static/images/card-001.png" mode="aspectFill"></image>
										</view>
									</view>
									<view class="box-package-card-list-li-bottom">
										<view class="card-list-li-bottom-title">
											<view class="card-list-li-bottom-title-item">项目</view>
											<view class="card-list-li-bottom-title-item">使用次数</view>
											<view class="card-list-li-bottom-title-item">已使用</view>
											<view class="card-list-li-bottom-title-item">剩余次数</view>
										</view>
										<view class="card-list-li-bottom-main" v-for="j in 2">
											<view class="card-list-li-bottom-title-item">足底按摩</view>
											<view class="card-list-li-bottom-title-item">9</view>
											<view class="card-list-li-bottom-title-item">6</view>
											<view class="card-list-li-bottom-title-item" style="color:#FF967D">3</view>
										</view>
									</view>
								</view>
							</view>
						</swiper-item>
						<swiper-item class="swiper-box-item-list">
							<view class="box-package-card-list">
								<view class="box-package-card-list-li" v-for="(item,index) in 10" :key="index">
									<view class="box-package-card-list-li-top" style="background: #ccc;">
										<view class="box-package-card-list-li-top-left">
											<view class="card-list-li-top-left-title">超值SPA套餐</view>
											<view class="card-list-li-top-left-price">489.00元</view>
											<view class="card-list-li-top-left-time">有效期至：2021-01-31</view>
											<view class="card-list-li-top-left-store">适用门店：印象诗意·悠然SPA</view>
										</view>
										<view class="box-package-card-list-li-top-right">
											<image src="../../static/images/card-001.png" mode="aspectFill"></image>
										</view>
									</view>
									<view class="box-package-card-list-li-bottom">
										<view class="card-list-li-bottom-title" style="color: #999;">
											<view class="card-list-li-bottom-title-item">项目</view>
											<view class="card-list-li-bottom-title-item">使用次数</view>
											<view class="card-list-li-bottom-title-item">已使用</view>
											<view class="card-list-li-bottom-title-item">剩余次数</view>
										</view>
										<view class="card-list-li-bottom-main" v-for="j in 2" style="color: #999;">
											<view class="card-list-li-bottom-title-item">足底按摩</view>
											<view class="card-list-li-bottom-title-item">9</view>
											<view class="card-list-li-bottom-title-item">6</view>
											<view class="card-list-li-bottom-title-item">3</view>
										</view>
										<view class="package-card-list-li-bottom-abandoned"></view>
									</view>
								</view>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	import liuyunoTabs from "@/components/liuyuno-tabs/liuyuno-tabs.vue";
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				defaultIndex: 0,
				tabs: ["未使用", "已使用", "已过期"],
			};
		},
		components: {
			navTitle,
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
			
			// 点击进入套餐卡详情
			cardDetails(item){
				uni.navigateTo({
					url:"../../pagesMineTwo/packageCardOrderDetails/packageCardOrderDetails"
				})
			},
			
			// tabs 点击
			tabClick(e) {
				this.defaultIndex = e
			},
			// 滑动切换列表
			tabChange(e) {
				this.$refs.boxTabs.tabToIndex(e.detail.current)
				this.defaultIndex = e.detail.current
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

							.box-package-card-list {
								padding: 0 20rpx;
								box-sizing: border-box;

								.box-package-card-list-li:last-child {
									margin-bottom: 20rpx;
								}

								.box-package-card-list-li {
									display: flex;
									align-items: center;
									flex-direction: column;
									margin-top: 20rpx;

									.box-package-card-list-li-top {
										display: flex;
										width: 100%;
										height: 228rpx;
										padding: 30rpx;
										box-sizing: border-box;
										background: #FF967D;
										border-radius: 20rpx 20rpx 0rpx 0rpx;
										font-family: Source Han Sans CN;
										font-weight: 400;

										.box-package-card-list-li-top-left {
											flex: 1;
											color: #fff;

											.card-list-li-top-left-title {
												font-size: 36rpx;
												line-height: 32rpx;
											}

											.card-list-li-top-left-price {
												margin: 15rpx 0 20rpx 0;
												font-weight: bold;
												font-size: 28rpx;
											}

											.card-list-li-top-left-time {
												font-size: 24rpx;
											}

											.card-list-li-top-left-store {
												margin-top: 10rpx;
												font-size: 24rpx;
											}
										}

										.box-package-card-list-li-top-right {
											display: flex;
											align-items: center;
											margin-left: 20rpx;

											image {
												width: 224rpx;
												height: 168rpx;
											}
										}

									}

									.box-package-card-list-li-bottom {
										position: relative;
										width: 100%;
										padding: 30rpx;
										box-sizing: border-box;
										background: #FFFFFF;
										border-radius: 0rpx 0rpx 20rpx 20rpx;

										.card-list-li-bottom-title,
										.card-list-li-bottom-main {
											display: flex;
											align-items: center;
											font-size: 28rpx;
											color: #333;
											font-family: Source Han Sans CN;
											font-weight: 400;

											.card-list-li-bottom-title-item {
												padding: 10rpx 0;
												flex: 1;
												display: flex;
												align-items: center;
												justify-content: center;
											}
										}

										.package-card-list-li-bottom-abandoned {
											position: absolute;
											top: 0rpx;
											right: 0rpx;
											bottom: 0;
											left: 0;
											margin: auto;
											width: 161rpx;
											height: 106rpx;
											background: url(../../static/images/be-overdue-ico.png) no-repeat;
											background-size: contain;
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
</style>
