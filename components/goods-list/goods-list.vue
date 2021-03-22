<template>
	<view class="mall-content-box">
		<view class="mall-content-box-list">
			<view class="mall-list-li" v-for="(item,index) in goodsList" :key="index" @click="clickGoodsDtails(item)">
				<view class="mall-list-li-item">
					<view class="mall-list-li-image">
						<image :src="item.image" mode=""></image>
					</view>
					<view class="mall-list-li-collect flex-center">
						<image src="../../static/images/store-active.png" mode="aspectFill" v-if="item.isStore"></image>
						<image src="../../static/images/store.png" mode="aspectFill" v-else></image>
					</view>
				</view>
				<view class="mall-list-li-goods-name">
					{{item.goodsName}}
				</view>
				<view class="mall-list-li-price">
					{{item.price}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:{
			goodsList:{
				type:Array,
				default:[]
			}
			
		},
		onLoad() {
			console.log(this.goodsList)
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.mall-content-box {
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow-y: scroll;

		.mall-content-box-list {
			display: flex;
			flex-wrap: wrap;
			padding-left: 40rpx;
			padding-right: 40rpx;
			box-sizing: border-box;
			// overflow-y: scroll;

			.mall-list-li {
				margin-bottom: 30rpx;

				.mall-list-li-item {
					position: relative;
					width: 315rpx;
					height: 320rpx;
					margin-bottom: 20rpx;

					.mall-list-li-image {
						width: 315rpx;
						height: 320rpx;

						image {
							width: 315rpx;
							height: 320rpx;
						}
					}

					.mall-list-li-collect {
						position: absolute;
						bottom: 20rpx;
						right: 20rpx;
						width: 52rpx;
						height: 52rpx;

						image {
							width: 42rpx;
							height: 38rpx;
						}
					}
				}

				.mall-list-li-goods-name {
					font-size: 28rpx;
					font-family: Source Han Sans CN;
					font-weight: 400;
					line-height: 20px;
					color: #000000;
				}

				.mall-list-li-price {
					font-size: 28rpx;
					font-family: Source Han Sans CN;
					font-weight: 500;
					color: #FF4D4D;
					line-height: 20px;
				}

			}

			.mall-list-li:nth-child(2n+1) {
				margin-right: 40rpx;
			}
		}
	}
</style>
