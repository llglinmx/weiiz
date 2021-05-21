<template>
	<view class="box-list">
		<view class="box-list-li" v-for="(item,index) in menuList" :key="index" @click="listClick(index)">
			<view class="list-li-image">
				<image :src="item.image" mode="aspectFill"></image>
				<text class="msg" v-if="item.num>0">
					<text>{{item.num>99?'99+':item.num}}</text>
				</text>
			</view>
			<view class="list-li-title">{{item.title}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},

		props: {
			menuList: {
				type: Array,
				default: []
			}
		},

		methods: {
			listClick(index) {
				this.$emit("listState", index)
			},
		},
	}
</script>

<style lang="scss" scoped>
	.box-list {
		display: flex;
		align-items: center;
		justify-content: space-around;
		height: 164rpx;
		background: #fff;

		.box-list-li {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;

			.list-li-image {
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 64rpx;
				height: 64rpx;

				image {
					// width: 51rpx;
					// height: 38rpx;
					width: 60rpx;
					height: 60rpx;
				}

				.msg {
					position: absolute;
					top: -15rpx;
					right: -15rpx;
					width: 30rpx;
					height: 30rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 50%;
					background: #f73e3e;
					font-size: 22rpx;
					color: #fff;
					text{
						display: block;
						transform: scale(0.8);
					}
				}
			}

			.list-li-title {
				font-size: 24rpx;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #333333;
			}
		}
	}
</style>
