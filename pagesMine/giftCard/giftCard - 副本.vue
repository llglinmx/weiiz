<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="礼品卡"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content-tabs">
				<liuyuno-tabs ref="boxTabs" :tabData="tabs" :activeIndex="defaultIndex" @tabClick='tabClick' />
			</view>
			<view class="box-content-wrap">
				<view class="box-content-wrap-item">
					<swiper class="swiper-box" :current="defaultIndex" @change="tabChange">
						<swiper-item class="swiper-box-item-list">
							<view class="box-content-gift-list">
								<view class="box-content-gift-list-li" v-for="(item,index) in 10" :key="index">
									<view class="box-content-gift-list-list-top">
										<view class="gift-list-list-top-title">卡号：40019911007</view>
										<view class="gift-list-list-top-text">待领取</view>
									</view>
									<view class="box-content-gift-list-li-center">
										<view class="gift-list-li-center-image">
											<image src="../../static/images/gift.png" mode="aspectFill"></image>
										</view>
										<view class="gift-list-li-center-info">
											<view class="gift-list-li-center-info-title">
												春节礼品卡
											</view>
											<view class="gift-list-li-center-info-text">
												内含 2 件商品
											</view>
											<view class="gift-list-li-center-info-time">
												有效期至：2021-01-31
											</view>
										</view>
									</view>
									<view class="box-content-gift-list-li-bottom">
										<view class="gift-list-li-bottom-btn flex-center gift-list-li-bottom-btn-666" @click="give">转赠礼物</view>
										<view class="gift-list-li-bottom-btn flex-center gift-list-li-bottom-btn-ff6f4d" @click="cardDetails(item)">查看详情</view>
									</view>
								</view>
							</view>
						</swiper-item>
						<swiper-item class="swiper-box-item-list">
							<view class="box-content-gift-list">
								<view class="box-content-gift-list-li" v-for="(item,index) in 10" :key="index">
									<view class="box-content-gift-list-list-top">
										<view class="gift-list-list-top-title">卡号：40019911007</view>
										<view class="gift-list-list-top-text">待领取</view>
									</view>
									<view class="box-content-gift-list-li-center">
										<view class="gift-list-li-center-image">
											<image src="../../static/images/gift.png" mode="aspectFill"></image>
										</view>
										<view class="gift-list-li-center-info">
											<view class="gift-list-li-center-info-title">
												春节礼品卡
											</view>
											<view class="gift-list-li-center-info-text">
												内含 2 件商品
											</view>
											<view class="gift-list-li-center-info-time">
												有效期至：2021-01-31
											</view>
										</view>
									</view>
									<view class="box-content-gift-list-li-bottom">
										<view class="gift-list-li-bottom-btn flex-center gift-list-li-bottom-btn-666" @click="give">转赠礼物</view>
										<view class="gift-list-li-bottom-btn flex-center gift-list-li-bottom-btn-ff6f4d" @click="cardDetails(item)">查看详情</view>
									</view>
								</view>
							</view>
						</swiper-item>
						<swiper-item class="swiper-box-item-list">
							<view class="box-content-gift-list">
								<view class="box-content-gift-list-li" v-for="(item,index) in 10" :key="index">
									<view class="box-content-gift-list-list-top">
										<view class="gift-list-list-top-title">卡号：40019911007</view>
										<view class="gift-list-list-top-text">待领取</view>
									</view>
									<view class="box-content-gift-list-li-center">
										<view class="gift-list-li-center-image">
											<image src="../../static/images/gift.png" mode="aspectFill"></image>
										</view>
										<view class="gift-list-li-center-info">
											<view class="gift-list-li-center-info-title">
												春节礼品卡
											</view>
											<view class="gift-list-li-center-info-text">
												内含 2 件商品
											</view>
											<view class="gift-list-li-center-info-time">
												有效期至：2021-01-31
											</view>
										</view>
									</view>
									<view class="box-content-gift-list-li-bottom">
										<view class="gift-list-li-bottom-btn flex-center gift-list-li-bottom-btn-666" @click="give(item)">转赠礼物</view>
										<view class="gift-list-li-bottom-btn flex-center gift-list-li-bottom-btn-ff6f4d" @click="cardDetails(item)">查看详情</view>
									</view>
								</view>
							</view>
						</swiper-item>
						<swiper-item class="swiper-box-item-list">
							<view class="box-content-gift-list">
								<view class="box-content-gift-list-li" v-for="(item,index) in 10" :key="index">
									<view class="box-content-gift-list-list-top">
										<view class="gift-list-list-top-title">卡号：40019911007</view>
										<view class="gift-list-list-top-text">待领取</view>
									</view>
									<view class="box-content-gift-list-li-center">
										<view class="gift-list-li-center-image">
											<image src="../../static/images/gift.png" mode="aspectFill"></image>
										</view>
										<view class="gift-list-li-center-info">
											<view class="gift-list-li-center-info-title">
												春节礼品卡
											</view>
											<view class="gift-list-li-center-info-text">
												内含 2 件商品
											</view>
											<view class="gift-list-li-center-info-time">
												有效期至：2021-01-31
											</view>
										</view>
									</view>
									<view class="box-content-gift-list-li-bottom">
										<view class="gift-list-li-bottom-btn flex-center gift-list-li-bottom-btn-666" @click="give">转赠礼物</view>
										<view class="gift-list-li-bottom-btn flex-center gift-list-li-bottom-btn-ff6f4d" @click="cardDetails(item)">查看详情</view>
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
				tabs: ["全部", "我购买的", "我收到的", "我送出的"],
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

			// 点击进入礼品卡详情
			cardDetails(item) {
				uni.navigateTo({
					url: "../../pagesMineTwo/giftCardDetails/giftCardDetails"
				})
			},
			// 转赠礼物
			give() {
			
				uni.navigateTo({
					url: "../../pagesMineThree/giftGiving/giftGiving"
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

							.box-content-gift-list {
								padding: 0 20rpx;
								box-sizing: border-box;

								.box-content-gift-list-li:last-child {
									margin-bottom: 20rpx;
								}

								.box-content-gift-list-li {
									padding: 20rpx;
									box-sizing: border-box;
									margin-top: 20rpx;
									background: #fff;
									border-radius: 20rpx;

									.box-content-gift-list-list-top {
										display: flex;
										align-items: center;
										justify-content: space-between;

										.gift-list-list-top-title {
											font-size: 28rpx;
											color: #333;
										}

										.gift-list-list-top-text {
											font-size: 29rpx;
											color: #FF6F4D;
										}
									}

									.box-content-gift-list-li-center {
										display: flex;
										margin: 30rpx 0;

										.gift-list-li-center-image {
											image {
												width: 232rpx;
												height: 130rpx;
											}
										}

										.gift-list-li-center-info {
											flex: 1;
											margin-left: 20rpx;

											.gift-list-li-center-info-title {
												margin-bottom: 20rpx;
												color: #000;
												font-size: 34rpx;
												line-height: 32rpx;
											}

											.gift-list-li-center-info-text {

												font-size: 24rpx;
												color: #999;
											}

											.gift-list-li-center-info-time {
												font-size: 24rpx;
												color: #999;
											}
										}

									}

									.box-content-gift-list-li-bottom {
										display: flex;
										justify-content: flex-end;

										.gift-list-li-bottom-btn {
											width: 176rpx;
											height: 60rpx;
											margin-right: 20rpx;
											background: #FFFFFF;
											border: 1rpx solid #666666;
											border-radius: 32rpx;
											font-size: 28rpx;
										}

										.gift-list-li-bottom-btn:last-child {
											margin-right: 0;
										}

										.gift-list-li-bottom-btn-ff6f4d {
											color: #FF6F4D;
											border: 1rpx solid #FF6F4D;
										}

										.gift-list-li-bottom-btn-666 {
											color: #666;
											border: 1rpx solid #666;
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
