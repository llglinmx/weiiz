<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<view class="box-head-nav">
				<view class="box-head-nav-back" @click="Gback">
					<text class="iconfont iconfanhui" style="color: #333;font-size: 40rpx;"></text>
					<!-- <image src="../../static/images/back.png" mode="aspectFill"></image> -->
				</view>
				<view class="box-head-nav-text" @click="register">注册</view>
			</view>
		</view>
		<view class="box-content">
			<view class="box-content-title">欢迎登录</view>
			<view class="box-content-list">
				<view class="box-content-list-li">
					<input type="number" @input="accountChange" :focus="isFocus" v-model.trim="accountNumber"
						placeholder="手机号/邮箱" confirm-type="done" />
				</view>
				<view class="box-content-list-li">
					<input type="text" @input="passwordChange" :password="!isShowPassword" v-model.trim="password"
						placeholder="请输入密码" confirm-type="done" />
					<text class="iconfont iconxianshimima icon-font" style="color: #ccc;" @click="showPass"
						v-if="!isShowPassword"></text>
					<text class="iconfont iconyincangmima icon-font" style="color: #ccc;" @click="showPass"
						v-if="isShowPassword"></text>
				</view>
				<view class="box-content-list-li" style="padding:20rpx 0;">
					<input type="number" @input="verificationCode" v-model.trim="codeVal" placeholder="请输入右侧验证码"
						confirm-type="done" />
					<view class="code-box" @click="getCode">
						<image :src="codeImage" mode="aspectFill"></image>
					</view>
				</view>
				<view class="box-content-list-msg">忘记密码</view>
			</view>
			<view class="box-content-btn flex-center" @click="confirmLogin" :class="isAll?'btn-active':''">同意协议并登录
			</view>
			<view class="box-content-text">
				登录代表你已同意
				<text>《用户协议》</text>
				<text>《隐私保护政策》</text>
			</view>
			<view class="box-content-wrap-msg">
				<text>其他登录方式</text>
			</view>
			<view class="login-mode">
				<view class="login-mode-li" v-for="(item,index) in imageList" :key="index">
					<image :src="item.image" mode="aspectFill"></image>
				</view>
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
				accountNumber: "", //账号
				password: "", //密码
				isFocus: true, //自动获取焦点
				isAll: false, //用于判断是否都有输入
				code: '', //用于验证码比较
				codeId: '', //验证码id
				codeImage: '', //验证码图片
				codeVal: '', // 验证码
				isShowPassword: false, //是否显示密码
				imageList: [{
						image: '../../static/images/facebook-blue.png'
					},
					{
						image: '../../static/images/google-red.png'
					},
					{
						image: '../../static/images/wechat-green.png'
					},
				],
				width: 200,
				height: 100
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
			// 监听输入账号
			accountChange() {
				if (this.accountNumber != '' && this.password != '' && this.codeVal != '') {
					this.isAll = true
				} else {
					this.isAll = false
				}
			},

			//监听输入密码
			passwordChange() {
				if (this.accountNumber != '' && this.password != '' && this.codeVal != '') {
					this.isAll = true
				} else {
					this.isAll = false
				}
			},

			// 验证码款
			verificationCode() {
				if (this.accountNumber != '' && this.password != '' && this.codeVal != '') {
					this.isAll = true
				} else {
					this.isAll = false
				}
			},

			// 确认登录
			confirmLogin() {
				var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
				this.isFocus = false
				if (!this.isAll) {
					uni.showToast({
						title: "请检查输入是否完整",
						icon: "none"
					})
				} else {
					if (!reg.test(this.accountNumber)) { // 判断手机号是否正确
						uni.showToast({
							title: "请输入正确的手机号",
							icon: "none"
						})
						this.$nextTick(function() {
							this.isFocus = true
						});
					} else {
						if (this.codeVal == this.code) { //判断输入的验证码是否一致
							this.login(); //登录
						} else {
							uni.showToast({
								title: "验证码错误，请重新输入",
								icon: "none"
							})
						}
						// uni.navigateTo({
						// 	url: "../../pagesIndexTwo/binDingPhone/binDingPhone"
						// })
					}

				}

			},
			// 登录
			login() {
				var data = {
					code: this.code,
					code_id: this.codeId,
					username: this.accountNumber,
					password: this.password,
				}
				data = Object.entries(data).map(i => `${i[0]}=${i[1]}`).join('&');

				this.apipost('login', data).then(res => {
					switch (res.status) {
						case 200:
							uni.showToast({
								title: "登录成功",
								icon: "none"
							})
							uni.setStorageSync('token', res.data.member.token);
							setTimeout(function() {
								uni.reLaunch({
									url: "../../pages/index/index"
								})
							}, 1000)
							// 保存用户信息
							this.$store.commit("upUserInfo", res.data.member)
							
							// 保存余额
							this.$store.commit("upBalance", res.data.member.money)
							break;

						case 401:
							uni.showToast({
								title: res.message,
								icon: "none"
							})
							break;
						case 404:
							uni.showToast({
								title: res.message,
								icon: "none"
							})
							break;
					}

				});
			},
			// 获取验证码
			getCode() {
				var data = {}
				this.apiget('code/index', data).then(res => {
					if (res.status == 200) {
						this.code = res.data.code
						this.codeId = res.data.code_id
						this.codeImage = res.data.codeimg
					}
				});
			},

			// 点击显示 隐藏密码
			showPass() {
				this.isShowPassword = !this.isShowPassword
			},


			// 点击注册 跳转到 注册页面
			register() {
				uni.navigateTo({
					url: "../register/register"
				})
			},
			//返回
			Gback() {
				uni.navigateBack({
					delta: 1
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
				position: relative;
				margin-top: 30rpx;

				.box-content-list-msg {
					position: absolute;
					bottom: -60rpx;
					right: 0rpx;
					color: #333;
					font-size: 28rpx;
				}

				.box-content-list-li {
					position: relative;
					display: flex;
					justify-content: space-between;
					padding: 28rpx 0;
					border-bottom: 1rpx solid #ededed;
					display: flex;
					align-items: center;

					input {
						margin-right: 20rpx;
						flex: 1;
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

			.box-content-wrap-msg {
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-top: 400rpx;

				text {
					color: #999999;
					font-size: 26rpx;
				}

				text::after {
					position: absolute;
					top: 0;
					bottom: 0;
					left: 0;
					margin: auto;
					content: '';
					width: 202rpx;
					height: 2rpx;
					background: #999999;
				}

				text::before {
					position: absolute;
					top: 0;
					bottom: 0;
					right: 0;
					margin: auto;
					content: '';
					width: 202rpx;
					height: 2rpx;
					background: #999999;
				}
			}

			.login-mode {
				display: flex;
				align-items: center;
				justify-content: center;
				margin-top: 50rpx;

				.login-mode-li {
					width: 80rpx;
					height: 80rpx;
					margin-right: 60rpx;
					border-radius: 50%;

					image {
						width: 80rpx;
						height: 80rpx;
					}
				}

				.login-mode-li:last-child {
					margin-right: 0;
				}
			}
		}

		.box-footer {}
	}
</style>
