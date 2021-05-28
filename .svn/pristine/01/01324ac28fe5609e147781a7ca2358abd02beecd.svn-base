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
			<view class="content-list-item">
				<view class="content-list-item-li" v-for="(item,index) in dataList"
					@click="allProblem(item,index)">
					<view class="content-list-item-li-title">支付问题</view>
					<view class="content-list-item-li-more flex-center">
						<text class="iconfont icongengduo icon-font"
							style="color: #ccc;font-size: 32rpx;font-weight: 500;"></text>
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
				}
				this.apiget('api/v1/members/help_center', vuedata).then(res => {
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
			// 问题点击进入详情
			allProblem(item, index) {
				console.log(index)
				uni.navigateTo({
					url: "../../pagesMineThree/problemDetails/problemDetails"
				})
			}

		}
	}
</script>

<style scoped lang="scss">
	.content-list-item {
		margin: 0 0 20rpx 0;
		background: #fff;
	
		.content-list-item-li {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 40rpx;
			box-sizing: border-box;
			height: 100rpx;
			border-bottom: 1rpx solid #EDEDED;
	
			.content-list-item-li-title {
				font-size: 28rpx;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #000000;
			}
	
			.content-list-item-li-more {
				.icon-more {
					margin-top: 4rpx;
				}
			}
		}
	
	}
</style>
