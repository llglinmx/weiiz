<template>
	<view class="sub-box">
		<view class="sub-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="订单列表"></navTitle>
			<view class="sub-head-tabs">
				<liuyuno-tabs ref="boxTabs" :tabData="TabsList" :activeIndex="idx" @tabClick='tabClick' />
			</view>
		</view>
		<view class="sub-content">
			<view class="sub-content-wrap">
				<swiper class="swiper-box" :current="idx" @change="tabChange">
					<swiper-item class="swiper-box-item-list" v-for="(item, index) in TabsList" :key="index">
						<scroll-tab-swiper-item :tabIndex="index" :currentIndex="idx" :orderType='orderType'
							@couponCode="viewCouponCode"></scroll-tab-swiper-item>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	import liuyunoTabs from "@/components/liuyuno-tabs/liuyuno-tabs.vue";
	import zPaging from "../../uni_modules/z-paging/components/z-paging/z-paging.vue"
	import scrollTabSwiperItem from "../../components/scroll-tab-swiper-item/scroll-tab-swiper-item.vue"

	export default {
		data() {
			return {
				TabsList: ["全部订单", "待付款", "待核销", "已核销", "退款/售后"],
				idx: 0, // 页面索引
				barHeight: 0, //顶部电量导航栏高度
				goodsList: [],
				orderType: 1, //当前加载订单类型
			}
		},
		components: {
			liuyunoTabs,
			navTitle,
			zPaging,
			scrollTabSwiperItem
		},
		onReady() {
			// 获取顶部电量状态栏高度
			uni.getSystemInfo({
				success: (res) => {
					this.barHeight = res.statusBarHeight
				}
			});
		},
		onLoad(options) {
			this.idx = options.listIndex * 1 // *1 是为了把字符串转为数字
		},
		onShow() {

		},

		methods: {


			queryList(pageNo, pageSize) {
				//这里的pageNo和pageSize会自动计算好，直接传给服务器即可
				//这里的请求只是演示，请替换成自己的项目的网络请求，请在网络请求回调中
				//通过this.$refs.paging.addData(请求回来的数组);将请求结果传给z-paging
				var page = {
					num: pageNo,
					size: pageSize
				}
				this.getDataList(page)

			},
			dropDown() {

			},


			// 获取数据
			getDataList(page) {
				var vuedata = {
					page_index: page.num, // 请求页数，
					each_page: page.size, // 请求条数
					order_status: this.orderType
				}
				this.apiget('api/v1/members/member_order', vuedata).then(res => {
					if (res.status == 200) {
						if (res.data.data.length != 0) {
							let list = res.data.data
							let totalSize = res.data.total_rows
							this.$refs.paging.addData(list);
							this.goodsList = this.goodsList.concat(list); //追加新数据
							console.log(this.goodsList)
						} else {
							// 显示无数据背景
							this.mescroll.showEmpty()
						}

					}
				});
			},

			tabIndex(index) {
				switch (index) {
					case 0:
						this.orderType = 1
						break;
					case 1:
						this.orderType = -1
						// this.orderType = 1
						break;
					case 2:
						this.orderType = -2
						break;
					case 3:
						this.orderType = 2
						break;
					case 4:
						this.orderType = 3
						break;
				}

			},


			// tabs 点击
			tabClick(e) {
				this.idx = e
				// this.tabIndex(this.idx)
			},
			// 滑动切换列表
			tabChange(e) {
				this.$refs.boxTabs.tabToIndex(e.detail.current)
				this.idx = e.detail.current
				this.tabIndex(this.idx)
			},
			// 查看券码
			viewCouponCode(id) {
				uni.navigateTo({
					url: "../../pagesMineThree/waitingForWriteOff/waitingForWriteOff?id=" + id
				})
			},
			// 订单评价
			OrderEval() {
				uni.navigateTo({
					url: "../../pagesMineThree/evaluate/evaluate"
				})
			},



		}
	}
</script>

<style scoped lang="scss">
	.sub-box {
		height: 100%;
		display: flex;
		flex-direction: column;
		background: #F7F7F7;

		.sub-head {
			background: #fff;
		}

		.sub-content {
			display: flex;
			// padding-bottom: 40rpx;
			flex: 1;

			.sub-content-wrap {
				width: 100%;
				height: 100%;

				.swiper-box {
					height: 100%;

					.swiper-box-item-list {
						overflow-y: scroll;

						.sub-content-list {
							height: 100%;

							.sub-content-list-li {
								display: flex;
								flex-direction: column;
								justify-content: space-between;
								padding: 20rpx 40rpx;
								margin-top: 20rpx;
								box-sizing: border-box;
								background: #fff;

								.content-list-li-top {
									display: flex;
									align-items: center;
									justify-content: space-between;

									.list-li-top-title {
										image {
											width: 28rpx;
											height: 28rpx;
										}

										text {
											margin-left: 8rpx;
											font-size: 28rpx;
											font-family: Source Han Sans CN;
											font-weight: 400;
											color: #000000;
										}
									}

									.list-li-top-state {
										font-size: 28rpx;
										font-family: Source Han Sans CN;
										font-weight: 400;
										color: #FF6F4D;
									}
								}

								.list-li-wrap {
									padding: 30rpx 0;
									box-sizing: border-box;

									.list-li-wrap-item {
										display: flex;
										margin-bottom: 20rpx;

										.list-li-item-info-image {
											width: 132rpx;
											height: 132rpx;

											image {
												width: 132rpx;
												height: 132rpx;
											}
										}

										.list-li-item-info {
											flex: 1;
											margin-left: 20rpx;

											.list-li-info-top {
												display: flex;
												justify-content: space-between;

												.list-li-info-top-title {
													font-size: 30rpx;
													font-family: Source Han Sans CN;
													font-weight: 500;
													color: #000000;
												}

												.list-li-info-top-text {
													font-size: 28rpx;
													font-family: Source Han Sans CN;
													font-weight: 400;
													color: #000000;
												}
											}

											.list-li-info-center-box {
												display: flex;
												justify-content: space-between;

												.list-center-box-wrap {
													display: flex;
													flex-wrap: wrap;
													margin-top: 10rpx;

													.list-center-box-wrap-item {
														padding: 6rpx 10rpx;
														margin-right: 8rpx;
														margin-bottom: 8rpx;
														font-size: 22rpx;
														font-family: Source Han Sans CN;
														font-weight: 400;
														line-height: 22rpx;
														color: #666666;
														background: #F5F5F5;
														border-radius: 3px;
													}

													.list-center-box-wrap-item:last-child {
														margin-right: 0;
													}
												}

												.list-center-box-number {
													margin-left: 10rpx;
													font-size: 28rpx;
													font-family: Source Han Sans CN;
													font-weight: 400;
													color: #999999;
												}
											}
										}
									}

									.list-li-wrap-item:last-child {
										margin-bottom: 0;
									}
								}

								.content-list-li-bottom {
									display: flex;
									justify-content: space-between;

									.content-list-li-payment {
										display: flex;
										align-items: center;

										.list-li-payment-text {
											font-size: 24rpx;
											font-family: Source Han Sans CN;
											font-weight: 400;
											color: #999999;
										}

										.list-li-payment-money {
											font-size: 24rpx;
											font-family: Source Han Sans CN;
											font-weight: 500;
											color: #FF4D4D;

											text {
												font-size: 32rpx;
											}
										}
									}

									.content-list-li-all-btns {
										display: flex;

										.more-list-li-btn {
											width: 176rpx;
											height: 60rpx;
											margin-right: 20rpx;
											background: #FF8366;
											border-radius: 32rpx;
											font-size: 28rpx;
											font-family: Source Han Sans CN;
											font-weight: 400;
											color: #fff;
										}

										.more-list-li-btn-border {
											background: none !important;
											border: 1px solid #666666;
											color: #666666 !important;
										}

										.more-list-li-btn-border-red {
											background: none !important;
											border: 1px solid #FF6F4D;
											color: #FF6F4D !important;
										}

										.more-list-li-btn:last-child {
											margin-right: 0;
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
