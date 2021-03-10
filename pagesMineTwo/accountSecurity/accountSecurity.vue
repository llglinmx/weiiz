<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="账号安全"></navTitle>
		</view>
		<view class="box-content">
			<view class="content-list">
				<view class="content-list-li" @click="listAllClick('email')">
					<view class="content-list-li-title">邮箱</view>
					<view class="content-list-li-wrap">
						<view class="content-list-li-wrap-text">
							1527892466@qq.com
						</view>
						<view class="content-list-li-more flex-center">
							<text class="iconfont icongengduo icon-font" style="color: #ccc;font-size: 32rpx;font-weight: 500;"></text>
						</view>
					</view>
				</view>
				<view class="content-list-li" @click="listAllClick('phone')">
					<view class="content-list-li-title">手机</view>
					<view class="content-list-li-wrap">
						<view class="content-list-li-wrap-text">
							183****7210
						</view>
						<view class="content-list-li-more flex-center">
							<text class="iconfont icongengduo icon-font" style="color: #ccc;font-size: 32rpx;font-weight: 500;"></text>
						</view>
					</view>
				</view>
				<view class="content-list-li" @click="listAllClick('password')">
					<view class="content-list-li-title">登录密码</view>
					<view class="content-list-li-wrap">
						<view class="content-list-li-wrap-text" style="color: #FF8366;">
							修改
						</view>
						<view class="content-list-li-more flex-center">
							<text class="iconfont icongengduo icon-font" style="color: #ccc;font-size: 32rpx;font-weight: 500;"></text>
						</view>
					</view>
				</view>
				<view class="content-list-li" @click="listAllClick('logOut')">
					<view class="content-list-li-title">注销账号</view>
					<view class="content-list-li-wrap">
						<view class="content-list-li-wrap-text">
							注销后无法恢复，请谨慎操作
						</view>
						<view class="content-list-li-more flex-center">
							<text class="iconfont icongengduo icon-font" style="color: #ccc;font-size: 32rpx;font-weight: 500;"></text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="box-footer">
			<btnPink btnName="保存" @btnClick="preserve"></btnPink>
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
			};
		},
		components: {
			btnPink,
			navTitle
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
			listAllClick(type) {

				switch (type) {
					case "email":
						break;
					case "phone":
						break;
					case "password":
						break;
					case "logOut":
						break;

				}
				uni.showToast({
					title: type,
					icon: "none"
				})
			},

			// 保存按钮
			preserve() {
				uni.showToast({
					title: "保存",
					icon: "none"
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
		background: #F7F7F7;

		.box-head {
			background-color: #fff;
		}

		.box-content {
			flex: 1;
			overflow-y: scroll;

			.content-list {
				margin: 20rpx 0;
				background: #fff;

				.content-list-li {
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 0 40rpx;
					box-sizing: border-box;
					height: 99rpx;
					border-bottom: 1rpx solid #EDEDED;

					.content-list-li-title {
						font-size: 32rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #000000;
					}

					.content-list-li-wrap {
						display: flex;
						align-items: center;

						.content-list-li-wrap-text {
							font-size: 28rpx;
							font-family: Source Han Sans CN;
							font-weight: 400;
							color: #999999;
							margin-right: 10rpx;
						}

						.content-list-li-more {
							.icon-font{
								margin-top: 4rpx;
							}
						}

						.content-list-li-wrap-image {
							width: 112rpx;
							height: 112rpx;
							margin-right: 10rpx;

							image {
								width: 112rpx;
								height: 112rpx;
							}
						}
					}
				}

				.content-list-li:last-child {
					border-bottom: none;
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
