<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="积分明细"></navTitle>
		</view>
		<view class="box-content">
			<mescroll-uni ref="mescrollRef" @down="downCallback" @up="upCallback" :down="downOption" :up="upOption" :height="mesHeight">
				<view class="box-content-list">
					<view class="box-content-list-li" v-for="(item,index) in 100" :Key="index">
						<view class="box-content-list-list-wrap">
							<view class="box-content-list-list-wrap-title">
								消费项目所得
							</view>
							<view class="box-content-list-list-wrap-text">
								2021年1月10日 12:00:23
							</view>
						</view>
						<view class="box-content-list-list-msg" :class="index%2!=0?'box-content-list-list-green':'box-content-list-list-black'">
							<text>{{index%2!=0?'-':'+'}}00{{index+1}}</text>
						</view>
					</view>
				</view>
			</mescroll-uni>
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
			this.mesHeight = (Heigh - 44) * 2
		},
		methods: {

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
