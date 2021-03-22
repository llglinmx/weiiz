<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="积分明细"></navTitle>
		</view>
		<view class="box-content">
			<mescroll-uni ref="mescrollRef" @down="downCallback" @up="upCallback" :down="downOption" :up="upOption"
				:height="mesHeight">
				<view class="box-content-list" v-if="isData">
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
				<view class="box-content-load" :style="{height:mesHeight+'rpx'}" v-if="!isData">
					<loading v-if="isLoad" />
					<no-data v-if="!isLoad" />
				</view>
			</mescroll-uni>
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
				barHeight: 0, //顶部电量导航栏高度
				goodsList: [],
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
				isData: false, //是否有数据
				isLoad: true, //加载状态   true 为加载中 false 为无数据
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

			/*下拉刷新的回调*/
			downCallback() {
				this.mescroll.resetUpScroll()
				this.goodsList = []
			},

			/*上拉加载的回调*/
			upCallback(page) {
				this.getPointsDetails(page)
			},

			getPointsDetails(page) {
				var vuedata = {
					page_index: page.num, // 请求页数，
					each_page: page.size, // 请求条数
					select_sort: 1
				}
				this.apiget('api/v1/members/score', vuedata).then(res => {
					if (res.status == 200) {
						if (res.data.data.length != 0) {
							this.isData = true;
							let list = res.data.data
							let totalSize = res.data.total_rows
							//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
							this.mescroll.endBySize(list.length, totalSize); //必传参数(当前页的数据个数, 总数据量)
							//设置列表数据
							if (page.num == 1) this.goodsList = []; //如果是第一页需手动制空列表
							this.goodsList = this.goodsList.concat(list); //追加新数据
							// console.log(this.goodsList)
						} else {
							this.isData = false;
							this.isLoad = false;
							this.mescroll.endErr()
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
