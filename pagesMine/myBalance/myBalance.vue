<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="我的余额"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content-wrap-card">
				<view class="box-content-card">
					<view class="box-content-card-left">
						<view class="box-content-card-left-balance">
							0.00 <text>元</text>
						</view>
						<view class="box-content-card-left-text">
							当前余额
						</view>
					</view>
					<view class="box-content-card-right">
						<text>明细 >></text>
					</view>
				</view>
			</view>

			<view class="box-content-recharge">
				<view class="box-content-recharge-title">请选择充值金额</view>
				<view class="box-content-recharge-list">
					<view class="box-content-recharge-list-li flex-center" :class="idx==index?'box-content-recharge-list-li-active':''"
					 v-for="(item,index) in moneyList" :key="index" @click="clickRecharge(item,index)">
						<view class="box-content-recharge-list-li-title" :class="idx==index?'text-color':''">
							{{item}} 元
						</view>
						<view class="box-content-recharge-list-li-text" :class="idx==index?'text-color':''">
							售价 {{item | numFilter}}元
						</view>
					</view>
				</view>
			</view>

			<view class="box-content-payment-method">
				<view class="box-content-payment-method-title">
					支付方式
				</view>
				<view class="box-content-payment-method-list">
					<view class="payment-method-list-li" v-for="(item,index) in 3" :key="index" @click="paymentType(index)">
						<view class="payment-method-list-li-wrap">
							<image src="../../static/images/zfb.png" mode="aspectFill"></image>
							<text class="payment-method-list-li-title">支付宝</text>
						</view>
						<view class="payment-method-list-li-check">
							<image src="../../static/images/check-coupons.png" mode="aspectFill" v-if="index==checkIindex"></image>
							<image src="../../static/images/no-check-coupons.png" mode="aspectFill" v-else></image>
						</view>
					</view>
				</view>
			</view>
			<view class="box-content-payment-btn">
				<btn-pink btnName="立即支付" @btnClick="payBtn"></btn-pink>
			</view>
		</view>
	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	import btnPink from "../../components/btnPink/btnPink.vue"
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				checkIindex: 0, //当前所选支付方式
				idx: 0, //当前所选充值金额下标
				moneyList: ["50", "100", "200", "500", "800", "1000", "1500"],
				money:'50',//所选金额
			};
		},
		components: {
			navTitle,
			btnPink
		},
		// 过滤器
		filters: {
			// 保留两位小数
			numFilter(value) {
				let val = ''
				if (!isNaN(value) && value != '') {
					if (value % 1 == 0 && value != 0) { //整数
						val = value + ".00"
					} else if (value == 0) {
						val = ''
					} else { //小数
						val = parseFloat(value).toFixed(2)
					}
				} else {
					val = ''
				}
				return val
			}
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
			// 选择充值金额
			clickRecharge(item,index) {
				this.money=item
				this.idx = index
			},
			// 选择支付方式
			paymentType(index) {
				this.checkIindex = index
			},
			// 立即支付按钮
			payBtn(){
				uni.showToast({
					title:"当前选择的充值金额："+this.money,
					icon:"none"
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

		.box-head {
			background-color: #fff;
		}

		.box-content {
			flex: 1;
			overflow-y: scroll;
			font-family: Source Han Sans CN;
			font-weight: 400;

			.box-content-wrap-card {
				padding: 20rpx;
				box-sizing: border-box;

				.box-content-card {
					display: flex;
					justify-content: space-between;
					padding: 30rpx;
					height: 220rpx;
					box-sizing: border-box;
					background: linear-gradient(90deg, #FF967D 0%, #FF8366 100%);
					border-radius: 20rpx;
					color: #fff;

					.box-content-card-left {
						.box-content-card-left-balance {
							font-size: 80rpx;
							font-family: Lato;
							font-weight: bold;

							text {
								font-size: 32rpx;
								font-family: Source Han Sans CN;
							}
						}

						.box-content-card-left-text {
							font-size: 28rpx;
						}
					}

					.box-content-card-right {
						font-size: 28rpx;
					}
				}
			}

			.box-content-recharge {
				padding: 20rpx;
				box-sizing: border-box;

				.box-content-recharge-title {
					padding-left: 20rpx;
					box-sizing: border-box;
					color: #333;
					font-size: 36rpx;
				}

				.box-content-recharge-list {
					display: flex;
					flex-wrap: wrap;
					margin-top: 40rpx;

					.box-content-recharge-list-li {
						flex-direction: column;
						width: 218rpx;
						height: 147rpx;
						background: #F7F7F7;
						border: 2rpx solid #f7f7f7;
						border-radius: 20rpx;
						margin-right: 20rpx;
						margin-bottom: 20rpx;
						transition: 0.2s;

						.box-content-recharge-list-li-title {
							font-size: 36rpx;
							color: #000;
						}

						.box-content-recharge-list-li-text {
							font-size: 24rpx;
							color: #999;
						}

						.text-color {
							color: #FF8366 !important
						}
					}

					.box-content-recharge-list-li:nth-child(3n) {
						margin-right: 0;
					}

					.box-content-recharge-list-li-active {
						border: 2rpx solid #FF8366 !important;
					}
				}
			}


			.box-content-payment-method {
				padding: 0 40rpx;
				box-sizing: border-box;

				.box-content-payment-method-title {
					color: #333;
					font-size: 36rpx;
				}

				.box-content-payment-method-list {
					.payment-method-list-li {
						display: flex;
						justify-content: space-between;
						align-items: center;
						height: 98rpx;
						border-bottom: 1rpx solid #ededed;

						.payment-method-list-li-wrap {
							display: flex;
							align-items: center;

							image {
								width: 36rpx;
								height: 36rpx;
							}

							.payment-method-list-li-title {
								margin-left: 40rpx;
								color: #4D4D4D;
								font-size: 30rpx;
							}
						}

						.payment-method-list-li-check {
							image {
								width: 36rpx;
								height: 36rpx;
							}
						}
					}
				}
			}

			.box-content-payment-btn {
				padding: 0 40rpx;
				box-sizing: border-box;
				margin-top: 80rpx;
			}
		}
	}
</style>
