<template>
	<view class="tabs-box">
		<view class="tabs-list">
			<view class="tabs-list-li" v-for="(item,index) in TabsList" :key="index" @click="TabBtn(index)">
				<view class="tabs-li-title" :class="{'tab-active-color':IndexIdx==index}">
					{{item}}
					<text :class="{'tab-active':IndexIdx==index}"></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				idx: 0
			}
		},
		props: {
			TabsList: {
				type: Array,
			},
			IndexIdx: {

			}
		},
		methods: {
			TabBtn(index) {
				// this.idx = index
				this.$emit('TabClick', index)
			},
		}
	}
</script>

<style lang="scss" scoped>
	.tabs-box {
		height: 88rpx;
		background: #fff;
		padding: 0 40rpx;
		box-sizing: border-box;
		.tabs-list {
			display: flex;
			align-items: center;
			height: 100%;

			.tabs-list-li {
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100%;
				flex: 1;
				transition: 0.5s;

				.tabs-li-title {
					position: relative;
					display: block;
					height: 88rpx;
					line-height: 88rpx;
					color: #666;
					font-size: 28rpx;
					font-family: Source Han Sans CN;
					font-weight: 400;
					transition: 0.5s;

					text {
						position: absolute;
						left: 0;
						right: 0;
						bottom: 0;
						margin: auto;
						width: 100%;
						height: 4rpx;
						background:#FF6F4D;;
						opacity: 0;
					}

					.tab-active {
						opacity: 1;
					}
				}

				.tab-active-color {
					color: #FF6F4D;
				}

				// .tabs-li-title::after {
				// 	position: absolute;
				// 	left: 0;
				// 	right: 0;
				// 	bottom: 0;
				// 	margin: auto;
				// 	content: '';
				// 	width: 100%;
				// 	height: 4rpx;
				// 	background: #324B78;
				// }
			}
		}
	}
</style>
