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
			<view class="box-content-gift-list">
				<view class="box-content-gift-list-li" v-for="(item,index) in dataList" :key="index">
					<view class="box-content-gift-list-list-top">
						<view class="gift-list-list-top-title">卡号：40019911007</view>
						<view class="gift-list-list-top-text">待领取</view>
					</view>
					<view class="box-content-gift-list-li-center">
						<view class="gift-list-li-center-image">
							<image src="../../static/images/gift.png" mode="aspectFill"></image>
						</view>
						<view class="gift-list-li-center-info">
							<view class="gift-list-li-center-info-title">
								春节礼品卡
							</view>
							<view class="gift-list-li-center-info-text">
								内含 2 件商品
							</view>
							<view class="gift-list-li-center-info-time">
								有效期至：2021-01-31
							</view>
						</view>
					</view>
					<view class="box-content-gift-list-li-bottom">
						<view class="gift-list-li-bottom-btn flex-center gift-list-li-bottom-btn-666" @click="give">转赠礼物
						</view>
						<view class="gift-list-li-bottom-btn flex-center gift-list-li-bottom-btn-ff6f4d"
							@click="cardDetails(item)">查看详情</view>
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
			status: {}
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
					type: 12,
					coupon_status: this.status
				}
				this.apiget('api/v1/members/set_meal', vuedata).then(res => {
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

		}
	}
</script>

<style scoped lang="scss">
	.box-content-gift-list {
		padding: 0 20rpx;
		box-sizing: border-box;

		.box-content-gift-list-li:last-child {
			margin-bottom: 20rpx;
		}

		.box-content-gift-list-li {
			padding: 20rpx;
			box-sizing: border-box;
			margin-top: 20rpx;
			background: #fff;
			border-radius: 20rpx;

			.box-content-gift-list-list-top {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.gift-list-list-top-title {
					font-size: 28rpx;
					color: #333;
				}

				.gift-list-list-top-text {
					font-size: 29rpx;
					color: #FF6F4D;
				}
			}

			.box-content-gift-list-li-center {
				display: flex;
				margin: 30rpx 0;

				.gift-list-li-center-image {
					image {
						width: 232rpx;
						height: 130rpx;
					}
				}

				.gift-list-li-center-info {
					flex: 1;
					margin-left: 20rpx;

					.gift-list-li-center-info-title {
						margin-bottom: 20rpx;
						color: #000;
						font-size: 34rpx;
						line-height: 32rpx;
					}

					.gift-list-li-center-info-text {

						font-size: 24rpx;
						color: #999;
					}

					.gift-list-li-center-info-time {
						font-size: 24rpx;
						color: #999;
					}
				}

			}

			.box-content-gift-list-li-bottom {
				display: flex;
				justify-content: flex-end;

				.gift-list-li-bottom-btn {
					width: 176rpx;
					height: 60rpx;
					margin-right: 20rpx;
					background: #FFFFFF;
					border: 1rpx solid #666666;
					border-radius: 32rpx;
					font-size: 28rpx;
				}

				.gift-list-li-bottom-btn:last-child {
					margin-right: 0;
				}

				.gift-list-li-bottom-btn-ff6f4d {
					color: #FF6F4D;
					border: 1rpx solid #FF6F4D;
				}

				.gift-list-li-bottom-btn-666 {
					color: #666;
					border: 1rpx solid #666;
				}
			}
		}
	}
</style>
