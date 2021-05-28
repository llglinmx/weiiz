<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="免责条款"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content-top">
				<view class="box-content-top-title">
					weiiz 免责条款
				</view>
				<view class="box-content-top-btn flex-center">
					下载
				</view>
			</view>
			<view class="box-content-txt">
				论《合同法》中的免责条款
				免责条款,是当事人双方在合同中事先约定的,旨在限制或免除其未来的责任的条款。按照合同自由原则,当事人可以在法律规定的范围内,自由约定合同条款,因此当事人既可以在合同中约定合同义务和违约责任,也可以在合同中约定免责条款。我国《合同法》第53条规定,“合同中的下列免责条款无效:()造成对方人身伤害的;(因故意或重大过失造成对方财产损失的”。这就表明我国《合同法》承认当事人可以在不违反《合同法》第53条规定的情况下约定免责条款。免责条款,是当事人双方在合同中事先约定的,旨在限制或免除其未来的责任的条款。按照合同自由原则,当事人可以在法律规定的范围内,自由约定合同条款,因此当事人既可以在合同中约定合同义务和违约责任,也可以在合同中约定免责条款。我国《合同法》第53条规定,“合同中的下列免责条款无效:()造成对方人身伤害的;(因故意或重大过失造成对方财产损失的”。这就表明我国《合同法》承认当事人可以在不违反《合同法》第53条规定的情况下约定免责条款。《合同法》第53条规定的情况下约定免责条款。
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

		.box-head {
			background-color: #fff;
		}

		.box-content {
			flex: 1;
			overflow-y: scroll;


			.box-content-top {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 30rpx 40rpx;
				box-sizing: border-box;
				font-family: Source Han Sans CN;
				font-weight: 400;

				.box-content-top-title {
					font-size: 48rpx;
					color: #000000;
				}

				.box-content-top-btn {
					width: 116rpx;
					height: 48rpx;
					background: #FF8366;
					border-radius: 24rpx;
					color: #fff;
					font-size: 28rpx;
				}
			}

			.box-content-txt {
				padding: 30rpx 40rpx;
				box-sizing: border-box;
				font-size: 32rpx;
				color: #000000;
			}

		}

	}
</style>
