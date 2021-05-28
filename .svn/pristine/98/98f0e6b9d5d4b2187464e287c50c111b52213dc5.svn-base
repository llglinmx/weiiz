<template>
	<view class="popup-box-popup" :class="visible?'popup-box-popup-active':''" @click="close">

		<view class="popup-box" :class="visible?'popup-box-active':'' " @click.stop="clickStop">
			<view class="popup-box-header">
				<text style="color: #999999;" @click.stop="close">取消</text>
				<text>分类</text>
				<text@click.stop="determine" style="color:#007AFF">确认</text>
			</view>
			<view class="popup-box-content">
				<view class="popup-box-content-li" @click.stop="clickList(index,item.id)"
					v-for="(item,index) in dataList" :key="item.id">
					<text class="title-text"
						:style="{color:defaultIndex==index?'#ef7d7d':'#999',fontSize:defaultIndex==index?'32rpx':'28rpx'}">{{item.name}}</text>
					<text :style="{opacity:defaultIndex==index?'1':'0'}" class="icondagou iconfont icon-font"
						style="font-size: 42rpx;color:#ef7d7d"></text>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		name: 'picker',
		data() {
			return {
				defaultIndex: 0,
				id: ''
			}
		},
		props: {
			dataList: {
				type: Array,
				default: []
			},
			visible: {
				type: Boolean,
				default: false
			},
			activeIndex: {
				type: Number,
				default: 0
			}
		},
		mounted() {
			this.defaultIndex = this.activeIndex
		},


		methods: {
			close() {
				this.$emit('close', false)
			},
			determine() {
				this.$emit('confirm', this.id)
			},
			clickList(index, id) {
				this.defaultIndex = index
				this.id = id
			},
			clickStop() {

			},
		},
	}
</script>

<style scoped lang="scss">
	.popup-box-popup-active {
		z-index: 9999 !important;
		background: rgba(0, 0, 0, 0.5) !important;
	}

	.popup-box-popup {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		background: rgba(0, 0, 0, 0.1);
		transition: 0.3s;

		.popup-box {
			display: flex;
			flex-direction: column;
			position: absolute;
			bottom: 0;
			width: 100%;
			height: 0;
			background: #fff;
			transition: 0.3s;
			border-radius: 20rpx 20rpx 0 0;

			.popup-box-header {
				padding: 0 40rpx;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 100rpx;
				font-size: 32rpx;
				border-radius: 20rpx 20rpx 0 0;
				border-bottom: 1rpx solid #ededed;
			}

			.popup-box-content {
				flex: 1;
				overflow-y: scroll;

				.popup-box-content-li {
					display: flex;
					align-items: center;
					justify-content: center;
					height: 80rpx;
					font-size: 28rpx;
					color: #999;
					transition: 0.3s;

					.title-text {
						margin-right: 20rpx;
						transition: 0.3s;
					}

					.icon-font {
						transition: 0.3s;

					}
				}


			}

		}

		.popup-box-active {
			height: 800rpx !important;
		}


	}
</style>
