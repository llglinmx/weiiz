<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle :navTitle="lan.Disclaimer"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content-top">
				<view class="box-content-top-title">
					weiiz {{lan.Disclaimer}}
				</view>
				<view class="box-content-top-btn flex-center">
					{{lan.downloadn}}
				</view>
			</view>
			<view class="box-content-txt">
				{{lan.ContractLaw}}
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
				lan:{}
			};
		},
		components: {
			navTitle
		},
		onLoad(){
			this.getLanguage()
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
           // 请求语言包
           getLanguage() {
           	this.apiget('language/info', {
           		name: 'MyPageTwo'
           	}).then(res => {
           		if (res.status == 200) {
           		  let language=res.data.language
           		  this.lan=res.data.language
           		  
           }
           	});
           },
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
