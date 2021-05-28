<template>
	<view class="mall-box">
		<view class="mall-head" :style="{paddingTop:barHeight+'px'}">
			<view class="mall-head-top">
				<view class="mall-head-top-search flex-center">
					<text class="iconfont iconsousuo1 icon-font" style="color: #fff;font-size: 52rpx;"></text>
				</view>
				<view class="mall-head-top-title">
					商城
				</view>
				<view class="mall-head-top-shopping" @click="shoppingList">
					<view class="head-top-shopping-icon flex-center">
						<text class="iconfont icongouwuche icon-font" style="color: #fff;font-size: 48rpx;"></text>
					</view>
					<view class="head-top-shooping-msg flex-center">
						3
					</view>
				</view>
			</view>
			<view class="mall-head-list">
				<view class="mall-head-box-wrap">
					<view class="mall-head-list-li flex-center" v-for="(item,index) in typeList" :key="item.id"
						@click="clickList(item)">
						<view class="head-list-li-icon flex-center">
							<image :src="item.icon" mode="aspectFill"></image>
						</view>
						<view class="head-list-li-title">
							{{item.name}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="mall-content">
			<view class="mall-content-recommend">
				<view class="mall-content-recommend-text">
					热门推荐
				</view>
				<view class="mall-content-recommend-more">
					<text class="iconfont icongengduo icon-font"
						style="color: #333;font-size: 30rpx;margin-top: 4rpx;"></text>
				</view>
			</view>
			<view class="mall-content-box">
				<mescroll-uni ref="mescrollRef" @down="downCallback" @up="upCallback" :down="downOption" :up="upOption"
					:height="mesHeight">
					<view class="mall-content-box-list">
						<view class="mall-list-li" v-for="(item,index) in goodsList" :key="index"
							@click="clickGoodsDtails(item)">
							<view class="mall-list-li-item">
								<view class="mall-list-li-image">
									<image :src="item.simg" mode="aspectFill"></image>
								</view>
								<view class="mall-list-li-collect flex-center">
									<text class="iconfont iconguanzhu-xuanzhong icon-font"
										style="color:#FF967D;font-size: 48rpx;" v-if="item.isStore"></text>
									<text class="iconfont iconguanzhu icon-font" style="color: #000;font-size: 48rpx;"
										v-else></text>
								</view>
							</view>
							<view class="mall-list-li-goods-name">
								{{item.name}}
							</view>
							<view class="mall-list-li-price">
								{{item.price}}
							</view>
						</view>
					</view>
				</mescroll-uni>
			</view>
		</view>
		<!-- tabbar导航栏 -->
		<view class="mall-footer">
			<Tabbar @tabbarClick="tabbarClick" :activeIndex="activeIndex"></Tabbar>
		</view>
	</view>
</template>

<script>
	import Tabbar from "../../components/tabbar/tabbar.vue"
	import MescrollMixin from "../../components/mescroll-uni/mescroll-mixins.js";
	import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
	export default {
		mixins: [MescrollMixin], // 使用mixin
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				mesHeight: 0,
				activeIndex: 3, //当前tabbar所在页面
				downOption: { // 下拉刷新配置
					auto: false,
				},
				upOption: { // 上拉加载配置
					noMoreSize: 5,
					textLoading: "正在加载更多数据",
					textNoMore: "——  已经到底了  ——",
					isBounce: true,
					auto: false,
				},

				typeList: [],
				goodsList: []
			}
		},
		components: {
			Tabbar,
			MescrollUni
		},
		onShow() {
			const sys = uni.getSystemInfoSync();
			var Height = sys.windowHeight
			this.mesHeight = (Height - 190) * 2
		},
		onReady() {
			// 获取顶部电量状态栏高度
			uni.getSystemInfo({
				success: (res) => {
					console.log(res)
					this.barHeight = res.statusBarHeight
				}
			});
		},
		onLoad() {
			this.getData()
			this.getGoods()
		},
		methods: {
			clickList(e) {
				switch (e.name) {
					case "美容":
						uni.navigateTo({
							url: "../../pagesMall/beautyMall/beautyMall"
						})
						break;
				}
			},

			getData() {
				this.apiget('pc/index', {}).then(res => {
					if (res.status == 200) {
						this.typeList = res.data.classList
					}
				});
			},



			// 
			getGoods() {
				this.apiget('pc/index/mall_home', {}).then(res => {
					if (res.status == 200) {
						this.goodsList = res.data.push_service
					}
				});
			},


			// 点击进入购物车列表
			shoppingList() {
				uni.navigateTo({
					url: "../../pagesMall/shoppingCart/shoppingCart"
				})
			},

			// 点击进入详情
			clickGoodsDtails(item) {
				uni.navigateTo({
					url: "../../pagesMallTwo/goodsDetails/goodsDetails"
				})
			},
			/*下拉刷新的回调*/
			downCallback() {
				setTimeout(() => {
					this.mescroll.endSuccess() // 请求成功 隐藏加载状态
					// this.mescroll.showNoMore()
				}, 1500)
			},

			/*上拉加载的回调*/
			upCallback(page) {
				setTimeout(() => {
					this.mescroll.endSuccess() // 请求成功 隐藏加载状态
					// if (this.PageNumber > 3) {
					this.mescroll.showNoMore()
					// }
				}, 1500)
				console.log("上拉加载")
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
						uni.reLaunch({
							url: "../map/map"
						})
						break;
					case 3: //商城

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
	.mescroll-uni {
		height: 100% !important;
	}

	.mall-box {
		height: 100%;
		display: flex;
		flex-direction: column;

		.mall-head {

			background: linear-gradient(45deg, #FFA18A 0%, #FF977E 100%);

			.mall-head-top {
				display: flex;
				align-items: center;
				padding: 24rpx 32rpx;
				box-sizing: border-box;
				justify-content: space-between;

				.mall-head-top-search {
					width: 52rpx;
					height: 52rpx;
					margin-left: 10rpx;

					image {
						width: 38rpx;
						height: 39rpx;
					}
				}

				.mall-head-top-title {
					font-size: 34rpx;
					font-family: Source Han Sans CN;
					font-weight: 500;
					color: #FFFFFF;
				}

				.mall-head-top-shopping {
					position: relative;
					width: 52rpx;
					height: 52rpx;

					.head-top-shopping-icon {
						width: 52rpx;
						height: 52rpx;

						image {
							width: 45rpx;
							height: 45rpx;
						}
					}

					.head-top-shooping-msg {
						position: absolute;
						top: -14rpx;
						right: -14rpx;
						width: 28rpx;
						height: 28rpx;
						font-size: 20rpx;
						font-family: Source Han Sans CN;
						font-weight: bold;
						color: #FF987F;
						border-radius: 50%;
						background: #fff;
					}
				}
			}

			.mall-head-list {
				width: 100%;

				.mall-head-box-wrap {
					display: -webkit-box;
					;
					// align-items: center;
					// justify-content: space-around;
					padding-top: 30rpx;
					padding-bottom: 30rpx;
					padding-left: 40rpx;
					box-sizing: border-box;
					overflow-x: scroll;

					.mall-head-list-li {
						width: 128rpx;
						height: 128rpx;
						background: #FFFFFF;
						border-radius: 20rpx;
						margin-right: 32rpx;
						flex-direction: column;

						.head-list-li-icon {
							image {
								width: 56rpx;
								height: 56rpx;
							}
						}

						.head-list-li-title {
							font-size: 26rpx;
							font-family: Source Han Sans CN;
							font-weight: 400;
							color: #333333;
						}
					}
				}
			}
		}

		.mall-content {
			display: flex;
			flex-direction: column;
			flex: 1;
			overflow-y: scroll;

			.mall-content-recommend {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 32rpx 40rpx;
				box-sizing: border-box;

				.mall-content-recommend-text {
					font-size: 36rpx;
					font-family: Source Han Sans CN;
					font-weight: 500;
					color: #000000;
				}

				.mall-content-recommend-more {
					width: 30rpx;
					height: 30rpx;

					image {
						width: 30rpx;
						height: 30rpx;
					}
				}
			}

			.mall-content-box {
				display: flex;
				flex-direction: column;
				flex: 1;
				overflow-y: scroll;

				.mall-content-box-list {
					display: flex;
					flex-wrap: wrap;
					padding-left: 40rpx;
					padding-right: 40rpx;
					box-sizing: border-box;
					// overflow-y: scroll;

					.mall-list-li {
						margin-bottom: 30rpx;

						.mall-list-li-item {
							position: relative;
							width: 315rpx;
							height: 320rpx;
							margin-bottom: 20rpx;

							.mall-list-li-image {
								width: 315rpx;
								height: 320rpx;

								image {
									width: 315rpx;
									height: 320rpx;
								}
							}

							.mall-list-li-collect {
								position: absolute;
								bottom: 20rpx;
								right: 20rpx;
								width: 52rpx;
								height: 52rpx;

								image {
									width: 42rpx;
									height: 38rpx;
								}
							}
						}

						.mall-list-li-goods-name {
							font-size: 28rpx;
							font-family: Source Han Sans CN;
							font-weight: 400;
							line-height: 20px;
							color: #000000;
						}

						.mall-list-li-price {
							font-size: 28rpx;
							font-family: Source Han Sans CN;
							font-weight: 500;
							color: #FF4D4D;
							line-height: 20px;
						}

					}

					.mall-list-li:nth-child(2n+1) {
						margin-right: 40rpx;
					}
				}
			}

		}
	}
</style>
