<template>
	<view class="map-box">
		<view class="map-head" :style="{paddingTop:barHeight+'px'}">
			<!-- <view class="map-head-nav-title flex-center">按摩商家</view> -->

			<view class="map-head-nav-tabs">
				<view class="map-head-nav-tabs-li" v-for="(item,index) in tabsList" :key="index">
					<view class="map-head-nav-tabs-li-text" :class="idx==index?'map-head-nav-tabs-li-text-active':''">
						{{item.title}}
					</view>
					<view class="map-head-nav-tabs-li-icon">
						<text class="iconfont iconxiangxiajiantou icon-font" style="color: #ccc;font-size: 28rpx;"
							v-if="idx!=index"></text>
						<text class="iconfont iconxiangxiajiantou icon-font" style="color: #FF8366;font-size: 28rpx;"
							v-else></text>
					</view>
				</view>
			</view>
		</view>
		<view class="map-content" id="map-content">
			<map :style="{height:mapHeight+'rpx'}" style="width: 100%;" :latitude="latitude" :longitude="longitude"
				:markers="marker"></map>
			<!-- <map style="width: 100%;height: 100%;" :latitude="latitude" :longitude="longitude" :markers="covers"></map> -->
		</view>
		<!-- tabbar导航栏 -->
		<view class="map-footer">
			<Tabbar @tabbarClick="tabbarClick" :activeIndex="activeIndex"></Tabbar>
		</view>
	</view>
</template>

<script>
	import Tabbar from "../../components/tabbar/tabbar.vue"
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				idx: 0, //顶部tabar状态栏下标
				activeIndex: 2, //当前tabbar所在页面
				mapHeight: 0,
				latitude: 24.613838,
				longitude: 118.037733,
				marker: [],
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
			}
		},
		components: {
			Tabbar,
		},
		onReady() {
			// 获取顶部电量状态栏高度
			uni.getSystemInfo({
				success: (res) => {
					this.barHeight = res.statusBarHeight
				}
			});
			const query = uni.createSelectorQuery().in(this);
			query.select('#map-content').boundingClientRect(data => {
				this.mapHeight = data.height * 2
			}).exec();
		},
		onLoad() {
			// this.getList()
		},

		methods: {
			// 获取门店列表
			getList() {
				this.apiget('pc/store', {}).then(res => {
					if (res.status == 200) {
						if (res.data.storeList.length != 0) {
							let marker = []
							res.data.storeList.forEach(item => {
								var str = {
									id: item.id,
									latitude: item.latitude,
									longitude: item.longitude,
									iconPath: require('../../static/images/address-icon.png'),
									width: 45,
									height: 45,
									title: item.name
									// callout: {
									// 	content: item.name,
									// 	bgColor: "#999999"
									// }
								}
								marker.push(str)
							})
							this.marker = marker
						}
					}
				});
			},




			// tabbar点击
			tabbarClick(index) {
				this.activeIndex = index
				switch (index) {
					case 0: //首页
						uni.reLaunch({
							url: '../index/index'
						})
						break;
					case 1: //我的预约
						uni.reLaunch({
							url: "../subscribe/subscribe"
						})
						break;
					case 2: //地图

						break;
					case 3: //商城
						uni.reLaunch({
							url: "../mall/mall"
						})
						break;
					case 4: //我的
						uni.reLaunch({
							url: "../mine/mine"
						})
						break;
				}
			},
		}
	}
</script>
<style scoped lang="scss">
	.map-box {
		height: 100%;
		display: flex;
		flex-direction: column;

		.map-head {
			box-sizing: border-box;

			.map-head-nav-title {
				height: 88rpx;
				font-size: 34rpx;
				color: #000;
				font-weight: 500;
			}


			.map-head-nav-tabs {
				display: flex;
				justify-content: space-around;
				height: 76rpx;
				background: #fff;

				.map-head-nav-tabs-li {
					display: flex;
					align-items: center;

					.map-head-nav-tabs-li-text {
						margin-right: 10rpx;
						color: #666;
						font-size: 28rpx;
					}

					.map-head-nav-tabs-li-text-active {
						color: #FF8366;
					}

					.map-head-nav-tabs-li-icon {
						.icon-font {
							margin-top: 4rpx;
						}
					}

					.map-head-nav-tabs-li-icon-max {
						image {
							width: 36rpx;
							height: 36rpx;
						}
					}
				}

			}


		}

		.map-content {
			flex: 1;
		}

		.map-footer {
			height: 102rpx;
		}
	}
</style>
