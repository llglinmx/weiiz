<template>
	<view class="no-data flex-center">
		<view class="no-data-box flex-center">
			<!-- <text class="iconfont icondingdan icon-font"></text> -->
			<image src="../../static/images/nodata.png" mode="aspectFill"></image>
			<text class="no-text">暂无任何数据</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {

		}
	}
</script>

<style scoped lang="scss">
	.no-data {
		height: 100%;
		background: #f5f5f5;

		.no-data-box {
			display: flex;
			align-items: center;
			flex-direction: column;

			.icon-font {
				transform: translateY(-80rpx);
				color: #FF8366;
				font-size: 150rpx;
			}

			.no-text {
				font-size: 28rpx;
				color: #999;
				transform: translateY(-50rpx);
			}

			image {
				width: 200rpx;
				height: 200rpx;
				transform: translateY(-50rpx);
			}
		}
	}
</style>
