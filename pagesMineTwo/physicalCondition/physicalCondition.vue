<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="身体状态"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content">
				<view class="content-list">
					<view class="content-list-li">
						<view class="content-list-li-title">性别</view>
						<view class="content-list-li-wrap">
							<view class="content-list-li-wrap-text">女</view>
							<view class="content-list-li-more flex-center">
								<text class="iconfont icongengduo icon-font" style="color: #ccc;font-size: 28rpx;font-weight: 500;"></text>
							</view>
						</view>
					</view>
					<view class="content-list-li">
						<view class="content-list-li-title">年龄</view>
						<view class="content-list-li-wrap">
							<view class="content-list-li-wrap-text">22</view>
							<view class="content-list-li-more flex-center">
								<!-- <image src="../../static/images/more-gray.png" mode="aspectFill"></image> -->
							</view>
						</view>
					</view>
					<view class="content-list-li" style="min-height: 186rpx;align-items: baseline;">
						<view class="content-list-li-title">过往病例</view>
						<view class="content-list-li-wrap">
							<textarea class="textarea-text" value="" placeholder="多个病例用“；”分隔" />
							</view>
					</view>
					<view class="content-list-li" style="min-height: 186rpx;align-items: baseline;">
						<view class="content-list-li-title">过敏病例</view>
						<view class="content-list-li-wrap">
							<view class="content-list-li-text">
								芒果、虾、蟹、扇贝、鳕鱼、鲑鱼、鲈鱼、牛奶、菠萝、桃子、草莓
							</view>
						</view>
					</view>
					<view class="content-list-li">
						<view class="content-list-li-title">有无手术</view>
						<view class="content-list-li-wrap">
							<view class="content-list-li-wrap-text">无</view>
							<view class="content-list-li-more flex-center">
								<!-- <image src="../../static/images/more-gray.png" mode="aspectFill"></image> -->
							</view>
						</view>
					</view>
					<view class="content-list-li">
						<view class="content-list-li-title">是否怀孕</view>
						<view class="content-list-li-wrap">
							<view class="content-list-li-wrap-text">否</view>
							<view class="content-list-li-more flex-center">
								<text class="iconfont icongengduo icon-font" style="color: #ccc;font-size: 28rpx;font-weight: 500;"></text>
							</view>
						</view>
					</view>
					<view class="content-list-li" style="min-height: 99rpx;align-items: baseline;">
						<view class="content-list-li-title">注意事项</view>
						<view class="content-list-li-wrap">
							<view class="content-list-li-text">
								无
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="box-footer">
			<btnPink btnName="保存" @btnClick="preserve"></btnPink>
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
			btnPink,
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
			// 保存按钮
			preserve() {
				uni.showToast({
					title: "保存",
					icon: "none"
				})
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

			.content-list {
				margin: 20rpx 0;
				background: #fff;

				.content-list-li {
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 36rpx 40rpx;
					box-sizing: border-box;
					height: 99rpx 40;
					border-bottom: 1rpx solid #EDEDED;

					.content-list-li-title {
						width: 180rpx;
						font-size: 28rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #000000;

					}

					.content-list-li-wrap {
						flex: 1;
						display: flex;
						align-items: center;
						justify-content: space-between;

						.content-list-li-wrap-text {		
							font-size: 28rpx;
							font-family: Source Han Sans CN;
							font-weight: 400;
							color: #000000;
						}

						.content-list-li-more {
							.icon-font{
								margin-top: 4rpx;
							}
						}
						
						.textarea-text{
							height: 120rpx;
							width: 100%;
							font-size: 28rpx;
						}
						
						.content-list-li-text{
							font-size: 28rpx;
							font-family: Source Han Sans CN;
							font-weight: 400;
							color: #000000;
						}
					}
				}

				.content-list-li:last-child {
					border-bottom: none;
				}
			}

		}

		.box-footer {
			padding: 0 40rpx;
			box-sizing: border-box;
			margin-bottom: 30rpx;
		}
	}
</style>
