<template>
	<view>
		<view class="commentlist" v-for="(item,index) in dataList" :key="index">
			<view class="avatar"><image class="image" :src="item.member_avatar"></image></view>
			<view class="infofield">
				<view><text class="nickname">{{ item.member_nickname }}</text></view>
				<view class="star"><uni-rate :readonly="true" :value="item.star" size="15"></uni-rate> <text class="starnum">{{item.star}}分</text></view>
				<view>
					<text class="commentcont">{{ item.content }}</text>
				</view>
				<view><text class="time">{{ item.createtime }}</text></view>
				<view v-if="item.bimg" class="picture">
					<image v-for="(val,key) in item.bimg" :key="key" class="image" :src="val"></image>
				</view>
				<view v-if="item.reply_content" class="msgcont">
					<view><text class="reply">{{ item.replier }}回复：</text></view>
					<view><text class="replycont">{{ item.reply_content }}</text></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"comment",
		data() {
			return {};
		},
		props:{
			dataList:{
				type:Array,
				default:function(){
					return []
				}
			}
		},
		methods:{
		}
	}
</script>

<style lang="scss">
.commentlist{
	margin: 0 30rpx;
	padding: 30rpx 0;
	flex-direction: row;
	/* #ifdef H5 */
	display: flex;
	/* #endif */
	flex: 1;
	.avatar{
		.image{
			width:88rpx;
			height:88rpx;
			border-radius: 50%;
		}
	}
	.infofield{
		margin-left: 20rpx;
		border-bottom: 1px solid #EDEDED;
		padding-bottom: 30rpx;
		flex:1;
		.star{
			margin-top:10rpx;
			flex-direction: row;
			align-items: center;
			.starnum{
				margin-left:10rpx;
				font-size: 24rpx;
			}
		}
		.commentcont{
			margin-top:10rpx;
			font-size: 28rpx;
			line-height: 40rpx;
		}
		.nickname{
			font-size: 30rpx;
			line-height: 30rpx;
		}
		.picture{
			flex-direction: row;
			flex-wrap: wrap;
			margin-top: 10rpx;
			.image{
				margin-right: 15rpx;
				margin-top: 16rpx;
				width:180rpx;
				height:180rpx;
				border-radius: 20rpx;
			}
		}
		.time{
			color:#999;
			font-size: 24rpx;
		}
		.msgcont{
			background-color: #F7F7F7;
			padding: 20rpx;
			border-radius: 10rpx;
			margin-top: 20rpx;
			.reply{
				color:#999;
				font-size: 28rpx;
			}
			.replycont{
				color:#333;
				font-size: 28rpx;
				line-height: 40rpx;
			}
		}
	}
}
</style>
