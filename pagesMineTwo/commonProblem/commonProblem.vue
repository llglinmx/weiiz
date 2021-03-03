<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="常见问题"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content-tabs">
				<liuyuno-tabs ref="boxTabs" :tabData="tabs" :activeIndex="defaultIndex" @tabClick='tabClick' />
			</view>
			<view class="box-content-wrap">
				<view class="box-content-wrap-item">
					<swiper class="swiper-box" :current="defaultIndex" @change="tabChange">
						<swiper-item class="swiper-box-item-list">
							<view class="content-list-item">
								<view class="content-list-item-li" v-for="(item,index) in arrList" @click="allProblem(item,index)">
									<view class="content-list-item-li-title">{{item}}</view>
									<view class="content-list-item-li-more flex-center">
										<image src="../../static/images/more-gray.png" mode="aspectFill"></image>
									</view>

								</view>
							</view>
						</swiper-item>
						<swiper-item class="swiper-box-item-list">
							<view class="content-list-item">
								<view class="content-list-item-li" v-for="(item,index) in arrList">
									<view class="content-list-item-li-title">{{item}}</view>
									<view class="content-list-item-li-more flex-center">
										<image src="../../static/images/more-gray.png" mode="aspectFill"></image>
									</view>

								</view>
							</view>
						</swiper-item>
						<swiper-item class="swiper-box-item-list">
							<view class="content-list-item">
								<view class="content-list-item-li" v-for="(item,index) in arrList">
									<view class="content-list-item-li-title">{{item}}</view>
									<view class="content-list-item-li-more flex-center">
										<image src="../../static/images/more-gray.png" mode="aspectFill"></image>
									</view>

								</view>
							</view>
						</swiper-item>
						<swiper-item class="swiper-box-item-list">
							<view class="content-list-item">
								<view class="content-list-item-li" v-for="(item,index) in arrList">
									<view class="content-list-item-li-title">{{item}}</view>
									<view class="content-list-item-li-more flex-center">
										<image src="../../static/images/more-gray.png" mode="aspectFill"></image>
									</view>

								</view>
							</view>
						</swiper-item>
						<swiper-item class="swiper-box-item-list">
							<view class="content-list-item">
								<view class="content-list-item-li" v-for="(item,index) in arrList">
									<view class="content-list-item-li-title">{{item}}</view>
									<view class="content-list-item-li-more flex-center">
										<image src="../../static/images/more-gray.png" mode="aspectFill"></image>
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
	import liuyunoTabs from "@/components/liuyuno-tabs/liuyuno-tabs.vue";
	import navTitle from "../../components/navTitle/navTitle.vue"
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				tabs: ["热门问题", "支付问题", "消费问题", "评价问题", "退款问题"],
				defaultIndex: 0,
				arrList: [
					"银行/支付宝/微信已扣款，订单仍显示未付款", "支付问题",
					"银行/支付宝/微信已扣款，订单仍显示未付款",
					"评价问题", "优惠券是否已使用？", "银行/支付宝/微信已扣款，订单仍显示未付款",
					"银行/支付宝/微信已扣款，订单仍显示未付款", "消费问题",
					"银行/支付宝/微信已扣款，订单仍显示未付款", "退款问题",
					"银行/支付宝/微信已扣款，订单仍显示未付款", "支付问题",
					"银行/支付宝/微信已扣款，订单仍显示未付款",
					"评价问题", "优惠券是否已使用？", "银行/支付宝/微信已扣款，订单仍显示未付款",
					"银行/支付宝/微信已扣款，订单仍显示未付款", "消费问题",
					"银行/支付宝/微信已扣款，订单仍显示未付款", "退款问题",
				]
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
			// tabs 点击
			tabClick(e) {
				this.defaultIndex = e
			},
			// 滑动切换列表
			tabChange(e) {
				this.$refs.boxTabs.tabToIndex(e.detail.current)
				this.defaultIndex = e.detail.current
			},

			// 问题点击进入详情
			allProblem(item, index) {
				console.log(index)
				uni.navigateTo({
					url: "../../pagesMineThree/problemDetails/problemDetails"
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

		.box-head {
			background-color: #fff;
		}

		.box-content {
			flex: 1;
			overflow-y: scroll;
			display: flex;
			flex-direction: column;

			.box-content-tabs {}

			.box-content-wrap {
				flex: 1;
				overflow-y: scroll;

				.box-content-wrap-item {
					height: 100%;

					.swiper-box {
						height: 100%;
						overflow-y: scroll;

						.swiper-box-item-list {
							height: 100%;
							overflow-y: scroll;

							.content-list-item {
								margin: 0 0 20rpx 0;
								background: #fff;

								.content-list-item-li {
									display: flex;
									align-items: center;
									justify-content: space-between;
									padding: 0 40rpx;
									box-sizing: border-box;
									height: 100rpx;
									border-bottom: 1rpx solid #EDEDED;

									.content-list-item-li-title {
										font-size: 28rpx;
										font-family: Source Han Sans CN;
										font-weight: 400;
										color: #000000;
									}

									.content-list-item-li-more {
										width: 32rpx;
										height: 32rpx;

										image {
											width: 18rpx;
											height: 30rpx;
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
