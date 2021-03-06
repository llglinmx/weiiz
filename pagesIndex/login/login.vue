<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<view class="box-head-nav">
				<view class="box-head-nav-back"  @click="Gback">
					<image src="../../static/images/back.png" mode="aspectFill"></image>
				</view>
				<view class="box-head-nav-text" @click="register">注册</view>
			</view>
		</view>
		<view class="box-content">
			<view class="box-content-title">欢迎登录</view>
			<view class="box-content-list">
				<view class="box-content-list-li">
					<input type="number" @input="accountChange" v-model.trim="accountNumber" placeholder="手机号/邮箱" confirm-type="done" />
				</view>
				<view class="box-content-list-li">
					<input type="text" @input="passwordChange" password="true" v-model.trim="password" placeholder="请输入密码"
					 confirm-type="done" />
					<image src="../../static/images/hidden.png" mode="aspectFill"></image>
				</view>
				<view class="box-content-list-msg">忘记密码</view>
			</view>
			<view class="box-content-btn flex-center" @click="confirmLogin" :class="isAll?'btn-active':''">同意协议并登录</view>
			<view class="box-content-text">
				登录代表你已同意
				<text>《用户协议》</text>
				<text>《隐私保护政策》</text>
			</view>
			<view class="box-content-wrap-msg">
				<text>其他登录方式</text>
			</view>
			<view class="login-mode">
				<view class="login-mode-li" v-for="(item,index) in 3" :key="index"></view>
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
				isAll: false, //用于判断是否都有输入
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
		methods: {
			// 监听输入账号
			accountChange() {
				console.log(this.accountNumber != '' && this.password != '')
				if (this.accountNumber != '' && this.password != '') {
					this.isAll = true
				} else {
					this.isAll = false
				}
			},

			//监听输入密码
			passwordChange() {
				console.log(this.accountNumber != '' && this.password != '')
				if (this.accountNumber != '' && this.password != '') {
					this.isAll = true
				} else {
					this.isAll = false
				}
			},

			// 确认登录
			confirmLogin() {
				if (!this.isAll) {
					uni.showToast({
						title: "请检查输入是否完整",
						icon: "none"
					})
				} else {
					uni.navigateTo({
						url: "../../pagesIndexTwo/binDingPhone/binDingPhone"
					})
				}
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
					padding: 28rpx 0;
					position: relative;
					border-bottom: 1rpx solid #ededed;

					input {
						font-size: 32rpx;
					}

					image {
						position: absolute;
						right: 10rpx;
						top: 0rpx;
						bottom: 0;
						margin: auto;
						width: 30rpx;
						height: 21rpx;
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
				margin-top: 500rpx;

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
					background: #0086B3;
					border-radius: 50%
				}

				.login-mode-li:last-child {
					margin-right: 0;
				}
			}
		}

		.box-footer {}
	}
</style>
