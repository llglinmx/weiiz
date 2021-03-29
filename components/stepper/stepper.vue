<template>
	<view class="box-content-main-center-stepper">
		<view class="reduce" @click="stepperClick('reduce')">
			<text class="iconjian iconfont" :style="{color:num<=1?'#eee':'#ccc'}" style="font-size: 28rpx"></text>
		</view>
		<view class="num flex-center">
			{{num}}
		</view>
		<view class="add" @click="stepperClick('add')">
			<text class="iconjia iconfont" style="font-size: 28rpx;color: #ccc;font-weight: 500;"></text>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: {
			num: {
				type: Number,
				default: 1
			}
		},
		methods: {
			// 步进器
			stepperClick(type) {
				switch (type) {
					case "reduce":
						this.$emit('reduce')
						break;
					case "add":
						this.$emit('add')
						break;
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.box-content-main-center-stepper {
		display: flex;
		width: 220rpx;
		height: 68rpx;
		border: 1px solid #E0E0E0;
		border-radius: 20rpx;

		.reduce {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 80rpx;
			height: 68rpx;
		}

		.num {
			flex: 1;
			font-size: 28rpx;
			color: #000;
		}

		.add {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 80rpx;
			height: 68rpx;
		}
		.reduce,.add{
			text{
				transition: 0.3s;
			}
		}
	}
</style>
