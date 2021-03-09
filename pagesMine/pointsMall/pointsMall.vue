<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<view class="box-head-back" @click="Gback">
				<view class="box-head-back-image">
					<image src="../../static/images/back-white.png" mode="aspectFill"></image>
				</view>
			</view>
			<view class="box-head-number">
				200
			</view>
			<view class="box-head-text">
				<image src="../../static/images/integral-icon.png" mode="aspectFill"></image>
				<text>当前积分数量</text>
			</view>
			<view class="box-head-list">
				<view :class="index==0?'box-head-list-li-affter':''" class="box-head-list-li flex-center" v-for="(item,index) in textList"
				 :key="index" @click="listTabClick(index)">{{item}}</view>
			</view>
		</view>
		<view class="box-content">
			<view class="box-content-wrap">
				<view class="box-content-wrap-title">积分商城</view>
				<view class="box-content-wrap-list">
					<view class="box-content-wrap-list-li flex-center" :class="typeIndex==index?'box-content-wrap-list-li-active':''"
					 v-for="(item,index) in typeList" :key="index" @click="typeListClick(index)">{{item}}</view>
				</view>
			</view>
			<view class="box-content-goods">
				<mescroll-uni ref="mescrollRef" @down="downCallback" @up="upCallback" :down="downOption" :up="upOption" :height="mesHeight">
					<view class="box-content-goods-list">
						<view class="box-content-goods-list-li" v-for="(item,index) in goodsList">
							<view class="box-content-goods-list-li-image">
								<image :src="item.url" mode=""></image>
							</view>
							<view class="box-content-goods-list-li-title">{{item.title}}</view>
							<view class="box-content-goods-list-li-number"><text>{{item.number}}</text> 积分</view>
							<view class="box-content-goods-list-li-btn flex-center">立即兑换</view>
						</view>
					</view>
				</mescroll-uni>
			</view>
		</view>

	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	import MescrollMixin from "../../components/mescroll-uni/mescroll-mixins.js";
	import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
	export default {
		mixins: [MescrollMixin], // 使用mixin
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				textList: ["积分明细", "兑换记录"],
				typeList: ["综合", "升序", "降序"],
				typeIndex: 0, //当前所在排序
				mesHeight: 0,
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
				PageNumber: 1, // 请求页数，
				PageLimt: 10, // 请求条数
				goodsList: [{
						url: "../../static/images/goods-001.png",
						title: "人工智能音箱",
						number: "25",
					},
					{
						url: "../../static/images/goods-002.png",
						title: "移动电源/充电宝 蓝牙",
						number: "36",
					},
					{
						url: "../../static/images/goods-003.png",
						title: "移动电源/充电宝",
						number: "25",
					},
					{
						url: "../../static/images/goods-004.png",
						title: "人工智能音箱",
						number: "22",
					},
					{
						url: "../../static/images/goods-005.png",
						title: "移动电源/充电宝",
						number: "25",
					},
					{
						url: "../../static/images/goods-006.png",
						title: "人工智能音箱",
						number: "13",
					}, {
						url: "../../static/images/goods-001.png",
						title: "人工智能音箱",
						number: "25",
					},
					{
						url: "../../static/images/goods-002.png",
						title: "移动电源/充电宝 蓝牙",
						number: "36",
					},
					{
						url: "../../static/images/goods-003.png",
						title: "移动电源/充电宝",
						number: "25",
					},
					{
						url: "../../static/images/goods-004.png",
						title: "人工智能音箱",
						number: "22",
					},
					{
						url: "../../static/images/goods-005.png",
						title: "移动电源/充电宝",
						number: "25",
					},
					{
						url: "../../static/images/goods-006.png",
						title: "人工智能音箱",
						number: "13",
					}
				]
			};
		},
		components: {
			navTitle,
			MescrollUni
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
			this.mesHeight = (Heigh - 304) * 2
		},
		methods: {
			// 返回
			Gback() {
				uni.navigateBack({
					delta: 1
				})
			},

			// 积分明细 兑换记录
			listTabClick(index) {
				switch (index) {
					case 0:
						uni.navigateTo({
							url: "../../pagesMineTwo/pointsDetails/pointsDetails"
						})
						break;
					case 1:
						uni.navigateTo({
							url: "../../pagesMineTwo/exchangeRecord/exchangeRecord"
						})
						break;
				}
			},

			// 排序点击
			typeListClick(index) {
				this.typeIndex = index
			},


			/*下拉刷新的回调*/
			downCallback() {
				this.PageNumber = 1
				setTimeout(() => {
					this.mescroll.endSuccess() // 请求成功 隐藏加载状态

					// this.mescroll.showNoMore()

				}, 1500)
			},

			/*上拉加载的回调*/
			upCallback(page) {
				this.PageNumber++
				console.log(this.PageNumber)
				setTimeout(() => {
					this.mescroll.endSuccess() // 请求成功 隐藏加载状态
					// if (this.PageNumber > 3) {
					this.mescroll.showNoMore()
					// }
				}, 1500)
				console.log("上拉加载")
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
		font-family: Source Han Sans CN;
		font-weight: 400;

		.box-head {
			background: linear-gradient(180deg, #FFCD4D 0%, #FFB437 100%);


			.box-head-back {
				width: 100%;
				height: 88rpx;
				padding-left: 36rpx;
				box-sizing: border-box;

				.box-head-back-image {
					height: 100%;
					display: flex;
					align-items: center;

					image {
						width: 34rpx;
						height: 34rpx;
					}
				}
			}

			.box-head-number {
				margin-bottom: 20rpx;
				font-size: 80rpx;
				font-family: Lato;
				font-weight: bold;
				text-align: center;
				color: #fff;
			}

			.box-head-text {
				margin-bottom: 60rpx;
				display: flex;
				align-items: center;
				justify-content: center;

				image {
					width: 28rpx;
					height: 28rpx;
				}

				text {
					margin-left: 10rpx;
					font-size: 28rpx;
					color: #fff;
				}
			}

			.box-head-list {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 88rpx;
				background: #fff;
				font-size: 28rpx;
				color: #333;

				.box-head-list-li {
					flex: 1;
					height: 28rpx;
				}

				.box-head-list-li-affter {
					position: relative;
				}

				.box-head-list-li-affter::after {
					position: absolute;
					right: 0;
					top: 0;
					bottom: 0;
					margin: auto;
					content: "";
					width: 1rpx;
					height: 100%;
					background: #ccc;
				}
			}

		}

		.box-content {
			flex: 1;
			overflow-y: scroll;
			display: flex;
			flex-direction: column;
			margin-top: 20rpx;
			background: linear-gradient(180deg, #FFFFFF 0%, #F7F7F7 100%);

			.box-content-wrap {
				padding: 30rpx 40rpx;
				box-sizing: border-box;
				background: #fff;

				.box-content-wrap-title {
					color: #333;
					font-size: 36rpx;
					font-family: Source Han Sans CN;
					font-weight: 500;
				}

				.box-content-wrap-list {
					display: flex;
					margin-top: 30rpx;

					.box-content-wrap-list-li {
						width: 136rpx;
						height: 48rpx;
						border: 1rpx solid #ccc;
						border-radius: 29rpx;
						margin-right: 20rpx;
						transition: 0.3s;
						color: #999;
						font-size: 28rpx;
					}

					.box-content-wrap-list-li:last-child {
						margin-right: 0;
					}

					.box-content-wrap-list-li-active {
						border: 1rpx solid #FF8366;
						color: #FF8366 !important;
					}
				}
			}

			.box-content-goods {
				flex: 1;
				overflow-y: scroll;

				.box-content-goods-list {
					display: flex;
					flex-wrap: wrap;
					padding: 0 20rpx;
					box-sizing: border-box;

					.box-content-goods-list-li {
						display: flex;
						flex-direction: column;
						align-items: center;
						margin-bottom: 10rpx;
						width: 350rpx;
						height: 540rpx;
						background: #fff;

						.box-content-goods-list-li-image {
							image {
								width: 350rpx;
								height: 350rpx;
							}
						}

						.box-content-goods-list-li-title {

							font-size: 30rpx;
							color: #333;
							text-align: center;
						}

						.box-content-goods-list-li-number {
							font-size: 28rpx;
							color: #999;

							text {
								color: #FF8366;
							}
						}

						.box-content-goods-list-li-btn {
							width: 176rpx;
							height: 52rpx;
							margin-top: 10rpx;
							border: 1rpx solid #FF6F4D;
							border-radius: 32rpx;
							font-size: 28rpx;
							color: #FF6F4D;
						}
					}

					.box-content-goods-list-li:nth-child(2n+1) {
						margin-right: 10rpx;
					}
				}
			}

		}

	}
</style>
