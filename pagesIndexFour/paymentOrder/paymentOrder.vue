<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="支付订单"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content-wrap">
				<view class="box-content-wrap-msg-time">
					<!-- 支付剩余时间 {{rocallTime}} -->
					<count-down :endTime="endTime" color='#999' />
				</view>
				<view class="box-content-wrap-price">
					￥<text>{{dataInfo.amount}}</text>
				</view>
				<view class="box-content-wrap-text">{{dataInfo.store_name}}</view>
			</view>
			<view class="box-content-info" @click="payClick(-1)">
				<view class="box-content-info-left">
					<view class="box-content-info-text">
						余额支付
					</view>
					<view class="box-content-info-msg">
						当前余额:￥{{balance}}
					</view>
				</view>
				<view class="box-content-info-check">
					<text class="iconfont iconxuanzhong icon-font" v-if="defaultIndex==-1"
						style="color: #FF967D;font-size: 36rpx;"></text>
					<text class="iconfont iconweixuanzhong1 icon-font" v-else
						style="color: #ccc;font-size: 36rpx;"></text>
				</view>
			</view>

			<view class="box-content-list">
				<view class="box-content-list-li" v-for="(item,index) in payType" :key="index" @click="payClick(index)">
					<view class="box-content-list-li-all">
						<view class="box-content-list-li-all-image" :style="{width:index==2?'190rpx':''}">
							<image :src="item.image" mode=""></image>
						</view>
						<view class="box-content-list-li-all-title" v-if="index!=2">{{item.title}}</view>
					</view>
					<view class="box-content-list-li-check">
						<text class="iconfont iconweixuanzhong1 icon-font" v-if="defaultIndex!=index"
							style="color: #ccc;font-size: 36rpx;"></text>
						<text class="iconfont iconxuanzhong icon-font" v-else
							style="color: #FF967D;font-size: 36rpx;"></text>
					</view>
				</view>
			</view>
		</view>
		<view class="box-footer">
			<btn-pink btnName="确认支付" @btnClick="confirmPay"></btn-pink>
		</view>
		<jpPwd ref="jpPwds" contents='' @completed="completed" @forget="forget"></jpPwd>
	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	import btnPink from "../../components/btnPink/btnPink.vue"
	import jpPwd from '@/components/jp-pwd/jp-pwd.vue';
	import countDown from '@/components/count-down/count-down.vue'

	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				rocallTime: '',
				dataInfo: {},
				defaultIndex: -1,
				type: -1,
				payType: [{
						title: '支付宝支付',
						image: '../../static/images/zfb-ico.png'
					},
					{
						title: '微信支付',
						image: '../../static/images/wx-ico.png'
					},
					{
						title: '',
						image: '../../static/images/paypal.png'
					},
				],
				password: '',
				balance: 0,
				endTime: ''
			};
		},
		filters: {

		},
		components: {
			navTitle,
			btnPink,
			jpPwd,
			countDown
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
			let id = options.id
			this.getOrderInfo(id)
		},
		onShow() {
			this.balance = this.$store.state.balance
		},
		methods: {

			// 选择支付方式
			payClick(index) {
				this.defaultIndex = index
			},


			// 确认支付按钮
			confirmPay() {
				var title = ''
				switch (this.defaultIndex) {
					case -1:
						title = "余额支付"
						this.type = 2
						if (this.balance >= Number(this.dataInfo.amount)) { //判断余额是否大于需要支付的金额
							this.$refs.jpPwds.toOpen() //打开支付密码键盘
							return false;
						}
						uni.showToast({
							title: '余额不足，请选择其他支付方式',
							icon: "none"
						})
						break;
					case 0:
						title = "支付宝支付"
						this.type = 3
						break;
					case 1:
						title = "微信支付"
						this.type = 1
						break;
					case 2:
						title = "银行卡支付"
						break;
				}

				if (this.type !== 2) {
					uni.showToast({
						title: "暂不支持" + title,
						icon: "none"
					})
				}
			},

			// 监听输入密码
			completed(e) {
				this.password = e
				this.$refs.jpPwds.toCancel()
				this.placeAnOrder()
			},
			// 忘记密码
			forget() {
				uni.showToast({
					title: '忘记密码',
					icon: 'none'
				})
			},


			// 下单接口
			placeAnOrder() {
				var vuedata;
				if (this.type == 2) {
					vuedata = {
						id: this.dataInfo.id,
						pay_type: this.type,
						password: this.password,
					}
				} else {
					vuedata = {
						id: this.dataInfo.id,
						pay_type: this.type,
					}
				}

				this.apipost('api/v1/order/service/pay', vuedata).then(res => {
					if (res.status == 200) {
						uni.navigateTo({
							url: "../paymentSuccessful/paymentSuccessful?price="+this.dataInfo.amount
						})
					} else {
						uni.showToast({
							title: res.message,
							icon: 'none'
						})
					}
				})
			},


			// 获取订单信息
			getOrderInfo(id) {
				this.apiget('api/v1/members/member_order/' + id, {}).then(res => {
					if (res.status == 200) {
						this.dataInfo = res.data
						this.endTime = res.data.pay_end_time
					}
				})
			},

			myFunction() {
				var nowDate = new Date();
				var EndDate = new Date("2021-05-28 19:37:02")
				var dateDiff = EndDate.getTime() - nowDate.getTime();
				var days = Math.floor(dateDiff / (24 * 3600 * 1000)) //计算出天数 
				//计算出小时数 
				var leave1 = dateDiff % (24 * 3600 * 1000) //计算天数后剩余的毫秒数 
				var hours = Math.floor(leave1 / (3600 * 1000))
				//计算相差分钟数 
				var leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数 
				var minutes = Math.floor(leave2 / (60 * 1000))
				//计算相差秒数 
				var leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数 
				var seconds = Math.round(leave3 / 1000)
				//调用checkTime方法将数字小于10的在前面补0
				days = this.checkTime(days);
				hours = this.checkTime(hours);
				minutes = this.checkTime(minutes);
				seconds = this.checkTime(seconds);

				// console.log( "剩余时间:" + days + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒")
				setTimeout(()=> {
					this.myFunction()
				},1000)
			},
			checkTime(i) {
				if (i < 10 && i != 0) {
					i = "0" + i;
				}
				return i;
			}

		}
	}
</script>

<style lang="scss">
	.box {
		display: flex;
		flex-direction: column;
		height: 100%;
		background: #fff;

		.box-head {
			background-color: #fff;
		}

		.box-content {
			flex: 1;
			overflow-y: scroll;
			padding: 0 40rpx;
			box-sizing: border-box;

			.box-content-wrap {
				padding: 40rpx 0 80rpx;
				box-sizing: border-box;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				border-bottom: 1rpx solid #ededed;

				.box-content-wrap-msg-time {
					text-align: center;
					font-size: 28rpx;
					color: #999;
				}

				.box-content-wrap-price {
					margin: 30rpx 0;
					text-align: center;
					font-size: 40rpx;
					color: #000;
					font-weight: 500;

					text {
						font-size: 72rpx;
					}
				}

				.box-content-wrap-text {
					text-align: center;
					font-size: 28rpx;
					color: #999;
				}
			}

			.box-content-info {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 80rpx 0 40rpx;

				.box-content-info-left {
					display: flex;
					align-items: center;
					font-size: 28rpx;

					.box-content-info-text {
						color: #333;
						line-height: 24rpx;
					}

					.box-content-info-msg {
						padding-left: 20rpx;
						box-sizing: border-box;
						margin-left: 20rpx;
						border-left: 1rpx solid #ccc;
						color: #999999;
						line-height: 24rpx;
					}
				}

				.box-content-info-check {
					image {
						width: 36rpx;
						height: 36rpx;
					}
				}
			}

			.box-content-list {
				.box-content-list-li {
					display: flex;
					align-items: center;
					justify-content: space-between;
					height: 120rpx;

					.box-content-list-li-all {
						display: flex;
						align-items: center;

						.box-content-list-li-all-image {
							width: 48rpx;
							height: 48rpx;

							image {
								width: 100%;
								height: 100%;
							}
						}

						.box-content-list-li-all-title {
							margin-left: 24rpx;
							font-size: 28rpx;
							font-family: Source Han Sans CN;
							font-weight: 400;
							color: #333333;
						}
					}

					.box-content-list-li-check {
						image {
							width: 36rpx;
							height: 36rpx;
						}
					}
				}

			}
		}

		.box-footer {
			padding: 0 40rpx;
			box-sizing: border-box;
			margin-bottom: 30rpx;
		}

	}
</style>
