<template>
	<u-popup :maskCloseAble="maskCloseAble" mode="bottom" :popup="false" v-model="value" length="auto"
		:safeAreaInsetBottom="safeAreaInsetBottom" @close="close" z-index="999">
		<view class="u-picker-header" @touchmove.stop.prevent="stop" catchtouchmove="stop">
			<view style="color: #999;" class="u-btn-picker u-btn-picker--tips" hover-class="u-opacity"
				:hover-stay-time="150" @tap="getResult('cancel')">取消</view>
			<view style="color: #389ae0;" class="u-btn-picker u-btn-picker--primary" hover-class="u-opacity"
				:hover-stay-time="150" @touchmove.stop="" @tap.stop="getResult('confirm')">确定</view>
		</view>
		<view class="u-picker-body">
			<picker-view :value="pickVal" @change="bindChange" class="u-picker-view">
				<picker-view-column>
					<view class="u-column-item" v-for="(item,index) in dataList" :key="index">
						<view class="u-line-1">
							{{item.name}}
						</view>
					</view>
				</picker-view-column>
			</picker-view>
		</view>
	</u-popup>
</template>

<script>
	import uPopup from './u-popup'
	export default {
		props: {
			safeAreaInsetBottom: {
				type: Boolean,
				default: false
			},
			// 是否允许通过点击遮罩关闭Picker
			maskCloseAble: {
				type: Boolean,
				default: true
			},
			// 通过双向绑定控制组件的弹出与收起
			value: {
				type: Boolean,
				default: false
			},
			dataList: {
				type: Array,
				default: []
			},
		},
		data() {
			return {
				pickVal: [0],
				name: '',
				text: -1,
			}
		},
		watch: {

		},
		mounted() {
			this.name=this.dataList[0].name
			this.text=this.dataList[0].text
		},
		methods: {
			close() {
				this.$emit('input', false);
			},

			bindChange(event) {
				this.text = this.dataList[event.detail.value[0]].text
				this.name = this.dataList[event.detail.value[0]].name
			},
			getResult(event = null) {
				let result = {}
				result = {
					text: this.text,
					name: this.name,
				}

				if (event) this.$emit(event, result);
				this.close();
			}
		},
		components: {
			uPopup
		}
	}
</script>
<style lang="scss" scoped>
	.u-datetime-picker {
		position: relative;
		z-index: 999;
	}

	.u-picker-view {
		height: 100%;
		box-sizing: border-box;
	}

	.u-picker-header {
		width: 100%;
		height: 90rpx;
		padding: 0 40rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		font-size: 32rpx;
		background: #fff;
		position: relative;
	}

	.u-picker-header::after {
		content: '';
		position: absolute;
		border-bottom: 1rpx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		bottom: 0;
		right: 0;
		left: 0;
	}

	.u-picker-body {
		width: 100%;
		height: 500rpx;
		overflow: hidden;
		background-color: #fff;
	}

	.u-column-item {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 32rpx;
		padding: 0 8rpx;
	}

	.u-text {
		font-size: 24rpx;
		padding-left: 8rpx;
	}

	.u-btn-picker {
		padding: 16rpx;
		box-sizing: border-box;
		text-align: center;
		text-decoration: none;
		font-size: 28rpx;
	}

	.u-opacity {
		opacity: 0.5;
	}

	.u-btn-picker--primary {}

	.u-btn-picker--tips {}
</style>
