<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="关注列表"></navTitle>
			<view class="box-content-tabs">
				<liuyuno-tabs ref="boxTabs" :tabData="tabs" :activeIndex="defaultIndex" @tabClick='tabClick' />
			</view>
		</view>
		<view class="box-content">
			<view class="box-content-store-list" v-if="defaultIndex==0">
				<view class="box-content-store-list-li" v-for="(item,index) in storeList" :key="index">
					<uni-swipe-action>
						<uni-swipe-action-item :right-options="options" @click="onClick"
							@change="swipeChange($event, index)">
							<view class="store-list-li-content">
								<view class="store-list-li-content-image">
									<image src="../../static/images/00002.png" mode="aspectFill"></image>
								</view>
								<view class="store-list-li-content-info">
									<view class="store-list-li-content-info-title">{{item.store_items.name}}</view>
									<view class="store-list-li-content-info-score">
										<text class="iconfont iconwujiaoxing icon-font"
											style="color: #FFCD4D;font-size: 28rpx;" v-for="item in 5"></text>
										<text>5分</text>
									</view>
									<view class="store-list-li-content-info-wrap">
										<view class="info-wrap-text">{{item.store_items.address}}</view>
										<view class="info-wrap-address">
											<text class="iconfont icondingwei1 icon-font"
												style="color: #ccc;font-size: 24rpx;margin-top: 4rpx;"></text>
											<text>4.3km</text>
										</view>
									</view>
									<view class="store-list-li-content-info-remarks">
										备注:
									</view>
								</view>
							</view>

						</uni-swipe-action-item>

					</uni-swipe-action>
				</view>
			</view>
			<view class="box-content-technician-list" v-if="defaultIndex==1">
				<view class="box-content-technician-list-li" v-if="isTecDate">
					<view class="box-content-item-technician-wrap">
						<view class="content-item-technician-wrap-list">
							<view class="content-item-technician-wrap-list-li" v-for="(item,index) in 5" :key="index"
								@click="technicianDetails(item)">
								<view class="box-content-item-technician-wrap-top">
									<view class="technician-wrap-top-title">
										<image src="../../static/images/tool.jpg" mode="aspectFill"></image>
										<text>罗约蓝池·温泉SPA</text>
									</view>
									<view class="technician-wrap-top-btn flex-center">
										预约服务
									</view>
								</view>
								<view class="box-content-item-technician-wrap-bottom">
									<view class="technician-wrap-list-li-image">
										<image src="../../static/images/shop-ico.png" mode="aspectFill"></image>
									</view>
									<view class="technician-wrap-list-li-info">
										<view class="technician-wrap-list-li-info-top">
											<view class="technician-info-top-title">
												<text class="technician-info-top-title-name">王二麻子</text>
												<text class="technician-info-top-title-msg">【金牌技师】</text>
											</view>

										</view>
										<view class="technician-wrap-list-li-info-score">
											<text class="iconfont iconwujiaoxing icon-font"
												style="color: #FFCD4D;font-size: 28rpx;" v-for="item in 5"></text>

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
				</view>
				<view class="box-content-technician-list-li" v-else>
					<view class="box-content-technician-no-data flex-center" style="height: 100%;">
						暂无数据
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	import liuyunoTabs from "../../components/liuyuno-tabs/liuyuno-tabs.vue"
	import uniSwipeAction from "../../uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.vue"
	import uniSwipeActionItem from "../../uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.vue"
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				tabs: ["门店", "技师"],
				defaultIndex: 0, //当前所在页面
				isTecDate: true, //技师页是否有数据
				storeList: [],
				PageNumber: 1, // 请求页数，
				PageLimt: 10, // 请求条数
				options: [{
					text: '分享',
					style: {
						backgroundColor: '#FFCD4D'
					}
				}, {
					text: '删除',
					style: {
						backgroundColor: '#FF8366'
					}
				}]
			};
		},
		components: {
			navTitle,
			liuyunoTabs,
			uniSwipeActionItem
		},
		onReady() {
			// 获取顶部电量状态栏高度
			uni.getSystemInfo({
				success: (res) => {
					this.barHeight = res.statusBarHeight
				}
			});
		},
		onLoad() {
			this.getStore();
		},
		methods: {
			// tabs 点击
			tabClick(e) {
				this.defaultIndex = e
			},

			// 门店列表
			getStore() {
				var vuedata = {
					page_index: this.PageNumber, // 请求页数，
					each_page: this.PageLimt, // 请求条数
					type: 2,
					cid: '',
				}
				this.apiget('api/v1/members/collection', vuedata).then(res => {
					if (res.status == 200) {
						this.storeList = res.data.data
					}
				});
			},





			onClick(e) {
				console.log('点击了' + (e.position === 'left' ? '左侧' : '右侧') + e.content.text + '按钮')
			},
			swipeChange(e, index) {
				console.log('当前状态：' + e + '，下标：' + index)
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
			font-family: Source Han Sans CN;
			font-weight: 400;

			.box-content-store-list {
				margin-top: 20rpx;

				.box-content-store-list-li {
					background: #fff;
					margin-bottom: 20rpx;

					.store-list-li-content {
						padding: 30rpx 40rpx;
						box-sizing: border-box;
						display: flex;

						.store-list-li-content-image {
							image {
								width: 164rpx;
								height: 164rpx;
							}
						}

						.store-list-li-content-info {
							flex: 1;
							margin-left: 20rpx;

							.store-list-li-content-info-title {
								color: #000;
								font-size: 34rpx;
							}

							.store-list-li-content-info-score {
								display: flex;
								align-items: center;

								image {
									width: 30rpx;
									height: 30rpx;
								}

								text {
									margin-left: 4rpx;
									color: #999;
									font-size: 24rpx;
								}
							}

							.store-list-li-content-info-wrap {
								display: flex;
								align-items: center;
								justify-content: space-between;

								.info-wrap-text {
									margin-right: 10rpx;
									color: #333;
									font-size: 24rpx;
								}

								.info-wrap-address {
									display: flex;
									align-items: center;
									color: #999;
									font-size: 24rpx;

									.icon-font {
										margin-right: 8rpx;
									}
								}
							}

							.store-list-li-content-info-remarks {
								padding: 20rpx;
								margin-top: 10rpx;
								box-sizing: border-box;
								height: 100rpx;
								border: 1rpx dashed #ededed;
								font-size: 24rpx;
								color: #ccc;

								text {
									color: #333333;
								}
							}
						}
					}

				}
			}

			.box-content-technician-list {
				height: 100%;

				.box-content-technician-list-li {
					height: 100%;

					.box-content-item-technician-wrap {
						height: 100%;
						overflow-y: scroll;
						display: flex;
						flex-direction: column;




						.content-item-technician-wrap-list {
							padding: 0 20rpx;
							box-sizing: border-box;
							margin-top: 20rpx;
							height: 100%;
							overflow-y: scroll;

							.content-item-technician-wrap-list-li {
								padding: 30rpx 30rpx;

								margin-bottom: 20rpx;
								background: #fff;
								border-radius: 20rpx;

								.box-content-item-technician-wrap-top {
									display: flex;
									align-items: center;
									justify-content: space-between;
									margin-bottom: 30rpx;

									.technician-wrap-top-title {
										display: flex;
										align-items: center;
										font-weight: 500;

										image {
											width: 28rpx;
											height: 28rpx;
										}

										text {
											margin-left: 10rpx;
											font-size: 28rpx;
										}
									}

									.technician-wrap-top-btn {
										width: 160rpx;
										height: 48rpx;
										border: 1rpx solid #FF6F4D;
										border-radius: 32rpx;
										color: #FF6F4D;
										font-size: 28rpx;
									}
								}

								.box-content-item-technician-wrap-bottom {
									display: flex;

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
												font-weight: 500;

												.technician-info-top-title-name {}

												.technician-info-top-title-msg {
													font-size: 28rpx;
													color: #FF8366;
												}
											}


										}

										.technician-wrap-list-li-info-score {
											display: flex;
											align-items: center;
											margin-top: 10rpx;

											image {
												width: 30rpx;
												height: 30rpx;
											}

											text {
												margin-left: 4rpx;
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
											margin-top: 10rpx;
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

					.box-content-technician-no-data {
						color: #666;
					}

				}
			}
		}

		.box-footer {}
	}
</style>
