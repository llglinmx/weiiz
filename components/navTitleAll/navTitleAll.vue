<template>
	<view class="nav-wrap" :style="{paddingTop:barHeight+'px'}">
		<view class="nav-box">
			<view class="nav-back" @click="Gback">
				<text class="iconfont iconfanhui" style="color: #000;font-size: 36rpx;"></text>
			</view>
			<view class="nav-title">{{navTitle}}</view>
			<view class="nav-right">
				<text class="iconfont iconguanzhu icon-font" style="color: #000;font-size: 52rpx" @click="store"></text>
				<text class="iconfont iconfenxiang icon-font" style="color: #000;font-size: 52rpx" @click="share"></text>
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
			},
			// 收藏
			store(){
				this.$emit("store")
			},
			// 分享
			share(){
				this.$emit("share")
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
				width: 50rpx;
				margin-left: 20rpx;
				box-sizing: border-box;
			}

			.nav-title {
				display: flex;
				align-items: center;
				justify-content: center;
				flex: 1;
				margin-left: 50rpx;
				font-size: 34rpx;
				font-family: Source Han Sans CN;
				font-weight: 500;
				color: #000000;
			}
			.nav-right{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-right: 20rpx;
				text:nth-child(1){
					margin-right: 20rpx;
				}
				
			}
		}
	}
</style>
