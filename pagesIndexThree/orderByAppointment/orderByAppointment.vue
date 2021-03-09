<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="预约下单"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content-wrap">
				<view class="content-wrap-top">
					<view class="content-wrap-top-title">
						<image src="../../static/images/tool.jpg" mode="aspectFill"></image>
						<text>罗约蓝池·温泉SPA</text>
					</view>
					<view class="content-wrap-top-more">
						<image src="../../static/images/more-gray.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="content-wrap-top-list">
					<view class="content-wrap-top-list-li">
						<view class="content-wrap-top-list-li-image">
							<image src="../../static/images/001.png" mode="aspectFill"></image>
						</view>
						<view class="content-wrap-top-list-li-info">
							<view class="content-wrap-top-list-li-info-top">
								<view class="content-wrap-top-list-li-info-top-text">
									全身按摩SPA
								</view>
								<view class="content-wrap-top-list-li-info-top-price">
									￥238.00
								</view>
							</view>
							<view class="content-wrap-top-list-li-info-type">
								<view class="list-li-info-type-item flex-center" v-for="item in 5">足底按摩</view>
							</view>
						</view>
					</view>
					<view class="content-wrap-top-bottom">
						<view class="content-wrap-top-bottom-num">数量</view>
						<view class="content-wrap-top-bottom-stepper">
							<view class="reduce" @click="stepperClick('reduce')">
								<image src="../../static/images/reduce-icon.png" mode="aspectFill"></image>
							</view>
							<view class="num flex-center">
								{{num}}
							</view>
							<view class="add" @click="stepperClick('add')">
								<image src="../../static/images/add-icon.png" mode="aspectFill"></image>
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="box-content-select-technician">
				<view class="content-select-technician-wrap" :class="isSelect?'technician-wrap-border':''" @click="selectTechnician">
					<view class="box-content-select-technician-title" :class="isSelect?'title-color':''">
						选择按摩技师
					</view>
					<view class="box-content-select-technician-more">
						<image src="../../static/images/more-icon-FF967D.png" mode="aspectFill" v-if="!isSelect"></image>
						<image src="../../static/images/more.png" mode="aspectFill" v-else></image>
					</view>
				</view>
				<view class="select-technician-info" :class="isSelect?'select-technician-info-auto':''">
					<view class="select-technician-info-image">
						<image src="../../static/images/shop-ico.png" mode="aspectFill"></image>
					</view>
					<view class="select-technician-info-main">
						<view class="select-technician-info-main-top">
							<view class="select-technician-info-main-top-title">王二麻子</view>
							<view class="select-technician-info-main-top-price">￥44.70</view>
						</view>
						<view class="select-technician-info-main-center">
							<view class="select-technician-info-main-title">工龄：2年</view>
							<view class="select-technician-info-main-text">X1</view>
						</view>
						<view class="select-technician-info-main-bottom">
							<view class="select-technician-info-main-bottom-item flex-center" v-for="item in 3">足底按摩</view>
						</view>
					</view>
				</view>
			</view>

			<view class="box-content-appointment-time">
				<view class="box-content-appointment-time-wrap">
					<view class="box-content-appointment-time-wrap-top">
						<view class="appointment-time-wrap-title">
							预约时间
						</view>
						<view class="appointment-time-wrap-text">
							<text>2021-01-10 15:30-16:30</text>
							<image src="../../static/images/more.png" mode="aspectFill"></image>
						</view>
					</view>
				</view>
				<view class="box-content-appointment-time-week">
					<week-tabs :tabData="tabs" :activeIndex="defaultIndex" @tabClick='tabClick' />
				</view>
				<view class="box-content-appointment-time-main">
					<view class="appointment-time-main-list">
						<view class="appointment-time-main-list-li flex-center" :class="index==20?'main-list-li-active':''" v-for="(item,index) in timeList"
						 :key="index">
							<text>{{item}}</text>
						</view>
					</view>
				</view>
			</view>

			<view class="box-content-appointment-info">
				<view class="box-content-appointment-info-list">
					<view class="box-content-appointment-info-list-li">
						<view class="appointment-info-list-li-title">预约姓名</view>
						<view class="appointment-info-list-li-input">
							<input type="text" value="" placeholder="请输入你的完整姓名" />
						</view>
						<view class="appointment-info-list-li-title-type">
							<view class="appointment-info-list-li-title-type-name flex-center" v-for="(item,index) in typeList" :key="index">{{item}}</view>
						</view>
					</view>
					<view class="box-content-appointment-info-list-li">
						<view class="appointment-info-list-li-title">手机号码</view>
						<view class="appointment-info-list-li-input" style="flex: 1;">
							<input type="number" value="" placeholder="请输入你的手机号码" />
						</view>
					</view>
					<view class="box-content-appointment-info-list-li">
						<view class="appointment-info-list-li-title">订单备注</view>
						<view class="appointment-info-list-li-input" style="flex: 1;">
							<input type="text" value="" placeholder="可将您的其他要求告知商家" />
						</view>
					</view>
				</view>
			</view>

			<view class="box-content-coupon">
				<view class="box-content-coupon-top" @click="checkCoupons">
					<view class="box-content-coupon-top-title">优惠券</view>
					<view class="box-content-coupon-top-more">
						<text>-￥50.00</text>
						<image src="../../static/images/more-icon-FF967D.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="box-content-coupon-bottom">
					<view class="box-content-coupon-bottom-text">已优惠￥10</view>
					<view class="box-content-coupon-bottom-price">
						小计￥<text>888.00</text>
					</view>
				</view>
			</view>

		</view>
		<view class="box-footer">
			<view class="box-footer-text">
				合计￥：<text>520.00</text>
			</view>
			<view class="box-footer-btn flex-center" @click="appointment">
				立即预约
			</view>
		</view>
	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	import weekTabs from "@/components/week-tabs/week-tabs.vue";
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				num: 1, //下单数量
				isSelect: false, //是否有选择技师
				typeList: ["先生", "女士"],
				defaultIndex: 0, //星期 当前选中日期
				tabs: ["今天01-10", "周一01-11", "周二01-11", "周三01-11", "周四01-11", "周五01-11", "周六01-11"],
				timeList: [
					"09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00",
					"13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
					"09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00",
					"13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
				],
			};
		},
		components: {
			navTitle,
			weekTabs
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
					case "reduce":
						if (this.num <= 1) {
							uni.showToast({
								title: "已经不能再减了",
								icon: "none"
							})
						} else {
							this.num -= 1
						}
						break;
					case "add":
						this.num += 1
						break;
				}
			},

			// 点击选择技师
			selectTechnician() {
				uni.navigateTo({
					url: "../../pagesIndexFour/selectMassageTechnician/selectMassageTechnician"
				})

				// this.isSelect = !this.isSelect
			},

			// 点击选择优惠券
			checkCoupons() {
				uni.navigateTo({
					url: "../../pagesCommon/selectCoupons/selectCoupons"
				})
			},
			// 星期日期tabs 点击
			tabClick(e) {
				this.defaultIndex = e
			},

			// 立即预约按钮
			appointment() {
				uni.navigateTo({
					url: "../../pagesIndexFour/paymentOrder/paymentOrder"
				})
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

			.box-content-wrap {
				padding: 30rpx 40rpx 0;
				box-sizing: border-box;
				background: #fff;

				.content-wrap-top {
					display: flex;
					justify-content: space-between;
					align-items: center;

					.content-wrap-top-title {
						display: flex;
						align-items: center;


						image {
							width: 28rpx;
							height: 28rpx;
						}

						text {
							margin-left: 10rpx;
							font-size: 28rpx;
							color: #000;
							font-weight: 500;
						}
					}

					.content-wrap-top-more {
						image {
							width: 28rpx;
							height: 28rpx;
						}

					}
				}

				.content-wrap-top-list {
					.content-wrap-top-list-li {
						display: flex;
						padding: 30rpx 0;
						box-sizing: border-box;
						border-bottom: 1rpx solid #ededed;

						.content-wrap-top-list-li-image {
							image {
								width: 138rpx;
								height: 138rpx;
							}
						}

						.content-wrap-top-list-li-info {
							flex: 1;
							margin-left: 20rpx;

							.content-wrap-top-list-li-info-top {
								display: flex;
								justify-content: space-between;
								align-items: center;
								font-size: 30rpx;

								.content-wrap-top-list-li-info-top-text {
									color: #000;
								}

								.content-wrap-top-list-li-info-top-price {
									color: #FF8366
								}
							}

							.content-wrap-top-list-li-info-type {
								display: flex;
								flex-wrap: wrap;
								margin-top: 20rpx;

								.list-li-info-type-item {
									width: 108rpx;
									height: 34rpx;
									margin-right: 8rpx;
									margin-bottom: 8rpx;
									background: #F5F5F5;
									border-radius: 3rpx;
									font-size: 22rpx;
									color: #666;
								}
							}
						}
					}
				}

				.content-wrap-top-bottom {
					display: flex;
					align-items: center;
					justify-content: space-between;
					height: 100rpx;

					.content-wrap-top-bottom-num {
						font-size: 30rpx;
						color: #000;
					}

					.content-wrap-top-bottom-stepper {
						display: flex;
						width: 220rpx;
						height: 68rpx;
						border: 1px solid #E0E0E0;
						border-radius: 20rpx;

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


			.box-content-select-technician {
				padding: 0 40rpx;
				box-sizing: border-box;
				margin-top: 20rpx;
				background: #fff;

				.content-select-technician-wrap {
					display: flex;
					align-items: center;
					height: 100rpx;
					justify-content: space-between;


					.box-content-select-technician-title {
						font-size: 32rpx;
						color: #FF8366;
						transition: 0.2s;
					}

					.title-color {
						color: #000 !important;
					}

					.box-content-select-technician-more {
						image {
							width: 28rpx;
							height: 28rpx;
						}
					}
				}

				.technician-wrap-border {
					border-bottom: 1rpx solid #ededed;
				}

				.select-technician-info-auto {
					height: 208rpx !important;
				}

				.select-technician-info {
					display: flex;
					height: 0;
					overflow: hidden;
					align-items: center;
					transition: 0.3s;

					.select-technician-info-image {
						image {
							width: 148rpx;
							height: 148rpx;
						}
					}

					.select-technician-info-main {
						flex: 1;
						margin-left: 20rpx;
						display: flex;
						flex-direction: column;

						.select-technician-info-main-top {
							display: flex;
							align-items: center;
							justify-content: space-between;

							.select-technician-info-main-top-title {
								font-size: 30rpx;
								color: #000;
							}

							.select-technician-info-main-top-price {
								font-size: 28rpx;
								color: #999;
							}
						}

						.select-technician-info-main-center {
							display: flex;
							align-items: center;
							justify-content: space-between;

							.select-technician-info-main-title {
								font-size: 24rpx;
								color: #666;
							}

							.select-technician-info-main-text {
								font-size: 30rpx;
								color: #999;
							}
						}

						.select-technician-info-main-bottom {
							display: flex;
							flex-wrap: wrap;
							margin-top: 10rpx;

							.select-technician-info-main-bottom-item {
								width: 108rpx;
								height: 34rpx;
								margin-right: 8rpx;
								margin-bottom: 8rpx;
								background: #F5F5F5;
								border-radius: 3rpx;
								font-size: 22rpx;
								color: #666666;
							}
						}
					}
				}

			}

			.box-content-appointment-time {
				margin-top: 20rpx;
				background: #fff;

				.box-content-appointment-time-wrap {
					padding: 0 40rpx;
					box-sizing: border-box;

					.box-content-appointment-time-wrap-top {
						height: 96rpx;
						display: flex;
						align-items: center;
						justify-content: space-between;
						border-bottom: 1rpx solid #ededed;
						font-size: 32rpx;

						.appointment-time-wrap-title {
							color: #000;
						}

						.appointment-time-wrap-text {
							text {
								color: #26BF82;
							}

							image {
								width: 30rpx;
								height: 30rpx;
								margin-left: 20rpx;
								transform: rotate(270deg);
								transition: 0.3s;
							}
						}
					}
				}

				.box-content-appointment-time-week {}

				.box-content-appointment-time-main {
					padding: 30rpx 16rpx;
					box-sizing: border-box;
					border-top: 1rpx solid #ededed;

					.appointment-time-main-list {
						display: flex;
						flex-wrap: wrap;

						.appointment-time-main-list-li {
							width: 120rpx;
							height: 58rpx;
							font-size: 28rpx;
						}

						.main-list-li-active {
							background: #26BF82;
							color: #fff;
							border-radius: 32rpx;
						}

						.main-list-li-active-first {
							background: #26BF82;
							color: #fff;
							border-radius: 32rpx 0 0 32rpx;
						}

						.main-list-li-active-last {
							background: #26BF82;
							color: #fff;
							border-radius: 0 32rpx 32rpx 0;
						}
					}
				}
			}


			.box-content-appointment-info {
				margin-top: 20rpx;
				background: #fff;

				.box-content-appointment-info-list {
					padding-left: 40rpx;
					box-sizing: border-box;

					.box-content-appointment-info-list-li:last-child {
						border-bottom: 0;
					}

					.box-content-appointment-info-list-li {
						display: flex;
						align-items: center;
						height: 99rpx;
						font-size: 28rpx;
						border-bottom: 1rpx solid #ededed;

						.appointment-info-list-li-title {}

						.appointment-info-list-li-input {
							margin-left: 40rpx;

							input {
								font-size: 28rpx;
							}
						}

						.appointment-info-list-li-title-type {
							display: flex;
							align-items: center;
							margin-right: 20rpx;

							.appointment-info-list-li-title-type-name:last-child {
								margin-right: 0;
							}

							.appointment-info-list-li-title-type-name {
								width: 96rpx;
								height: 54rpx;
								border: 1rpx solid #E6E6E6;
								border-radius: 5rpx;
								margin-right: 16rpx;
								color: #999;
								font-size: 26rpx;
							}
						}
					}
				}
			}

			.box-content-coupon {
				margin-top: 20rpx;
				padding: 0 40rpx;
				background: #FFFFFF;

				.box-content-coupon-top {
					display: flex;
					align-items: center;
					justify-content: space-between;
					height: 100rpx;
					border-bottom: 1rpx solid #ededed;

					.box-content-coupon-top-title {
						font-size: 32rpx;
						color: #333;
					}

					.box-content-coupon-top-more {
						display: flex;
						align-items: center;

						text {
							font-size: 32rpx;
							color: #FF8366;
						}

						image {
							width: 28rpx;
							height: 28rpx;
							margin-left: 20rpx;
						}
					}
				}

				.box-content-coupon-bottom {
					height: 100rpx;
					display: flex;
					align-items: center;
					justify-content: flex-end;

					.box-content-coupon-bottom-text {
						margin-right: 20rpx;
						font-size: 28rpx;
						color: #999;
					}

					.box-content-coupon-bottom-price {
						display: flex;
						align-items: center;
						font-size: 28rpx;
						color: #333;

						text {
							font-size: 36rpx;
							color: #000;
							font-weight: 500;
						}
					}
				}
			}
		}

		.box-footer {
			padding: 0 20rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			height: 108rpx;
			border-top: 1rpx solid #ededed;
			background: #fff;

			.box-footer-text {
				font-size: 28rpx;
				color: #000;

				text {
					font-size: 40rpx;
					color: #FF8366;
				}
			}

			.box-footer-btn {
				width: 220rpx;
				height: 80rpx;
				margin-left: 20rpx;
				background: #FF8366;
				border-radius: 40rpx;
				color: #fff;
				font-size: 32rpx;
			}
		}
	}
</style>
