<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="按摩商家"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content-map-wrap box-content-public" :style="{width:mapWidth+'px'}">
				<view class="box-wrap-tabs">
					<view class="box-wrap-tabs-li" v-for="(item,index) in tabsList" :key="index"
						@click="tabsShowList(item,index)">
						<view class="box-tabs-li-text" :class="idx==index?'box-tabs-li-text-active':''">{{item.title}}
						</view>
						<view class="box-tabs-li-icon">
							<text class="iconfont iconxiangxiajiantou icon-font" style="color: #ccc;font-size: 28rpx;"
								v-if="idx!=index"></text>
							<text class="iconfont iconxiangxiajiantou icon-font"
								style="color: #FF8366;font-size: 28rpx;" v-else></text>

						</view>
					</view>
				</view>
				<view class="box-map-wrap-main">
					<view class="map-wrap-main-view">
						<button type="primary" @click="shrinkShow">点击打开单个商家</button>
					</view>
					<view class="map-wrap-main-list" :style="{bottom:bottomDistance+'px'}">
						<view class="map-wrap-list-icon" @click="shrinkHidden">
							<text class="iconfont iconxiangxiajiantou icon-font"
								style="color: #999;font-size: 44rpx;"></text>
						</view>
						<view class="map-wrap-list-content">
							<view class="list-content-image">
								<image style="width: 164rpx;height: 164rpx;" src="../../static/images/shop-ico.png"
									mode="aspectFill"></image>
							</view>
							<view class="list-content-info">
								<view class="list-content-info-title">
									印象诗意·悠然SPA
								</view>
								<view class="list-content-info-score">
									<text class="iconfont iconwujiaoxing icon-font"
										style="color: #FFCD4D;font-size: 28rpx;" v-for="item in 5"></text>
									<text>5分</text>
								</view>
								<view class="list-content-info-box">
									<view class="list-content-info-box-text">明发商业广场</view>
									<view class="list-content-info-address">
										<text class="iconfont icondingwei1 icon-font"
											style="color: #ccc;font-size: 24rpx;margin-top: 4rpx;"></text>
										<text>6.1km</text>
									</view>
								</view>
								<view class="list-content-info-service-content">
									<view class="list-info-service-content-li flex-center">
										按摩/SPA
									</view>
									<view class="list-info-service-content-li flex-center">
										按摩/SPA
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="box-content-list-wrap box-content-public" :style="{width:mapWidth+'px',left:mapLeft+'px'}">
				<view class="box-wrap-tabs">
					<view class="box-wrap-tabs-li" v-for="(item,index) in tabsList2" :key="index">
						<view class="box-tabs-li-text">{{item.title}}</view>
						<view class="box-tabs-li-icon" v-if="index!==2&&index!==3">
							<image :src="item.icon" mode="aspectFill" v-if="idx!=index"></image>
							<image :src="item.iconActive" mode="aspectFill" v-else></image>
						</view>
						<view class="box-tabs-li-icon-max" v-else>
							<image :src="item.icon" mode="aspectFill" v-if="idx!=index"></image>
							<image :src="item.iconActive" mode="aspectFill" v-else></image>
						</view>
					</view>
				</view>
				<view class="box-content-business-list" :style="{display:isData?'block':'none'}">
					<z-paging ref="paging" @query="queryList" :list.sync="storeList" loading-more-no-more-text="已经到底了"
						:refresher-angle-enable-change-continued="false" :touchmove-propagation-enabled="true"
						:use-custom-refresher="true">
						<view class="box-content-business-list-main">
							<view class="map-wrap-list-content" v-for="(item,index) in storeList" :key="item.id"
								@click="merchantDetails(item.id)">
								<view class="list-content-image">
									<image :src="item.bimg" mode="aspectFill"></image>
								</view>
								<view class="list-content-info">
									<view class="list-content-info-title">{{item.name}}</view>
									<view class="list-content-info-score">
										<text class="iconfont iconwujiaoxing icon-font"
											:style="{color:isComment(item.comment,storeIndex)?'#FFCD4D':'#eee',}"
											style="font-size: 28rpx;" v-for="(store,storeIndex) in 5"></text>
										<text>{{storeMsg(item.comment,index)}}分</text>
									</view>
									<view class="list-content-info-box">
										<view class="list-content-info-box-text">{{item.address}}</view>
										<view class="list-content-info-address">
											<text class="iconfont icondingwei1 icon-font"
												style="color: #ccc;font-size: 24rpx;margin-top: 4rpx;"></text>
											<text>6.1km</text>
										</view>
									</view>
									<view class="list-content-info-service-content">
										<view class="list-info-service-content-li flex-center" v-if="index!=0">
											按摩/SPA
										</view>
										<view class="list-content-info-service-content-msg" v-else>
											区域综合排名第1
										</view>
									</view>
								</view>
							</view>
						</view>
					</z-paging>
				</view>
				<view class="map-wrap-list-content-load" v-if="!isData">
					<loading v-if="isLoad" />
					<no-data v-if="!isLoad" />
				</view>
			</view>
			<view class="box-content-tab-btn" @click="tabClick" :class="isFlag?'box-content-tab-btn-state':''">
				<text class="iconfont iconcaidan icon-font"
					style="color: #666;font-size: 48rpx;margin-top: 4rpx;"></text>
				<text>商家列表</text>
			</view>

			<view class="box-content-drop-down" :style="{height:dropDownHeight+'px'}">
				<view class="massage-pull-down-all" v-if="isTabsType=='all'">
					全部
				</view>
				<view class="massage-pull-down-business" @click.stop="hiddenTabs" v-if="isTabsType=='business'">
					<view class="massage-pull-down-li" v-for="(item,index) in massageList">
						{{item}}
					</view>
				</view>
				<view class="massage-pull-down-price" v-if="isTabsType=='price'">
					价格
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	import UniPopup from "../../components/uni-popup/uni-popup.vue"
	import MescrollMixin from "../../components/mescroll-uni/mescroll-mixins.js";
	import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
	import loading from '../../components/loading/loading.vue'
	import noData from '../../components/no-data/no-data.vue'
	import zPaging from '../../uni_modules/z-paging/components/z-paging/z-paging.vue'
	export default {
		mixins: [MescrollMixin], // 使用mixin
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				mapWidth: 0,
				mapLeft: 0,
				isFlag: false, // 用于切换商家显示界面
				isData: false, //是否有数据
				isLoad: true, //加载状态   true 为加载中 false 为无数据

				storeList: [],
				tabsList: [{
						title: "全部",
						type: "all"
					},
					{
						title: "按摩商家",
						type: "business"
					},
					{
						title: "价格",
						type: "price"
					},
				],
				dropDownHeight: 0,
				tabsList2: [{
						title: "全部",
						icon: "../../static/images/more-gray.png",
						iconActive: "../../static/images/more-icon-FF967D.png"
					},
					{
						title: "按摩商家",
						icon: "../../static/images/more-gray.png",
						iconActive: "../../static/images/more-icon-FF967D.png"
					},
					{
						title: "价格",
						icon: "../../static/images/jx-ico.png",
						iconActive: "../../static/images/sx-ico.png"
					},
					{
						title: "评分",
						icon: "../../static/images/jx-ico.png",
						iconActive: "../../static/images/sx-ico.png"
					},
				],
				idx: 0, //顶部tabar状态栏下标
				bottomDistance: -(264 / 2), // 初始位置
				massageList: ["全部", "脸部按摩", "泰式按摩", "中式按摩", "日式按摩", "韩式按摩", "足疗按摩"], // 按摩下拉种类
				isTabsShow: false, // 是否有显示下拉
				isTabsType: "all", // 用于判断 tabs  下拉属于哪个
				tabsShowIndex: -1,
			};
		},
		components: {
			navTitle,
			UniPopup,
			MescrollUni,
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

			// 获取地图商家盒子宽度
			uni.createSelectorQuery().in(this).select(".box-content").boundingClientRect(data => {
				this.mesHeight = data.height * 2
				this.mapWidth = data.width
				this.mapLeft = data.width
			}).exec();
		},
		onLoad() {

		},
		methods: {
			// 商家切换开关
			tabClick() {
				this.mapLeft = this.isFlag ? this.mapWidth : 0
				this.isFlag = !this.isFlag
			},
			//顶部tabs 点击显示下拉内容 
			tabsShowList(item, index) {

				// if(this.tabsShowIndex==index){
				// 	this.isTabsShow = false
				// }else{
				// 	this.isTabsShow = true
				// }

				this.isTabsType = item.type // 用于判断当前点击哪一个 然后显示对于的界面

				this.isTabsShow = !this.isTabsShow //下拉后 修改到相反的状态
				this.dropDownHeight = this.isTabsShow ? (707 / 2) : 0
			},
			// 隐藏下拉
			hiddenTabs() {
				this.dropDownHeight = 0
			},

			// 显示单个商家信息
			shrinkShow() {
				this.bottomDistance = 0
			},
			//点击隐藏单个商家
			shrinkHidden() {
				this.bottomDistance = (-(264 / 2)) // 回到初始位置
			},
			// 跳转商家详情
			merchantDetails(id) {
				uni.navigateTo({
					url: "../../pagesIndexTwo/merchantDetails/merchantDetails?id=" + id
				})
			},

			// 上拉 下拉 
			queryList(pageNo, pageSize) {
				this.getStore(pageNo, pageSize)
			},

			// 商家
			getStore(num, size) {
				var vuedata = {
					page_index: num, // 请求页数，
					each_page: size, // 请求条数
					orderby: 'ASC',
					ordertype: 'distance',
				}
				this.apiget('pc/store', vuedata).then(res => {
					if (res.status == 200) {
						if (res.data.storeList.length != 0) {
							this.isData = true;
							let list = res.data.storeList
							let totalSize = res.data.total_rows

							this.$refs.paging.addData(list);
						} else {
							// 显示无数据背景
							this.isData = false;
							this.isLoad = false;
						}

					}
				})
			},

			// 评分
			isComment(comment, index) {
				var store = parseInt(comment)
				var str = 0
				if (store <= 20) {
					str = 1
				} else if (store > 20 && store <= 40) {
					str = 2
				} else if (store > 40 && store <= 60) {
					str = 3
				} else if (store > 60 && store <= 80) {
					str = 4
				} else if (store > 80) {
					str = 5
				}
				if (str > index) {
					return true
				} else {
					return false
				}
			},
			// 评分提示
			storeMsg(comment, index) {
				var store = parseInt(comment)
				var str = 0
				if (store <= 20) {
					str = 1
				} else if (store > 20 && store <= 40) {
					str = 2
				} else if (store > 40 && store <= 60) {
					str = 3
				} else if (store > 60 && store <= 80) {
					str = 4
				} else if (store > 80) {
					str = 5
				}
				return str
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
			position: relative;
			flex: 1;
			overflow-x: hidden;
			overflow-y: scroll;
			font-family: Source Han Sans CN;
			font-weight: 400;

			.box-content-public {
				.box-wrap-tabs {
					display: flex;
					justify-content: space-around;
					height: 76rpx;
					background: #fff;

					.box-wrap-tabs-li {
						display: flex;
						align-items: center;

						.box-tabs-li-text {
							margin-right: 10rpx;
							color: #666;
							font-size: 28rpx;
						}

						.box-tabs-li-text-active {
							color: #FF8366;
						}

						.box-tabs-li-icon {
							image {
								width: 13rpx;
								height: 28rpx;
								transform: rotate(90deg);
							}
						}

						.box-tabs-li-icon-max {
							image {
								width: 36rpx;
								height: 36rpx;
							}
						}
					}

				}
			}

			.box-content-map-wrap {
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				z-index: 1;
				display: flex;
				flex-direction: column;


				.box-map-wrap-main {
					position: relative;
					flex: 1;
					// overflow-y: scroll;
					overflow-y: hidden;
					// background: purple;

					.map-wrap-main-view {}

					.map-wrap-main-list {
						position: absolute;
						left: 0;
						padding: 0 40rpx;
						box-sizing: border-box;
						width: 100%;
						height: 264rpx;
						background: #fff;
						box-shadow: 0px -1rpx 10rpx rgba(0, 0, 0, 0.1);
						opacity: 1;
						border-radius: 40rpx 40rpx 0rpx 0rpx;
						transition: 0.3s;

						.map-wrap-list-icon {
							display: flex;
							align-items: center;
							justify-content: center;
							height: 60rpx;

							image {
								width: 20rpx;
								height: 36rpx;
								transform: rotate(90deg);
							}
						}


						.map-wrap-list-content {
							display: flex;


							.list-content-image {
								image {
									width: 164rpx;
									height: 164rpx;
									border-radius: 10rpx;
								}
							}

							.list-content-info {
								flex: 1;
								display: flex;
								flex-direction: column;
								margin-left: 20rpx;

								.list-content-info-title {
									color: #000;
									font-size: 34pxr;
								}

								.list-content-info-score {
									display: flex;
									align-items: center;


									text {
										margin-right: 6rpx;
										color: #999;
										font-size: 24rpx;
									}
								}

								.list-content-info-box {
									display: flex;
									justify-content: space-between;

									.list-content-info-box-text {
										line-height: 28rpx;
										font-size: 24rpx;
										color: #666;
									}

									.list-content-info-address {
										display: flex;
										align-items: center;

										image {
											width: 19rpx;
											height: 24rpx;
										}

										text {
											margin-left: 10rpx;
											font-size: 24rpx;
											color: #999;
										}
									}
								}

								.list-content-info-service-content {
									display: flex;
									flex-wrap: wrap;

									.list-info-service-content-li {
										width: 112rpx;
										height: 34rpx;
										margin-right: 8rpx;
										margin-bottom: 8rpx;
										background: #F5F5F5;
										border-radius: 3rpx;
										font-size: 22rpx;
										color: 666;
									}


								}
							}
						}


					}

				}


			}

			.box-content-list-wrap {
				position: absolute;
				top: 0;
				height: 100%;
				z-index: 2;
				transition: 0.5s;
				background: #F7F7F7;
				display: flex;
				flex-direction: column;

				.box-content-business-list {
					// padding: 0 20rpx;
					box-sizing: border-box;
					// margin-top: 10rpx;
					flex: 1;
					overflow-y: scroll;

					.map-wrap-list-content {
						display: flex;
						padding: 20rpx;
						box-sizing: border-box;
						background: #fff;
						margin-bottom: 10rpx;
						border-radius: 10px;

						.list-content-image {
							image {
								width: 164rpx;
								height: 164rpx;
							}
						}

						.list-content-info {
							flex: 1;
							display: flex;
							flex-direction: column;
							margin-left: 20rpx;

							.list-content-info-title {
								color: #000;
								font-size: 34pxr;
							}

							.list-content-info-score {
								display: flex;
								align-items: center;


								text {
									margin-right: 6rpx;
									color: #999;
									font-size: 24rpx;
								}
							}

							.list-content-info-box {
								display: flex;
								justify-content: space-between;

								.list-content-info-box-text {
									line-height: 40rpx;
									font-size: 24rpx;
									color: #666;
								}

								.list-content-info-address {
									display: flex;
									align-items: center;

									image {
										width: 19rpx;
										height: 24rpx;
									}

									text {
										margin-left: 10rpx;
										font-size: 24rpx;
										color: #999;
									}
								}
							}

							.list-content-info-service-content {
								display: flex;
								flex-wrap: wrap;

								.list-info-service-content-li {
									width: 112rpx;
									height: 34rpx;
									margin-right: 8rpx;
									margin-bottom: 8rpx;
									background: #F5F5F5;
									border-radius: 3rpx;
									font-size: 22rpx;
									color: 666;
								}

								.list-content-info-service-content-msg {
									box-sizing: border-box;
									font-size: 22rpx;
									color: #fff;
									padding: 6rpx 10rpx;
									background: #FA6019;
									border-radius: 3rpx;
								}
							}
						}
					}
				}

				.map-wrap-list-content-load {
					flex: 1;
				}

			}

			.box-content-tab-btn {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				padding: 12rpx 16rpx;
				box-sizing: border-box;
				position: absolute;
				top: 116rpx;
				right: 40rpx;
				width: 80rpx;
				height: 126rpx;
				background: #fff;
				border-radius: 10rpx;
				z-index: 3;
				transition: 0.3s;


				text {
					font-size: 24rpx;
					color: #666;
				}
			}

			.box-content-tab-btn-state {
				top: 244rpx;
				box-shadow: 0px -1rpx 10rpx rgba(0, 0, 0, 0.1);
			}


			.box-content-drop-down {
				position: absolute;
				top: 76rpx;
				left: 0;
				transition: 0.3s;
				height: 0;
				width: 100%;
				z-index: 3;
				background: #fff;
				overflow: hidden;

				.massage-pull-down-all {}

				.massage-pull-down-business {
					height: 100%;
					padding-left: 40rpx;
					box-sizing: border-box;
					overflow-y: scroll;

					.massage-pull-down-li {
						display: flex;
						align-items: center;
						height: 100rpx;
						border-bottom: 1rpx solid #EDEDED;
						font-size: 29rpx;
						color: #000;
					}

					.massage-pull-down-li:last-child {
						border-bottom: 0;
					}
				}

				.massage-pull-down-price {}

			}

		}

	}
</style>
