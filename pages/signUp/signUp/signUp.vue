<template>
	<view class="box">
		<view class="box-content">
			<view class="box-content-title">
				<image src="../../../static/images/logo.png" mode="widthFix"></image>
			</view>
			<view class="box-content-wrap">
				<view class="box-content-login box-btn flex-center" @click="login">登录</view>
				<view class="box-content-register box-btn flex-center" @click="register">注册</view>
				<view class="box-content-wrap-msg">
					<text>其他登录方式</text>
				</view>
				<view class="login-mode">
					<view class="login-mode-li" v-for="(item,index) in 3" :key="index"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			// 登录
			login() {
				uni.navigateTo({
					url: "../../../pagesIndex/login/login"
				})
			},
			// 点击注册 跳转到 注册页面
			register() {
				uni.navigateTo({
					url: "../../../pagesIndex/register/register"
				})
			},
		}
	}
</script>

<style lang="scss">
	.box {
		position: relative;
		height: 100%;
		background: url(../../../static/images/login-ico.png) no-repeat;
		background-size: cover;

		.box-content {
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			background: rgba(0, 0, 0, 0.3);

			.box-content-title {
				display: flex;
				align-items: center;
				justify-content: center;
				flex: 1;

				image {
					width: 348rpx;
					height: 120rpx;
				}
			}

			.box-content-wrap {
				flex: 1;
				padding: 0 60rpx;
				box-sizing: border-box;

				.box-btn {
					width: 630rpx;
					height: 88rpx;
					border-radius: 15px;
					font-size: 32rpx;
					color: #fff;
				}

				.box-content-login {
					margin-top: 260rpx;
					background: #FF967D;
					margin-bottom: 30rpx;
				}

				.box-content-register {
					background: rgba(255, 255, 255, .5);
				}

				.box-content-wrap-msg {
					position: relative;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-top: 60rpx;

					text {
						color: #fff;
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
						background: #fff;
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
						background: #fff;
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

		}
	}
</style>
