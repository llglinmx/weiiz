<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<view class="nav-box">
				<view class="nav-back" @click="Gback">
					<image src="../../static/images/back.png" mode="aspectFill"></image>
				</view>
				<view class="nav-title">浏览记录</view>
				<view class="nav-confirm" @click="deleteClick">
					<text class="iconfont iconshanchu-shangjia" style="color: #FF8366;font-size: 38rpx;"></text>
				</view>
			</view>
			<view class="box-head-tabs">
				<liuyuno-tabs ref="boxTabs" :tabData="tabs" :activeIndex="defaultIndex" @tabClick='tabClick' />
			</view>
		</view>
		<view class="box-content">
			<view class="box-content-wrap-item">
				<swiper class="swiper-box" :current="defaultIndex" @change="tabChange">
					<swiper-item class="swiper-box-item-list">
						<view class="box-content-calendar">
							<ren-calendar ref='ren' :markDays='markDays' :headerBar='true' @onDayClick='onDayClick'></ren-calendar>
						</view>
						<view class="box-item-business">
							<view class="box-item-business-main">
								<view class="box-item-business-main-list" v-for="(item,index) in 10" :key="index">
									<view class="box-item-business-main-list-item">
										<view class="business-main-list-item-date">2月2日</view>
										<view class="business-main-list-box">
											<view class="business-main-list-box-li" v-for="(j,idx) in 3" :key="idx">
												<view class="business-main-list-box-li-image">
													<image src="../../static/images/004.png" mode="aspectFill"></image>
												</view>
												<view class="business-main-list-box-li-info">
													<view class="business-main-list-box-li-info-title">罗约蓝池·温泉SPA</view>
													<view class="business-main-list-box-li-info-score">
														<image src="../../static/images/stars-icon.png" mode="aspectFill" v-for="(s,k) in 5"></image>
														<text>5分</text>
													</view>
													<view class="business-main-list-box-li-info-text">
														<view class="business-main-list-box-li-info-text-title">
															明发商业广场
														</view>
														<view class="business-main-list-box-li-info-text-address">
															<image src="../../static/images/address-icon-green.png" mode="aspectFill"></image>
															<text>6.1km</text>
														</view>
													</view>
													<view class="business-main-list-box-li-info-wrap">
														<view class="business-main-list-box-li-info-wrap-item" v-if="idx==1" style="background: #FA6019;color:#fff">
															区域综合排名第一
														</view>
														<view class="business-main-list-box-li-info-wrap-item" v-else>
															按摩/SPA
														</view>
													</view>
												</view>
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</swiper-item>
					<swiper-item class="swiper-box-item-list">
						<view class="box-content-calendar">
							<ren-calendar ref='ren' :markDays='markDays' :headerBar='true' @onDayClick='onDayClick'></ren-calendar>
						</view>
						<view class="box-item-project">
							<view class="box-item-project-main" v-for="(item,index) in 10" :key="index">
								<view class="box-item-project-main-date">2月{{index+1}}日</view>
								<view class="box-item-project-main-list">
									<view class="box-item-project-main-list-li" v-for="(i,idx) in 5">
										<view class="box-item-project-main-list-li-image">
											<image src="../../static/images/pro-001.png" mode="aspectFill"></image>
										</view>
										<view class="box-item-project-main-list-li-price">￥599.00</view>
									</view>
								</view>
							</view>
						</view>
					</swiper-item>
					<swiper-item class="swiper-box-item-list">
						<view class="box-content-calendar">
							<ren-calendar ref='ren' :markDays='markDays' :headerBar='true' @onDayClick='onDayClick'></ren-calendar>
						</view>
						<view class="box-item-technician">
							<view class="box-item-technician-main" v-for="(item,index) in 10" :key="index">
								<view class="box-item-technician-main-date">3月{{index+1}}日</view>
								<view class="box-item-technician-main-list">
									<view class="box-item-technician-main-list-li" v-for="(i,idx) in 5">
										<view class="box-item-technician-main-list-li-image">
											<image src="../../static/images/pro-001.png" mode="aspectFill"></image>
										</view>
										<view class="box-item-technician-main-list-li-info">
											<view class="technician-main-list-li-info-title">
												<view class="technician-main-list-li-info-title-text">王二麻子</view>
												<view class="technician-main-list-li-info-title-msg">【金牌技师】</view>
											</view>
											<view class="technician-main-list-li-info-score">
												<image src="../../static/images/stars-icon.png" mode="aspectFill" v-for="(s,k) in 5"></image>
												<text>5分</text>
											</view>
											<view class="technician-main-list-li-info-text-wrap">
												<view class="technician-main-list-li-info-text-wrap-msg">
													工龄：2年
												</view>
												<view class="technician-main-list-li-info-text-wrap-msg">
													预约次数：1240
												</view>
											</view>
											<view class="technician-main-list-li-info-type">
												<view class="technician-main-list-li-info-type-item" v-for="(s,k) in 3">
													泰式按摩
												</view>

											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</swiper-item>

				</swiper>
			</view>
		</view>
		<view class="box-footer">
			<text class="iconfont iconxiangxiajiantou"></text>
		</view>
	</view>
</template>

<script>
	import liuyunoTabs from "@/components/liuyuno-tabs/liuyuno-tabs.vue";
	import RenCalendar from '@/components/ren-calendar/ren-calendar.vue'
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				tabs: ["商家浏览记录", "项目浏览记录", "技师浏览记录"],
				defaultIndex: 0, //当前 滑动的下标
				markDays: [],
				curDate: '',
			};
		},
		components: {
			liuyunoTabs,
			RenCalendar
		},
		onReady() {
			// 获取顶部电量状态栏高度
			uni.getSystemInfo({
				success: (res) => {
					this.barHeight = res.statusBarHeight
				}
			});

			let today = this.$refs.ren.getToday().date;
			this.curDate = today;
			this.markDays.push(today);
		},
		methods: {
			// 日期选择
			onDayClick(data) {
				this.curDate = data.date;
				console.log(this.curDate)
			},

			// 返回
			Gback() {
				uni.navigateBack({
					delta: 1
				})
			},
			// 删除
			deleteClick() {
				uni.showToast({
					title: "删除",
					icon: "none"
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
		font-family: Source Han Sans CN;
		font-weight: 400;

		.box-head {
			background-color: #fff;

			.nav-box {
				display: flex;
				align-items: center;
				height: 88rpx;
				background: #fff;

				.nav-back {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 50rpx;
					height: 34rpx;
					margin-left: 20rpx;
					box-sizing: border-box;

					image {
						width: 18rpx;
						height: 34rpx;
					}
				}

				.nav-title {
					display: flex;
					align-items: center;
					justify-content: center;
					flex: 1;
					margin-left: 20rpx;
					font-size: 34rpx;
					font-family: Source Han Sans CN;
					font-weight: 500;
					color: #000000;
				}

				.nav-confirm {
					padding-right: 40rpx;
					font-size: 30rpx;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color: #FF8366;
				}
			}
		}

		.box-content {
			flex: 1;
			border-top: 1rpx solid #ededed;
			background: #f7f7f7;

			.box-content-wrap-item {
				height: 100%;

				font-family: Source Han Sans CN;
				font-weight: 400;

				.swiper-box {
					height: 100%;

					.swiper-box-item-list {
						display: flex;
						flex-direction: column;

						.box-content-calendar {}

						.box-item-business {
							flex: 1;
							overflow-y: scroll;

							.box-item-business-main {

								.box-item-business-main-list:last-child {
									margin-bottom: 40rpx;
								}

								.box-item-business-main-list {
									padding: 0 20rpx;
									box-sizing: border-box;

									.box-item-business-main-list-item {

										.business-main-list-item-date {
											padding-left: 20rpx;
											box-sizing: border-box;
											margin: 20rpx 0;
											font-size: 28rpx;
											color: #999;
										}

										.business-main-list-box {
											.business-main-list-box-li {
												padding: 20rpx;
												box-sizing: border-box;
												display: flex;
												margin-bottom: 10rpx;
												background: #fff;
												border-radius: 10rpx;

												.business-main-list-box-li-image {
													image {
														width: 164rpx;
														height: 164rpx;
													}
												}

												.business-main-list-box-li-info {
													flex: 1;
													margin-left: 20rpx;

													.business-main-list-box-li-info-title {
														font-size: 34rpx;
														color: #000;
														line-height: 32rpx;
													}

													.business-main-list-box-li-info-score {
														margin: 10rpx 0;
														display: flex;
														align-items: center;

														image {
															width: 30rpx;
															height: 30rpx;
														}

														text {
															margin-left: 10rpx;
															color: #999;
															font-size: 24rpx;
														}
													}

													.business-main-list-box-li-info-text {
														display: flex;
														justify-content: space-between;

														.business-main-list-box-li-info-text-title {
															font-size: 24rpx;
															color: #666;
														}

														.business-main-list-box-li-info-text-address {
															display: flex;
															align-items: center;

															image {
																width: 24rpx;
																height: 24rpx;
															}

															text {
																margin-left: 10rpx;
																font-size: 24rpx;
																color: #999;
															}
														}
													}

													.business-main-list-box-li-info-wrap {
														display: flex;
														flex-wrap: wrap;
														margin-top: 8rpx;

														.business-main-list-box-li-info-wrap-item {
															padding: 6rpx 10rpx;
															margin-right: 8rpx;
															color: #666;
															font-size: 22rpx;
															background: #F5F5F5;
															border-radius: 3rpx;
														}
													}

												}
											}
										}
									}
								}
							}
						}

						.box-item-project {
							flex: 1;
							overflow-y: scroll;

							.box-item-project-main:last-child {
								margin-bottom: 40rpx;
							}

							.box-item-project-main {
								padding: 0 20rpx;
								box-sizing: border-box;

								.box-item-project-main-date {
									margin: 20rpx 0;
									padding-left: 20rpx;
									box-sizing: border-box;
									font-size: 28rpx;
									color: #999;
								}

								.box-item-project-main-list {
									display: flex;
									flex-wrap: wrap;

									.box-item-project-main-list-li {
										width: 230rpx;
										height: 298rpx;
										margin-right: 10rpx;
										margin-bottom: 10rpx;
										border-radius: 10rpx;
										background: #fff;
										overflow: hidden;

										.box-item-project-main-list-li-image {
											image {
												width: 230rpx;
												height: 230rpx;
											}
										}

										.box-item-project-main-list-li-price {
											margin-left: 20rpx;
											font-size: 28rpx;
											color: #000;
										}
									}

									.box-item-project-main-list-li:nth-child(3n) {
										margin-right: 0;
									}
								}
							}
						}

						.box-item-technician {
							flex: 1;
							overflow-y: scroll;

							.box-item-technician-main:last-child {
								margin-bottom: 40rpx;
							}

							.box-item-technician-main {
								padding: 0 20rpx;
								box-sizing: border-box;

								.box-item-technician-main-date {
									margin: 20rpx 0;
									padding-left: 20rpx;
									box-sizing: border-box;
									font-size: 28rpx;
									color: #999;
								}

								.box-item-technician-main-list {
									.box-item-technician-main-list-li {
										padding: 20rpx;
										box-sizing: border-box;
										display: flex;
										height: 204rpx;
										background: #FFFFFF;
										border-radius: 10rpx;

										.box-item-technician-main-list-li-image {
											border-radius: 10rpx;

											image {
												width: 164rpx;
												height: 164rpx;
											}
										}

										.box-item-technician-main-list-li-info {
											flex: 1;
											margin-left: 20rpx;

											.technician-main-list-li-info-title {
												display: flex;
												align-items: center;

												.technician-main-list-li-info-title-text {
													color: #000;
													font-size: 34rpx;

												}

												.technician-main-list-li-info-title-msg {
													color: #FF8366;
													font-size: 28rpx;
												}
											}

											.technician-main-list-li-info-score {

												display: flex;
												align-items: center;

												image {
													width: 30rpx;
													height: 30rpx;
												}

												text {
													margin-left: 10rpx;
													font-size: 24rpx;
													color: #999;
												}
											}

											.technician-main-list-li-info-text-wrap {
												margin: 10rpx 0;
												display: flex;
												flex-wrap: wrap;
												align-items: center;

												.technician-main-list-li-info-text-wrap-msg {
													height: 24rpx;
													padding: 0 20rpx;
													box-sizing: border-box;
													line-height: 24rpx;
													border-right: 1rpx solid #ccc;
													font-size: 24rpx;
													color: #ccc;
												}

												.technician-main-list-li-info-text-wrap-msg:first-child {
													padding-left: 0;
												}

												.technician-main-list-li-info-text-wrap-msg:last-child {
													border-right: 0;
												}
											}

											.technician-main-list-li-info-type {
												position: relative;
												display: flex;
												flex-wrap: wrap;
												// height: 38rpx;
												// overflow: hidden;

												.technician-main-list-li-info-type-item {
													padding: 6rpx 10rpx;
													margin-right: 8rpx;
													margin-bottom: 8rpx;
													background: #F5F5F5;
													border-radius: 3rpx;
													color: #666;
													font-size: 22rpx;
												}

												.technician-main-list-li-info-type-item:nth-child(4) {
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
		}

		.box-footer {}
	}
</style>
