<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="按摩商家"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content-map-wrap box-content-public" :style="{width:mapWidth+'px'}">
				<view class="box-wrap-tabs">
					<view class="box-wrap-tabs-li" v-for="(item,index) in tabsList" :key="index" @click="tabsShowList(item,index)">
						<view class="box-tabs-li-text">{{item.title}}</view>
						<view class="box-tabs-li-icon">
							<image src="../../static/images/more-gray.png" mode="aspectFill" v-if="idx!=index"></image>
							<image src="../../static/images/more-icon-FF967D.png" mode="aspectFill" v-else></image>
						</view>
					</view>
				</view>
				<view class="box-map-wrap-main">
					<view class="map-wrap-main-view">
						<button type="primary" @click="shrinkShow">点击打开单个商家</button>
					</view>
					<view class="map-wrap-main-list" :style="{bottom:bottomDistance+'px'}">
						<view class="map-wrap-list-icon" @click="shrinkHidden">
							<image src="../../static/images/more.png" mode="aspectFill"></image>
						</view>
						<view class="map-wrap-list-content">
							<view class="list-content-image">
								<image src="../../static/images/shop-ico.png" mode="aspectFill"></image>
							</view>
							<view class="list-content-info">
								<view class="list-content-info-title">
									印象诗意·悠然SPA
								</view>
								<view class="list-content-info-score">
									<image src="../../static/images/stars-icon.png" mode="aspectFill" v-for="item in 5"></image>
									<text>5分</text>
								</view>
								<view class="list-content-info-box">
									<view class="list-content-info-box-text">明发商业广场</view>
									<view class="list-content-info-address">
										<image src="../../static/images/address-gray.png" mode="aspectFill"></image>
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
				<view class="box-content-business-list">
					<view class="map-wrap-list-content" v-for="(item,index) in 10" @click="merchantDetails(item)">
						<view class="list-content-image">
							<image src="../../static/images/shop-ico.png" mode="aspectFill"></image>
						</view>
						<view class="list-content-info">
							<view class="list-content-info-title">
								印象诗意·悠然SPA
							</view>
							<view class="list-content-info-score">
								<image src="../../static/images/stars-icon.png" mode="aspectFill" v-for="item in 5"></image>
								<text>5分</text>
							</view>
							<view class="list-content-info-box">
								<view class="list-content-info-box-text">明发商业广场</view>
								<view class="list-content-info-address">
									<image src="../../static/images/address-gray.png" mode="aspectFill"></image>
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
			</view>
			<view class="box-content-tab-btn" @click="tabClick" :class="isFlag?'box-content-tab-btn-state':''">
				<image src="../../static/images/menu.png" mode=""></image>
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
	import UniPopup from "../../uni_modules/uni-popup/components/uni-popup/uni-popup.vue"
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				mapWidth: 0,
				mapLeft: 0,
				isFlag: false, // 用于切换商家显示界面
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
				idx: 1, //顶部tabar状态栏下标
				bottomDistance: -(264 / 2), // 初始位置
				massageList: ["全部", "脸部按摩", "泰式按摩", "中式按摩", "日式按摩", "韩式按摩", "足疗按摩"], // 按摩下拉种类
				isTabsShow: false, // 是否有显示下拉
				isTabsType: "all", // 用于判断 tabs  下拉属于哪个
				tabsShowIndex:-1,
			};
		},
		components: {
			navTitle,
			UniPopup
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
				this.mapWidth = data.width
				this.mapLeft = data.width
			}).exec();
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
			merchantDetails(item){
				uni.navigateTo({
					url:"../../pagesIndexTwo/merchantDetails/merchantDetails"
				})
			}
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
							margin-right: 20rpx;
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

									image {
										width: 30rpx;
										height: 30rpx;
									}

									text {
										margin-left: 10rpx;
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
					padding: 0 20rpx;
					box-sizing: border-box;
					margin-top: 10rpx;
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

								image {
									width: 30rpx;
									height: 30rpx;
								}

								text {
									margin-left: 10rpx;
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

				image {
					width: 42rpx;
					height: 42rpx;
				}

				text {
					font-size: 24rpx;
					color: #666;
				}
			}
			.box-content-tab-btn-state{
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
