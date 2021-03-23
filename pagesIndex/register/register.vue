<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<view class="box-head-nav">
				<view class="box-head-nav-back" @click="Gback">
					<text class="iconfont iconfanhui" style="color: #333;font-size: 40rpx;"></text>
				</view>
				<view class="box-head-nav-text"></view>
			</view>
		</view>
		<view class="box-content">
			<view class="box-content-title">注册新账号</view>
			<view class="box-content-list">
				<view class="box-content-list-li">
					<input type="text" @input="emailChange" v-model.trim="email" placeholder="请输入邮箱"
						confirm-type="done" />
				</view>
				<view class="box-content-list-li box-content-item">
					<view class="box-content-list-li-text">
						<text class="tel-text">+86</text>
						<text class="iconfont icongengduo icon-font" style="color: #333;"></text>
					</view>
					<view class="box-content-list-li-input">
						<input type="number" @input="phoneChange" v-model.trim="phone" placeholder="请输入手机号"
							confirm-type="done" />
					</view>
				</view>
				<view class="box-content-list-li">
					<input type="number" v-model.trim="getCodeVal" @input="codeChange" placeholder="请输入验证码"
						confirm-type="done" />
					<text @click="getSmCode" v-if="isSemsText">发送验证码</text>
					<text v-if="!isSemsText">{{countdown}}s 后可重新发送</text>
				</view>
				<view class="box-content-list-li">
					<input type="text" v-model.trim="password" @input="passwordChange" :password="!isShowPassword"
						placeholder="密码长度8-20位" confirm-type="done" />
					<text class="iconfont iconxianshimima icon-font" style="color: #ccc;" @click="showPass"
						v-if="!isShowPassword"></text>
					<text class="iconfont iconyincangmima icon-font" style="color: #ccc;" @click="showPass"
						v-if="isShowPassword"></text>
				</view>

			</view>
			<view class="box-content-btn flex-center" @click="confirmRegister" :class="isAll?'btn-active':''">同意协议并注册
			</view>
			<view class="box-content-text">
				注册代表你已同意
				<text>《用户协议》</text>
				<text>《隐私保护政策》</text>
			</view>

		</view>
		<view class="box-footer">

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				phone: "", //手机号
				password: "", //密码
				email: "", //邮箱
				getCodeVal: '', //获取到的验证码
				codeVal: '',
				codeId: '',
				areaCode: '86',
				smsCodeId: '',
				isAll: false, //用于判断是否都有输入
				countdown: '',
				isSemsText: true, //验证码倒计时
				setCountdown: null,
				isShowPassword: false, //是否显示密码
			};
		},
		components: {

		},
		watch: {

		},
		onReady() {
			// 获取顶部电量状态栏高度
			uni.getSystemInfo({
				success: (res) => {
					this.barHeight = res.statusBarHeight
				}
			});
		},
		onShow() {
			this.getCode()
		},

		methods: {
			// 监听输入邮箱
			emailChange() {
				if (this.phone != '' && this.password != '' && this.email != '' && this.getCodeVal != '') {
					this.isAll = true
				} else {
					this.isAll = false
				}
			},
			// 监听输入手机号
			phoneChange() {
				if (this.phone != '' && this.password != '' && this.email != '' && this.getCodeVal != '') {
					this.isAll = true
				} else {
					this.isAll = false
				}
			},
			// 监听输入验证码
			codeChange() {
				if (this.phone != '' && this.password != '' && this.email != '' && this.getCodeVal != '') {
					this.isAll = true
				} else {
					this.isAll = false
				}
			},

			//监听输入密码
			passwordChange() {
				if (this.phone != '' && this.password != '' && this.email != '' && this.getCodeVal != '') {
					this.isAll = true
				} else {
					this.isAll = false
				}
			},


			// 确认注册
			confirmRegister() {
				if (!this.isAll) {
					uni.showToast({
						title: "请检查输入是否完整",
						icon: "none"
					})
				} else {
					var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
					if (reg.test(this.phone)) {
						if (this.password.length >= 8 && this.password.length < 14) {
							console.log(this.getCodeVal)
							console.log(this.getCodeVal.length == 5 && this.getCodeVal != '')
							if (this.getCodeVal.length == 5 && this.getCodeVal != '') {

								this.register()
								return false
							}
							uni.showToast({
								title: "验证码不正确，请重新输入",
								icon: "none"
							})
							return false
						}
						uni.showToast({
							title: "密码长度为8-12位",
							icon: "none"
						})

						return false
					}
					uni.showToast({
						title: "请输入正确的手机号",
						icon: "none"
					})
				}
			},

			// 注册
			register() {
				var data = {
					email: this.email,
					mobile: this.phone,
					password: this.password,
					password2: this.password,
					code: this.codeVal,
					code_id: this.codeId,
					sms_code: this.getCodeVal,
					sms_code_id: this.smsCodeId,
					areaCode: this.areaCode
				}
				this.apipost('login/register', data).then(res => {
					if (res.status == 200) {
						console.log(res.data)
						uni.reLaunch({
							url: "../login/login"
						})
					} else {
						uni.showToast({
							title: res.message,
							icon: "none"
						})
					}

				});
			},
			// 获取验证码
			getCode() {
				var data = {}
				this.apiget('code/index', data).then(res => {
					if (res.status == 200) {
						this.codeVal = res.data.code
						this.codeId = res.data.code_id
					}
				});
			},


			// 获取短信验证码
			getSmCode() {
				var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
				var vuedata = {
					mobile: this.phone,
					code: this.codeVal,
					code_id: this.codeId,
					type: 'register'
				}
				if (this.phone != '') {
					if (reg.test(this.phone)) {
						this.apipost('send_sms', vuedata).then(res => {
							if (res.status == 200) {
								this.countDown();
								this.smsCodeId = res.data.sms_code_id
								uni.showToast({
									title: "验证码发送成功",
									icon: "none"
								})
								this.countDown();
							} else {
								uni.showToast({
									title: res.message,
									icon: "none"
								})
							}
						});
						return false
					}
					uni.showToast({
						title: "请输入正确的手机号",
						icon: "none"
					})
					return false
				}
				uni.showToast({
					title: "请输入手机号",
					icon: "none"
				})

			},

			// 倒计时
			countDown() {
				this.isSemsText = false
				clearInterval(this.setCountdown);
				var num = 60
				this.countdown = num
				this.setCountdown = setInterval(() => {
					num--;
					this.countdown = num < 10 ? '0' + num : num; //小于 10 则前面拼接一个0
					if (num <= 0) {
						clearInterval(this.setCountdown);
						this.isSemsText = true;
					}
				}, 1000);
			},

			// 点击显示 隐藏密码
			showPass() {
				this.isShowPassword = !this.isShowPassword
			},


			//返回
			Gback() {
				uni.navigateBack({
					delta: 1
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

			.box-head-nav {
				padding: 0 40rpx;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 88rpx;

				.box-head-nav-back {
					image {
						width: 34rpx;
						height: 34rpx;
					}
				}

				.box-head-nav-text {
					color: #333;
					font-size: 34rpx;
				}
			}

		}

		.box-content {
			display: flex;
			flex-direction: column;
			flex: 1;
			overflow-y: scroll;
			padding: 0 60rpx;
			box-sizing: border-box;
			font-family: Source Han Sans CN;
			font-weight: 400;

			.box-content-title {
				padding: 60rpx 0;
				box-sizing: border-box;
				font-size: 52rpx;
				font-family: Source Han Sans CN;
				font-weight: bold;
				text-align: center;
				color: #1B1B1B;
			}

			.box-content-list {
				margin-top: 30rpx;

				.box-content-item {
					display: flex;

					.box-content-list-li-text {
						width: 120rpx;
						height: 100%;
						display: flex;
						align-items: center;
						color: #333;
						font-size: 32rpx;

						.tel-text {
							position: static;

						}

						.icon-font {
							position: static;
							width: 32rpx;
							height: 32rpx;
							transform: rotate(90deg);
						}


						.icon {
							transform: rotate(90deg);
						}
					}

					.box-content-list-li-input {
						margin-left: 20rpx;
						font-size: 32rpx;
					}
				}

				.box-content-list-li {
					position: relative;
					padding: 28rpx 0;
					position: relative;
					margin-bottom: 30rpx;
					border-bottom: 1rpx solid #ededed;

					input {
						font-size: 32rpx;
					}

					.code-box {
						display: flex;
						width: 200rpx;
						height: 80rpx;

						image {
							width: 100%;
							height: 100%;
						}
					}


					text {
						position: absolute;
						right: 10rpx;
						top: 0rpx;
						bottom: 0;
						margin: auto;
						height: 48rpx;
						color: #333;
						font-size: 32rpx;
					}
				}
			}

			.box-content-btn {
				width: 630rpx;
				height: 88rpx;
				margin-top: 118rpx;
				background: #FFD6CC;
				box-shadow: 0rpx 10rpx 20rpx rgba(255, 49, 0, 0.15);
				border-radius: 15rpx;
				color: #fff;
				font-size: 32rpx;
				transition: 0.3s;
			}

			.btn-active {
				background: #FF967D;
			}

			.box-content-text {
				text-align: center;
				font-size: 24rpx;
				padding: 40rpx 0;
				box-sizing: border-box;
				color: #999;

				text {
					color: #FF8366;
				}
			}


		}

		.box-footer {}
	}
</style>
