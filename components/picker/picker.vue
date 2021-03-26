<template>
	<view class="picker-box" v-if="visible">

		<view class="picker-box-main" :class="visible?'picker-box-main-active':''">
			<view class="picker-box-main-top">
				<text @click="cancle">取消</text>
				<text @click="confirm">确定</text>
			</view>
			<picker-view :indicator-style="indicatorStyle" @change="bindChange" class="picker-view">
				<picker-view-column>
					<view class="item" v-for="(item,index) in addressList" :key="index">{{item.name}}</view>
				</picker-view-column>
			</picker-view>
		</view>

	</view>
</template>

<script>
	export default {
		name: 'picker',
		data() {
			return {
				indicatorStyle: `height: 80rpx;`,
				value: [],
				index: 0,
			}
		},
		props: {
			addressList: {
				type: Array,
				default: []
			},
			visible: {
				type: Boolean,
				default: []
			},
		},
		onLoad() {
			console.log(this.addressList)
		},
		methods: {
			bindChange(e) {
				this.index = e.detail.value
			},
			// 取消
			cancle() {
				this.$emit('cancle')
			},
			// 确定
			confirm() {
				this.$emit("confirm",this.addressList[this.index])
			},
		},
	}
</script>

<style scoped lang="scss">
	.picker-box {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);

		.picker-box-main {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 0;
			background: #fff;
			transition: 15s;
			display: flex;
			flex-direction: column;

			.picker-box-main-top {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 40rpx;
				box-sizing: border-box;
				height: 80rpx;

				text {
					font-size: 28rpx;
				}
			}

			.picker-view {
				flex: 1;

				picker-view-column {
					text-align: center;
				}
			}
		}

		.picker-box-main-active {
			height: 500rpx !important;
		}
	}
</style>
