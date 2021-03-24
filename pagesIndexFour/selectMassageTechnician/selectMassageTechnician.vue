<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<nav-title-confirm navTitle="选择按摩技师" @confirm="confirmBtn"></nav-title-confirm>
		</view>
		<view class="box-content" :style="{display:isData?'block':'none'}">
			<view class="box-content-item-technician box-content-item-common-styles">
				<view class="box-content-item-project-wrap">
					<scroll-view scroll-y="true" class="scroll-Y">
						<view class="box-content-item-project-list">
							<view class="project-list-li flex-center" v-for="(item,index) in classifyList" :key="index">
								{{item}}
							</view>
						</view>
					</scroll-view>
				</view>
				<view class="box-content-item-technician-wrap">
					<z-paging ref="paging" @query="queryList" :list.sync="technicianList"
						loading-more-no-more-text="已经到底了" :refresher-angle-enable-change-continued="false"
						:touchmove-propagation-enabled="true" :use-custom-refresher="true">
						<view class="content-item-technician-wrap-list">
							<view class="content-item-technician-wrap-list-li" v-for="(item,index) in technicianList"
								:key="item.id" @click="checkTechnician(index,item.id)">
								<view class="technician-wrap-list-li-image">
									<image src="../../static/images/shop-ico.png" mode="aspectFill"></image>
								</view>
								<view class="technician-wrap-list-li-info">
									<view class="technician-wrap-list-li-info-top">
										<view class="technician-info-top-title">
											<text class="technician-info-top-title-name">{{item.name}}</text>
											<text class="technician-info-top-title-msg">【金牌技师】</text>
										</view>
										<view class="technician-wrap-list-li-info-check">
											<text class="iconfont iconxuanzhong2 icon-font"
												style="color:#26BF82;font-size: 44rpx;" v-if="isChick==index"></text>
											<text class="iconfont iconweixuanzhong icon-font"
												style="color:#ccc;font-size: 44rpx;" v-else></text>
										</view>
										<!-- <view class="technician-wrap-list-li-info-no-check" v-else></view> -->
										<!-- <view class="technician-wrap-list-li-info-no-disable" v-if="index==2&&index==8&&index==12"></view> -->

									</view>
									<view class="technician-wrap-list-li-info-score">
										<text class="iconfont iconwujiaoxing icon-font"
											style="color: #FFCD4D;font-size: 28rpx;" v-for="item in 5"></text>
										<text>5分</text>
									</view>
									<view class="technician-wrap-list-li-info-introduce">
										<view class="technician-list-li-info-introduce-text">
											工龄：{{item.service_times}}年
										</view>
										<view class="technician-list-li-info-introduce-text">
											预约次数：{{item.service_num}}
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
					</z-paging>
				</view>
			</view>

		</view>
		<view class="box-content" :style="{display:!isData?'block':'none'}">
			<loading v-if="isLoad" />
			<no-data v-if="!isLoad" />
		</view>
	</view>
</template>

<script>
	import navTitleConfirm from "../../components/navTitleConfirm/navTitleConfirm.vue"
	import zPaging from '../../uni_modules/z-paging/components/z-paging/z-paging.vue'
	import loading from '../../components/loading/loading.vue'
	import noData from '../../components/no-data/no-data.vue'
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				classifyList: ["泰式按摩", "中式按摩", "韩式按摩", "美式按摩", "足底按摩"], //按摩分类
				isChick: -1,
				storeId: '', //门店id
				technicianList: [],
				isData: false,
				isLoad: true,
				technicianId: -1,
			};
		},
		components: {
			navTitleConfirm,
			zPaging,
			loading,
			noData
		},
		onReady() {
			// 获取顶部电量状态栏高度
			uni.getSystemInfo({
				success: (res) => {
					this.barHeight = res.statusBarHeight
				}
			});
		},
		onLoad(options) {
			this.storeId = options.storeId
		},
		onShow() {
			this.technicianId = this.$store.state.checkId
			console.log("选择技师：" + this.technicianId)
		},
		methods: {

			// 上拉 下拉 
			queryList(pageNo, pageSize) {
				this.getTechnician(pageNo, pageSize)
			},

			// 获取技师列表
			getTechnician() {
				var vuedata = {
					store: this.storeId
				}
				this.apiget('pc/engineer', vuedata).then(res => {
					if (res.status == 200) {
						this.isData = true
						var list = res.data.engineerList
						this.$refs.paging.addData(list);

						this.technicianList.forEach(item => {
							console.log(item.id)
						})
					} else {
						this.isData = false
						this.isLoad = false
					}
				})
			},



			// 选中技师点击
			checkTechnician(index, id) {
				if (index != this.isChick) {
					this.isChick = index;
				} else {
					this.isChick = -1;
				}
				this.$store.commit("upCheckId", id)
			},
			// 确认按钮点击
			confirmBtn() {
				uni.navigateBack({
					delta: 1
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
			background-color: #fff;

			.box-content-item-technician {
				display: flex;
				flex-direction: column;
				height: 100%;

				.box-content-item-technician-wrap {
					flex: 1;
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

									.technician-wrap-list-li-info-check {
										width: 35rpx;
										height: 35rpx;
										border: 1rpx solid #fff;

										image {
											width: 100%;
											height: 100%;
										}
									}

									.technician-wrap-list-li-info-no-check {
										width: 35rpx;
										height: 35rpx;
										border: 1rpx solid #CCCCCC;
									}

									.technician-wrap-list-li-info-no-disable {
										width: 35rpx;
										height: 35rpx;
										background: #EDEDED;
										border: 1rpx solid #CCCCCC;
										border-radius: 5rpx;
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

		.box-footer {}
	}
</style>
