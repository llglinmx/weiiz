<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitleAll navTitle="商家详情"></navTitleAll>
			<view class="box-head-tabs">
				<liuyuno-tabs ref="boxTabs" :tabData="tabs" :activeIndex="defaultIndex" @tabClick='tabClick' />
			</view>
		</view>
		<view class="box-content">
			<view class="box-content-wrap-item">
				<swiper class="swiper-box" :current="defaultIndex" @change="tabChange">
					<swiper-item class="swiper-box-item-list">
						<view class="box-content-item-wrap">
							<view class="box-content-item-wrap-image">
								<swiper class="box-content-item-wrap-banner" :autoplay="true" :interval="5000">
									<swiper-item class="box-content-item-wrap-banner-li" v-for="(item,index) in imageList" :key="index">
										<image :src="item.url" mode="aspectFill"></image>
									</swiper-item>
								</swiper>
								<view class="box-content-item-wrap-msg">
									<text class="iconfont icontupian" style="font-size: 26rpx;"></text>
									<text class="box-content-item-wrap-text">4</text>
								</view>
							</view>
							<view class="box-content-item-wrap-info">
								<view class="item-wrap-info-left">
									<view class="item-wrap-info-left-image">
										<image src="../../static/images/00002.png" mode=""></image>
									</view>
									<view class="item-wrap-info-left-box">
										<view class="item-wrap-left-box-title">
											印象诗意·悠然SPA
										</view>
										<view class="item-wrap-left-box-score">
											<text class="iconfont iconwujiaoxing icon-font" style="color: #FFCD4D;font-size: 28rpx;" v-for="item in 5"></text>
											<text>5分</text>
										</view>
										<view class="item-wrap-left-box-bottom">
											<view class="item-wrap-left-box-bottom-text flex-center">
												按摩/SPA
											</view>
										</view>
									</view>
								</view>
								<view class="item-wrap-info-right">
									<text class="iconfont icondianhua icon-font" style="color:#FF8366;font-size: 44rpx;"></text>
									<text>电话</text>
								</view>
							</view>
							<view class="box-content-item-wrap-business-time">
								营业时间：周一至周日 9:00-20:00
							</view>
							<view class="box-content-item-wrap-address">
								<view class="box-content-item-wrap-address-left">
									<view class="box-content-item-wrap-left-address-icon">
										<text class="iconfont icondingwei1 icon-font" style="color: #26BF82;font-size: 34rpx;"></text>
									</view>
									<view class="box-content-item-wrap-address-left-text">中国 福建省 厦门市 集美区 杏滨路罗约酒店负一楼</view>
								</view>
								<view class="box-content-item-wrap-address-right">
									<view class="box-content-item-wrap-address-right-text">距离6.1KM</view>
									<view class="box-content-item-wrap-right-address-icon">
										<text class="iconfont icongengduo icon-font" style="color: #26BF82;font-size: 40rpx;margin-top: 4rpx;"></text>
									</view>
								</view>
							</view>
							<view class="box-content-item-wrap-business-description">
								<view class="content-item-wrap-business-description">
									其他门店 （3家）
								</view>
								<view class="more-icon">
									<text class="iconfont icongengduo icon-font" style="color: #26BF82;font-size: 40rpx;margin-top: 4rpx;"></text>
								</view>
							</view>
							<view class="box-content-item-wrap-business-introduce">
								水疗（SPA）这种休闲美容方式的历史很久远。在15世纪欧洲的比利时有一个被称之为SPAU的小山谷，山谷中有一个富含矿物质的热温泉旅游、疗养区，当时有许多贵族到这里来度假疗养这就是SPA最初的形式。18世纪后开始在欧洲贵族中风行开来，成为贵族们休闲度假、强身健体的首选，20世纪末在欧美民间社会又重新掀起了SPA热潮，并于21世纪初传入亚洲各国。
							</view>
						</view>

					</swiper-item>
					<swiper-item class="swiper-box-item-list">
						<view class="box-content-item-project box-content-item-common-styles">
							<view class="box-content-item-project-wrap">
								<scroll-view scroll-y="true" class="scroll-Y">
									<view class="box-content-item-project-list">
										<view class="project-list-li flex-center" v-for="(item,index) in classifyList" :key="index">{{item}}</view>
									</view>
								</scroll-view>
							</view>
							<view class="box-project-list">
								<view class="box-project-list-li" v-for="(item,index) in 10" @click="projectDetails">
									<view class="box-project-list-li-image">
										<image src="../../static/images/002.png" mode="aspectFill"></image>
									</view>
									<view class="box-project-list-li-info">
										<view class="box-project-list-li-info-title">泰式古法按摩</view>
										<view class="box-project-list-li-info-list">
											<view class="project-list-li-info-list-item">60分钟</view>
											<view class="project-list-li-info-list-item">背部按摩</view>
										</view>
										<view class="box-project-list-li-info-sold">已售200</view>
										<view class="box-project-list-li-info-bottom">
											<view class="project-list-li-info-bottom-price">
												<view class="list-li-info-bottom-present-price">200.00</view>
												<view class="list-li-info-bottom-original-price">800.00</view>
											</view>
											<view class="project-list-li-info-bottom-btn flex-center" @click.stop="reservationService">预约</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</swiper-item>
					<swiper-item class="swiper-box-item-list">
						<view class="box-content-item-technician box-content-item-common-styles">
							<view class="box-content-item-project-wrap">
								<scroll-view scroll-y="true" class="scroll-Y">
									<view class="box-content-item-project-list">
										<view class="project-list-li flex-center" v-for="(item,index) in classifyList" :key="index">{{item}}</view>
									</view>
								</scroll-view>
							</view>
							<view class="box-content-item-technician-wrap">
								<view class="content-item-technician-wrap-list">
									<view class="content-item-technician-wrap-list-li" v-for="(item,index) in 5" :key="index" @click="technicianDetails(item)">
										<view class="technician-wrap-list-li-image">
											<image src="../../static/images/shop-ico.png" mode="aspectFill"></image>
										</view>
										<view class="technician-wrap-list-li-info">
											<view class="technician-wrap-list-li-info-top">
												<view class="technician-info-top-title">
													<text class="technician-info-top-title-name">王二麻子</text>
													<text class="technician-info-top-title-msg">【金牌技师】</text>
												</view>
												<view class="technician-wrap-list-li-info-top-btn flex-center">
													预约
												</view>
											</view>
											<view class="technician-wrap-list-li-info-score">
												<text class="iconfont iconwujiaoxing icon-font" style="color: #FFCD4D;font-size: 28rpx;" v-for="item in 5"></text>
												<text>5分</text>
											</view>
											<view class="technician-wrap-list-li-info-introduce">
												<view class="technician-list-li-info-introduce-text">
													工龄：2年
												</view>
												<view class="technician-list-li-info-introduce-text">
													预约次数：1240
												</view>
											</view>
											<view class="technician-wrap-list-li-info-category">
												<view class="technician-list-li-info-category-item" v-for="item in 3">
													背部按摩
												</view>
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</swiper-item>
					<swiper-item class="swiper-box-item-list">
						<view class="box-content-item-comment">
							<view class="box-content-item-comment-category">
								<view class="comment-category-li flex-center" v-for="(item,index) in commentTypeList" :key="index" :class="commentIndex==index?'comment-category-li-active':''"
								 @click="commentTypeClick(index)">
									{{item.title}}(20)
								</view>
							</view>
							<view class="box-content-item-comment-list">
								<view class="comment-list-item" v-for="(item,index) in 5">
									<view class="comment-list-item-image">
										<image src="../../static/images/002.png" mode="aspectFill"></image>
									</view>
									<view class="comment-list-item-info">
										<view class="comment-list-item-info-nickname">SKB露娜可可</view>
										<view class="comment-list-item-info-score">
											<text class="iconfont iconwujiaoxing icon-font" style="color: #FFCD4D;font-size: 28rpx;" v-for="item in 5"></text>
											<text>5分</text>
										</view>
										<view class="comment-list-item-info-content">
											经常累的时候过来按摩，技师服务很好，按摩还会询问力度，很会聊天，这里地理位置也很好找，环境也挺好的，服务员也很热情，来这里整体给我的感觉都是不错的，推荐大家来这家店体验一下。
										</view>
										<view class="comment-list-item-info-message-time">
											2020年10月20日 16:25:01
										</view>
										<view class="comment-list-item-info-picture-image">
											<view class="picture-image-li" v-for="item in 5">
												<image src="../../static/images/shop-ico.png" mode="aspectFill"></image>
											</view>
										</view>
										<view class="comment-list-item-info-reply">
											<view class="comment-list-item-info-reply-name">
												王二麻子回复：
											</view>
											<view class="comment-list-item-info-reply-content">
												感谢您的支持与认可！我们会继续努力提供更优质的服务与项目
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="box-footer">

		</view>
	</view>
</template>

<script>
	import navTitleAll from "../../components/navTitleAll/navTitleAll.vue"
	import liuyunoTabs from "@/components/liuyuno-tabs/liuyuno-tabs.vue";
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				tabs: ["介绍", "项目", "技师", "评论"],
				defaultIndex: 0, //当前 滑动的下标
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
				classifyList: ["泰式按摩", "中式按摩", "韩式按摩", "美式按摩", "足底按摩"], //按摩分类
				commentTypeList: [{
						title: "全部",
					},
					{
						title: "好评",
					},
					{
						title: "中评",
					},
					{
						title: "差评",
					}
				], //评论类型
				commentIndex: 0, //评论类型当前选中
			};
		},
		components: {
			liuyunoTabs,
			navTitleAll
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

			// 评论类型点击
			commentTypeClick(index) {
				this.commentIndex = index
			},
			// 商家详情里的项目列表点击进入项目详情
			projectDetails() {
				uni.navigateTo({
					url: "../../pagesIndexThree/projectDetails/projectDetails"
				})
			},
			// 商家详情里的项目列表点击进入技师详情
			technicianDetails() {
				uni.navigateTo({
					url: "../../pagesIndexThree/technicianDetails/technicianDetails"
				})
			},

			// 商家项目预约服务
			reservationService() {
				uni.navigateTo({
					url: "../../pagesIndexThree/orderByAppointment/orderByAppointment"
				})
				// uni.showToast({
				// 	title: "弹出",
				// 	icon: "none"
				// })
			},

			// 滑动切换列表
			tabChange(e) {
				this.$refs.boxTabs.tabToIndex(e.detail.current)
				this.defaultIndex = e.detail.current
			},
		}
	}
</script>

<style lang="scss">
	.box {
		display: flex;
		flex-direction: column;
		height: 100%;

		.box-head {
			background-color: #fff;
		}

		.box-content {
			flex: 1;
			border-top: 1rpx solid #ededed;

			.box-content-wrap-item {
				height: 100%;

				font-family: Source Han Sans CN;
				font-weight: 400;

				.swiper-box {
					height: 100%;

					.swiper-box-item-list {
						// overflow-y: scroll;

						.box-content-item-wrap {
							padding: 30rpx 40rpx;
							box-sizing: border-box;

							.box-content-item-wrap-image {
								position: relative;
								border-radius: 20rpx;

								.box-content-item-wrap-banner {
									height: 376rpx;
									border-radius: 20rpx;
									border-radius: 20rpx;

									.box-content-item-wrap-banner-li {
										height: 376rpx;

										image {
											width: 100%;
											height: 376rpx;
											border-radius: 20rpx;
										}
									}
								}

								.box-content-item-wrap-msg {
									display: flex;
									justify-content: center;
									align-items: center;
									position: absolute;
									bottom: 20rpx;
									right: 20rpx;
									width: 85rpx;
									height: 44rpx;
									background: rgba(0, 0, 0, .4);
									border-radius: 24rpx;
									color: #fff;

									.box-content-item-wrap-text {
										margin-left: 8rpx;
										font-size: 24rpx;
									}
								}


							}

							.box-content-item-wrap-info {
								margin-top: 30rpx;
								display: flex;
								justify-content: space-between;

								.item-wrap-info-left {
									display: flex;

									.item-wrap-info-left-image {
										width: 126rpx;
										height: 126rpx;

										image {
											width: 126rpx;
											height: 126rpx;
										}
									}

									.item-wrap-info-left-box {
										margin-left: 20rpx;
										display: flex;
										flex-direction: column;
										justify-content: space-between;

										.item-wrap-left-box-title {
											line-height: 40rpx;
											font-size: 36rpx;
											color: #000;
										}

										.item-wrap-left-box-score {
											display: flex;
											align-items: center;

										

											text {
												margin-right: 6rpx;
												font-size: 24rpx;
												color: #999;
											}
										}

										.item-wrap-left-box-bottom {
											display: flex;

											.item-wrap-left-box-bottom-text {
												width: 112rpx;
												height: 34rpx;
												background: #F5F5F5;
												border-radius: 3rpx;
												font-size: 22rpx;
												color: #666;
											}
										}

									}
								}

								.item-wrap-info-right {
									display: flex;
									flex-direction: column;
									align-items: center;
									justify-content: center;
									padding: 0 10rpx 0 30rpx;
									box-sizing: border-box;
									height: 70rpx;
									border-left: 1rpx solid #EDEDED;

									image {
										width: 34rpx;
										height: 36rpx;
									}

									text {
										font-size: 20rpx;
										color: #666;
									}
								}
							}

							.box-content-item-wrap-business-time {
								padding: 30rpx 0;
								font-size: 28rpx;
								color: #333;
								border-bottom: 1rpx solid #ededed;
							}

							.box-content-item-wrap-address {
								display: flex;
								justify-content: space-between;
								height: 127rpx;
								border-bottom: 1rpx solid #ededed;

								.box-content-item-wrap-address-left {
									display: flex;
									margin-right: 50rpx;
									align-items: center;
									flex-shrink: 1;
									flex: 2;

									.box-content-item-wrap-left-address-icon {
										image {
											width: 32rpx;
											height: 40rpx;
										}
									}

									.box-content-item-wrap-address-left-text {
										margin-left: 20rpx;
										font-size: 28rpx;
										color: #333;
									}



								}

								.box-content-item-wrap-address-right {
									flex: 1;
									display: flex;
									align-items: center;
									justify-content: flex-end;

									.box-content-item-wrap-address-right-text {
										font-size: 28rpx;
										color: #26BF82;
									}

									.box-content-item-wrap-right-address-icon {
										margin-left: 20rpx;

										image {
											width: 28rpx;
											height: 28rpx;
										}
									}
								}
							}

							.box-content-item-wrap-business-description {
								display: flex;
								justify-content: space-between;
								align-items: center;
								height: 99rpx;
								border-bottom: 1rpx solid #ededed;

								.content-item-wrap-business-description {
									font-size: 28rpx;
									color: #333;
								}

								.more-icon {
									image {
										width: 28rpx;
										height: 28rpx;
									}
								}
							}

							.box-content-item-wrap-business-introduce {
								padding: 30rpx 0;
								font-size: 28rpx;
								color: #333;
								text-indent: 2em;
							}
						}

						.box-content-item-project {
							height: 100%;
							display: flex;
							flex-direction: column;

							.box-project-list {
								flex: 1;
								overflow-y: scroll;
								padding: 0 40rpx;
								box-sizing: border-box;

								.box-project-list-li {
									display: flex;
									margin-bottom: 40rpx;

									.box-project-list-li-image {
										image {
											width: 196rpx;
											height: 196rpx;
										}
									}

									.box-project-list-li-info {
										display: flex;
										flex-direction: column;
										justify-content: space-around;
										margin-left: 20rpx;
										flex: 1;

										.box-project-list-li-info-title {
											line-height: 30rpx;
											font-size: 34rpx;
											color: #000;
										}

										.box-project-list-li-info-list {
											display: flex;
											flex-wrap: wrap;

											.project-list-li-info-list-item {
												padding: 6rpx 10rpx;
												box-sizing: border-box;
												margin-right: 5rpx;
												margin-bottom: 5rpx;
												font-size: 22rpx;
												color: #666;
												background: #F5F5F5;
												border-radius: 3rpx;
											}
										}

										.box-project-list-li-info-sold {
											font-size: 24rpx;
											color: #666;
										}

										.box-project-list-li-info-bottom {
											display: flex;
											align-items: center;
											justify-content: space-between;

											.project-list-li-info-bottom-price {
												display: flex;
												align-items: center;

												.list-li-info-bottom-present-price {
													font-size: 34rpx;
													color: #FF4D4D;
												}

												.list-li-info-bottom-original-price {
													margin-left: 8rpx;
													font-size: 24rpx;
													color: #999;
													text-decoration: line-through;
												}
											}

											.project-list-li-info-bottom-btn {
												width: 116rpx;
												height: 48rpx;
												background: #FF8366;
												border-radius: 29rpx;
												font-size: 28rpx;
												color: #fff;
											}
										}
									}
								}
							}
						}

						.box-content-item-technician {
							height: 100%;

							.box-content-item-technician-wrap {
								height: 100%;
								overflow-y: scroll;
								display: flex;
								flex-direction: column;


								.content-item-technician-wrap-list {
									padding: 0 40rpx;
									box-sizing: border-box;
									height: 100%;
									overflow-y: scroll;

									.content-item-technician-wrap-list-li {
										display: flex;
										margin-bottom: 40rpx;

										.technician-wrap-list-li-image {
											image {
												width: 164rpx;
												height: 164rpx;
											}
										}

										.technician-wrap-list-li-info {
											display: flex;
											flex: 1;
											flex-direction: column;

											margin-left: 20rpx;

											.technician-wrap-list-li-info-top {
												display: flex;
												justify-content: space-between;
												align-items: flex-start;

												.technician-info-top-title {
													display: flex;
													align-items: center;
													font-size: 34rpx;
													color: #000;
													line-height: 30rpx;

													.technician-info-top-title-name {}

													.technician-info-top-title-msg {
														font-size: 28rpx;
														color: #FF8366;
													}
												}

												.technician-wrap-list-li-info-top-btn {
													width: 116rpx;
													height: 48rpx;
													background: #FF8366;
													border-radius: 29rpx;
													font-size: 28rpx;
													color: #fff;
												}
											}

											.technician-wrap-list-li-info-score {
												display: flex;
												align-items: center;

												text {
													margin-right: 6rpx;
													font-size: 24rpx;
													color: #999;
												}
											}

											.technician-wrap-list-li-info-introduce {
												display: flex;
												margin: 10rpx 0;
												font-size: 24rpx;
												line-height: 24rpx;
												color: #999;

												.technician-list-li-info-introduce-text {
													padding: 0 20rpx;
													box-sizing: border-box;
													border-right: 1rpx solid #ccc;
												}

												.technician-list-li-info-introduce-text:first-child {
													padding-left: 0;
												}

												.technician-list-li-info-introduce-text:last-child {
													border-right: 0;
												}
											}

											.technician-wrap-list-li-info-category {
												display: flex;
												// flex-wrap: wrap;
												overflow: hidden;
												text-overflow: ellipsis;
												white-space: nowrap;

												.technician-list-li-info-category-item {
													padding: 6rpx 10rpx;
													box-sizing: border-box;
													margin-right: 5rpx;
													margin-bottom: 5rpx;
													font-size: 22rpx;
													color: #666;
													background: #F5F5F5;
													border-radius: 3rpx;
												}
											}

										}
									}
								}
							}


						}

						.box-content-item-comment {
							height: 100%;
							display: flex;
							flex-direction: column;

							.box-content-item-comment-category {
								display: flex;
								padding: 30rpx 40rpx 40rpx;
								box-sizing: border-box;

								.comment-category-li {
									width: 154rpx;
									height: 60rpx;
									border: 1px solid #ccc;
									margin-right: 20rpx;
									color: #999;
									font-size: 28rpx;
									border-radius: 35rpx;
									transition: 0.2s;
								}

								.comment-category-li:last-child {
									margin-right: 0;
								}

								.comment-category-li-active {
									color: #FF8366 !important;
									border: 1px solid #FF8366 !important;
								}
							}

							.box-content-item-comment-list {
								flex: 1;
								overflow-y: scroll;
								padding: 0 40rpx;
								box-sizing: border-box;

								.comment-list-item:last-child {
									border-bottom: 0;
								}

								.comment-list-item:first-child {
									padding-top: 0;
								}

								.comment-list-item {
									display: flex;
									padding: 40rpx 0;
									border-bottom: 1rpx solid #ededed;
									box-sizing: border-box;

									.comment-list-item-image {
										image {
											width: 88rpx;
											height: 88rpx;
											border-radius: 50%;
										}
									}

									.comment-list-item-info {
										flex: 1;
										display: flex;
										flex-direction: column;
										margin-left: 20rpx;

										.comment-list-item-info-nickname {
											// line-height: 40rpx;
											font-size: 32rpx;
											color: #000;
										}

										.comment-list-item-info-score {
											display: flex;
											align-items: center;

											text {
												margin-right: 6rpx;
												font-size: 24rpx;
												color: #999;
											}
										}

										.comment-list-item-info-content {
											margin-top: 8rpx;
											font-size: 28rpx;
											color: #333;
										}

										.comment-list-item-info-message-time {
											line-height: 50rpx;
											font-size: 24rpx;
											color: #999;
										}

										.comment-list-item-info-picture-image {
											display: flex;
											flex-wrap: wrap;

											.picture-image-li {
												margin-right: 8rpx;

												image {
													width: 182rpx;
													height: 182rpx;
												}
											}
										}

										.comment-list-item-info-reply {
											padding: 20rpx;
											box-sizing: border-box;
											border-radius: 10rpx;
											background: #F7F7F7;
											font-size: 28rpx;

											.comment-list-item-info-reply-name {
												color: #999999;
											}

											.comment-list-item-info-reply-content {
												color: #333;
											}
										}



									}
								}
							}

						}




						.box-content-item-common-styles {
							.box-content-item-project-wrap {
								padding: 30rpx 0 40rpx 40rpx;
								box-sizing: border-box;
								overflow-x: scroll;

								.box-content-item-project-list {
									display: flex;
									display: -webkit-box;
									// overflow-x: scroll;

									.project-list-li {
										width: 160rpx;
										height: 60rpx;
										margin-right: 30rpx;
										background: #F7F7F7;
										border-radius: 30rpx;
										font-size: 28rpx;
										color: #666;
									}

									.project-list-li:last-child {
										margin-right: 0;
									}

									.project-list-li-active {
										background: #FF8366 !important;
										color: #fff !important;
									}
								}
							}
						}

					}
				}
			}
		}

		.box-footer {}
	}
</style>
