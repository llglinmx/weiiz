<template>
	<view class="nav-wrap" :style="{paddingTop:barHeight+'px'}">
		<view class="nav-box">
			<view class="nav-back" @click="Gback">
				<text class="iconfont iconfanhui" style="color: #fff;font-size: 34rpx;"></text>
			</view>
			<view class="nav-title">{{navTitle}}</view>
			<view class="nav-right">
				<text class="iconfont iconkefu" style="color: #fff;font-size: 52rpx;"></text>
			</view>
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				barHeight: 0,
			};
		},
		props: {
			navTitle: {
				type: String,
				default: "导航栏"
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
			//返回
			Gback() {
				uni.navigateBack({
					delta: 1
				})
			}
		},
	}
</script>

<style scoped lang="scss">
	.nav-wrap {
		.nav-box {
			display: flex;
			align-items: center;
			height: 88rpx;

			.nav-back {
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

			.nav-title {
				display: flex;
				align-items: center;
				justify-content: center;
				flex: 1;
				margin-left: 40rpx;
				font-size: 34rpx;
				font-family: Source Han Sans CN;
				font-weight: 500;
				color: #fff;
			}

			.nav-right {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-right: 40rpx;

				image:nth-child(1) {
					width: 52rpx;
					height: 48rpx;
				}

				image:nth-child(2) {
					margin-left: 30rpx;
					width: 42rpx;
					height: 42rpx;
				}
			}
		}
	}
</style>
