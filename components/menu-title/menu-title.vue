<template>
	<view class="menu-title-box">
		<view class="menu-title-box-title">{{msgTitle}}</view>
		<view class="menu-title-box--more" v-if="isShow">
			<text>更多</text>
		</view>
		<view class="menu-title-box--more" v-if="!isShow"></view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				
			};
		},
		props: {
			msgTitle: {
				type: String,
				default: "标题栏"
			},
			isShow:{
				type:Boolean,
				default:false
			}
		},
	}
</script>

<style lang="scss" scoped>
	.menu-title-box{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 94rpx;
		.menu-title-box-title{
			font-size: 34rpx;
			color: #000;
			font-weight: 500;
		}
		.menu-title-box--more{
			color: #999;
			font-size: 26rpx;
		}
	}
</style>
