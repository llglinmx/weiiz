<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle :navTitle="lan.Systemmessagez"></navTitle>
		</view>
		<view class="box-content" :style="{display:isData?'block':'none'}">
			<z-paging ref="paging1" @query="queryList" :list.sync="dataList" :loading-more-no-more-text="lan.overz"
				:refresher-angle-enable-change-continued="false" :touchmove-propagation-enabled="true"
				:use-custom-refresher="true" style="height: 100%;">
				<view class="box-content-main">
					<view class="box-content-list" v-for="(item,index) in dataList" :key="item.id">
						<view class="box-content-list-time flex-center">{{item.createtime}}</view>
						<view class="box-content-list-main">
							<view class="box-content-list-main-top">
								<view class="box-content-list-main-top-title"
									:class="item.state==2?'box-content-list-main-top-after':''">{{item.title}}</view>
								<view class="box-content-list-main-top-text">{{item.content}}</view>
							</view>
							<view class="box-content-list-main-bottom">
								<view class="list-main-bottom-title">{{lan.Clickview}}</view>
								<view class="list-main-bottom-more">
									<text class="iconfont icongengduo icon-font"
										style="color: #999;font-size: 28rpx;"></text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</z-paging>
		</view>
		<view class="box-content" :style="{display:!isData?'block':'none'}">
			<loading v-if="isLoad" />
			<no-data :msg='lan.noDataz' v-if="!isLoad" />
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
				dataList: [],
				isData: false,
				isLoad: true,
				lan:{}
			};
		},
		components: {
			navTitle,
			loading,
			noData,
			zPaging,
		},
		onReady() {
			// 获取顶部电量状态栏高度
			uni.getSystemInfo({
				success: (res) => {
					this.barHeight = res.statusBarHeight
				}
			});
		},
		onLoad() {
			this.getLanguage()
		},
		methods: {

			// 上拉 下拉
			queryList(pageNo, pageSize) {
				this.getData(pageNo, pageSize)
			},

			// 获取首页信息
			getData(num, size) {
				var vuedata = {
					type: 1,
					page_index: num, // 请求页数，
					each_page: size, // 请求条数
				}
				this.apiget('api/v1/members/msg', vuedata).then(res => {
					if (res.status == 200) {
						if (res.data.data.length != 0) {
							this.isData = true
							let list = res.data.data
							this.$refs.paging1.complete(list);
						} else {
							this.isData = false
							this.isLoad = false
						}

					}
				});
			},
			// 请求语言包
			getLanguage() {
				this.apiget('language/info', {
					name: 'mypage'
				}).then(res => {
					if (res.status == 200) {
					  let language=res.data.language
					  this.lan=res.data.language
			}
				});
			},
		},
		
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

			.box-content-main {
				padding: 0 40rpx;
				box-sizing: border-box;
				width: 100%;
				height: 100%;

				.box-content-list {
					width: 100%;
					display: flex;
					align-items: center;
					flex-direction: column;

					.box-content-list-time {
						width: 270rpx;
						height: 48rpx;
						margin: 20rpx 0;
						background: #E0E0E0;
						border-radius: 5rpx;
						font-size: 24rpx;
						color: #fff;
					}

					.box-content-list-main {
						width: 100%;
						background: #fff;
						border-radius: 10rpx;

						.box-content-list-main-top {
							min-height: 184rpx;
							padding: 30rpx;
							box-sizing: border-box;
							border-bottom: 1rpx solid #ededed;

							.box-content-list-main-top-title {
								position: relative;
								padding-left: 20rpx;
								box-sizing: border-box;
								font-size: 32rpx;
								color: #000;
							}

							.box-content-list-main-top-after {}

							.box-content-list-main-top-after::after {
								position: absolute;
								top: 0;
								bottom: 0;
								left: 0;
								margin: auto;
								content: "";
								width: 12rpx;
								height: 12rpx;
								background: #E62F30;
								border-radius: 50%;
							}

							.box-content-list-main-top-text {
								font-size: 28rpx;
								color: #999;
							}

						}

						.box-content-list-main-bottom {
							height: 89rpx;
							display: flex;
							align-items: center;
							padding: 0 30rpx;
							box-sizing: border-box;
							justify-content: space-between;

							.list-main-bottom-title {
								color: #000;
								font-size: 28rpx;
							}

							.list-main-bottom-more {
								image {
									width: 24rpx;
									height: 24rpx;
								}
							}
						}
					}
				}
			}
		}

	}
</style>
