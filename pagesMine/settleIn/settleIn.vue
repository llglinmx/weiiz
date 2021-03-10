<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="我要入驻"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content-list-title">
				欢迎加入weiiz平台，请填写申请信息
			</view>
			<view class="box-content-list" style="margin-top: 0;">
				<view class="box-content-list-li">
					<view class="box-content-list-li-title">门店名称</view>
					<view class="box-content-list-li-info">
						<input class="box-content-list-li-info-input" type="text" placeholder="请填写门店名称" placeholder-class="plac-color" />
					</view>
				</view>
				<view class="box-content-list-li">
					<view class="box-content-list-li-title">区域</view>
					<view class="box-content-list-li-info" style="justify-content: space-between;">
						<view class="box-content-list-li-info-title" style="color: #000;">请选择</view>
						<view class="box-content-list-li-info-more">
							<text class="iconfont icongengduo icon-font" style="color: #999;font-size:28rpx;"></text>
						</view>
					</view>
				</view>
				<view class="box-content-list-li">
					<view class="box-content-list-li-title">分类</view>
					<view class="box-content-list-li-info" style="justify-content: space-between;">
						<view class="box-content-list-li-info-title" style="color: #000;">请选择</view>
						<view class="box-content-list-li-info-more">
							<text class="iconfont icongengduo icon-font" style="color: #999;font-size:28rpx;"></text>
						</view>
					</view>
				</view>
				<view class="box-content-list-li" style="height: 180rpx;">
					<view class="box-content-list-li-title">
						<text class="list-li-title-msg">门店图标</text>
						<text class="list-li-title-text">(100*100)</text>
					</view>
					<view class="box-content-list-li-info">
						<view class="box-content-list-li-info-upload">
							<text class="iconfont icontupian" style="font-size: 50rpx;color: #fff;"></text>
						</view>
						<!--<view class="box-content-list-li-info-upload-image">
							 <image  src="" mode="aspectFill"></image> 
						</view>-->

					</view>
				</view>
				<view class="box-content-list-li" style="height: 180rpx;">
					<view class="box-content-list-li-title">
						<text class="list-li-title-msg">门店封面</text>
						<text class="list-li-title-text">(110*80)</text>
					</view>
					<view class="box-content-list-li-info">
						<view class="box-content-list-li-info-upload">
							<text class="iconfont icontupian" style="font-size: 50rpx;color: #fff;"></text>
						</view>
						<!--<view class="box-content-list-li-info-upload-image">
							 <image  src="" mode="aspectFill"></image> 
						</view>-->
					</view>
				</view>


				<view class="box-content-list-li">
					<view class="box-content-list-li-title">门店电话</view>
					<view class="box-content-list-li-info">
						<input class="box-content-list-li-info-input" type="number" placeholder="请输入电话" placeholder-class="plac-color" />
					</view>
				</view>

				<view class="box-content-list-li">
					<view class="box-content-list-li-title">营业时间</view>
					<view class="box-content-list-li-info">
						请选择营业时间
					</view>
				</view>
				<view class="box-content-list-li">
					<view class="box-content-list-li-title">门店地址</view>
					<view class="box-content-list-li-info">
						点击定位
					</view>
				</view>
			</view>

			<view class="box-content-list">
				<view class="box-content-list-li">
					<view class="box-content-list-li-title box-content-list-li-title-name">姓名</view>
					<view class="box-content-list-li-info">
						<input class="box-content-list-li-info-input" type="text" placeholder="请输入名称" placeholder-class="plac-color" />
					</view>
				</view>
				<view class="box-content-list-li">
					<view class="box-content-list-li-title box-content-list-li-title-name">联系方式</view>
					<view class="box-content-list-li-info">
						<input class="box-content-list-li-info-input" type="number" placeholder="请输入联系方式" placeholder-class="plac-color" />
					</view>
				</view>
				<view class="box-content-list-li">
					<view class="box-content-list-li-title box-content-list-li-title-name">地址</view>
					<view class="box-content-list-li-info">
						<input class="box-content-list-li-info-input" type="text" placeholder="请输入地址" placeholder-class="plac-color" />
					</view>
				</view>

				<view class="box-content-list-li" style="height: 180rpx;">
					<view class="box-content-list-li-title box-content-list-li-title-name">上传执照</view>
					<view class="box-content-list-li-info">
						<view class="box-content-list-li-info-upload">
							<text class="iconfont icontupian" style="font-size: 50rpx;color: #fff;"></text>
						</view>
						<!--<view class="box-content-list-li-info-upload-image">
							 <image  src="" mode="aspectFill"></image> 
						</view>-->

					</view>
				</view>
				<view class="box-content-list-li" style="height: 180rpx;">
					<view class="box-content-list-li-title box-content-list-li-title-name">门店照片</view>
					<view class="box-content-list-li-info">
						<view class="box-content-list-li-info-upload">
							<text class="iconfont icontupian" style="font-size: 50rpx;color: #fff;"></text>
						</view>
						<!--<view class="box-content-list-li-info-upload-image">
							 <image  src="" mode="aspectFill"></image> 
						</view>-->
					</view>
				</view>
			</view>
		</view>
		<view class="box-footer">
			<btn-pink btnName="提交申请" @btnClick="apply"></btn-pink>
		</view>
	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	import btnPink from "../../components/btnPink/btnPink.vue"
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
			};
		},
		components: {
			navTitle,
			btnPink
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
			// 提交申请按钮
			apply() {
				uni.showToast({
					title: "提交申请",
					icon: "none"
				})
			},
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

			.box-content-list-title {
				display: flex;
				align-items: center;
				padding-left: 40rpx;
				box-sizing: border-box;
				height: 88rpx;
				font-size: 28rpx;
				color: #FF8366;
			}


			.box-content-list {
				padding: 0 0 0 40rpx;
				box-sizing: border-box;
				margin-top: 20rpx;
				background: #fff;

				.box-content-list-li:last-child {
					border-bottom: 0;
				}

				.box-content-list-li {
					display: flex;
					align-items: center;
					height: 99rpx;
					border-bottom: 1rpx solid #ededed;
					font-size: 28rpx;

					.box-content-list-li-title {
						display: flex;
						flex-direction: column;
						width: 192rpx;
						color: #333;

						.list-li-title-msg {}

						.list-li-title-text {
							font-size: 24rpx;
							color: #999;
						}
					}

					.box-content-list-li-title-name {
						position: relative;
					}

					.box-content-list-li-title-name::after {
						position: absolute;
						top: 0;
						left: -20rpx;
						content: "*";
						color: #FF6F4D;
						font-size: 36rpx;
					}


					.box-content-list-li-info {
						flex: 1;
						display: flex;
						align-items: center;
						padding-right: 40rpx;
						box-sizing: border-box;
						color: #999;

						.plac-color {
							color: #999;
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

						.box-content-list-li-info-upload {
							display: flex;
							align-items: center;
							justify-content: center;
							width: 120rpx;
							height: 120rpx;
							background: #EDEDED;
							border-radius: 10rpx;
						}

						.box-content-list-li-info-upload-image {
							width: 120rpx;
							height: 120rpx;

							image {
								width: 120rpx;
								height: 120rpx;
							}
						}


					}
				}
			}
		}

		.box-footer {
			padding: 30rpx 40rpx;
			box-sizing: border-box;
		}
	}
</style>
