<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<view class="nav-box">
				<view class="nav-back" @click="Gback">
					<image src="../../static/images/back.png" mode="aspectFill"></image>
				</view>
				<view class="nav-title">礼品卡商城</view>
				<view class="nav-confirm" @click="cardList">
					我的
				</view>
			</view>
		</view>
		<view class="box-content">
			<view class="box-content-wrap" :style="{display:isData?'block':'none'}">
				<z-paging ref="paging" @query="queryList" :list.sync="giftList" loading-more-no-more-text="已经到底了"
					:refresher-angle-enable-change-continued="false" :touchmove-propagation-enabled="true"
					:use-custom-refresher="true">
					<view class="box-content-wrap-list">
						<view class="wrap-list-li" v-for="(item,index) in giftList" :key="item.id"
							@click="cardDetails(item.id)">
							<view class="wrap-list-li-image">
								<image :src="item.simg" mode="aspectFill"></image>
							</view>
							<view class="wrap-list-li-info">
								<view class="wrap-list-li-info-title">{{item.name}}</view>
								<view class="wrap-list-li-info-price">￥{{item.price}}</view>
								<view class="wrap-list-li-info-text">
									包含了全身按摩、背部按摩产品以及2张优惠券
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
				giftList: [],
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
		onLoad() {

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
				this.getGift(pageNo, pageSize)
			},
			// 获取礼品卡
			getGift(num, size) {
				let vuedata = {
					page_index: num, // 请求页数，
					each_page: size, // 请求条数
				}
				this.apiget('pc/card/gift', vuedata).then(res => {
					if (res.status == 200) {
						let list = res.data.giftList
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

			// 点击顶部我的礼品卡
			cardList() {
				uni.navigateTo({
					url: "../../pagesMine/giftCard/giftCard"
				})
			},
			// 点击进入套餐卡详情
			cardDetails(id) {
				uni.navigateTo({
					url: "../../pagesIndexTwo/mallGiftCardDetails/mallGiftCardDetails?id=" + id
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
						display: flex;
						padding: 30rpx 40rpx 30rpx 0;
						box-sizing: border-box;
						border-bottom: 1rpx solid #ededed;

						.wrap-list-li-image {
							display: flex;
							align-items: center;

							image {
								width: 310rpx;
								height: 174rpx;
								border-radius: 10rpx;
							}
						}

						.wrap-list-li-info {
							margin-left: 20rpx;
							flex: 1;

							.wrap-list-li-info-title {
								font-size: 32rpx;
								color: #333;
								line-height: 32rpx;
							}

							.wrap-list-li-info-price {
								margin: 10rpx 0 20rpx 0;
								color: #FF4D4D;
								font-size: 32rpx;
							}

							.wrap-list-li-info-text {
								font-size: 24rpx;
								color: #999;
							}
						}


					}
				}
			}
		}

		.box-footer {}
	}
</style>
