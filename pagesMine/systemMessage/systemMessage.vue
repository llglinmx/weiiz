<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="系统消息"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content-list" v-for="(item,index) in 5" :key="index">
				<view class="box-content-list-time flex-center">2020-04-0{{index+1}} 00:00:00</view>
				<view class="box-content-list-main">
					<view class="box-content-list-main-top">
						<view class="box-content-list-main-top-title">版本更新提醒</view>
						<view class="box-content-list-main-top-text">
							weiiz 1.0版本更新上线了，全新地图找店方式，立即更新体验吧！
						</view>
					</view>
					<view class="box-content-list-main-bottom">
						<view class="list-main-bottom-title">点击查看</view>
						<view class="list-main-bottom-more">
							<image src="../../static/images/more-gray.png" mode="aspectFill"></image>
						</view>
					</view>
				</view>
			</view>
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
			padding: 0 40rpx;
			box-sizing: border-box;
			flex: 1;
			overflow-y: scroll;

.box-content-list:last-child{
	margin-bottom: 40rpx;
}
			.box-content-list {
				display: flex;
				align-items: center;
				flex-direction: column;

				.box-content-list-time {
					width: 270rpx;
					height: 48rpx;
					margin: 20rpx 0;
					background: #E0E0E0;
					border-radius: 5rpx;
					font-size: 24rpx;
					color: #fff;
				}

				.box-content-list-main {
					background: #fff;
					border-radius: 10rpx;

					.box-content-list-main-top {
						min-height: 184rpx;
						padding: 30rpx;
						box-sizing: border-box;
						border-bottom: 1rpx solid #ededed;

						.box-content-list-main-top-title {
							position: relative;
							padding-left: 20rpx;
							box-sizing: border-box;
							font-size: 32rpx;
							color: #000;
						}
						.box-content-list-main-top-title::after{
							position: absolute;
							top: 0;
							bottom: 0;
							left: 0;
							margin: auto;
							content: "";
							width: 12rpx;
							height: 12rpx;
							background: #E62F30;
							border-radius: 50%;
						}

						.box-content-list-main-top-text {
							font-size: 28rpx;
							color: #999;
						}

					}

					.box-content-list-main-bottom {
						height: 89rpx;
						display: flex;
						align-items: center;
						padding: 0 30rpx;
						box-sizing: border-box;
						justify-content: space-between;

						.list-main-bottom-title {
							color: #000;
							font-size: 28rpx;
						}

						.list-main-bottom-more {
							image {
								width: 24rpx;
								height: 24rpx;
							}
						}
					}
				}
			}
		}

	}
</style>
