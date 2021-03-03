<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="详情"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content-problem">
				<view class="box-content-problem-title">
					银行/支付宝/微信已扣款，订单仍显示未付款
				</view>
				<view class="box-content-problem-explain">
					出现此问题，可能是银行/支付宝/微信的数据没有即时传输至weiiz平台，请您不要担心，稍后刷新页面查看。
					如半小时后仍显示“未付款”，请先联系银行/支付宝/财付通客服，获取您扣款的交易号，然后致电平台客服12345268，我们会协助您解决。
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
			};
		},
		components: {
			navTitle
		},
		onReady() {
			// 获取顶部电量状态栏高度
			uni.getSystemInfo({
				success: (res) => {
					this.barHeight = res.statusBarHeight
				}
			});
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.box {
		display: flex;
		flex-direction: column;
		height: 100%;
		background: #F7F7F7;

		.box-head {
			background-color: #fff;
		}

		.box-content {
			flex: 1;
			overflow-y: scroll;

			.box-content-problem {
				background: #fff;
				font-family: Source Han Sans CN;
				font-weight: 400;

				.box-content-problem-title {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					padding: 0 40rpx;
					box-sizing: border-box;
					height: 95rpx;
					border-bottom: 1rpx solid #ededed;
					font-size: 32rpx;
					color: #000000;
				}

				.box-content-problem-explain {
					padding: 30rpx 40rpx;
					box-sizing: border-box;
					font-size: 28rpx;
					color: #666666;
				}
			}

		}


	}
</style>
