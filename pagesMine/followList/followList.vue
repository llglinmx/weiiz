<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="关注列表"></navTitle>
			<view class="box-content-tabs">
				<liuyuno-tabs ref="boxTabs" :tabData="tabs" :activeIndex="defaultIndex" @tabClick='tabClick' />
			</view>
		</view>
		<view class="box-content">
			<view class="box-content-store-main" :style="{display:defaultIndex==0?'block':'none'}">
				<view class="box-content-store-main-wrap" :style="{display:isDateStore?'block':'none'}">
					<z-paging ref="paging" @query="storeQueryList" loading-more-no-more-text="已经到底了" :list.sync="storeList">
						<view class="box-content-store-list">
							<view class="box-content-store-list-li" v-for="(item,index) in storeList" :key="item.id">
								<uni-swipe-action>
									<uni-swipe-action-item :right-options="options" @click="onClick"
										@change="swipeChange($event, index,item.itemid)">
										<view class="store-list-li-content">
											<view class="store-list-li-content-image">
												<image :src="item.store_items.simg" mode="aspectFill"></image>
											</view>
											<view class="store-list-li-content-info">
												<view class="store-list-li-content-info-title">{{item.store_items.name}}
												</view>
												<view class="store-list-li-content-info-score">
													<score :comment="item.store_items.comment"></score>
												</view>
												<view class="store-list-li-content-info-wrap">
													<view class="info-wrap-text">{{item.store_items.address}}</view>
													<view class="info-wrap-address" v-if="item.store_items.kilometer">
														<text class="iconfont icondingwei1 icon-font"
															style="color: #ccc;font-size: 24rpx;margin-top: 4rpx;"></text>
														<text>{{item.store_items.kilometer}}KM</text>
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
					</z-paging>
				</view>
				<view class="box-content-store-load" v-if="!isDateStore">
					<loading v-if="isLoadStore" style="transform: translateY(-150rpx);" />
					<no-data v-if="!isLoadStore" />
				</view>
			</view>
			<view class="box-content-technician-main" :style="{display:defaultIndex==1?'block':'none'}">
				<view class="box-content-item-technician-wrap" :style="{display:isDateTec?'block':'none'}">
					<z-paging ref="paging1" @query="technicianQueryList"  loading-more-no-more-text="已经到底了":mounted-auto-call-reload='false'
						:list.sync="technicianList">
						<view class="content-item-technician-wrap-list">
							<view class="content-item-technician-wrap-list-li" v-for="(item,index) in technicianList"
								:key="item.id">
								<view class="box-content-item-technician-wrap-top">
									<view class="technician-wrap-top-title">
										<text class="iconfont iconshangjia"
											style="font-size: 28rpx;color: #FF8366;"></text>
										<text v-if="item.engineer_items.store_info">{{item.engineer_items.store_info.name}}</text>
									</view>
									<view class="technician-wrap-top-btn flex-center">
										预约服务
									</view>
								</view>
								<view class="box-content-item-technician-wrap-bottom">
									<view class="technician-wrap-list-li-image">
										<image :src="item.engineer_items.simg" mode="aspectFill"></image>
									</view>
									<view class="technician-wrap-list-li-info">
										<view class="technician-wrap-list-li-info-top">
											<view class="technician-info-top-title">
												<text
													class="technician-info-top-title-name">{{item.engineer_items.name}}</text>
												<text
													class="technician-info-top-title-msg">【{{item.engineer_items.level_name}}】</text>
											</view>

										</view>
										<view class="technician-wrap-list-li-info-score">
											<score :comment="item.engineer_items.comment"></score>
										</view>
										<view class="technician-wrap-list-li-info-introduce">
											<view class="technician-list-li-info-introduce-text">
												工龄：{{item.engineer_items.service_times}}年
											</view>
											<view class="technician-list-li-info-introduce-text">
												预约次数：{{item.engineer_items.service_num}}
											</view>
										</view>
										<view class="technician-wrap-list-li-info-category">
											<view class="technician-list-li-info-category-item"
												v-for="(val,j) in label(item.engineer_items.service)">
												{{val}}
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</z-paging>
				</view>
				<view class="box-content-store-load" :style="{display:!isDateTec?'block':'none'}">
					<loading v-if="isLoadTec" style="transform: translateY(-150rpx);" />
					<no-data v-if="!isLoadTec" />
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="dialog">
			<uni-popup-dialog type="warn" mode='base' title="警告" :content="msgText" :duration="2000"  @confirm="confirm"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	import liuyunoTabs from "../../components/liuyuno-tabs/liuyuno-tabs.vue"
	import uniSwipeAction from "../../uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.vue"
	import uniSwipeActionItem from "../../uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.vue"
	import loading from '../../components/loading/loading.vue'
	import noData from '../../components/no-data/no-data.vue'
	import zPaging from '../../uni_modules/z-paging/components/z-paging/z-paging.vue'
	import score from '../../components/score/score.vue'
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				tabs: ["门店", "技师"],
				defaultIndex: 0, //当前所在页面
				storeList: [], //门店
				storeId: '', //门店id
				technicianList: [], //技师
				technicianId: '', //技师id
				msgText: '', //弹出层提示
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
				}],
				isDateStore: false, //门店是否有数据
				isLoadStore: true, //门店加载
				isDateTec: false, //技师页是否有数据
				isLoadTec: true, //技师加载
			};
		},
		components: {
			navTitle,
			liuyunoTabs,
			uniSwipeActionItem,
			loading,
			noData,
			zPaging,
			score
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

		},
		filters: {

		},
		methods: {
			// 门店下拉,上拉
			storeQueryList(pageNo, pageSize) {
				this.getStore(pageNo, pageSize)
			},

			// 门店下拉,上拉
			technicianQueryList(pageNo, pageSize) {
				this.getTechnicianList(pageNo, pageSize)
			},

			// tabs 点击
			tabClick(e) {
				this.defaultIndex = e;
				switch (e) {
					case 0:
						this.isLoadStore = true
						this.getStore(1, 15)
						break;
					case 1:
						this.isLoadTec = true

						this.getTechnicianList(1, 15)
						break;
				}
			},


			// 门店列表
			getStore(num, size) {
				var vuedata = {
					page_index: num, // 请求页数，
					each_page: size, // 请求条数
					type: 2, // 2门店 1技师
					lat: uni.getStorageSync('latitude'),
					lng: uni.getStorageSync('longitude'),
				}
				this.apiget('api/v1/members/collection', vuedata).then(res => {
					if (res.status == 200) {
						if (res.data.data.length != 0) {
							this.isDateStore = true
							this.$refs.paging.addData(res.data.data);
							// this.storeList = res.data.data
						} else {
							this.isDateStore = false
							this.isLoadStore = false
						}
					}
				});
			},
			// 技师列表
			getTechnicianList(num, size) {
				var vuedata = {
					page_index: num, // 请求页数，
					each_page: size, // 请求条数
					type: 1, // 2门店 1技师
				}
				this.apiget('api/v1/members/collection', vuedata).then(res => {
					if (res.status == 200) {
						if (res.data.data.length != 0) {
							this.isDateTec = true
							this.$refs.paging1.addData(res.data.data);
							// this.technicianList = res.data.data
						} else {
							this.isDateTec = false
							this.isLoadTec = false
						}
					}
				});
			},

			// 切割字符
			label(str) {
				return str.split(',')
			},
			// 门店
			onClick(e) {
				if (e.content.text == '删除') {
					this.$refs.popup.open()
					this.msgText = '你确定要取消关注此门店吗？'
				}
				// console.log('点击了' + (e.position === 'left' ? '左侧' : '右侧') + e.content.text + '按钮')
			},
			swipeChange(e, index, id) {
				console.log(id)
				this.storeId = id
				// console.log('当前状态：' + e + '，下标：' + index)
			},


			// 弹窗点击取消
			close(done) {
				// TODO 做一些其他的事情，before-close 为true的情况下，手动执行 done 才会关闭对话框
				// ...
				done()
			},
			// 弹窗点击确认
			confirm() {
				if (this.defaultIndex == 0) {
					this.storeCancelsFollow();
				} else {

				}
			},
			// 门店取消关注
			storeCancelsFollow() {
				var vuedata = {
					itemid: this.storeId,
					type: 2
				}
				this.apipost('api/v1/members/collection/cancel', vuedata).then(res => {
					if (res.status == 200) {
						uni.showToast({
							title: "门店取消关注成功",
							icon: "none"
						})
						this.getStore(1, 10)
					}

				});
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

			.box-content-store-main {
				height: 100%;
				overflow-y: scroll;

				.box-content-store-main-wrap {
					height: 100%;

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
										border-radius: 10rpx;
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
				}

				.box-content-store-load {
					width: 100%;
					height: 100%;
					background: #fff;

				}

			}

			.box-content-technician-main {
				height: 100%;
				overflow-y: scroll;

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


									text {
										margin-right: 10rpx;
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
									display: flex;
									align-items: center;

									image {
										width: 164rpx;
										height: 164rpx;
										border-radius: 10rpx;
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


				.box-content-store-load {
					width: 100%;
					height: 100%;
					background: #fff;

				}
			}

		}

		.box-footer {}
	}
</style>
