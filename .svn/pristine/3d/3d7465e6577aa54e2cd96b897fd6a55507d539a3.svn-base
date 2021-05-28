<template>
	<view class="loading flex-center">
		<view class="loading-box flex-center">
			<text class="iconfont iconjiazaizhong icon-font" style="font-size:120rpx;color: #FF8366;"></text>
			<text style="margin-top: 20rpx;">加载中...</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},

	}
</script>

<style scoped lang="scss">
	.loading {
		width: 100%;
		height: 100%;
		background: #fff;

		.loading-box {
			display: flex;
			flex-direction: column;
			color: #666;
			font-size: 28rpx;
			width: 120rpx;
			// height: 120rpx;
		}

		.icon-font {
			width: 120rpx;
			height: 120rpx;
			padding-top: 2rpx;
			animation: changeright 0.8s linear infinite;
		}

		/*自定义动画类----顺时针旋转（使用这个动画的时候才设置动画执行时间）*/
		@keyframes changeright {
			to {
				transform: rotate(0deg);
			}

			from {
				transform: rotate(180deg);
			}
		}
	}
</style>
