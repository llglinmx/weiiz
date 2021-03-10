<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="添加地址"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content-list">
				<view class="box-content-list-li">
					<view class="box-content-list-li-title">姓氏</view>
					<view class="box-content-list-li-info">
						<input class="box-content-list-li-info-input" type="text" placeholder="请输入姓" />
					</view>
				</view>
				<view class="box-content-list-li">
					<view class="box-content-list-li-title">名字</view>
					<view class="box-content-list-li-info">
						<input class="box-content-list-li-info-input" type="text" placeholder="请输入名字" />
					</view>
				</view>
				<view class="box-content-list-li">
					<view class="box-content-list-li-title">手机号码</view>
					<view class="box-content-list-li-info">
						<view class="box-content-list-li-info-area-code flex-center">
							<text>+86</text>
							<text class="iconfont iconxiangxiajiantou icon-font" style="color: #000;font-size: 28rpx"></text>
						</view>
						<input class="box-content-list-li-info-input" type="number" placeholder="请输入手机号码" />
					</view>
				</view>
				<view class="box-content-list-li">
					<view class="box-content-list-li-title">国家</view>
					<view class="box-content-list-li-info" style="justify-content: space-between;">
						<view class="box-content-list-li-info-title">请选择</view>
						<view class="box-content-list-li-info-more">
							<text class="iconfont icongengduo icon-font" style="color: #999;font-size: 28rpx;margin-top: 4rpx;"></text>
						</view>
					</view>
				</view>
				<view class="box-content-list-li">
					<view class="box-content-list-li-title">省</view>
					<view class="box-content-list-li-info" style="justify-content: space-between;">
						<view class="box-content-list-li-info-title">请选择</view>
						<view class="box-content-list-li-info-more">
							<text class="iconfont icongengduo icon-font" style="color: #999;font-size: 28rpx;margin-top: 4rpx;"></text>
						</view>
					</view>
				</view>
				<view class="box-content-list-li">
					<view class="box-content-list-li-title">市</view>
					<view class="box-content-list-li-info" style="justify-content: space-between;">
						<view class="box-content-list-li-info-title">请选择</view>
						<view class="box-content-list-li-info-more">
							<text class="iconfont icongengduo icon-font" style="color: #999;font-size: 28rpx;margin-top: 4rpx;"></text>
						</view>
					</view>
				</view>
				<view class="box-content-list-li">
					<view class="box-content-list-li-title">区</view>
					<view class="box-content-list-li-info" style="justify-content: space-between;">
						<view class="box-content-list-li-info-title">请选择</view>
						<view class="box-content-list-li-info-more">
							<text class="iconfont icongengduo icon-font" style="color: #999;font-size: 28rpx;margin-top: 4rpx;"></text>
						</view>
					</view>
				</view>
				<view class="box-content-list-li">
					<view class="box-content-list-li-title">街道</view>
					<view class="box-content-list-li-info" style="justify-content: space-between;">
						<view class="box-content-list-li-info-title">请选择</view>
						<view class="box-content-list-li-info-more">
							<text class="iconfont icongengduo icon-font" style="color: #999;font-size: 28rpx;margin-top: 4rpx;"></text>
						</view>
					</view>
				</view>
				<view class="box-content-list-li">
					<view class="box-content-list-li-title">详细地址</view>
					<view class="box-content-list-li-info">
						<input class="box-content-list-li-info-input" type="text" placeholder="街道门牌信息" />
					</view>
				</view>
				<view class="box-content-list-li">
					<view class="box-content-list-li-title">邮政编码</view>
					<view class="box-content-list-li-info">
						<input class="box-content-list-li-info-input" type="number" placeholder="请输入邮政编码" />
					</view>
				</view>
			</view>
		</view>
		<view class="box-footer">
			<view class="box-footer-btn flex-center" :class="isAll?'box-footer-btn-active':''">
				确定
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
				isAll: false, //判断是否都有全部填写完整
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

			.box-content-list {
				padding: 0 0 0 40rpx;
				box-sizing: border-box;
				margin-top: 20rpx;
				background: #fff;

				.box-content-list-li {
					display: flex;
					align-items: center;
					height: 99rpx;
					border-bottom: 1rpx solid #ededed;
					font-size: 28rpx;

					.box-content-list-li-title {
						width: 192rpx;
						color: #333;
					}

					.box-content-list-li-info {
						flex: 1;
						display: flex;
						align-items: center;
						padding-right: 40rpx;
						box-sizing: border-box;

						.box-content-list-li-info-area-code {
							position: relative;
							width: 104rpx;
							height: 44rpx;
							margin-right: 10rpx;
							border: 1rpx solid #CCCCCC;
							border-radius: 22rpx;

							text {}

							image {
								width: 28rpx;
								height: 28rpx;
								margin-left: 10rpx;
								transform: rotate(90deg);
								transition: 0.3s;
							}
						}

						.box-content-list-li-info-input {
							font-size: 28rpx;
						}

						.box-content-list-li-info-title {}

						.box-content-list-li-info-more {
							display: flex;
							align-items: center;

							image {
								width: 28rpx;
								height: 28rpx;
							}
						}

					}
				}
			}

		}

		.box-footer {
			padding: 30rpx 40rpx;
			box-sizing: border-box;

			.box-footer-btn {
				width: 670rpx;
				height: 80rpx;
				border-radius: 10rpx;
				font-size: 32rpx;
				color: #fff;
				background: #FFD6CC;
				transition: 0.3s;
				// box-shadow: 0rpx 10rpx 20rpx rgba(255, 49, 0, 0.15);
			}

			.box-footer-btn-active {
				background: #FF967D !important;
			}
		}
	}
</style>
