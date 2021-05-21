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
										<textarea v-model.trim="content" placeholder="请在此输入您要反馈的详细内容" />
										<text>{{content.length}}/100</text>
									</view>
									<view class="content-list-all-image">
										<view class="content-list-image-li" v-for="(item,index) in imageList"
											:key="index">
											<image :src="item" mode="aspectFill"></image>
											<text class="close flex-center" @click="delImage(index)">
												<text class="iconfont iconcuowu"
													style="color: #fff;font-size: 36rpx;"></text>
											</text>
										</view>
										<view class="content-list-image-li flex-center" @click="upPhoto"
											v-if="imageList.length<4">
											<text class="iconfont icontupian icon-font"
												style="color: #fff;font-size: 50rpx;font-weight: 500;"></text>
										</view>
									</view>
								</view>


								<view class="content-list-item-contact">
									<view class="list-item-title">
										联系方式：
									</view>
									<view class="list-item-input">
										<input type="number" v-model.trim="phone" placeholder="请输入您的联系方式" />
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
		<view class="box-footer" :class="defaultIndex!=0?'hidden-btn':''">
			<btnPink btnName="提交" @btnClick="submit"></btnPink>
		</view>
	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	import btnPink from "../../components/btnPink/btnPink.vue"
	import liuyunoTabs from "@/components/liuyuno-tabs/liuyuno-tabs.vue";
	import {
		pathToBase64,
		base64ToPath
	} from '../../js_sdk/mmmm-image-tools/index.js'
	import uploadImage from "../../js_sdk/oss/uploadOSS.js";

	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				defaultIndex: 0,
				tabs: ["我要反馈", "联系方式"],
				phone: '', //手机号
				content: '', //留言内容
				imageList: [],
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


			// 上传图片
			upPhoto() {
				uni.chooseImage({
					count: 4, //默认100
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					success: (res) => {

						res.tempFilePaths.forEach((item, index) => {
							const path = 'images/';
							// #ifdef H5
							let file = item;
							let suffix = res.tempFiles[index].name.split('.').pop();
							// #endif

							// #ifdef APP-PLUS
							let file = item;
							let suffix = res.tempFiles[index].path.split('.').pop();
							// #endif

							// 获取阿里云oss 信息
							this.apiget('app/oss/url', {}).then(ress => {
								if (ress.status == 200) {
									var obj = {
										accessid: ress.data.accessid,
										policy: ress.data.policy,
										signature: ress.data.signature,
									}
									// 上传图片
									uploadImage(obj, file, path, suffix, result => {
										this.imageList.push(result)
									});
								}
							});
						})
					}
				});
			},

			// 删除图片
			delImage(index) {
				this.imageList.splice(index, 1)
			},

			// tabs 点击
			tabClick(e) {
				this.defaultIndex = e
			},
			// 滑动切换列表
			tabChange(e) {
				this.$refs.boxTabs.tabToIndex(e.detail.current)
				this.defaultIndex = e.detail.current
			},

			// 提交按钮
			submit() {
				var vuedata = {
					status: 2,
					content: this.content,
					mobile: this.phone,
					bimg: JSON.stringify(this.imageList) //留言图片
				}

				if (this.content.length < 100) {
					if (this.content.length != '') {
						var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
						if (this.phone != '') {
							if (reg.test(this.phone)) {
								this.apipost('api/v1/members/voice_message/add', vuedata).then(res => {
									if (res.status == 200) {
										uni.showToast({
											title: "留言反馈成功",
											icon: "none"
										})
										setTimeout(function() {
											uni.navigateBack({
												delta: 1
											})
										}, 1000)
									}
								});
								return false
							}
							uni.showToast({
								title: "请输入正确的手机号",
								icon: "none"
							})
							return false
						}
						uni.showToast({
							title: "请输入手机号",
							icon: "none"
						})
						return false
					}
					uni.showToast({
						title: "请输入留言内容",
						icon: "none"
					})
					return false
				}
				uni.showToast({
					title: "超过最大字数限制 100",
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

			box-sizing: border-box;
			overflow-y: scroll;

			.box-content-tabs {}

			.box-content-wrap {
				height: calc(100% - 90rpx);
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

										text {
											position: absolute;
											right: 20rpx;
											bottom: 20rpx;
											font-size: 24rpx;
											color: #CCCCCC;
										}
									}

									.content-list-all-image {
										display: flex;
										margin-top: 30rpx;
										background: #fff;

										.content-list-image-li {
											position: relative;
											width: 120rpx;
											height: 120rpx;
											background: #EDEDED;
											margin-right: 30rpx;
											border-radius: 10rpx;

											image {
												width: 120rpx;
												height: 120rpx;
											}

											.close {
												position: absolute;
												width: 40rpx;
												height: 40rpx;
												top: -20rpx;
												right: -20rpx;
												border-radius: 50%;
												background: rgba(0, 0, 0, 0.5);
											}
										}

										.content-list-image-li:last-child {
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

								.content-list-qrcode {
									display: flex;
									align-items: center;
									flex-direction: column;
									padding: 40rpx;
									box-sizing: border-box;

									image {
										width: 300rpx;
										height: 300rpx;
									}

									text {
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
			transition: 0.5s;
			opacity: 1;
		}

		.hidden-btn {
			position: absolute;
			transform: scale(0.1);
			opacity: 0;
			z-index: -1;
		}
	}
</style>
