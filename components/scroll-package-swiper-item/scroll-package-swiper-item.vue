<template>
	<view class="content">
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
			<view class="box-package-card-list">
				<view class="box-package-card-list-li" v-for="(item,index) in dataList" :key="index"
					@click="cardDetails(item.id)">
					<view class="box-package-card-list-li-top"
						:class="currentIndex==2?'box-package-card-bg-gray':'box-package-card-bg-red'">
						<view class="box-package-card-list-li-top-left">
							<view class="card-list-li-top-left-title">{{item.service_name}}</view>
							<view class="card-list-li-top-left-price">489.00元</view>
							<view class="card-list-li-top-left-time">有效期至：{{item.use_end}}</view>
							<view class="card-list-li-top-left-store">适用门店：印象诗意·悠然SPA</view>
						</view>
						<view class="box-package-card-list-li-top-right">
							<image :src="item.simg" mode="aspectFill"></image>
						</view>
					</view>
					<view class="box-package-card-list-li-bottom">
						<view class="card-list-li-bottom-title">
							<view class="card-list-li-bottom-title-item">项目</view>
							<view class="card-list-li-bottom-title-item">使用次数</view>
							<view class="card-list-li-bottom-title-item">已使用</view>
							<view class="card-list-li-bottom-title-item">剩余次数</view>
						</view>
						<view class="card-list-li-bottom-main" :style="{color:currentIndex==2?'#999':'#333'}"
							v-for="(i,j) in item.service_data" :key="i.id">
							<view class="card-list-li-bottom-title-item">{{i.name}}</view>
							<view class="card-list-li-bottom-title-item">9</view>
							<view class="card-list-li-bottom-title-item">3</view>
							<view class="card-list-li-bottom-title-item"
								:style="{color:currentIndex==2?'#999':'#FF967D'}">{{i.times}}</view>
						</view>
						<view class="package-card-list-li-bottom-abandoned" v-if="currentIndex==2"></view>
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
			status: {
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
					type: 7,
					use_status: this.status
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


			cardDetails(id) {
				this.$emit('detail', id)
			},
		}
	}
</script>

<style scoped lang="scss">
	.box-package-card-list {
		padding: 0 20rpx;
		box-sizing: border-box;

		.box-package-card-list-li:last-child {
			margin-bottom: 20rpx;
		}

		.box-package-card-list-li {
			display: flex;
			align-items: center;
			flex-direction: column;
			margin-top: 20rpx;

			.box-package-card-bg-red {
				background: #FF967D;
			}

			.box-package-card-bg-gray {
				background: #ccc;
			}

			.box-package-card-list-li-top {
				display: flex;
				width: 100%;
				height: 228rpx;
				padding: 30rpx;
				box-sizing: border-box;
				transition: 0.3s;

				border-radius: 20rpx 20rpx 0rpx 0rpx;
				font-family: Source Han Sans CN;
				font-weight: 400;

				.box-package-card-list-li-top-left {
					flex: 1;
					color: #fff;

					.card-list-li-top-left-title {
						font-size: 36rpx;
						line-height: 32rpx;
					}

					.card-list-li-top-left-price {
						margin: 15rpx 0 20rpx 0;
						font-weight: bold;
						font-size: 28rpx;
					}

					.card-list-li-top-left-time {
						font-size: 24rpx;
					}

					.card-list-li-top-left-store {
						margin-top: 10rpx;
						font-size: 24rpx;
					}
				}

				.box-package-card-list-li-top-right {
					display: flex;
					align-items: center;
					margin-left: 20rpx;

					image {
						width: 224rpx;
						height: 168rpx;
						border-radius: 10rpx 10rpx 0 0;
					}
				}

			}

			.box-package-card-list-li-bottom {
				position: relative;
				width: 100%;
				padding: 30rpx;
				box-sizing: border-box;
				background: #FFFFFF;
				border-radius: 0rpx 0rpx 20rpx 20rpx;

				.card-list-li-bottom-title,
				.card-list-li-bottom-main {
					display: flex;
					align-items: center;
					font-size: 28rpx;
					transition: 0.3s;
					font-family: Source Han Sans CN;
					font-weight: 400;

					.card-list-li-bottom-title-item {
						padding: 10rpx 0;
						flex: 1;
						display: flex;
						align-items: center;
						justify-content: center;
					}
				}

				.package-card-list-li-bottom-abandoned {
					position: absolute;
					top: 0rpx;
					right: 0rpx;
					bottom: 0;
					left: 0;
					margin: auto;
					width: 161rpx;
					height: 106rpx;
					background: url(../../static/images/be-overdue-ico.png) no-repeat;
					background-size: contain;
				}

			}
		}
	}
</style>
