<template>
	<view class="index-box">
		<!-- 顶部 -->
		<view class="index-head" :style="{paddingTop:barHeight+'px'}">
			<view class="index-head-wrap">
				<view class="index-head-address">
					<text class="iconfont icondingwei1 icon-font" style="color: #fff;"></text>
					<text>厦门</text>
				</view>
				<view class="index-head-logo">
					<image src="../../static/images/logo.png" mode="widthFix"></image>
				</view>
				<view class="index-head-language flex-center" @click="clickLanguage">
					<text class="iconfont iconyuyan icon-font" style="color: #fff;font-size: 32rpx;"></text>
					<text>EN</text>
				</view>
			</view>

		</view>
		<view class="index-content">
			<!-- 搜索框 -->
			<view class="index-content-search">
				<view class="content-search-box">
					<view class="content-search-ico">
						<text class="iconfont iconsousuo1 icon-font"
							style="color: #999;font-size: 40rpx;font-weight: 500;"></text>
						<!-- <image src="../../static/images/search.png" mode=""></image> -->
					</view>
					<view class="content-search-text">
						<input type="text" placeholder="搜索SPA、商家" />
					</view>
					<view class="content-search-scan">
						<text class="iconfont iconsaoyisao icon-font"
							style="color: #999;font-size: 30rpx;font-weight: 500;"></text>
					</view>
				</view>
			</view>
			<!-- 轮播图 -->
			<view class="index-content-banner">
				<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
					:duration="duration" :circular="circular">
					<swiper-item v-for="(item,index) in bannerList">
						<image :src="item.bimg" mode="aspectFill" class="swiper-item"></image>
					</swiper-item>
				</swiper>
			</view>
			<!-- 公告 -->
			<view class="index-content-notice">
				<view class="index-content-notice-box">
					<view class="content-notice-wrap">
						<view class="content-notice-wrap-text">公告</view>
						<view class="content-notice-wrap-swiper">
							<swiper class="swiper" :autoplay="autoplay" :vertical="true" :interval="5000"
								:duration="duration" :circular="circular">
								<swiper-item v-for="(item,index) in noticeList">
									<text>{{item.title}}</text>
								</swiper-item>
							</swiper>
						</view>
					</view>
					<view class="content-notice-more">
						<text class="iconfont icongengduo icon-font"></text>
					</view>
				</view>
			</view>
			<!-- 列表 -->
			<view class="index-content-list">
				<view class="index-content-list-li" v-for="item in arrList" @click="moreClick(item.name)">
					<view class="content-list-li-ico">
						<image :src="item.icon" mode="aspectFill"></image>
					</view>
					<view class="content-list-li-text">{{item.name}}</view>
				</view>
			</view>
			<!-- 更多服务列表 -->
			<view class="more-services-box">
				<view class="more-services-title">更多服务</view>
				<view class="more-services-list">
					<view class="more-services-list-li" v-for="(item,index) in serviceList" @click="serviceClick(item)"
						 :style="{backgroundImage: 'url('+item.bg+')',backgroundSize: 'contain'}">
						<view class="more-services-list-li-title">{{item.title}}</view>
						<view class="more-services-list-li-text">{{item.text}}</view>
						<view class="more-list-li-btn">
							<text>点击签到</text>
							<text class="iconfont icongengduo icon-font"
								style="color: #fff;font-size: 18rpx;margin-top: 4rpx;"></text>
						</view>
					</view>
				</view>
			</view>

		</view>
		<!-- tabbar导航栏 -->
		<view class="index-footer">
			<Tabbar @tabbarClick="tabbarClick" :activeIndex="activeIndex"></Tabbar>
		</view>
		<!-- 选择语言弹出层 -->
		<uni-popup ref="popup" type="center" :maskClick="false">
			<view class="popup-box">
				<view class="popup-list-box">
					<view class="popup-title">
						选择语言
					</view>
					<view class="popup-list">
						<view class="popup-list-li" v-for="(item,index) in textList"
							@click="selectLanguage(item.id,index)" :class="item.default==1?'popup-list-li-active':''">
							<text>{{item.name}}</text>
							<text class="iconfont icondagou icon-font" style="color:#26BF82;font-size: 40rpx;"
								v-if="item.default==1"></text>
						</view>
					</view>
					<view class="popup-btn" @click="confirmBtn">确定</view>
				</view>
				<view class="popup-close flex-center" @click="closeLanguage">
					<text class="iconfont iconcuowu icon-font" style="color:#fff;font-size: 48rpx;"></text>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import Tabbar from "../../components/tabbar/tabbar.vue"
	import UniPopup from "../../components/uni-popup/uni-popup.vue"
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				circular: true,
				arrList: [],
				textList: ['中文', "英语", "俄语", "法语", "德语"],
				serviceList: [{
						title: '商城礼品卡',
						bg: '../../static/images/card-bg1.png',
						text: '领取精美礼品一份'
					},
					{
						title: '商城套餐卡',
						bg: '../../static/images/card-bg2.png',
						text: '领取精美套餐卡一份'
					},
					{
						title: '积分',
						bg: '../../static/images/card-bg3.png',
						text: ' 积分商城兑换好物'
					},
					{
						title: '折扣券',
						bg: '../../static/images/card-bg4.png',
						text: ' 领券下单更优惠'
					},
				],
				bannerList: [], //轮播图
				noticeList: [], //公告
				barHeight: 0, //顶部电量导航栏高度
				isLangShow: false,
				isPopup: false,
				selectIndex: 0, //当前选择的语言
				activeIndex: 0, //当前tabbar所在页面
			}
		},
		components: {
			Tabbar,
			UniPopup
		},
		onLoad() {
			this.languageList();
			this.getInfo()
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

			// 获取首页信息
			getInfo() {
				var vuedata = {

				}
				this.apiget('pc/index', vuedata).then(res => {
					if (res.status == 200) {
						this.bannerList = res.data.bannerList
						this.arrList = res.data.classList
						this.noticeList = res.data.noticeList
						console.log(res.datas)

					}
				});
			},



			// 打开切换语言
			clickLanguage() {
				this.$refs.popup.open()
				this.textList.forEach(item => {
					item.default = '-1'
				})
				this.textList[this.selectIndex].default = 1
			},
			// 选择语言
			selectLanguage(id, index) {
				this.textList.forEach(item => {
					item.default = '-1'
				})
				this.textList[index].default = 1
			},
			// 选择语言 关闭
			closeLanguage() {
				this.$refs.popup.close()
			},
			// 语言选择确定按钮
			confirmBtn() {
				this.$refs.popup.close()
			},

			// 请求语言列表
			languageList() {
				this.apiget('language', {}).then(res => {
					if (res.status == 200) {
						this.textList = res.data.lng.reverse()
						this.textList.forEach((item, index) => {
							if (item.default == 1) { //判断默认选中语言包
								this.selectIndex = index
							}
						})
					}
				});
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
			},

			// 更多服务列表点击
			serviceClick(item) {
				switch (item.title) {
					case "商城套餐卡":
						uni.navigateTo({
							url: "../../pagesIndex/packageCardList/packageCardList"
						})
						break;
					case "商城礼品卡":
						uni.navigateTo({
							url: "../../pagesIndex/giftCardShopping/giftCardShopping"
						})
						break;
				}
			},

			// tabbar点击
			tabbarClick(index) {
				this.activeIndex = index
				switch (index) {
					case 0: //首页
						break;
					case 1: //我的预约
						uni.redirectTo({
							url: "../subscribe/subscribe"
						})
						break;
					case 2: //地图
						uni.redirectTo({
							url: "../map/map"
						})
						break;
					case 3: //商城
						uni.redirectTo({
							url: "../mall/mall"
						})
						break;
					case 4: //我的
						uni.redirectTo({
							url: "../mine/mine"
						})
						break;
				}
			},

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

					.icon-font {
						font-size: 28rpx;
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
					overflow: hidden;

					swiper-item {

						.swiper-item {
							width: 100%;
							height: 300rpx;

							image {}
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
					align-items: center;
					justify-content: space-between;

					padding: 24rpx 20rpx;
					box-sizing: border-box;
					background: #F7F7F7;
					border-radius: 10rpx;

					.content-notice-wrap {
						display: flex;
						align-items: center;
						flex: 1;

						.content-notice-wrap-text {
							font-weight: bold;
							font-size: 32rpx;
							color: #FF967D;
						}

						.content-notice-wrap-swiper {
							flex: 1;
							height: 40rpx;

							.swiper {
								height: 100%;
								width: 100%;

								swiper-item {
									height: 100%;
									width: 100%;

									text {
										height: 100%;
										display: block;
										line-height: 40rpx;
										margin-left: 20rpx;
										font-size: 24rpx;
										font-family: Source Han Sans CN;
										font-weight: 400;
										color: #333333;
										overflow: hidden;
										text-overflow: ellipsis;
										white-space: nowrap;
									}
								}
							}
						}

					}

					.content-notice-more {
						width: 20rpx;

						.icon-font {
							font-weight: bold;
							color: #333;
							font-size: 28rpx;
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
							width: 72rpx;
							height: 72rpx;
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
						background: rgb(247, 247, 247) no-repeat;
						background-position: bottom;
						background-size: contain;

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
							justify-content: space-around;
							width: 122rpx;
							height: 36rpx;
							padding: 0 10rpx;
							box-sizing: border-box;
							margin-top: 16rpx;
							background: linear-gradient(90deg, #FFB5A4 0%, #FF714F 100%);
							border-radius: 30rpx;

							text {
								font-size: 18rpx;
								font-family: Source Han Sans CN;
								font-weight: 400;
								color: #FFFFFF;
							}

							.icon-font {}


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

						.icon-font {
							position: absolute;
							right: 30rpx;
							top: 0;
							bottom: 0;
							margin: auto;
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
