<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="反馈"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content-tabs">
				<liuyuno-tabs ref="boxTabs" :tabData="tabs" :activeIndex="defaultIndex" @tabClick='tabClick' />
			</view>
			<view class="box-content-wrap">
				<view class="box-content-wrap-item">
					<swiper class="swiper-box" :current="defaultIndex" @change="tabChange">
						<swiper-item class="swiper-box-item-list">
							<view class="content-list-item">
								<view class="content-list-feedback">
									<view class="content-list-feedback-title">我要反馈：</view>
									<view class="content-list-feedback-textarea">
										<textarea value="" placeholder="请在此输入您要反馈的详细内容" />
										<text>0/100</text>
									</view>
									<view class="content-list-all-image">
										<view class="content-list-image-li">
											<image src="../../static/images/002.png" mode="aspectFill"></image>
										</view>
										<view class="content-list-image-li">
											<image src="../../static/images/002.png" mode="aspectFill"></image>
										</view>
										<view class="content-list-image-li">
											<image src="../../static/images/002.png" mode="aspectFill"></image>
										</view>
									</view>
								</view>
							
								
								<view class="content-list-item-contact">
								<view class="list-item-title">
									联系方式：
								</view>
								<view class="list-item-input">
									<input type="number" value="" placeholder="请输入您的联系方式" />
								</view>
							</view>
							</view>
						</swiper-item>
						<swiper-item class="swiper-box-item-list">
							<view class="content-list-item">
								<view class="content-list-qrcode">
									<image src="../../static/images/qrcode.png" mode=""></image>
									<text>微信二维码</text>
								</view>
								<view class="content-list-wrap">
									<view class="content-list-wrap-li">
										<view class="content-list-wrap-li-title">公司名称</view>
										<view class="content-list-li-text">XX信息技术有限公司</view>
									</view>
									<view class="content-list-wrap-li">
										<view class="content-list-wrap-li-title">地址</view>
										<view class="content-list-li-text">中国 北京市 朝阳区 望京东路4号</view>
									</view>
									<view class="content-list-wrap-li">
										<view class="content-list-wrap-li-title">邮箱</view>
										<view class="content-list-li-text">weiiz@weiiz.com</view>
									</view>
									<view class="content-list-wrap-li">
										<view class="content-list-wrap-li-title">微信号</view>
										<view class="content-list-li-text">w521482</view>
									</view>
									<view class="content-list-wrap-li">
										<view class="content-list-wrap-li-title">微信号昵称</view>
										<view class="content-list-li-text">XXweiiz官方</view>
									</view>
								</view>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<view class="box-footer" v-if="defaultIndex==0">
			<btnPink btnName="保存" @btnClick="preserve"></btnPink>
		</view>
	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	import btnPink from "../../components/btnPink/btnPink.vue"
	import liuyunoTabs from "@/components/liuyuno-tabs/liuyuno-tabs.vue";
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				defaultIndex: 0,
				tabs: ["我要反馈", "联系方式"],
			};
		},
		components: {
			navTitle,
			btnPink,
			liuyunoTabs
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
			// tabs 点击
			tabClick(e) {
				this.defaultIndex = e
			},
			// 滑动切换列表
			tabChange(e) {
				this.$refs.boxTabs.tabToIndex(e.detail.current)
				this.defaultIndex = e.detail.current
			},

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
		height:100%;
		background: #F7F7F7;

		.box-head {
			background-color: #fff;
		}

		.box-content {
			flex: 1;
			
			box-sizing: border-box;
			overflow-y: scroll;

			.box-content-tabs {}

			.box-content-wrap {
				height: calc( 100% - 90rpx);
				overflow-y: scroll;

				.box-content-wrap-item {
					height: 100%;

					.swiper-box {
						height: 100%;
						overflow-y: scroll;

						.swiper-box-item-list {
							height: 100%;
							overflow-y: scroll;

							.content-list-item {
								
								.content-list-feedback {
									padding: 30rpx 40rpx;
									box-sizing: border-box;
									margin: 20rpx 0;
									background: #fff;
									font-family: Source Han Sans CN;
									font-weight: 400;
									font-size: 28rpx;

									.content-list-feedback-title {
										margin-bottom: 30rpx;
										line-height: 15rpx;
										color: #333333;
									}

									.content-list-feedback-textarea {
										position: relative;
										padding: 15rpx;
										box-sizing: border-box;
										height: 288rpx;
										border: 1rpx dashed #ccc;

										textarea {
											width: 100%;
											height: 100%;
											text-indent: 1rem;
											font-size: 28rpx;
										}
										text{
											position: absolute;
											right: 20rpx;
											bottom: 20rpx;
											font-size: 24rpx;
											color: #CCCCCC;
										}
									}
									.content-list-all-image{
										display: flex;
										margin-top: 30rpx;
										background: #fff;
										.content-list-image-li{
											width: 120rpx;
											height: 120rpx;
											margin-right: 20rpx;
											image{
												width: 120rpx;
												height: 120rpx;
											}
										}
										.content-list-image-li:last-child{
											margin-right: 0;
										}
									}
								}
								

								.content-list-item-contact {
									display: flex;
									align-items: center;
									height: 100rpx;
									padding: 0 40rpx;
									box-sizing: border-box;
									font-family: Source Han Sans CN;
									font-weight: 400;
									background: #fff;

									.list-item-title {
										color: #333333;
										font-size: 28rpx;
									}

									.list-item-input {
										flex: 1;

										input {
											font-size: 28rpx;
										}
									}
								}
								
								.content-list-wrap {
									margin: 20rpx 0;
									background: #fff;
								
									.content-list-wrap-li {
										display: flex;
										align-items: center;
										justify-content: space-between;
										padding: 0 40rpx;
										box-sizing: border-box;
										height: 91rpx;
										border-bottom: 1rpx solid #EDEDED;
								
										.content-list-wrap-li-title {
											font-size: 28rpx;
											font-family: Source Han Sans CN;
											font-weight: 400;
											color: #000000;
										}
								
										.content-list-li-text {
											font-size: 28rpx;
											font-family: Source Han Sans CN;
											font-weight: 400;
											color: #999999;
										}
									}
								
									.content-list-wrap-li:last-child {
										border-bottom: none;
									}
								}
								.content-list-qrcode{
									display: flex;
									align-items: center;
									flex-direction: column;
									padding: 40rpx;
									box-sizing: border-box;
									image{
										width: 300rpx;
										height: 300rpx;
									}
									text{
										margin-top: 20rpx;
										font-size: 28rpx;
										font-family: Source Han Sans CN;
										font-weight: 400;
										color: #333333;
									}
								}
							}
						}
					}
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
