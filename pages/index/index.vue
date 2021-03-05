<template>
	<view class="index-box">
		<!-- 顶部 -->
		<view class="index-head" :style="{paddingTop:barHeight+'px'}">
			<view class="index-head-wrap">
				<view class="index-head-address">
					<image src="../../static/images/address.png" mode="aspectFill"></image>
					<text>厦门</text>
				</view>
				<view class="index-head-logo">
					<image src="../../static/images/logo.png" mode="widthFix"></image>
				</view>
				<view class="index-head-language flex-center" @click="clickLanguage">
					<image src="../../static/images/code.png" mode="aspectFill"></image>
					<text>EN</text>
				</view>
			</view>

		</view>
		<view class="index-content">
			<!-- 搜索框 -->
			<view class="index-content-search">
				<view class="content-search-box">
					<view class="content-search-ico">
						<image src="../../static/images/search.png" mode=""></image>
					</view>
					<view class="content-search-text">
						<input type="text" placeholder="搜索SPA、商家" />
					</view>
					<view class="content-search-scan">
						<image src="../../static/images/code.png" mode=""></image>
					</view>
				</view>
			</view>
			<!-- 轮播图 -->
			<view class="index-content-banner">
				<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
				 :circular="circular">
					<swiper-item v-for="(item,index) in imageList">
						<image :src="item.url" mode="" class="swiper-item"></image>
					</swiper-item>

				</swiper>
			</view>
			<!-- 公告 -->
			<view class="index-content-notice">
				<view class="index-content-notice-box">
					<view class="content-notice-wrap">
						<image src="" mode=""></image>
						<text>新时代好商机，你来不来？海量商家入驻</text>
					</view>
					<view class="content-notice-more">
						<image src="../../static/images/more.png" mode="aspectFill"></image>
					</view>
				</view>
			</view>
			<!-- 列表 -->
			<view class="index-content-list">
				<view class="index-content-list-li" v-for="item in arrList" @click="moreClick(item)">
					<view class="content-list-li-ico">
						<image src="../../static/images/code.png" mode=""></image>
					</view>
					<view class="content-list-li-text">{{item}}</view>
				</view>
			</view>
			<!-- 更多服务列表 -->
			<view class="more-services-box">
				<view class="more-services-title">更多服务</view>
				<view class="more-services-list">
					<view class="more-services-list-li" v-for="item in arrList">
						<view class="more-services-list-li-title">积分</view>
						<view class="more-services-list-li-text">
							每天签到领积分
						</view>
						<view class="more-list-li-btn">
							<text>点击签到</text>
							<image src="../../static/images/more.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>

		</view>
		<!-- tabbar导航栏 -->
		<view class="index-footer">
			<Tabbar></Tabbar>
		</view>
		<!-- 选择语言弹出层 -->
		<uni-popup ref="popup" type="center" :maskClick="false">
			<view class="popup-box">
				<view class="popup-list-box">
					<view class="popup-title">
						选择语言
					</view>
					<view class="popup-list">
						<view class="popup-list-li" v-for="(item,index) in textList" @click="selectLanguage(index)" :class="selectIndex==index?'popup-list-li-active':''">
							<text>{{item}}</text>
							<image src="../../static/images/code.png" mode="" v-if="selectIndex==index"></image>
						</view>
					</view>
					<view class="popup-btn" @click="confirmBtn">
						确定
					</view>
				</view>
				<view class="popup-close" @click="closeLanguage"></view>
			</view>

		</uni-popup>
	</view>
</template>

<script>
	import Tabbar from "../../components/tabbar/tabbar.vue"
	import UniPopup from "../../uni_modules/uni-popup/components/uni-popup/uni-popup.vue"
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				circular: true,
				arrList: ['商城', "按摩", "教程", "技师", "活动", '快速预约', "礼品卡", "买单", "领券中心", "拼团"],
				textList: ['中文', "英语", "俄语", "法语", "德语"],
				imageList: [{
						url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1212%2F10%2Fc1%2F16491670_1355126816487.jpg&refer=http%3A%2F%2Fimg.pconline.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617169230&t=15c6d87792f9fe60a66efcc066e816d5",
						link: ""
					},
					{
						url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2Fattachments2%2F201304%2F18%2F001339jv88x0qs06vo3qq6.jpg&refer=http%3A%2F%2Fattachments.gfan.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617169230&t=cee66d4129e14994e31b7f0f370b0c39",
						link: ""
					},
					{
						url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201312%2F31%2F111859myvyiivetyftfz2n.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617169230&t=91b7765aa0a2234b14fc7dbf31cc2bf8",
						link: ""
					}
				],
				barHeight: 0, //顶部电量导航栏高度
				isLangShow: false,
				isPopup: false,
				selectIndex: 0,
			}
		},
		components: {
			Tabbar,
			UniPopup
		},
		onLoad() {

		},
		onReady() {
			// 获取顶部电量状态栏高度
			uni.getSystemInfo({
				success: (res) => {
					console.log(res)
					this.barHeight = res.statusBarHeight
				}
			});
		},
		methods: {
			// 打开切换语言
			clickLanguage() {
				this.$refs.popup.open()
			},
			// 选择语言
			selectLanguage(index) {
				this.selectIndex = index
			},
			// 选择语言 关闭
			closeLanguage() {
				this.$refs.popup.close()
			},
			// 语言选择确定按钮
			confirmBtn() {
				this.$refs.popup.close()
			},
			// 列表点击
			moreClick(item) {
				switch (item) {
					case "领券中心":
						uni.navigateTo({
							url: "../../pagesCommon/collection-center/collection-center"
						})
						break;
						case "按摩":
							uni.navigateTo({
								url: "../../pagesIndex/massageBusiness/massageBusiness"
							})
							break;
					default:
						break;
				}
			}

		}
	}
</script>

<style scoped lang="scss">
	.index-box {
		display: flex;
		flex-direction: column;
		height: 100%;

		.index-head {
			background-color: #FF967D;

			.index-head-wrap {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 26rpx 40rpx;
				box-sizing: border-box;
				background-color: #FF967D;
				font-size: 28rpx;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #FFFFFF;

				.index-head-address {
					height: 50rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;

					image {
						width: 20rpx;
						height: 26rpx;
					}

					text {
						margin-left: 15rpx;

					}
				}

				.index-head-logo {
					width: 135rpx;
					height: 44rpx;

					image {
						width: 100%;
						height: 100%;
					}
				}

				.index-head-language {
					image {
						width: 27rpx;
						height: 27rpx;
					}

					text {
						margin-left: 10rpx;
					}
				}

			}
		}

		.index-content {
			height: 100%;
			flex: 1;

			.index-content-search {
				box-sizing: border-box;
				margin: 30rpx 0;
				padding: 0 40rpx;

				.content-search-box {
					display: flex;
					align-items: center;
					justify-content: space-between;
					height: 88rpx;
					background: #F7F7F7;
					border-radius: 15rpx;

					.content-search-ico {
						display: flex;
						align-items: center;
						justify-content: center;
						width: 80rpx;
						height: 80rpx;

						image {
							width: 30rpx;
							height: 30rpx;
						}
					}

					.content-search-text {
						flex: 1;

						input {
							width: 100%;
							font-size: 28rpx;
							font-family: Source Han Sans CN;
							font-weight: 400;
						}
					}

					.content-search-scan {
						display: flex;
						align-items: center;
						justify-content: center;
						width: 80rpx;
						height: 80rpx;

						image {
							width: 30rpx;
							height: 30rpx;
						}
					}
				}

			}

			.index-content-banner {
				height: 300rpx;
				padding: 0 30rpx;
				box-sizing: border-box;
				border-radius: 15rpx;

				swiper {
					border-radius: 15rpx;

					swiper-item {
						border-radius: 15rpx;

						.swiper-item {
							width: 100%;
							height: 300rpx;
							border-radius: 15rpx;
						}
					}

				}
			}

			.index-content-notice {
				margin: 30rpx auto;
				padding: 0 40rpx;
				box-sizing: border-box;

				.index-content-notice-box {
					display: flex;
					justify-content: space-between;

					padding: 24rpx 20rpx;
					box-sizing: border-box;
					background: #F7F7F7;
					border-radius: 10rpx;

					.content-notice-wrap {
						image {
							width: 58rpx;
							height: 24rpx;
						}

						text {
							margin-left: 20rpx;
							font-size: 24rpx;
							font-family: Source Han Sans CN;
							font-weight: 400;
							color: #333333;
						}
					}

					.content-notice-more {
						width: 12rpx;
						height: 20rpx;

						image {
							width: 12rpx;
							height: 20rpx;
						}
					}
				}
			}

			.index-content-list {
				padding-left: 30rpx;
				box-sizing: border-box;
				display: flex;
				overflow-x: scroll;
				margin-bottom: 30rpx;

				.index-content-list-li {
					display: flex;
					flex-direction: column;
					align-items: center;
					margin-right: 32rpx;

					.content-list-li-ico {
						display: flex;
						align-items: center;
						justify-content: center;
						width: 128rpx;
						height: 128rpx;
						background: #FFF3F0;
						border-radius: 20rpx;

						image {
							width: 51rpx;
							height: 51rpx;
						}
					}

					.content-list-li-text {
						margin-top: 20rpx;
						font-size: 26rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #333333;
					}
				}
			}

			// 更多服务
			.more-services-box {
				padding-top: 30rpx;

				.more-services-title {
					padding-left: 30rpx;
					box-sizing: border-box;
					font-size: 36rpx;
					font-family: Source Han Sans CN;
					font-weight: 500;
					color: #000000;
				}

				.more-services-list {
					width: 100%;
					display: flex;
					display: -webkit-box;
					margin-top: 30rpx;
					padding-left: 30rpx;
					padding-right: 30rpx;
					box-sizing: border-box;
					overflow-x: scroll;

					.more-services-list-li {
						width: 312rpx;
						height: 180rpx;
						padding: 30rpx 24rpx;
						margin-right: 30rpx;
						border-radius: 10rpx;
						box-sizing: border-box;
						background: rgb(247, 247, 247);

						.more-services-list-li-title {
							font-size: 26rpx;
							font-family: Source Han Sans CN;
							font-weight: 500;
							color: #000000;
						}

						.more-services-list-li-text {
							margin-top: 10rpx;
							font-size: 20rpx;
							font-family: Source Han Sans CN;
							font-weight: 400;
							color: #333333;
						}

						.more-list-li-btn {
							display: flex;
							align-items: center;
							justify-content: center;
							width: 122rpx;
							height: 36rpx;
							margin-top: 16rpx;
							background: linear-gradient(90deg, #FFB5A4 0%, #FF714F 100%);
							border-radius: 30rpx;

							text {
								font-size: 18rpx;
								font-family: Source Han Sans CN;
								font-weight: 400;
								color: #FFFFFF;
							}

							image {
								width: 6rpx;
								height: 10rpx;
							}
						}
					}
				}
			}

		}

		.popup-box {
			position: relative;
			width: 570rpx;
			height: 704rpx;
			padding: 0 60rpx;
			box-sizing: border-box;
			background: #fff;
			border-radius: 20rpx;

			.popup-list-box {
				height: 100%;
				display: flex;
				flex-direction: column;

				.popup-title {
					padding: 40rpx 0;
					font-size: 36rpx;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color: #000000;
					text-align: center;
				}

				.popup-list {
					flex: 1;
					margin-bottom: 40rpx;
					overflow-y: scroll;

					.popup-list-li {
						position: relative;
						display: flex;
						align-items: center;
						justify-content: center;
						height: 80rpx;
						margin-bottom: 30rpx;
						background: #F7F7F7;
						transition: 0.2s;

						text {}

						image {
							position: absolute;
							top: 0;
							bottom: 0;
							right: 30rpx;
							margin: auto;
							width: 32rpx;
							height: 32rpx;
						}
					}

					.popup-list-li-active {
						color: #FF6F4D !important;
						background: #FFEBE6 !important;
					}

					.popup-list-li:last-child {
						margin-bottom: 0;
					}
				}

				.popup-btn {
					margin-bottom: 50rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					height: 88rpx;
					background: #FF967D;
					border-radius: 15rpx;
					color: #fff;
				}
			}

			.popup-close {
				position: absolute;
				top: -28rpx;
				right: -28rpx;
				width: 56rpx;
				height: 56rpx;
				border-radius: 50%;
				background: #FF967D;
			}
		}
	}
</style>
