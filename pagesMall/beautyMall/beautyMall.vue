<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="美容商城"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content-tabs">
				<liuyuno-tabs ref="boxTabs" :tabData="tabs" :activeIndex="defaultIndex" @tabClick='tabClick' />
			</view>
			<view class="box-content-wrap">
				<view class="box-content-wrap-item">
					<swiper class="swiper-box" :current="defaultIndex" @change="tabChange">
						<swiper-item class="swiper-box-item-list">
							<view class="mall-content-box">
								<!-- <mescroll-uni ref="mescrollRef" @down="downCallback" @up="upCallback" :down="downOption" :up="upOption" :height="mesHeight"> -->
									<view class="mall-content-box-list">
										<view class="mall-list-li" v-for="(item,index) in goodsList" :key="index">
											<view class="mall-list-li-item">
												<view class="mall-list-li-image">
													<image :src="item.image" mode=""></image>
												</view>
												<view class="mall-list-li-collect flex-center">
													<image src="../../static/images/store-active.png" mode="aspectFill" v-if="item.isStore"></image>
													<image src="../../static/images/store.png" mode="aspectFill" v-else></image>
												</view>
											</view>
											<view class="mall-list-li-goods-name">
												{{item.goodsName}}
											</view>
											<view class="mall-list-li-price">
												{{item.price}}
											</view>
										</view>
									</view>
								<!-- </mescroll-uni> -->
							</view>
						</swiper-item>
						<swiper-item class="swiper-box-item-list">
							<view class="mall-content-box">
								<!-- <mescroll-uni ref="mescrollRef" @down="downCallback" @up="upCallback" :down="downOption" :up="upOption" :height="mesHeight"> -->
									<view class="mall-content-box-list">
										<view class="mall-list-li" v-for="(item,index) in goodsList" :key="index">
											<view class="mall-list-li-item">
												<view class="mall-list-li-image">
													<image :src="item.image" mode=""></image>
												</view>
												<view class="mall-list-li-collect flex-center">
													<image src="../../static/images/store-active.png" mode="aspectFill" v-if="item.isStore"></image>
													<image src="../../static/images/store.png" mode="aspectFill" v-else></image>
												</view>
											</view>
											<view class="mall-list-li-goods-name">
												{{item.goodsName}}
											</view>
											<view class="mall-list-li-price">
												{{item.price}}
											</view>
										</view>
									</view>
								<!-- </mescroll-uni> -->
							</view>
						</swiper-item>
						<swiper-item class="swiper-box-item-list">
							<view class="mall-content-box">
								<!-- <mescroll-uni ref="mescrollRef" @down="downCallback" @up="upCallback" :down="downOption" :up="upOption" :height="mesHeight"> -->
									<view class="mall-content-box-list">
										<view class="mall-list-li" v-for="(item,index) in goodsList" :key="index">
											<view class="mall-list-li-item">
												<view class="mall-list-li-image">
													<image :src="item.image" mode=""></image>
												</view>
												<view class="mall-list-li-collect flex-center">
													<image src="../../static/images/store-active.png" mode="aspectFill" v-if="item.isStore"></image>
													<image src="../../static/images/store.png" mode="aspectFill" v-else></image>
												</view>
											</view>
											<view class="mall-list-li-goods-name">
												{{item.goodsName}}
											</view>
											<view class="mall-list-li-price">
												{{item.price}}
											</view>
										</view>
									</view>
								<!-- </mescroll-uni> -->
							</view>
						</swiper-item>
						<swiper-item class="swiper-box-item-list">
							<view class="mall-content-box">
								<!-- <mescroll-uni ref="mescrollRef" @down="downCallback" @up="upCallback" :down="downOption" :up="upOption" :height="mesHeight"> -->
									<view class="mall-content-box-list">
										<view class="mall-list-li" v-for="(item,index) in goodsList" :key="index">
											<view class="mall-list-li-item">
												<view class="mall-list-li-image">
													<image :src="item.image" mode=""></image>
												</view>
												<view class="mall-list-li-collect flex-center">
													<image src="../../static/images/store-active.png" mode="aspectFill" v-if="item.isStore"></image>
													<image src="../../static/images/store.png" mode="aspectFill" v-else></image>
												</view>
											</view>
											<view class="mall-list-li-goods-name">
												{{item.goodsName}}
											</view>
											<view class="mall-list-li-price">
												{{item.price}}
											</view>
										</view>
									</view>
								<!-- </mescroll-uni> -->
							</view>
						</swiper-item>
						<swiper-item class="swiper-box-item-list">
							<view class="mall-content-box">
								<!-- <mescroll-uni ref="mescrollRef" @down="downCallback" @up="upCallback" :down="downOption" :up="upOption" :height="mesHeight"> -->
									<view class="mall-content-box-list">
										<view class="mall-list-li" v-for="(item,index) in goodsList" :key="index">
											<view class="mall-list-li-item">
												<view class="mall-list-li-image">
													<image :src="item.image" mode=""></image>
												</view>
												<view class="mall-list-li-collect flex-center">
													<image src="../../static/images/store-active.png" mode="aspectFill" v-if="item.isStore"></image>
													<image src="../../static/images/store.png" mode="aspectFill" v-else></image>
												</view>
											</view>
											<view class="mall-list-li-goods-name">
												{{item.goodsName}}
											</view>
											<view class="mall-list-li-price">
												{{item.price}}
											</view>
										</view>
									</view>
								<!-- </mescroll-uni> -->
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
				tabs: ["面部护肤", "身体彩妆", "男士护肤", "洗发护发", "身体护理"],
				defaultIndex: 0,
				goodsList: [{
						image: "../../static/images/001.png",
						goodsName: "玻尿酸深层补水面膜",
						price: "356.00",
						isStore: false
					},
					
					{
						image: "../../static/images/004.png",
						goodsName: "玻尿酸深层补水面膜",
						price: "356.00",
						isStore: false
					},
					{
						image: "../../static/images/003.png",
						goodsName: "玻尿酸深层补水面膜",
						price: "356.00",
						isStore: true
					},
					{
						image: "../../static/images/002.png",
						goodsName: "玻尿酸深层补水面膜",
						price: "356.00",
						isStore: false
					},
					{
						image: "../../static/images/003.png",
						goodsName: "玻尿酸深层补水面膜",
						price: "356.00",
						isStore: true
					},
					{
						image: "../../static/images/001.png",
						goodsName: "玻尿酸深层补水面膜",
						price: "356.00",
						isStore: false
					},
					{
						image: "../../static/images/004.png",
						goodsName: "玻尿酸深层补水面膜",
						price: "356.00",
						isStore: false
					},
					{
						image: "../../static/images/003.png",
						goodsName: "玻尿酸深层补水面膜",
						price: "356.00",
						isStore: true
					},
					{
						image: "../../static/images/002.png",
						goodsName: "玻尿酸深层补水面膜",
						price: "356.00",
						isStore: false
					},	
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

							.mall-content-box {
								display: flex;
								flex-direction: column;
								flex: 1;
								overflow-y: scroll;
							
								.mall-content-box-list {
									display: flex;
									flex-wrap: wrap;
									padding-left: 40rpx;
									padding-right: 40rpx;
									box-sizing: border-box;
									// overflow-y: scroll;
							
									.mall-list-li {
										margin-bottom: 30rpx;
							
										.mall-list-li-item {
											position: relative;
											width: 315rpx;
											height: 320rpx;
											margin-bottom: 20rpx;
							
											.mall-list-li-image {
												width: 315rpx;
												height: 320rpx;
							
												image {
													width: 315rpx;
													height: 320rpx;
												}
											}
							
											.mall-list-li-collect {
												position: absolute;
												bottom: 20rpx;
												right: 20rpx;
												width: 52rpx;
												height: 52rpx;
							
												image {
													width: 42rpx;
													height: 38rpx;
												}
											}
										}
							
										.mall-list-li-goods-name {
											font-size: 28rpx;
											font-family: Source Han Sans CN;
											font-weight: 400;
											line-height: 20px;
											color: #000000;
										}
							
										.mall-list-li-price {
											font-size: 28rpx;
											font-family: Source Han Sans CN;
											font-weight: 500;
											color: #FF4D4D;
											line-height: 20px;
										}
							
									}
							
									.mall-list-li:nth-child(2n+1) {
										margin-right: 40rpx;
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
