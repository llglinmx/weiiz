<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<view class="box-head-nav">
				<view class="head-nav-back flex-center" @click="Gback">
					<image src="../../static/images/back-white.png" mode="aspectFill"></image>
				</view>
				<view class="head-nav-title">转赠礼物</view>
			</view>
		</view>
		<view class="box-content">
			<view class="box-content-text">
				<view class="box-content-text-title">
					礼物准备完毕，送出去吧
				</view>
				<view class="box-content-text-msg">
					记得提醒收礼人领取喔~
				</view>
			</view>
			<view class="box-content-main">
				<view class="box-content-main-info-image">
					<image src="../../static/images/userImage.png" mode=""></image>
				</view>
				<view class="box-content-main-wrap">
					<view class="box-content-main-wrap-title">来自SKB露娜可可送出</view>
					<view class="box-content-main-wrap-image">
						<image src="../../static/images/gift.png" mode="aspectFill"></image>
					</view>
					<view class="box-content-main-wrap-input-msg">
						祝福留言：
					</view>
					<view class="box-content-main-wrap-input-box">
						<textarea v-model="val" placeholder="" />
					</view>
					<view class="box-content-main-wrap-btn">
						<btnPink btnName="送给朋友" @btnClick="clickBtn"></btnPink>
					</view>
				</view>
			</view>
			<view class="box-content-btn flex-center" @click="receive">
				立即领取
			</view>

		</view>
		<view class="box-footer">

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
				val: "恭喜发财，大吉大利"
			};
		},
		components: {
			navTitle,
			btnPink
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
			// 返回
			Gback() {
				uni.navigateBack({
					delta: 1
				})
			},
			// 送给朋友
			clickBtn() {
				uni.showToast({
					title: "送给朋友",
					icon: "none"
				})
			},
			// 领取
			receive() {
				uni.showToast({
					title: "领取",
					icon: "none"
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
		background: #BF0818;

		.box-head {
			.box-head-nav {
				display: flex;
				align-items: center;
				height: 88rpx;

				.head-nav-back {
					width: 65rpx;
					height: 65rpx;
					margin-left: 10rpx;

					image {
						width: 18rpx;
						height: 34rpx;
					}
				}

				.head-nav-title {
					display: flex;
					align-items: center;
					justify-content: center;
					margin-left: -50rpx;
					flex: 1;
					font-size: 34rpx;
					font-family: Source Han Sans CN;
					font-weight: 500;
					color: #FFFFFF;
				}
			}
		}

		.box-content {
			display: flex;
			align-items: center;
			flex-direction: column;
			flex: 1;
			overflow-y: scroll;
			padding: 0 40rpx;
			box-sizing: border-box;
			font-family: Source Han Sans CN;
			font-weight: 400;
			color: #fff;

			.box-content-text {
				margin: 50rpx 0 130rpx 0;

				.box-content-text-title {
					font-size: 40rpx;
				}

				.box-content-text-msg {
					margin-top: 20rpx;
					text-align: center;
					font-size: 28rpx;
				}
			}


			.box-content-main {
				position: relative;
				width: 100%;
				height: 907rpx;
				padding: 80rpx;
				box-sizing: border-box;
				background: #fff;
				border-radius: 16rpx;

				.box-content-main-info-image {
					display: flex;
					align-items: center;
					justify-content: center;
					position: absolute;
					top: -85rpx;
					left: 0;
					right: 0;
					margin: auto;
					width: 170rpx;
					height: 170rpx;
					background: #fff;
					border-radius: 50%;

					image {
						width: 138rpx;
						height: 138rpx;
					}
				}

				.box-content-main-wrap {
					.box-content-main-wrap-title {
						margin: 20rpx 0;
						text-align: center;
						font-size: 30rpx;
						color: #000;
					}

					.box-content-main-wrap-image {
						image {
							width: 510rpx;
							height: 286rpx;
						}
					}

					.box-content-main-wrap-input-msg {
						margin: 20rpx 0;
						font-size: 28rpx;
						color: #333;
					}

					.box-content-main-wrap-input-box {
						padding: 20rpx;
						box-sizing: border-box;
						width: 510rpx;
						height: 188rpx;
						background: #F7F7F7;
						border-radius: 10rpx;

						textarea {
							width: 100%;
							height: 100%;
							font-size: 28rpx;
							color: #333;
						}
					}

					.box-content-main-wrap-btn {
						margin-top: 30rpx;
					}

				}
			}

			.box-content-btn {
				width: 220rpx;
				height: 70rpx;
				margin-top: 40rpx;
				border: 1rpx solid #FFFFFF;
				border-radius: 38px;
				font-size: 30rpx;
			}
		}

		.box-footer {}
	}
</style>
