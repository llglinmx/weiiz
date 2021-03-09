<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<view class="head-nav-box">
				<view class="head-nav-back" @click="Gback">
					<image src="../../static/images/back.png" mode="aspectFill"></image>
				</view>
				<view class="head-nav-title">评价</view>
				<view class="head-nav-confirm" @click="release">
					确认
				</view>
			</view>
		</view>
		<view class="box-content">
			<view class="box-content-wrap">
				<view class="box-content-wrap-left">
					<view class="box-content-wrap-left-image">
						<image src="../../static/images/shop-ico.png" mode="aspectFill"></image>
					</view>
					<view class="box-content-wrap-left-title">印象诗意·悠然SPA</view>
				</view>
				<view class="box-content-wrap-right">
					<image src="../../static/images/check-coupons.png" mode="aspectFill"></image>
					<text>匿名评价</text>
				</view>
			</view>
			<view class="box-content-comment">
				<view class="box-content-comment-score">
					<view class="box-content-comment-score-title">门店评分</view>
					<view class="box-content-comment-score-icon">
						<image src="../../static/images/stars-icon.png" mode="aspectFill" v-for="item in 5"></image>
					</view>
				</view>
				<view class="box-content-comment-textarea">
					<textarea value="" placeholder="给门店的服务写个评语吧" confirm-type="done" />
					</view>
				<view class="box-content-comment-list">
					<view class="box-content-comment-list-li" v-for="item in 4">
						<text class="iconfont icontupian" style="color:#E7E7E7;font-size: 57rpx;"></text>
						<text class="box-content-comment-list-li-text">图片/视频</text>
					</view>
				</view>
			</view>
			<view class="box-content-wrap" style="margin-top: 30rpx;">
				<view class="box-content-wrap-left">
					<view class="box-content-wrap-left-image">
						<image src="../../static/images/shop-ico.png" mode="aspectFill"></image>
					</view>
					<view class="box-content-wrap-left-title">王二麻子</view>
				</view>
				<view class="box-content-wrap-right">
					<image src="../../static/images/check-coupons.png" mode="aspectFill"></image>
					<text>匿名评价</text>
				</view>
			</view>
			<view class="box-content-comment">
				<view class="box-content-comment-score">
					<view class="box-content-comment-score-title">技师评分</view>
					<view class="box-content-comment-score-icon">
						<image src="../../static/images/stars-icon.png" mode="aspectFill" v-for="item in 5"></image>
					</view>
				</view>
				<view class="box-content-comment-textarea">
					<textarea value="" placeholder="给技师的服务写个评语吧" confirm-type="done" />
					</view>
				<view class="box-content-comment-list">
					<view class="box-content-comment-list-li" v-for="item in 4">
						<text class="iconfont icontupian" style="color:#E7E7E7;font-size: 57rpx;"></text>
						<text class="box-content-comment-list-li-text">图片/视频</text>
					</view>
				</view>
			</view>
		</view>
		<view class="box-footer">

		</view>
	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
			};
		},
		components: {
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
			//返回
			Gback() {
				uni.navigateBack({
					delta: 1
				})
			},

			// 发布按钮
			release() {
				uni.showToast({
					title: "发布",
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
		background: #F7F7F7;

		.box-head {
			background-color: #fff;

			.head-nav-box {
				display: flex;
				align-items: center;
				height: 88rpx;
				background: #fff;

				.head-nav-back {
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

				.head-nav-title {
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

				.head-nav-confirm {
					padding-right: 40rpx;
					font-size: 30rpx;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color: #5DBDFE;
				}
			}
		}

		.box-content {
			flex: 1;
			overflow-y: scroll;

			.box-content-wrap {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 20rpx 40rpx;
				box-sizing: border-box;
				border-bottom: 1rpx solid #ededed;
				background: #fff;
				font-family: Source Han Sans CN;
				font-weight: 400;

				.box-content-wrap-left {
					display: flex;
					align-items: center;

					.box-content-wrap-left-image {
						image {
							width: 88rpx;
							height: 88rpx;
						}
					}

					.box-content-wrap-left-title {
						margin-left: 20rpx;
						font-size: 32rpx;
						color: #000;
					}
				}

				.box-content-wrap-right {
					display: flex;
					align-items: center;

					image {
						width: 32rpx;
						height: 32rpx;
					}

					text {
						margin-left: 10rpx;
						font-size: 26rpx;
						color: #999;
					}
				}
			}

			.box-content-comment {
				padding: 30rpx 40rpx;
				box-sizing: border-box;
				background: #fff;

				.box-content-comment-score {
					display: flex;
					align-items: center;

					.box-content-comment-score-title {
						font-size: 28rpx;
						color: #1A1717;
					}

					.box-content-comment-score-icon {
						display: flex;
						align-items: center;
						margin-left: 40rpx;

						image {
							margin-right: 10rpx;
							width: 48rpx;
							height: 48rpx;
						}
					}
				}

				.box-content-comment-textarea {
					margin-top: 30rpx;
					padding: 20rpx;
					box-sizing: border-box;
					height: 234rpx;
					background: #F7F7F7;
					border-radius: 12rpx;
					textarea{
						width: 100%;
						height: 100%;
						font-size: 26rpx;
					}
				}
				.box-content-comment-list{
					display: flex;
					flex-wrap: wrap;
					margin-top: 30rpx;
					.box-content-comment-list-li{
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						width: 144rpx;
						height: 144rpx;
						margin-right: 20rpx;
						border-radius: 12rpx;
						border: 2rpx dashed #CCCCCC;
						.box-content-comment-list-li-text{
							font-size: 20rpx;
							color: #ccc;
						}
					}
					.box-content-comment-list-li:last-child{
						margin-right: 0;
					}
				}

			}

			.box-content-main {}
		}

		.box-footer {}
	}
</style>
