<!-- 注意：此tab-view仅为z-paging的demo演示之用，未作兼容与细节处理，不建议直接使用，建议使用第三方成熟的tab-view -->
<template name="tabs-view">
	<view class="segment">
		<view class="segment-item" v-for="(title,index) in items" :key="index" @click="itemClick(index)">
			<view class="title-container">
				<text class="title" :style="{color:currentIndex===index?'#FF967D':'#000'}">{{title}}</text>
			</view>
			<view class="line" v-if="currentIndex===index"></view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'tabs-view',
		data() {
			return {
				currentIndex: 0
			};
		},
		props: {
			items: {
				type: Array,
				default: function() {
					return [];
				}
			},
			current: {
				type: Number,
				default: function() {
					return 0;
				}
			}
		},
		watch: {
			current(newVal){
				this.currentIndex = newVal;
			}
		},
		computed: {
			itemWidth() {
				// #ifdef APP-NVUE
				return (750 /  this.items.length) + 'rpx';
				// #endif
				// #ifndef APP-NVUE
				return ((1.0 / this.items.length) * 100) + '%';
				// #endif
			}
		},
		methods: {
			itemClick(index) {
				if (this.currentIndex != index) {
					this.$emit('change', index);
				}
				this.currentIndex = index;
			}
		}
	}
</script>

<style scoped>
	.segment-control {}

	.segment {
		background-color: white;
		height: 88rpx;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		font-size: 34rpx;
		color: darkgray;
		z-index: 1000;
	}

	.segment-item {
		height: 88rpx;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin:0 14rpx;
	}

	.title-container {
		width: 100%;
		height: 84rpx;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.title {
		width: 100%;
		font-size: 34rpx;
		text-align: center;
	}

	.line {
		height: 4rpx;
		width: 140rpx;
		margin-bottom: -2rpx;
		background-color: #FF967D;
	}
</style>
