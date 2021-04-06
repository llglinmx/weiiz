<template>
	<view class="mine-box">
		<view class="mine-head" :style="{paddingTop:barHeight+'px'}">
			<!-- 顶部设置 与消息 -->
			<view class="mine-head-top">
				<view class="head-top-msg" @click="systemMsg">
					<text class="iconfont iconxiaoxi icon-font"
						style="color: #fff;font-size: 52rpx;font-weight: 500;"></text>
					<!-- <image src="../../static/images/msg.png" mode=""></image> -->
				</view>
				<view class="head-top-set" @click="setClick">
					<text class="iconfont iconshezhi icon-font"
						style="color: #fff;font-size: 52rpx;font-weight: 500;"></text>
					<!-- <image src="../../static/images/set-icon.png" mode=""></image> -->
				</view>
			</view>
			<!-- 个人信息 -->
			<view class="mine-head-info">
				<view class="mine-head-info-left">
					<view class="head-info-left-box">
						<view class="head-info-box-image flex-center" @click="userInfoClick">
							<image :src="info.avatar!=''?info.avatar:'../../static/images/userImage.png'" mode="aspectFill"></image>
						</view>
						<view class="head-info-right">
							<!-- 昵称 -->
							<view class="head-info-nickname">{{info.nickname}}</view>
							<!-- 进度条 -->
							<view class="head-info-seep">
								<view class="head-info-progress-bar"></view>
							</view>
							<!-- 会员等级 -->
							<view class="head-info-member">
								<view class="head-info-member-ico">
									<image src="../../static/images/grade-yellow.png" mode="aspectFill"></image>
								</view>
								<view class="head-info-member-text">{{info.level_name}}</view>
							</view>
						</view>
					</view>
				</view>
				<view class="mine-head-info-right flex-center" @click="scanCode">
					<view class="head-info-right-scan flex-center">
						<text class="iconfont iconsaoyisao icon-font"
							style="color: #fff;font-size: 52rpx;font-weight: 500;"></text>
						<!-- <image src="../../static/images/scan-code.png" mode="aspectFill"></image> -->
					</view>
					<view class="head-info-scan-text">
						扫一扫
					</view>
				</view>
			</view>
			<!-- 列表 -->
			<view class="mine-head-list">
				<view class="mine-head-list-li flex-center" v-for="(item,index) in list" :key="index">
					<view class="head-list-li-text">
						{{item.number}}
					</view>
					<view class="head-list-li-txt-name">
						{{item.text}}
					</view>
				</view>
			</view>
		</view>
		<view class="mine-content">
			<view class="mine-content-state-list">
				<state-list :menuList="stateList" @listState="listClick"></state-list>
			</view>
			<view class="mine-content-integral-box">
				<view class="mine-content-integral-box-top" @click="pointsMall">
					<view class="mine-integral-title-list">
						<view class="integral-title-list-icon flex-center">
							<text class="icon-font iconfont iconjifen1" style="font-size: 32rpx;color: #FF6F4D;"></text>
						</view>
						<view class="integral-title-list-text">
							积分商城
						</view>
					</view>
					<view class="mine-integral-title-more">
						<text class="iconfont icongengduo icon-font"
							style="color: #999;font-size: 24rpx;font-weight: 500;"></text>
						<!-- <image src="../../static/images/more.png" mode="widthFix"></image> -->
					</view>
				</view>
				<view class="mine-content-goods-list">
					<view class="mine-content-goods-list-box">
						<view class="mine-content-goods-list-li" v-for="(item,index) in pointsList" :key="item.id">
							<view class="content-goods-list-image">
								<image :src="item.simg" mode=""></image>
							</view>
							<view class="content-goods-list-title">
								{{item.name}}
							</view>
							<view class="content-goods-list-number">
								{{item.score}}积分
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="mine-content-commonly">
				<view class="mine-content-commonly-top">
					<view class="mine-content-commonly-top-box">
						<view class="content-commonly-top-icon flex-center">
							<image src="../../static/images/tool.jpg" mode="aspectFill"></image>
						</view>
						<view class="content-commonly-title">
							常用工具
						</view>
					</view>
				</view>
				<view class="mine-content-commonly-list">
					<swiper class="swiper" :current="idx" @change="swiperChange">
						<swiper-item v-for="(item,index) in toolAllList" class="swiper-item">
							<view class="content-commonly-list-li" v-for="(j,idx) in item.toolList"
								@click="menuList(j)">
								<view class="content-commonly-list-li-ico">
									<image :src="j.image" mode=""></image>
								</view>
								<view class="content-commonly-list-li-title">
									{{j.title}}
								</view>
							</view>
						</swiper-item>

					</swiper>

				</view>
				<view class="content-commonly-bar barWidth">
					<view class="content-commonly-bar-active" :style="{width:toolBarWidth+'px'}"></view>
				</view>
			</view>
		</view>
		<!-- tabbar导航栏 -->
		<view class="mine-footer">
			<Tabbar @tabbarClick="tabbarClick" :activeIndex="activeIndex"></Tabbar>
		</view>
	</view>
</template>

<script>
	import Tabbar from "../../components/tabbar/tabbar.vue"
	import StateList from "../../components/state-list/state-list.vue"
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				idx: 0,
				toolBarWidth: 0, //进度条长度
				parWidth: 0, // 进度条父级长度度
				activeIndex: 4, //当前tabbar所在页面
				info: {
					nickname:'',
					avatar:'../../static/images/userImage.png',
					level_name:''
				},
				list: [{
						number: "0.00",
						text: "余额/元",
					},
					{
						number: '0',
						text: "积分",
					},

					{
						number: "0",
						text: "卡券",
					}, {
						number: "0",
						text: "关注",
					}
				],
				pointsList: [],
				stateList: [{
						image: "../../static/images/icon-1.jpg",
						title: "待付款"
					},
					{
						image: "../../static/images/icon-2.jpg",
						title: "待核销"
					},
					{
						image: "../../static/images/icon-3.jpg",
						title: "已核销"
					},
					{
						image: "../../static/images/icon-4.jpg",
						title: "退款/售后"
					},
					{
						image: "../../static/images/icon-5.jpg",
						title: "全部订单"
					}
				],
				goodsList: [{
						image: "../../static/images/1.png",
						title: "燕麦奶茶",
						integralNumber: 20
					},
					{
						image: "../../static/images/3.png",
						title: "燕麦奶茶",
						integralNumber: 30
					},
					{
						image: "../../static/images/1.png",
						title: "燕麦奶茶",
						integralNumber: 20
					},
					{
						image: "../../static/images/2.png",
						title: "燕麦奶茶",
						integralNumber: 80
					},
					{
						image: "../../static/images/1.png",
						title: "燕麦奶茶",
						integralNumber: 20
					},
					{
						image: "../../static/images/2.png",
						title: "燕麦奶茶",
						integralNumber: 60
					},
					{
						image: "../../static/images/3.png",
						title: "燕麦奶茶",
						integralNumber: 30
					}
				],
				toolAllList: [{
						toolList: [{
							image: "../../static/images/money.jpg",
							title: "收货地址"
						}, {
							image: "../../static/images/gift.jpg",
							title: "关注列表"
						}, {
							image: "../../static/images/money.jpg",
							title: "我的余额"
						}, {
							image: "../../static/images/gift.jpg",
							title: "我要入驻"
						}, {
							image: "../../static/images/money.jpg",
							title: "优惠券"
						}, {
							image: "../../static/images/money.jpg",
							title: "套餐卡"
						}, {
							image: "../../static/images/gift.jpg",
							title: "礼物卡"
						}, {
							image: "../../static/images/money.jpg",
							title: "浏览记录"
						}, {
							image: "../../static/images/gift.jpg",
							title: "礼物卡"
						}, {
							image: "../../static/images/money.jpg",
							title: "套餐卡"
						}]
					},
					{
						toolList: [{
							image: "../../static/images/money.jpg",
							title: "套餐卡"
						}, {
							image: "../../static/images/gift.jpg",
							title: "礼物卡"
						}, {
							image: "../../static/images/money.jpg",
							title: "套餐卡"
						}, {
							image: "../../static/images/gift.jpg",
							title: "礼物卡"
						}, {
							image: "../../static/images/money.jpg",
							title: "套餐卡"
						}, {
							image: "../../static/images/money.jpg",
							title: "套餐卡"
						}, {
							image: "../../static/images/gift.jpg",
							title: "礼物卡"
						}, {
							image: "../../static/images/money.jpg",
							title: "套餐卡"
						}, {
							image: "../../static/images/gift.jpg",
							title: "礼物卡"
						}, {
							image: "../../static/images/money.jpg",
							title: "套餐卡"
						}]
					},
					{
						toolList: [{
							image: "../../static/images/money.jpg",
							title: "套餐卡"
						}, {
							image: "../../static/images/gift.jpg",
							title: "礼物卡"
						}, {
							image: "../../static/images/money.jpg",
							title: "套餐卡"
						}, {
							image: "../../static/images/gift.jpg",
							title: "礼物卡"
						}, {
							image: "../../static/images/money.jpg",
							title: "套餐卡"
						}, {
							image: "../../static/images/money.jpg",
							title: "套餐卡"
						}, {
							image: "../../static/images/gift.jpg",
							title: "礼物卡"
						}, {
							image: "../../static/images/money.jpg",
							title: "套餐卡"
						}, {
							image: "../../static/images/gift.jpg",
							title: "礼物卡"
						}, {
							image: "../../static/images/money.jpg",
							title: "套餐卡"
						}]
					},
					{
						toolList: [{
							image: "../../static/images/money.jpg",
							title: "套餐卡"
						}, {
							image: "../../static/images/gift.jpg",
							title: "礼物卡"
						}, {
							image: "../../static/images/money.jpg",
							title: "套餐卡"
						}, {
							image: "../../static/images/gift.jpg",
							title: "礼物卡"
						}, {
							image: "../../static/images/money.jpg",
							title: "套餐卡"
						}, {
							image: "../../static/images/money.jpg",
							title: "套餐卡"
						}, {
							image: "../../static/images/gift.jpg",
							title: "礼物卡"
						}, {
							image: "../../static/images/money.jpg",
							title: "套餐卡"
						}, {
							image: "../../static/images/gift.jpg",
							title: "礼物卡"
						}, {
							image: "../../static/images/money.jpg",
							title: "套餐卡"
						}]
					}
				]
			}
		},
		components: {
			Tabbar,
			StateList
		},
		onLoad() {
			this.getPointsMall()
		},
		onShow() {
			this.getInfo()
		},
		onReady() {
			// 获取顶部电量状态栏高度
			uni.getSystemInfo({
				success: (res) => {
					this.barHeight = res.statusBarHeight
				}
			});

			// 常用工具tabbar
			uni.createSelectorQuery().in(this).select(".barWidth").boundingClientRect(data => {
				this.parWidth = data.width
				this.toolBarWidth = data.width / this.toolAllList.length
			}).exec();
		},
		methods: {
			// 获取个人信息
			getInfo() {
				let vuedata = {}
				this.apiget('api/v1/members/member_info', vuedata).then(res => {
					if (res.status == 200) {
						this.info = res.data
						this.list[0].number = res.data.money //余额
						this.list[1].number = res.data.score //积分
						this.list[2].number = res.data.coupon_num //卡券
						this.list[3].number = res.data.all_collection //关注
						// 更新余额
						this.$store.commit("upBalance", res.data.money)

						// 保存用户信息
						this.$store.commit('upUserInfo', res.data)

					}
				});
			},


			// 常用工具滑动
			swiperChange(e) {
				this.toolBarWidth = (e.detail.current + 1) * (this.parWidth / this.toolAllList.length)
			},
			// 设置按钮点击
			setClick() {
				uni.navigateTo({
					url: "../../pagesMine/set/set"
				})
			},
			// 系统消息
			systemMsg() {
				uni.navigateTo({
					url: "../../pagesMine/systemMessage/systemMessage"
				})
			},

			// 头像区域
			userInfoClick() {
				uni.navigateTo({
					url: "../../pagesMineTwo/personalInfo/personalInfo"
				})
			},

			// 扫一扫
			scanCode() {
				// 允许从相机和相册扫码
				uni.scanCode({
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					}
				});
			},

			// 订单状态点击
			listClick(index) {
				// 0全部订单 4退款/售后  3已核销 2待核销  1待付款
				switch (index) {

					case 0:
						uni.navigateTo({
							url: "../../pagesMineTwo/allOrder/allOrder?listIndex=1"
						})
						break;
					case 1:
						uni.navigateTo({
							url: "../../pagesMineTwo/allOrder/allOrder?listIndex=2"
						})
						break;
					case 2:
						uni.navigateTo({
							url: "../../pagesMineTwo/allOrder/allOrder?listIndex=3"
						})
						break;
					case 3:
						uni.navigateTo({
							url: "../../pagesMineTwo/allOrder/allOrder?listIndex=4"
						})
						break;
					case 4:
						uni.navigateTo({
							url: "../../pagesMineTwo/allOrder/allOrder?listIndex=0"
						})
						break;
				}

			},

			// 点击进入积分商城
			pointsMall() {
				uni.navigateTo({
					url: "../../pagesMine/pointsMall/pointsMall"
				})
			},

			getPointsMall() {
				this.apiget('api/v1/members/points_mall', {}).then(res => {
					if (res.status == 200) {
						this.pointsList = res.data.data
					}
				});
			},


			// 常用工具
			menuList(type) {

				switch (type.title) {
					case "收货地址":
						// 收货地址
						uni.navigateTo({
							url: "../../pagesMine/receivingAddress/receivingAddress"
						})
						break;
					case "关注列表":
						// 关注列表
						uni.navigateTo({
							url: "../../pagesMine/followList/followList"
						})
						break;
					case "我的余额":
						// 我的余额
						uni.navigateTo({
							url: "../../pagesMine/myBalance/myBalance"
						})
						break;
					case "我要入驻":
						// 我要入驻
						uni.navigateTo({
							url: "../../pagesMine/settleIn/settleIn"
						})
						break;
					case "优惠券":
						// 优惠券
						uni.navigateTo({
							url: "../../pagesCommon/allCoupon/allCoupon"
						})
						break;
					case "套餐卡":
						// 套餐卡
						uni.navigateTo({
							url: "../../pagesMine/packageCard/packageCard"
						})
						break;
					case "礼物卡":
						// 礼物卡
						uni.navigateTo({
							url: "../../pagesMine/giftCard/giftCard"
						})
						break;
					case "浏览记录":
						// 浏览记录
						uni.navigateTo({
							url: "../../pagesMine/browsingHistory/browsingHistory"
						})
						break;

				}

			},
			// tabbar点击
			tabbarClick(index) {
				this.activeIndex = index
				switch (index) {
					case 0: //首页
						uni.reLaunch({
							url: '../index/index'
						})
						break;
					case 1: //我的预约
						uni.reLaunch({
							url: '../subscribe/subscribe'
						})
						break;
					case 2: //地图
						uni.reLaunch({
							url: "../map/map"
						})
						break;
					case 3: //商城
						uni.reLaunch({
							url: "../mall/mall"
						})
						break;
					case 4: //我的

						break;
				}
			},

		}
	}
</script>

<style scoped lang="scss">
	.mine-box {
		height: 100%;
		display: flex;
		flex-direction: column;
		background: #F7F7F7;

		.mine-head {
			background: #FF967D;

			.mine-head-top {
				display: flex;
				align-items: center;
				justify-content: flex-end;
				padding: 30rpx;
				box-sizing: border-box;

				.head-top-msg {
					width: 40rpx;
					height: 40rpx;
					display: flex;
					align-items: center;
					justify-content: center;

					image {
						width: 40rpx;
						height: 40rpx;
					}
				}

				.head-top-set {
					display: flex;
					align-items: center;
					justify-content: center;
					margin-left: 22rpx;
					width: 52rpx;
					height: 52rpx;

					image {
						width: 42rpx;
						height: 42rpx;
					}
				}
			}

			.mine-head-info {
				display: flex;
				justify-content: space-between;
				padding: 20rpx 40rpx;
				box-sizing: border-box;
				color: #fff;

				.mine-head-info-left {
					.head-info-left-box {
						display: flex;
						align-items: center;
						justify-content: space-between;

						.head-info-box-image {
							width: 128rpx;
							height: 128rpx;
							background: rgba(255, 255, 255, .2);
							border-radius: 50%;
							overflow: hidden;

							image {
								width: 112rpx;
								height: 112rpx;
								border-radius: 50%;
							}
						}

						.head-info-right {
							margin-left: 20rpx;


							.head-info-nickname {
								font-size: 36rpx;
								font-family: Source Han Sans CN;
								font-weight: 400;
							}

							.head-info-seep {
								width: 180rpx;
								height: 6rpx;
								margin: 20rpx 0 10rpx;
								border-radius: 3rpx;
								background: rgba(255, 255, 255, 0.3);

								.head-info-progress-bar {
									width: 100rpx;
									height: 100%;
									border-radius: 3rpx;
									background: #fff;
								}
							}

							.head-info-member {
								display: flex;
								align-items: center;
								justify-content: center;
								width: 118rpx;
								height: 32rpx;
								border-radius: 22rpx;
								background: rgba(255, 255, 255, .9);

								.head-info-member-ico {
									display: flex;
									align-items: center;
									width: 23rpx;
									height: 18rpx;
									margin-right: 5rpx;

									image {
										width: 100%;
										height: 100%;
									}
								}

								.head-info-member-text {
									font-size: 18rpx;
									font-family: Source Han Sans CN;
									font-weight: 400;
									color: #FF967D;
								}
							}
						}
					}
				}

				.mine-head-info-right {
					display: flex;
					flex-direction: column;
					align-items: center;

					.head-info-right-scan {
						width: 52rpx;
						height: 52rpx;

						image {
							width: 48rpx;
							height: 48rpx;
						}
					}

					.head-info-scan-text {
						font-size: 24rpx;
					}
				}
			}

			.mine-head-list {
				display: flex;
				justify-content: space-around;
				padding: 25rpx 0;
				color: #FFFFFF;

				.mine-head-list-li {
					display: flex;
					flex-direction: column;

					.head-list-li-text {
						font-size: 34rpx;
						font-family: Source Han Sans CN;
						font-weight: bold;
					}

					.head-list-li-txt-name {
						font-size: 26rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
					}
				}
			}
		}

		.mine-content {
			flex: 1;

			.mine-content-state-list {
				margin: 20rpx 0;
			}

			.mine-content-integral-box {
				background: #fff;
				padding-bottom: 30rpx;

				.mine-content-integral-box-top {
					display: flex;
					justify-content: space-between;
					padding: 20rpx 40rpx;
					box-sizing: border-box;

					.mine-integral-title-list {
						display: flex;
						align-items: center;
						justify-content: space-between;

						.integral-title-list-icon {
							width: 48rpx;
							height: 48rpx;
							background: #FFEBE6;
							border-radius: 50%;

							image {
								width: 28rpx;
								height: 28rpx;
							}
						}

						.integral-title-list-text {
							margin-left: 12rpx;
							font-size: 32rpx;
							font-family: Source Han Sans CN;
							font-weight: 400;
							color: #333333;
						}
					}

					.mine-integral-title-more {
						display: flex;
						align-items: center;
					}
				}

				.mine-content-goods-list {

					// padding-left: 20rpx;
					.mine-content-goods-list-box {
						display: flex;
						padding-left: 40rpx;
						overflow-x: scroll;

						.mine-content-goods-list-li {
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							margin-right: 20rpx;

							.content-goods-list-image {
								width: 144rpx;
								height: 144rpx;

								image {
									width: 144rpx;
									height: 144rpx;
								}
							}

							.content-goods-list-title {
								font-size: 24rpx;
								font-family: Source Han Sans CN;
								font-weight: 400;
								color: #333333;
								line-height: 50rpx;
							}

							.content-goods-list-number {
								font-size: 24rpx;
								font-family: Source Han Sans CN;
								font-weight: 400;
								color: #FF8366;
							}
						}
					}
				}
			}

			.mine-content-commonly {
				position: relative;
				padding: 20rpx 40rpx 40rpx;
				background: #fff;
				margin-top: 20rpx;

				.mine-content-commonly-top {

					.mine-content-commonly-top-box {
						display: flex;
						align-items: center;

						.content-commonly-top-icon {
							width: 48rpx;
							height: 48rpx;
							border-radius: 50%;
							background: #FFEBE6;

							image {
								width: 26rpx;
								height: 26rpx;
							}
						}

						.content-commonly-title {
							margin-left: 12rpx;
							font-size: 32rpx;
							font-family: Source Han Sans CN;
							font-weight: 400;
							color: #333333;
						}
					}

				}

				.mine-content-commonly-list {
					margin-top: 30rpx;

					swiper {
						height: 300rpx;

						.swiper-item {
							display: flex;
							align-items: center;
							justify-content: space-around;
							flex-wrap: wrap;

							.content-commonly-list-li:nth-child(5) {
								margin-right: 0;
							}

							.content-commonly-list-li:nth-child(10) {
								margin-right: 0;
							}

							.content-commonly-list-li {
								display: flex;
								justify-content: center;
								flex-direction: column;
								align-items: center;
								margin-right: 40rpx;
								width: 102rpx;

								.content-commonly-list-li-ico {
									width: 76rpx;
									height: 76rpx;

									image {
										width: 76rpx;
										height: 76rpx;
									}
								}

								.content-commonly-list-li-title {
									margin-top: 16rpx;
									font-size: 24rpx;
									font-family: Source Han Sans CN;
									font-weight: 400;
									color: #666666;
								}
							}
						}
					}
				}

				.content-commonly-bar {
					position: absolute;
					left: 0;
					right: 0;
					bottom: 20rpx;
					margin: auto;
					width: 90rpx;
					height: 6rpx;
					border-radius: 3rpx;
					background: #EDEDED;

					.content-commonly-bar-active {
						width: 0;
						height: 100%;
						background: #FF967D;
						border-radius: 3rpx;
						transition: 0.2s;
					}
				}
			}
		}

	}
</style>
