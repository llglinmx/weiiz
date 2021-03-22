<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="优惠券"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content-tabs">
				<liuyuno-tabs ref="boxTabs" :tabData="tabs" :activeIndex="defaultIndex" @tabClick='tabClick' />
			</view>
			<view class="box-content-wrap">
				<mescroll-uni ref="mescrollRef" @down="downCallback" @up="upCallback" :down="downOption" :up="upOption"
					:height="mesHeight">
					<view class="box-content-wrap-item">
						<swiper class="swiper-box" :current="defaultIndex" @change="tabChange">
							<swiper-item class="swiper-box-item-list">
								<view class="list-wrap">
									<view class="list-wrap-item" v-for="(item,index) in couponList" :key="index">
										<view class="list-wrap-item-left list-wrap-item-left-bg-blue flex-center">
											<view class="list-wrap-item-left-money">20 <text>元</text></view>
											<view class="list-wrap-item-left-text">满200元可用</view>
										</view>
										<view class="list-wrap-item-right">
											<view class="list-wrap-item-right-info">
												<view class="list-wrap-item-right-info-title">全平台通用券</view>
												<view class="list-wrap-item-right-info-text" style="margin-top: 50rpx;">
													门店：全平台</view>
												<view class="list-wrap-item-right-info-text">有效期：2020.01.09-2020.01.18
												</view>
											</view>
											<view
												class="list-wrap-item-right-btn list-wrap-item-right-btn-blue flex-center">
												立即使用</view>
										</view>
									</view>
								</view>
							</swiper-item>
							<swiper-item class="swiper-box-item-list">
								<view class="list-wrap">
									<view class="list-wrap-item" v-for="(item,index) in couponList" :key="index">
										<view class="list-wrap-item-left list-wrap-item-left-bg-yellow flex-center">
											<view class="list-wrap-item-left-money">20 <text>元</text></view>
											<view class="list-wrap-item-left-text">满200元可用</view>
										</view>
										<view class="list-wrap-item-right">
											<view class="list-wrap-item-right-info">
												<view class="list-wrap-item-right-info-title">店铺通用券</view>
												<view class="list-wrap-item-right-info-text" style="margin-top: 50rpx;">
													门店：罗约蓝池·温泉SPA</view>
												<view class="list-wrap-item-right-info-text">有效期：2020.01.09-2020.01.18
												</view>
											</view>
											<view
												class="list-wrap-item-right-btn list-wrap-item-right-btn-yellow flex-center">
												立即使用</view>
										</view>
									</view>
								</view>
							</swiper-item>
							<swiper-item class="swiper-box-item-list">
								<view class="list-wrap">
									<view class="list-wrap-item" v-for="(item,index) in couponList" :key="index">
										<view class="list-wrap-item-left list-wrap-item-left-bg-gray flex-center">
											<view class="list-wrap-item-left-money">20 <text>元</text></view>
											<view class="list-wrap-item-left-text">满200元可用</view>
										</view>
										<view class="list-wrap-item-right">
											<view class="list-wrap-item-right-info">
												<view class="list-wrap-item-right-info-title">店铺通用券</view>
												<view class="list-wrap-item-right-info-text" style="margin-top: 50rpx;">
													门店：罗约蓝池·温泉SPA</view>
												<view class="list-wrap-item-right-info-text">有效期：2020.01.09-2020.01.18
												</view>
											</view>
											<view class="list-wrap-item-right-info-abandoned"></view>
										</view>
									</view>
								</view>
							</swiper-item>
							<swiper-item class="swiper-box-item-list">
								<view class="list-wrap">
									<view class="list-wrap-item" v-for="(item,index) in couponList" :key="index">
										<view class="list-wrap-item-left list-wrap-item-left-bg-gray flex-center">
											<view class="list-wrap-item-left-money">20 <text>元</text></view>
											<view class="list-wrap-item-left-text">满200元可用</view>
										</view>
										<view class="list-wrap-item-right">
											<view class="list-wrap-item-right-info">
												<view class="list-wrap-item-right-info-title">店铺通用券</view>
												<view class="list-wrap-item-right-info-text" style="margin-top: 50rpx;">
													门店：罗约蓝池·温泉SPA</view>
												<view class="list-wrap-item-right-info-text">有效期：2020.01.09-2020.01.18
												</view>
											</view>
											<view class="list-wrap-item-right-info-be-overdue"></view>
										</view>
									</view>
								</view>
							</swiper-item>
						</swiper>
					</view>
				</mescroll-uni>
			</view>
		</view>
		<view class="box-footer">
			<view class="box-footer-btn flex-center" @click="receive">领取更多优惠券</view>
		</view>
	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	import liuyunoTabs from "@/components/liuyuno-tabs/liuyuno-tabs.vue";
	import MescrollMixin from "../../components/mescroll-uni/mescroll-mixins.js";
	import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
	export default {
		mixins: [MescrollMixin], // 使用mixin
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				defaultIndex: 0,
				tabs: ["平台优惠券", "店铺优惠券", "已使用", "已过期"],
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
				couponList: [],
				status: -1,
				type: -1
			};
		},
		components: {
			navTitle,
			liuyunoTabs,
			MescrollUni
		},
		onShow() {
			const sys = uni.getSystemInfoSync();
			var Height = sys.windowHeight
			this.mesHeight = (Height - 160) * 2
		},
		onReady() {
			// 获取顶部电量状态栏高度
			uni.getSystemInfo({
				success: (res) => {
					this.barHeight = res.statusBarHeight
				}
			});
		},
		onLoad() {
			var page = {
				num: 1,
				size: 10,
			}
			this.upCallback(page)
		},
		methods: {

			/*下拉刷新的回调*/
			downCallback() {
				this.mescroll.resetUpScroll()
				this.goodsList = []
			},

			/*上拉加载的回调*/
			upCallback(page) {
				this.getDataList(page, this.orderType)
			},

			// 获取数据
			getDataList(page, status, type) {
				var vuedata = {
					page_index: page.num, // 请求页数，
					each_page: page.size, // 请求条数
					status: this.status,
					type: this.type
				}
				this.apiget('api/v1/members/coupon', vuedata).then(res => {
					if (res.status == 200) {
						if (res.data.data.length != 0) {
							let list = res.data.data
							let totalSize = res.data.total_rows
							//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
							this.mescroll.endBySize(list.length, totalSize); //必传参数(当前页的数据个数, 总数据量)
							//设置列表数据
							if (page.num == 1) this.couponList = []; //如果是第一页需手动制空列表
							this.couponList = this.couponList.concat(list); //追加新数据
							console.log(this.couponList)
						} else {
							// 显示无数据背景
							this.mescroll.showEmpty()
						}

					}
				});
			},




			// tabs 点击
			tabClick(e) {
				this.defaultIndex = e

				this.setType(this.defaultIndex)

			},
			// 滑动切换列表
			tabChange(e) {
				this.$refs.boxTabs.tabToIndex(e.detail.current)
				this.defaultIndex = e.detail.current
				this.setType(this.defaultIndex)
			},

			setType(defaultIndex) {
				switch (defaultIndex) {
					case 0:
						this.status = -1
						this.type = -1
						break;
					case 1:
						this.status = -1
						this.type = 1
						break;
					case 2:
						this.status = 1
						this.type = ''
						break;
					case 3:
						this.status = -2
						this.type = ''
						break;
				}
				var page = {
					num: 1,
					size: 10,
				}
				this.upCallback(page)
			},

			// 领取更多优惠券按钮
			receive() {
				uni.navigateTo({
					url: "../collection-center/collection-center"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
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

							.list-wrap {
								height: 100%;
								overflow-y: scroll;
								padding: 0 30rpx;
								box-sizing: border-box;

								.list-wrap-item {
									display: flex;
									align-items: center;
									margin-top: 20rpx;

									.list-wrap-item-left {
										width: 200rpx;
										height: 200rpx;
										flex-direction: column;
										color: #fff;

										.list-wrap-item-left-money {
											font-size: 72rpx;

											text {
												font-size: 22rpx;
											}
										}

										.list-wrap-item-left-text {
											font-size: 22rpx;
										}

									}

									.list-wrap-item-left-bg-blue {
										background: url(../../static/images/coupone-sky-blue.png) no-repeat;
										background-size: contain;
									}

									.list-wrap-item-left-bg-yellow {
										background: url(../../static/images/coupons-yellow.png) no-repeat;
										background-size: contain;
									}

									.list-wrap-item-left-bg-gray {
										background: url(../../static/images/coupons-gray.png) no-repeat;
										background-size: contain;
									}

									.list-wrap-item-right {
										position: relative;
										display: flex;
										align-items: center;
										height: 200rpx;
										flex: 1;
										padding: 30rpx 20rpx;
										box-sizing: border-box;
										background: #fff;

										.list-wrap-item-right-info {
											flex: 1;

											.list-wrap-item-right-info-title {
												font-size: 32rpx;
												color: #000;
											}

											.list-wrap-item-right-info-text {
												color: #999;
												font-size: 22rpx;
											}
										}

										.list-wrap-item-right-btn {
											width: 56rpx;
											height: 150rpx;
											padding: 24rpx 16rpx;
											box-sizing: border-box;
											color: #fff;
											font-size: 24rpx;
											border-radius: 54rpx;
											line-height: 26rpx;
										}

										.list-wrap-item-right-btn-blue {
											background: #88ADF7;
										}

										.list-wrap-item-right-btn-yellow {
											background: #FFCD4D;
										}

										.list-wrap-item-right-info-abandoned {
											position: absolute;
											top: 47rpx;
											right: 20rpx;
											width: 161rpx;
											height: 106rpx;
											background: url(../../static/images/used-icon.png) no-repeat;
											background-size: contain;
										}

										.list-wrap-item-right-info-be-overdue {
											position: absolute;
											top: 47rpx;
											right: 20rpx;
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

		.box-footer {
			padding: 30rpx 40rpx;
			box-sizing: border-box;

			.box-footer-btn {
				height: 88rpx;
				background: rgba(255, 150, 125, 0);
				border: 1rpx solid #333333;
				border-radius: 15rpx;
				color: #333;
				font-size: 32rpx;
			}
		}
	}
</style>
