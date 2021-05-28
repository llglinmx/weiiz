<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<view class="nav-box">
				<view class="nav-back" @click="Gback">
					<image src="../../static/images/back.png" mode="aspectFill"></image>
				</view>
				<view class="nav-title">套餐卡商城</view>
				<view class="nav-confirm" @click="cardList">
					我的
				</view>
			</view>
		</view>
		<view class="box-content">
			<view class="box-content-wrap" :style="{display:isData?'block':'none'}">
				<z-paging ref="paging" @query="queryList" :list.sync="packageCardList" loading-more-no-more-text="已经到底了"
					:refresher-angle-enable-change-continued="false" :touchmove-propagation-enabled="true"
					:use-custom-refresher="true">
					<view class="box-content-wrap-list">
						<view class="wrap-list-li" v-for="(item,index) in packageCardList" :key="item.id"
							@click="cardDetails(item)">
							<view class="wrap-list-li-top">
								<view class="wrap-list-li-top-image">
									<image :src="item.simg" mode="aspectFill"></image>
								</view>
								<view class="wrap-list-li-top-info">
									<view class="wrap-list-li-top-info-title">{{item.name}}</view>
									<view class="wrap-list-li-top-info-price">￥{{item.price}}</view>
									<view class="wrap-list-li-top-info-box">
										<view class="list-li-top-info-box-item flex-center"
											v-for="(i,j) in item.service">{{i.name}}x{{i.times}}次</view>
									</view>
									<view class="wrap-list-li-top-info-bottom" v-for="(i,j) in item.common_store_name">
										<view class="list-li-top-info-bottom-title">
											<text class="iconfont iconshangjia"
												style="font-size: 28rpx;color: #FF967D;"></text>
											<text>{{i.name}}</text>
										</view>
										<view class="list-li-top-info-bottom-btn flex-center"
											@click.stop="payment(item)">去付款</view>
									</view>
								</view>
							</view>

						</view>
					</view>
				</z-paging>
			</view>
			<view class="box-content-wrap" :style="{display:!isData?'block':'none'}">
				<loading v-if="isLoad" />
				<no-data v-if="!isLoad" />
			</view>
		</view>

	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	import loading from '../../components/loading/loading.vue'
	import noData from '../../components/no-data/no-data.vue'
	import zPaging from '../../uni_modules/z-paging/components/z-paging/z-paging.vue'
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				packageCardList: [],
				isData: false,
				isLoad: true,
			};
		},
		components: {
			navTitle,
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
		onShow() {
			const sys = uni.getSystemInfoSync();
			var Heigh = sys.windowHeight
			this.mesHeight = (Heigh - 44) * 2
		},
		methods: {
			// 返回
			Gback() {
				uni.navigateBack({
					delta: 1
				})
			},

			// 上拉 下拉
			queryList(pageNo, pageSize) {
				this.getPackageCard(pageNo, pageSize)
			},

			// 获取礼品卡
			getPackageCard(num, size) {
				let vuedata = {
					page_index: num, // 请求页数，
					each_page: size, // 请求条数
				}
				this.apiget('pc/card/index', vuedata).then(res => {
					if (res.status == 200) {
						let list = res.data.cardList
						if (list.length != 0) {
							this.isData = true
							this.$refs.paging.addData(list);
							// this.$refs.paging.complete(list);
						} else {
							this.isData = false
							this.isLoad = false
						}
					}
				});
			},

			// 点击顶部我的套餐卡
			cardList() {
				uni.navigateTo({
					url: "../../pagesMine/packageCard/packageCard"
				})
			},
			// 点击进入套餐卡详情
			cardDetails(item) {
				uni.navigateTo({
					url: "../../pagesIndexTwo/shoppingCardDetails/shoppingCardDetails?id=" + item.id
				})
			},

			// 去付款
			payment(item) {
				var str = {
					id: item.id,
					num: 1
				}
				uni.navigateTo({
					url: "../../pagesIndexThree/confirmOrder/confirmOrder?data=" + JSON.stringify(str)
				})
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

			.nav-box {
				display: flex;
				align-items: center;
				height: 88rpx;
				background: #fff;

				.nav-back {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 50rpx;
					height: 34rpx;
					margin-left: 20rpx;
					box-sizing: border-box;

					image {
						width: 18rpx;
						height: 34rpx;
					}
				}

				.nav-title {
					display: flex;
					align-items: center;
					justify-content: center;
					flex: 1;
					margin-left: 20rpx;
					font-size: 34rpx;
					font-family: Source Han Sans CN;
					font-weight: 500;
					color: #000000;
				}

				.nav-confirm {
					padding-right: 40rpx;
					font-size: 30rpx;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color: #FF8366;
				}
			}
		}

		.box-content {
			flex: 1;
			overflow-y: scroll;
			font-family: Source Han Sans CN;
			font-weight: 400;

			.box-content-wrap {
				height: 100%;

				.box-content-wrap-list {
					padding-left: 40rpx;
					box-sizing: border-box;

					.wrap-list-li {
						padding: 30rpx 40rpx 30rpx 0;
						box-sizing: border-box;
						border-bottom: 1rpx solid #ededed;

						.wrap-list-li-top {
							display: flex;

							.wrap-list-li-top-image {
								display: flex;

								image {
									width: 224rpx;
									height: 148rpx;
									border-radius: 10rpx;
								}
							}

							.wrap-list-li-top-info {
								margin-left: 20rpx;
								flex: 1;

								.wrap-list-li-top-info-title {
									font-size: 36rpx;
									color: #000;
									line-height: 32rpx;
								}

								.wrap-list-li-top-info-price {
									margin: 16rpx 0;
									color: #FF4D4D;
									font-size: 34rpx;
									font-weight: 500;
								}

								.wrap-list-li-top-info-box {
									display: flex;
									flex-wrap: wrap;

									.list-li-top-info-box-item {
										width: 197rpx;
										height: 58rpx;
										margin-right: 20rpx;
										margin-bottom: 20rpx;
										border: 1rpx solid #EDEDED;
										border-radius: 3rpx;
										color: #666;
										font-size: 26rpx;
									}

									.list-li-top-info-box-item:nth-child(2n) {
										margin-right: 0;
									}
								}

								.wrap-list-li-top-info-bottom {
									display: flex;
									align-items: center;
									justify-content: space-between;
									margin-bottom: 10rpx;

									.list-li-top-info-bottom-title {
										display: flex;
										align-items: center;

										image {
											width: 28rpx;
											height: 28rpx;
										}

										text {
											margin-left: 8rpx;
											color: #666;
											font-size: 24rpx;
										}
									}

									.list-li-top-info-bottom-btn {
										width: 146rpx;
										height: 58rpx;
										border: 1rpx solid #FF6F4D;
										border-radius: 3rpx;
										color: #FF6F4D;
										font-size: 28rpx;
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
