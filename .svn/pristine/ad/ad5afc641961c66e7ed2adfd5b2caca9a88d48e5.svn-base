<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="积分明细"></navTitle>
		</view>
		<view class="box-content" :style="{display:isData?'block':'none'}">
			<z-paging ref="paging1" @query="queryList" :list.sync="goodsList" loading-more-no-more-text="已经到底了"
				:refresher-angle-enable-change-continued="false" :touchmove-propagation-enabled="true"
				:use-custom-refresher="true" style="height: 100%;">
				<view class="box-content-list">
					<view class="box-content-list-li" v-for="(item,index) in goodsList" :Key="item.id">
						<view class="box-content-list-list-wrap">
							<view class="box-content-list-list-wrap-title">{{item.type_name}}</view>
							<view class="box-content-list-list-wrap-text">{{item.createtime}}</view>
						</view>
						<view class="box-content-list-list-msg"
							:class="item.score>0?'box-content-list-list-green':'box-content-list-list-black'">
							<text>{{item.score>0?'+':''}}{{item.score}}</text>
						</view>
					</view>
				</view>
			</z-paging>
		</view>
		<view class="box-content" :style="{display:!isData?'block':'none'}">
			<loading v-if="isLoad" />
			<no-data v-if="!isLoad" />
		</view>
	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	import zPaging from '../../uni_modules/z-paging/components/z-paging/z-paging.vue'
	import loading from '../../components/loading/loading.vue'
	import noData from "../../components/no-data/no-data.vue"
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				goodsList: [],
				isData: false, //是否有数据
				isLoad: true, //加载状态   true 为加载中 false 为无数据
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

			// 上拉 下拉
			queryList(pageNo, pageSize) {
				this.getPointsDetails(pageNo, pageSize)
			},
			

			getPointsDetails(num,size) {
				var vuedata = {
					page_index:num, // 请求页数，
					each_page: size, // 请求条数
					select_sort: 1
				}
				this.apiget('api/v1/members/score', vuedata).then(res => {
					if (res.status == 200) {
						if (res.data.data.length != 0) {
							this.isData = true;
							let list = res.data.data
							let totalSize = res.data.total_rows
							this.$refs.paging1.complete(list);
						} else {
							this.isData = false;
							this.isLoad = false;
							
						}

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
		background: #fff;

		.box-head {
			background-color: #fff;
		}

		.box-content {
			flex: 1;
			overflow-y: scroll;

			.box-content-list {
				padding: 0 40rpx;
				box-sizing: border-box;

				.box-content-list-li {
					display: flex;
					align-items: center;
					justify-content: space-between;
					height: 131rpx;
					border-bottom: 1rpx solid #ededed;

					.box-content-list-list-wrap {
						font-family: Source Han Sans CN;
						font-weight: 400;

						.box-content-list-list-wrap-title {
							font-size: 32rpx;
							color: #000;
						}

						.box-content-list-list-wrap-text {
							font-size: 24rpx;
							color: #999;
						}
					}

					.box-content-list-list-msg {
						font-size: 40rpx;
						font-family: Lato;
						font-weight: 400;
					}

					.box-content-list-list-green {
						color: #26BF82;
					}

					.box-content-list-list-black {
						color: #000;
					}
				}
			}
		}


	}
</style>
