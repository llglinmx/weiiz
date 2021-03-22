<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="兑换记录"></navTitle>
		</view>
		<view class="box-content">
			<mescroll-uni ref="mescrollRef" @down="downCallback" @up="upCallback" :down="downOption" :up="upOption"
				:height="mesHeight">
				<view class="box-content-list" v-if="isData">
					<view class="box-content-list-li" v-for="(item,index) in exchangeList" :key="item.id">
						<view class="box-content-list-li-top">
							<view class="box-content-list-li-top-title">
								兑换单号：{{item.out_trade_no}}
							</view>
							<view class="box-content-list-li-top-msg">
								已发货
							</view>
						</view>
						<view class="box-content-list-li-center">
							<view class="box-content-list-li-center-image">
								<image src="../../static/images/goods-004.png" mode="aspectFill"></image>
							</view>
							<view class="box-content-list-li-center-info">
								<view class="box-content-list-li-center-info-title">人工智能音箱</view>
								<view class="box-content-list-li-center-info-points">
									<view class="box-content-list-li-center-info-points-left">
										<text class="iconfont iconjifen icon-font" style="font-size: 28rpx;"></text>
										<text>{{item.score==null?0:item.score}}</text>
									</view>
									<view class="box-content-list-li-center-info-points-right">
										x1
									</view>
								</view>
								<view class="box-content-list-li-center-info-time">
									兑换时间：{{item.createtime}}
								</view>
							</view>
						</view>
						<view class="box-content-list-li-bottom">
							<view class="box-content-list-li-bottom-item flex-center" v-if="index!=1">
								查看物流
							</view>
							<view class="box-content-list-li-bottom-item list-li-bottom-item-ff6f4d flex-center"
								v-if="index==1">
								确认收货
							</view>
							<view class="box-content-list-li-bottom-item flex-center" v-if="index==2">
								提醒发货
							</view>
							<view class="box-content-list-li-bottom-item flex-center" v-if="index==3">
								删除记录
							</view>
						</view>
					</view>
				</view>
				<view class="box-content-load-box" :style="{height:mesHeight+'rpx'}" v-else>
					<loading v-if="isLoad" />
					<no-data v-if="!isLoad" />
				</view>
			</mescroll-uni>
		</view>

		<view class="box-footer">

		</view>
	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	import MescrollMixin from "../../components/mescroll-uni/mescroll-mixins.js";
	import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
	import loading from '../../components/loading/loading.vue'
	import noData from "../../components/no-data/no-data.vue"

	export default {
		mixins: [MescrollMixin], // 使用mixin
		data() {
			return {
				isData: false, //是否有数据
				isLoad: true, //加载状态   true 为加载中 false 为无数据
				barHeight: 0, //顶部电量导航栏高度
				mesHeight: 0,
				downOption: { // 下拉刷新配置
					auto: false,
				},
				upOption: { // 上拉加载配置
					noMoreSize: 5,
					textLoading: "正在加载更多数据",
					textNoMore: "——  已经到底了  ——",
					isBounce: true,
					auto: true,
				},
				exchangeList: [],
			};
		},
		components: {
			navTitle,
			MescrollUni,
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


			getExchange(page) {
				var vuedata = {
					page_index: page.num, // 请求页数，
					each_page: page.size, // 请求条数
				}
				this.apiget('api/v1/members/score/exchange', vuedata).then(res => {
					if (res.status == 200) {
						console.log(res.data.length)
						if (res.data.length!== 0) {
							this.isData = true;
							let list = res.data.data
							let totalSize = res.data.total_rows
							//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
							this.mescroll.endBySize(list.length, totalSize); //必传参数(当前页的数据个数, 总数据量)
							//设置列表数据
							if (page.num == 1) this.exchangeList = []; //如果是第一页需手动制空列表
							this.exchangeList = this.exchangeList.concat(list); //追加新数据
							console.log(this.exchangeList)
						} else{
							this.isData = false;
							this.isLoad = false;
							this.mescroll.endErr()
						}
					}
				});
			},


			/*下拉刷新的回调*/
			downCallback() {
				this.mescroll.resetUpScroll()
				this.exchangeList = []
			},

			/*上拉加载的回调*/
			upCallback(page) {
				this.isLoad = true
				this.getExchange(page)
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

			.box-content-list {
				padding: 0 20rpx;
				box-sizing: border-box;

				.box-content-list-li {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					height: 336rpx;
					border-radius: 20rpx;
					padding: 20rpx;
					margin-top: 20rpx;
					box-sizing: border-box;
					background: #fff;

					.box-content-list-li-top {
						display: flex;
						align-items: center;
						justify-content: space-between;
						font-size: 28rpx;

						.box-content-list-li-top-title {
							color: #000;
						}

						.box-content-list-li-top-msg {
							color: #FF6F4D;
							font-size: 29rpx;
						}
					}

					.box-content-list-li-center {
						display: flex;
						align-items: center;

						.box-content-list-li-center-image {
							image {
								width: 148rpx;
								height: 148rpx;
							}
						}

						.box-content-list-li-center-info {
							margin-left: 20rpx;
							flex: 1;

							.box-content-list-li-center-info-title {
								font-size: 28rpx;
								color: #000;
							}

							.box-content-list-li-center-info-points {
								display: flex;
								align-items: center;
								justify-content: space-between;
								margin-top: 40rpx;

								.box-content-list-li-center-info-points-left {
									display: flex;
									align-items: center;

									.icon-font {
										color: #FF967D;
									}

									text {
										margin-left: 10rpx;
										font-size: 28rpx;
										color: #FF8366;
									}
								}

								.box-content-list-li-center-info-points-right {
									font-size: 28rpx;
									color: #999;
								}
							}

							.box-content-list-li-center-info-time {
								font-size: 24rpx;
								color: #999;
							}
						}
					}

					.box-content-list-li-bottom {
						display: flex;
						justify-content: flex-end;

						.box-content-list-li-bottom-item {
							width: 176rpx;
							height: 60rpx;
							border: 1rpx solid #666666;
							border-radius: 32rpx;
							margin-right: 20rpx;
							color: #666;
							font-size: 28rpx;
						}

						.box-content-list-li-bottom-item:last-child {
							margin-right: 0;
						}

						.list-li-bottom-item-ff6f4d {
							border: 1px solid #FF6F4D !important;
							color: #FF6F4D !important;
						}
					}
				}
			}

			.box-content-load-box {
				height: 100%;


			}

		}

		.box-footer {}
	}
</style>
