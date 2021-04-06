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
			<view class="list-wrap" v-if="dataList.length>0">
				<view class="list-wrap-item" v-for="(item,index) in dataList" :key="index">
					<view class="list-wrap-item-left flex-center"
						:class="{'list-wrap-item-left-bg-blue':tabIndex==0,'list-wrap-item-left-bg-yellow':tabIndex==1,'list-wrap-item-left-bg-gray':tabIndex==2||tabIndex==3}">
						<view class="list-wrap-item-left-money">{{item.reduce_cost | rounding}} <text>元</text></view>
						<view class="list-wrap-item-left-text">满{{item.least_cost}}元可用</view>
					</view>
					<view class="list-wrap-item-right">
						<view class="list-wrap-item-right-info">
							<view class="list-wrap-item-right-info-title">{{item.name}}</view>
							<view class="list-wrap-item-right-info-text" style="margin-top: 50rpx;">
								门店：{{item.store_name}}</view>
							<view class="list-wrap-item-right-info-text">有效期：{{item.end_time}}
							</view>
						</view>
						<view class="list-wrap-item-right-btn list-wrap-item-right-btn-blue flex-center"
							v-if="tabIndex==0">立即使用</view>
						<view class="list-wrap-item-right-btn list-wrap-item-right-btn-yellow flex-center"
							v-if="tabIndex==1">立即使用</view>
						<view class="list-wrap-item-right-info-abandoned" v-if="tabIndex==2"></view>
						<view class="list-wrap-item-right-info-be-overdue" v-if="tabIndex==3"></view>
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
			type: {
				default: -1
			},
			status: {
				default: -1
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
		filters: {
			rounding(val) {
				var arr = val.split('.')
				// 字符串 切割金额 保留整数
				return arr[0]
			}
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
					type: this.type,
					status: this.status
				}
				this.apiget('api/v1/members/coupon', vuedata).then(res => {
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
	.list-wrap {
		height: 100%;
		overflow-y: scroll;
		padding: 0 30rpx;
		box-sizing: border-box;

		.list-wrap-item {
			display: flex;
			align-items: center;
			margin-top: 20rpx;

			.list-wrap-item-left {
				width: 200rpx;
				height: 200rpx;
				flex-direction: column;
				color: #fff;

				.list-wrap-item-left-money {
					font-size: 72rpx;

					text {
						font-size: 22rpx;
					}
				}

				.list-wrap-item-left-text {
					font-size: 22rpx;
				}

			}

			.list-wrap-item-left-bg-blue {
				background: url(../../static/images/coupone-sky-blue.png) no-repeat;
				background-size: contain;
			}

			.list-wrap-item-left-bg-yellow {
				background: url(../../static/images/coupons-yellow.png) no-repeat;
				background-size: contain;
			}

			.list-wrap-item-left-bg-gray {
				background: url(../../static/images/coupons-gray.png) no-repeat;
				background-size: contain;
			}

			.list-wrap-item-right {
				position: relative;
				display: flex;
				align-items: center;
				height: 200rpx;
				flex: 1;
				padding: 30rpx 20rpx;
				box-sizing: border-box;
				background: #fff;

				.list-wrap-item-right-info {
					flex: 1;

					.list-wrap-item-right-info-title {
						font-size: 32rpx;
						color: #000;
					}

					.list-wrap-item-right-info-text {
						color: #999;
						font-size: 22rpx;
					}
				}

				.list-wrap-item-right-btn {
					width: 56rpx;
					height: 150rpx;
					padding: 24rpx 16rpx;
					box-sizing: border-box;
					color: #fff;
					font-size: 24rpx;
					border-radius: 54rpx;
					line-height: 26rpx;
				}

				.list-wrap-item-right-btn-blue {
					background: #88ADF7;
				}

				.list-wrap-item-right-btn-yellow {
					background: #FFCD4D;
				}

				.list-wrap-item-right-info-abandoned {
					position: absolute;
					top: 47rpx;
					right: 20rpx;
					width: 161rpx;
					height: 106rpx;
					background: url(../../static/images/used-icon.png) no-repeat;
					background-size: contain;
				}

				.list-wrap-item-right-info-be-overdue {
					position: absolute;
					top: 47rpx;
					right: 20rpx;
					width: 161rpx;
					height: 106rpx;
					background: url(../../static/images/be-overdue-ico.png) no-repeat;
					background-size: contain;
				}
			}
		}
	}
</style>
