<template>
	<view class="content-box">
		<!-- 这里设置了z-paging加载时禁止自动调用reload方法，自行控制何时reload（懒加载），同时允许touchmove事件冒泡，否则无法横向滚动切换tab -->
		<z-paging ref="paging" @query="queryList" :list.sync="dataList" loading-more-no-more-text="已经到底了"
			:mounted-auto-call-reload="false" :refresher-angle-enable-change-continued="false"
			:touchmove-propagation-enabled="true" :use-custom-refresher="true" style="height: 100%;">
			<!-- 自定义下拉刷新view，若不设置，则使用z-paging自带的下拉刷新view -->
			<!-- <custom-refresher slot="refresher"></custom-refresher> -->
			<loading v-if="isLoad"></loading>
			<no-data v-if="dataList.length<=0&&!isLoad"></no-data>
			<!-- <empty-view slot="empty"></empty-view> -->
			<!-- 如果希望其他view跟着页面滚动，可以放在z-paging标签内 -->
			<!-- list数据，建议像下方这样在item外层套一个view，而非直接for循环item，因为slot插入有数量限制 -->
			<view class="sub-content-list" v-if="dataList.length>0">
				<view class="sub-content-list-li" v-for="(item,index) in dataList" :key="item.id">
					<view class="content-list-li-top">
						<view class="list-li-top-title flex-center">
							<text class="iconfont iconshangjia"
								style="font-size: 28rpx;color: #FF967D;margin-top: 4rpx;"></text>
							<text>{{item.store_name}}</text>
						</view>
						<view class="list-li-top-state">
							<text v-if="item.status==-1">待付款</text>
							<text v-if="item.status==-2">订单已关闭</text>
							<text v-if="item.status==1">待核销</text>
							<text v-if="item.status==2">已退款</text>
						</view>
					</view>
					<view class="list-li-wrap">
						<view class="list-li-wrap-item" v-for="(j,idx) in 1">
							<view class="list-li-item-info-image">
								<image :src="item.member_img" mode="aspectFill"></image>
							</view>
							<view class="list-li-item-info">
								<view class="list-li-info-top">
									<view class="list-li-info-top-title">{{item.reserve_name}}</view>
									<view class="list-li-info-top-text">￥298.00</view>
								</view>
								<view class="list-li-info-center-box">
									<view class="list-center-box-wrap">
										<view class="list-center-box-wrap-item flex-center">
											60分钟
										</view>
										<view class="list-center-box-wrap-item flex-center">
											背部按摩
										</view>
										<view class="list-center-box-wrap-item flex-center">
											60分钟
										</view>
									</view>
									<view class="list-center-box-number">
										x1
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="content-list-li-bottom">
						<view class="content-list-li-payment">
							<view class="list-li-payment-text">实付款：</view>
							<view class="list-li-payment-money">
								<text>￥1200.00</text>
							</view>
						</view>
						<view class="content-list-li-all-btns">
							<view class="more-list-li-btn flex-center more-list-li-btn-border" v-if="item.status==-1">
								取消订单
							</view>
							<view class="more-list-li-btn flex-center" v-if="item.status==-1">去付款</view>
							<view class="more-list-li-btn flex-center more-list-li-btn-border-red" v-if="item.status==1"
								@click="viewCouponCode(item)">查看券码</view>
							<view class="more-list-li-btn flex-center more-list-li-btn-border"
								v-if="item.status==1&&item.use_status==1" @click="OrderEval">订单评价</view>
							<view class="more-list-li-btn flex-center more-list-li-btn-border-red"
								v-if="item.refund_status==-1&&item.status==2">取消申请</view>
						</view>
					</view>
				</view>
			</view>
		</z-paging>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList: [],
				firstLoaded: false,
				isLoad: true,
			}
		},
		props: {
			tabIndex: {
				type: Number,
				default: function() {
					return 0
				}
			},
			currentIndex: {
				type: Number,
				default: function() {
					return 0
				}
			},
			orderType: {
				type: Number,
				default: 1
			}
		},
		watch: {
			currentIndex: {
				handler(newVal) {
					if (newVal === this.tabIndex) {
						//懒加载，当滑动到当前的item时，才去加载
						if (!this.firstLoaded) {
							this.$nextTick(() => {
								this.$refs.paging.reload();
							})
						}
					}
				},
				immediate: true
			},
		},
		methods: {
			queryList(pageNo, pageSize) {
				//组件加载时会自动触发此方法，因此默认页面加载时会自动触发，无需手动调用
				//这里的pageNo和pageSize会自动计算好，直接传给服务器即可
				//模拟请求服务器获取分页数据，请替换成自己的网络请求
				// this.$request.queryList(pageNo, pageSize, this.tabIndex + 1, (data) => {
				// 	this.$refs.paging.complete(data);
				// 	this.firstLoaded = true;
				// })
				var page = {
					num: pageNo,
					size: pageSize
				}
				this.getDataList(page)
			},


			// 获取数据
			getDataList(page) {
				var vuedata = {
					page_index: page.num, // 请求页数，
					each_page: page.size, // 请求条数
					order_status: this.orderType
				}
				this.apiget('api/v1/members/member_order', vuedata).then(res => {
					if (res.status == 200) {
						if (res.data.data.length != 0) {
							let list = res.data.data
							let totalSize = res.data.total_rows
							this.$refs.paging.addData(list);
							this.firstLoaded = true;
						}
						this.isLoad = false

					}
				});
			},
			// 查看券码 
			viewCouponCode(item) {
				this.$emit('couponCode', item.id)
			}
		}
	}
</script>

<style scoped lang="scss">
	.sub-content-list {

		.sub-content-list-li {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: 20rpx 40rpx;
			margin-top: 20rpx;
			box-sizing: border-box;
			background: #fff;

			.content-list-li-top {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.list-li-top-title {

					text {
						margin-right: 8rpx;
						font-size: 28rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #000000;
					}
				}

				.list-li-top-state {
					font-size: 28rpx;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color: #FF6F4D;
				}
			}

			.list-li-wrap {
				padding: 30rpx 0;
				box-sizing: border-box;

				.list-li-wrap-item {
					display: flex;
					margin-bottom: 20rpx;

					.list-li-item-info-image {
						width: 132rpx;
						height: 132rpx;

						image {
							width: 132rpx;
							height: 132rpx;
							border-radius: 10rpx;
						}
					}

					.list-li-item-info {
						flex: 1;
						margin-left: 20rpx;

						.list-li-info-top {
							display: flex;
							justify-content: space-between;

							.list-li-info-top-title {
								font-size: 30rpx;
								font-family: Source Han Sans CN;
								font-weight: 500;
								color: #000000;
							}

							.list-li-info-top-text {
								font-size: 28rpx;
								font-family: Source Han Sans CN;
								font-weight: 400;
								color: #000000;
							}
						}

						.list-li-info-center-box {
							display: flex;
							justify-content: space-between;

							.list-center-box-wrap {
								display: flex;
								flex-wrap: wrap;
								margin-top: 10rpx;

								.list-center-box-wrap-item {
									padding: 6rpx 10rpx;
									margin-right: 8rpx;
									margin-bottom: 8rpx;
									font-size: 22rpx;
									font-family: Source Han Sans CN;
									font-weight: 400;
									line-height: 22rpx;
									color: #666666;
									background: #F5F5F5;
									border-radius: 3px;
								}

								.list-center-box-wrap-item:last-child {
									margin-right: 0;
								}
							}

							.list-center-box-number {
								margin-left: 10rpx;
								font-size: 28rpx;
								font-family: Source Han Sans CN;
								font-weight: 400;
								color: #999999;
							}
						}
					}
				}

				.list-li-wrap-item:last-child {
					margin-bottom: 0;
				}
			}

			.content-list-li-bottom {
				display: flex;
				justify-content: space-between;

				.content-list-li-payment {
					display: flex;
					align-items: center;

					.list-li-payment-text {
						font-size: 24rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #999999;
					}

					.list-li-payment-money {
						font-size: 24rpx;
						font-family: Source Han Sans CN;
						font-weight: 500;
						color: #FF4D4D;

						text {
							font-size: 32rpx;
						}
					}
				}

				.content-list-li-all-btns {
					display: flex;

					.more-list-li-btn {
						width: 176rpx;
						height: 60rpx;
						margin-right: 20rpx;
						background: #FF8366;
						border-radius: 32rpx;
						font-size: 28rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #fff;
					}

					.more-list-li-btn-border {
						background: none !important;
						border: 1px solid #666666;
						color: #666666 !important;
					}

					.more-list-li-btn-border-red {
						background: none !important;
						border: 1px solid #FF6F4D;
						color: #FF6F4D !important;
					}

					.more-list-li-btn:last-child {
						margin-right: 0;
					}
				}
			}
		}
	}
</style>
