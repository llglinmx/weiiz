<template>
	<view class="box-list">
		<view class="box-list-li" v-for="(item,index) in list" @click="listClick(index)">
			<view class="list-li-image">
				<image :src="item.image" mode="aspectFill"></image>
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
			list: {
				type: Object,
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
				width: 64rpx;
				height: 64rpx;

				image {
					width: 51rpx;
					height: 38rpx;
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
