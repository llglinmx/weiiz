<template>
	<view class="no-data flex-center">
		<view class="no-data-box flex-center">
			<text class="iconfont icondingdan icon-font"></text>
			<text class="no-text">暂无任何数据</text>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			
		}
	}
</script>

<style scoped lang="scss">
.no-data{
	height: 100%;
	background: #fff;
	.no-data-box{
		display: flex;
		align-items: center;
		flex-direction: column;
		.icon-font{
			transform: translateY(-80rpx);
			color: #FF8366;
			font-size: 200rpx;
		}
		.no-text{
			font-size: 28rpx;
			color: #999;
			transform: translateY(-50rpx);
		}
	}
}
</style>
