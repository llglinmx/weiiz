<template>
	<view class="nav-wrap" :style="{paddingTop:barHeight+'px'}">
		<view class="nav-box">
			<view class="nav-back" @click="Gback">
				<text class="iconfont iconfanhui" style="color: #000;font-size: 36rpx;"></text>
			</view>
			<view class="nav-title">{{navTitle}}</view>
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
				console.log("225252")
				uni.navigateBack({
					delta: 1
				})
			},
		},
	}
</script>

<style scoped lang="scss">
	.nav-wrap {
		.nav-box {
			display: flex;
			align-items: center;
			height: 88rpx;
			padding: 0 10px;
			box-sizing: border-box;
			background: #fff;

			.nav-back {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 80rpx;
				// height: 34rpx;
				margin-right: 20rpx;
				box-sizing: border-box;
				flex-shrink: 0;

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
				padding-right: 70rpx;
				box-sizing: border-box;
				font-size: 34rpx;
				font-family: Source Han Sans CN;
				font-weight: 500;
				color: #000000;
			}
		}
	}
</style>
