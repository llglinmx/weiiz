<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}" v-if="opacityNum>0.2">
			<view class="box-head-nav" :style="{opacity:opacityNum}">
				<view class="box-head-nav-back" @click="Gback">
					<text class="iconfont iconfanhui" style="font-size: 34rpx;"></text>
				</view>
				<view class="box-head-nav-ico-all">
					<text class="iconfont iconguanzhu" style="font-size: 48rpx;margin-right: 20rpx;"></text>
					<text class="iconfont iconfenxiang" style="font-size: 48rpx;"></text>
				</view>
			</view>
		</view>
		<view class="box-head box-head-active" :style="{paddingTop:barHeight+'px'}" v-if="opacityNum<0.2">
			<view class="box-head-nav">
				<view class="box-head-nav-back"  @click="Gback">
					<text class="iconfont iconfanhui" style="font-size: 34rpx;"></text>
				</view>
				<view class="box-head-nav-ico-all">
					<text class="iconfont iconguanzhu" style="font-size: 48rpx;margin-right: 20rpx;"></text>
					<text class="iconfont iconfenxiang" style="font-size: 48rpx;"></text>
				</view>
			</view>
		</view>
		<view class="box-content">
			<view class="box-content-banner">
				<view class="box-content-banner-swiper">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
						:duration="duration" :circular="circular">
						<swiper-item v-for="(item,index) in bannerList" class="swiper-item">
							<image :src="item.bimg" mode="aspectFill" class="swiper-item-image"></image>
							<view class="swiper-item-cover"></view>
						</swiper-item>
					</swiper>
				</view>
			</view>
			<view class="box-content-main">
				<view class="box-content-main-info">
					<view class="box-content-main-info-title">水宜方SPA会所</view>
					<view class="box-content-main-info-address">
						<text class="icon-font iconfont icondingwei" style="font-size: 30rpx;color:#999"></text>
						<text class="address-text">鹭江道3号和平码头2号电梯4楼</text>
					</view>
					<view class="box-content-main-info-wrap">
						<view class="main-info-wrap-left">
							<score-max comment='80' />
							<view class="main-info-wrap-left-comment">
								评价(89)
							</view>
						</view>
						<view class="main-info-wrap-right">
							<text>查看商家及评价</text>
							<text class="icon-font iconfont icongengduo"
								style="color: #333;font-size: 24rpx;margin-top: 4rpx;"></text>
						</view>
					</view>
				</view>
				<menu-title msgTitle="门店照片" style="padding: 0 30rpx;box-sizing: border-box;" />
				<view class="box-content-main-image-all">
					<view class="box-content-main-image-all-item" v-for="item in 10">
						<image src="../../static/images/00002.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="box-content-main-tab">
					<view class="box-content-main-tab-li flex-center" :class="tabIndex==index?'tab-active':''"
						v-for="(item,index) in tabList" :key="index">{{item}}</view>
				</view>
				<view class="box-content-main-data-list">
					<view class="box-content-main-data-list-li" v-for="itme in 5">
						<view class="data-list-li-image">
							<image src="../../static/images/00002.png" mode="aspectFill"></image>
						</view>
						<view class="data-list-li-info">
							<view class="data-list-li-info-title">芳香泰式全身SPA</view>
							<view class="data-list-li-info-all">
								<view class="data-list-li-info-all-item">60分钟</view>
								<view class="data-list-li-info-all-item">缓解疲劳</view>
							</view>
							<view class="data-list-li-info-footer">
								<view class="data-list-li-info-footer-msg">
									<view class="list-li-info-footer-msg-price">￥798</view>
									<view class="list-li-info-footer-msg-text">已售28</view>
								</view>
								<view class="data-list-li-info-footer-btn flex-center">立即预约</view>
							</view>
						</view>
					</view>
				</view>
				<menu-title msgTitle="其他门店" style="padding: 0 30rpx;box-sizing: border-box;" />
				<view class="other-stores-list">
					<view class="other-stores-list-li" v-for="item in 5">
						<view class="other-stores-list-li-image">
							<image src="../../static/images/001.jpg" mode="aspectFill"></image>
						</view>
						<view class="other-stores-list-li-title">赫柏Hebe</view>
						<view class="other-stores-list-li-address">
							<text class="icon-font iconfont icondingwei" style="font-size: 28rpx;color:#FF967D;margin-top: 4rpx;"></text>
							<text class="address-text">金边路568号航空古地石广场</text>
						</view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import scoreMax from '../../components/score-max/score-max.vue'
	import menuTitle from "../../components/menu-title/menu-title.vue"
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 500,
				circular: true,
				bannerList: [],
				barHeight: 0, //顶部电量导航栏高度
				tabList: [
					'全部', '泰式按摩', '中式按摩', '足底按摩'
				],
				tabIndex: 0, //当前选中
				scollHeight: 0,
				scollTop: 0,
				opacityNum: 1, //初始opacity值
				positionTop: 0,
			};
		},
		components: {
			scoreMax,
			menuTitle
		},
		onReady() {
			// 获取顶部电量状态栏高度
			uni.getSystemInfo({
				success: (res) => {
					this.barHeight = res.statusBarHeight
				}
			});
			// 常用工具tabbar
			uni.createSelectorQuery().in(this).select(".box-content-main").boundingClientRect(data => {
				this.positionTop = data.top
			}).exec();
		},
		onLoad() {
			this.getIndexInfo()
		},
		methods: {

			// 获取首页信息
			getIndexInfo() {
				var vuedata = {

				}
				this.apiget('pc/index', vuedata).then(res => {
					if (res.status == 200) {
						this.bannerList = res.data.bannerList
					}
				});
			},

			// 返回
			Gback() {
				uni.navigateBack({
					delta: 1
				})
			},

			// 页面滚动事件
			onPageScroll(e) {
				this.scoreHeight = e.scrollTop
				if (this.scollTop > e.scrollTop) {
					// 向下滚动
					if (e.scrollTop <= 0) {
						this.opacityNum = 1
					} else {
						this.opacityNum += 0.01
					}
				} else {
					// 向上滚动
					if (e.scrollTop >= this.positionTop) {
						this.opacityNum = 0
					} else {
						this.opacityNum -= 0.01
					}
				}
				this.scollTop = e.scrollTop
			}
		}

	}
</script>

<style lang="scss" scoped>
	.box {
		position: relative;
		height: 100%;

		.back-color {
			background: #fff !important;
		}

		.box-head-active {
			background: #fff;
			color: #000 !important;
		}

		.box-head {
			position: fixed;
			top: 0;
			width: 100%;
			height: 88rpx;
			z-index: 9999;
			color: #fff;



			.box-head-nav {
				height: 100%;
				padding: 0 30rpx;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				justify-content: space-between;

				transition: 0.3s;


				.box-head-nav-back {}

				.box-head-nav-ico-all {
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
		}

		.box-content {
			position: relative;
			height: 100%;

			.box-content-banner {
				width: 100%;
				height: 488rpx;

				.box-content-banner-swiper {
					width: 100%;
					height: 100%;

					.swiper {
						width: 100%;
						height: 100%;

						.swiper-item {
							width: 100%;
							height: 100%;
							position: relative;

							.swiper-item-image {
								width: 100%;
								height: 100%;
							}

							.swiper-item-cover {
								position: absolute;
								top: 0;
								left: 0;
								width: 100%;
								height: 100%;
								background: rgba(0, 0, 0, 0.3);
							}
						}
					}
				}
			}

			.box-content-main {
				position: absolute;
				top: 440rpx;
				width: 100%;
				border-radius: 40rpx 40rpx 0 0;
				background: #fff;
				padding: 40rpx 0 0;
				box-sizing: border-box;

				.box-content-main-info {
					padding: 0 30rpx;
					box-sizing: border-box;

					.box-content-main-info-title {
						font-size: 40rpx;
						font-weight: 500;
						color: #000;
					}

					.box-content-main-info-address {
						display: flex;
						align-items: center;
						margin: 20rpx 0;

						.icon-font {}

						.address-text {
							margin-left: 10rpx;
							font-size: 28rpx;
							color: #999;
						}
					}

					.box-content-main-info-wrap {
						display: flex;
						align-items: center;
						justify-content: space-between;

						.main-info-wrap-left {
							display: flex;
							align-items: center;

							.main-info-wrap-left-comment {
								height: 30rpx;
								padding: 0 15rpx;
								margin-left: 15rpx;
								box-sizing: border-box;
								border-left: 1px solid #ededed;
								line-height: 32rpx;
								font-size: 28rpx;
								font-weight: 500;
								color: #000;
							}
						}

						.main-info-wrap-right {
							display: flex;
							align-items: center;
							font-size: 28rpx;
							color: #FF967D;
						}
					}
				}

				.box-content-main-image-all {
					display: flex;
					align-items: center;
					overflow-x: scroll;
					padding-left: 30rpx;
					box-sizing: border-box;

					.box-content-main-image-all-item {
						width: 180rpx;
						height: 180rpx;
						margin-right: 20rpx;

						image {
							width: 180rpx;
							height: 180rpx;
							border-radius: 10rpx;
						}
					}
				}

				.box-content-main-tab {
					display: flex;
					align-items: center;
					padding: 0 30rpx;
					margin: 40rpx 0 30rpx;
					box-sizing: border-box;
					overflow-x: scroll;

					.box-content-main-tab-li {
						padding: 14rpx 30rpx;
						box-sizing: border-box;
						border-radius: 30rpx;
						margin-right: 10rpx;
						color: #000;
						font-size: 28rpx;
						font-weight: 500;
						background: #F7F7F7;
					}

					.box-content-main-tab-li:last-child {
						margin-right: 0;
					}

					.tab-active {
						color: #FF8366 !important;
						background: #FFF2EF !important;
					}
				}

				.box-content-main-data-list {
					padding: 0 30rpx;
					box-sizing: border-box;
					border-bottom: 1rpx solid #ededed;

					.box-content-main-data-list-li {
						display: flex;
						align-items: center;
						margin-bottom: 30rpx;

						.data-list-li-image {
							width: 160rpx;
							height: 160rpx;

							image {
								width: 160rpx;
								height: 160rpx;
								border-radius: 10rpx;
							}
						}

						.data-list-li-info {
							margin-left: 20rpx;
							height: 160rpx;
							flex: 1;

							.data-list-li-info-title {}

							.data-list-li-info-all {
								display: flex;
								align-items: center;
								margin-top: 20rpx;

								.data-list-li-info-all-item:first-child {
									padding-left: 0;
									border-left: 0;
								}

								.data-list-li-info-all-item {
									height: 26rpx;
									padding: 0 14rpx;
									box-sizing: border-box;
									font-size: 26rpx;
									color: #999;
									border-left: 1rpx solid #ccc;
									line-height: 24rpx;
								}
							}

							.data-list-li-info-footer {
								display: flex;
								align-items: center;
								justify-content: space-between;
								margin-top: 20rpx;

								.data-list-li-info-footer-msg {
									display: flex;
									align-items: center;

									.list-li-info-footer-msg-price {
										font-size: 30rpx;
										color: #000;
									}

									.list-li-info-footer-msg-text {
										margin-left: 20rpx;
										font-size: 24rpx;
										color: #999;
									}
								}

								.data-list-li-info-footer-btn {
									width: 172rpx;
									height: 54rpx;
									background: #FF967D;
									border-radius: 28rpx;
									color: #fff;
									font-size: 28rpx;
								}
							}
						}
					}
				}

				.other-stores-list {
					display: flex;
					align-items: center;
					justify-content: space-between;
					flex-wrap: wrap;
					padding: 0 30rpx;
					box-sizing: border-box;

					.other-stores-list-li {
						width: 330rpx;
						margin-bottom: 30rpx;

						.other-stores-list-li-image {
							width: 100%;
							height: 235rpx;

							image {
								width: 100%;
								height: 235rpx;
								border-radius: 10rpx;
							}
						}

						.other-stores-list-li-title {
							margin-top: 20rpx;
							font-size: 30rpx;
							color: #000;
						}

						.other-stores-list-li-address {
							display: flex;
							align-items: center;

							.icon-font {}

							.address-text {
								margin-left: 10rpx;
								font-size: 24rpx;
								color: #999;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							}
						}
					}
				}
			}
		}

	}
</style>
