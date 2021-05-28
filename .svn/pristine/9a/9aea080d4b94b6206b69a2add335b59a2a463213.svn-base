<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="关于我们"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content-info">
				<view class="box-content-info-logo">
					<image src="../../static/images/logo-ico.png" mode="aspectFill"></image>
				</view>
				<view class="box-content-info-title">weiiz</view>
				<view class="box-content-info-edition">版本V1.0</view>
			</view>
			<view class="content-list">
				<view class="content-list-li" @click="listAllClick('clause')">
					<view class="content-list-li-title">免责条款</view>
					<view class="content-list-li-more flex-center">
						<image src="../../static/images/more-gray.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="content-list-li" @click="listAllClick('treaty')">
					<view class="content-list-li-title">合同与协议</view>
					<view class="content-list-li-more flex-center">
						<image src="../../static/images/more-gray.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="content-list-li" @click="listAllClick('info')">
					<view class="content-list-li-title">平台信息</view>
					<view class="content-list-li-more flex-center">
						<image src="../../static/images/more-gray.png" mode="aspectFill"></image>
					</view>
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
			listAllClick(type) {
				uni.showToast({
					title: type,
					icon: "none"
				})

				switch (type) {
					case "clause":
						uni.navigateTo({
							url: "../../pagesMineThree/exemptionClause/exemptionClause"
						})
					case "treaty":
						break;
					case "info":
						break;
				}
			}

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

			.box-content-info {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-between;
				height: 288rpx;
				padding: 40rpx 0;
				box-sizing: border-box;
				font-family: Source Han Sans CN;
				font-weight: 400;

				.box-content-info-logo {
					width: 120rpx;
					height: 120rpx;

					image {
						width: 120rpx;
						height: 120rpx;
					}
				}

				.box-content-info-title {
					font-size: 32rpx;
					color: #000000;
				}

				.box-content-info-edition {
					font-size: 24rpx;
					color: #999999;
				}
			}

			.content-list {
				background: #fff;

				.content-list-li {
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 0 40rpx;
					box-sizing: border-box;
					height: 91rpx;
					border-bottom: 1rpx solid #EDEDED;

					.content-list-li-title {
						font-size: 32rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #000000;
					}

					.content-list-li-more {
						width: 32rpx;
						height: 32rpx;

						image {
							width: 18rpx;
							height: 30rpx;
						}
					}
				}

				.content-list-li:last-child {
					border-bottom: none;
				}
			}
		}

	}
</style>
