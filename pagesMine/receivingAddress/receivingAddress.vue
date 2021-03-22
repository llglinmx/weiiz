<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="地址管理"></navTitle>
		</view>
		<view class="box-content" :style="{display:isData?'block':'none'}">
			<mescroll-uni ref="mescrollRef" @down="downCallback" @up="upCallback" :down="downOption" :up="upOption"
				:height="mesHeight">
				<view class="box-content-list">
					<view class="box-content-list-li" v-for="(item,index) in addressList" :key="item.id"
						@click="editAddress(item.id)">
						<view class="box-content-list-li-top">
							<view class="list-li-top-name">{{item.name}}</view>
							<view class="list-li-top-phone">{{item.mobile}}</view>
						</view>
						<view class="box-content-list-li-address">
							<text>{{item.country}} {{item.province}} {{item.city}} {{item.area}} {{item.street}}
								{{item.address}}</text>
							<text class="iconfont icongengduo icon-font"
								style="color: #999;font-size: 28rpx;margin-top: 4rpx;"></text>
						</view>
						<view class="box-content-list-li-postcode">
							{{item.postcode}}
						</view>
						<view class="box-content-list-li-default" @click.top="setDefault(index)">
							<text class="iconfont iconxuanzhong1 icon-font"
								style="color:#FF967D;font-size: 42rpx;margin-top: 4rpx;"
								v-if="item.is_default==1"></text>
							<text class="iconfont iconweixuanzhong1 icon-font"
								style="color: #ccc;font-size: 36rpx;margin-top: 4rpx;" v-else></text>
							<text>设为默认地址</text>
						</view>
					</view>
				</view>
			</mescroll-uni>
		</view>
		<view class="box-content-login flex-center" style="flex:1" :style="{display:!isData?'block':'none'}">
			<loading v-if="isLoad" />
			<view class="no-data flex-center" v-if="!isLoad">
				<view class="no-data-text flex-center">
					<text class="iconfont icondingdan icon-font"></text>
					<text>暂无收货地址</text>
				</view>
				<view class="no-data-btn flex-center" @click="addAddress">添加地址</view>
			</view>
		</view>
		<view class="box-footer" v-if="isData">
			<btn-pink btnName="添加收货地址" @btnClick="addAddress"></btn-pink>
		</view>
	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	import btnPink from "../../components/btnPink/btnPink.vue"
	import MescrollMixin from "../../components/mescroll-uni/mescroll-mixins.js";
	import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
	import loading from '../../components/loading/loading.vue'

	export default {
		mixins: [MescrollMixin], // 使用mixin
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				idx: 0, //当前默认地址
				isData: false, //是否有数据
				isLoad: true, //加载状态   true 为加载中 false 为无数据
				addressList: [],
				mesHeight: 0,
				downOption: { // 下拉刷新配置
					auto: false,
				},
				upOption: { // 上拉加载配置
					noMoreSize: 6,
					textLoading: "正在加载更多数据",
					textNoMore: "——  已经到底了  ——",
					isBounce: true,
					auto: false,
				},
			};
		},
		components: {
			navTitle,
			btnPink,
			MescrollUni,
			loading
		},
		onShow() {
			const sys = uni.getSystemInfoSync();
			var Height = sys.windowHeight
			this.mesHeight = (Height - 100) * 2
			var page = {
				num: 1,
				size: 10
			}
			this.upCallback(page);
		},
		onReady() {
			// 获取顶部电量状态栏高度
			uni.getSystemInfo({
				success: (res) => {
					this.barHeight = res.statusBarHeight
				}
			});
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
			// 获取地址列表
			getPointsDetails(page) {
				var vuedata = {
					page_index: page.num, // 请求页数，
					each_page: page.size, // 请求条数
					select_sort: 1
				}
				this.apiget('api/v1/members/address', vuedata).then(res => {
					if (res.status == 200) {
						if (res.data.data.length != 0) {
							this.isData = true;
							let list = res.data.data
							let totalSize = res.data.total_rows
							//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
							this.mescroll.endBySize(list.length, totalSize); //必传参数(当前页的数据个数, 总数据量)
							//设置列表数据
							if (page.num == 1) this.addressList = []; //如果是第一页需手动制空列表
							this.addressList = this.addressList.concat(list); //追加新数据
						} else {
							// 显示无数据背景
							this.isData = false;
							this.isLoad = false;
							this.mescroll.endErr()
						}

					}
				});
			},

			// 编辑地址
			editAddress(id) {
				var str = {
					id: id,
					isType: true
				}
				uni.navigateTo({
					url: "../../pagesMineTwo/addShippingAddress/addShippingAddress?data=" + JSON.stringify(str)
				})
			},



			// 添加地址按钮
			addAddress() {
				var str = {
					isType: false
				}
				uni.navigateTo({
					url: "../../pagesMineTwo/addShippingAddress/addShippingAddress?data=" + JSON.stringify(str)
				})
			},
			// 点击切换默认地址
			setDefault(index) {
				this.idx = index
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
			flex: 1;
			overflow-y: scroll;

			.box-content-list {
				margin-top: 20rpx;

				.box-content-list-li {
					padding: 30rpx 40rpx;
					font-size: 28rpx;
					color: #000;
					background: #fff;

					.box-content-list-li-top {
						display: flex;

						.list-li-top-name {}

						.list-li-top-phone {
							margin-left: 40rpx;
						}
					}

					.box-content-list-li-address {
						display: flex;
						align-items: center;
						justify-content: space-between;
						margin: 10rpx 0;

						text {}

						.icon-font {
							margin-left: 20rpx;
						}
					}

					.box-content-list-li-postcode {}

					.box-content-list-li-default {
						margin-top: 16rpx;
						display: flex;
						align-items: center;

						text {
							margin-right: 10rpx;
							font-size: 26rpx;
							color: #000;
						}
					}
				}
			}


		}

		.box-content-login {
			.no-data {
				flex-direction: column;
				transform: translateY(-150rpx);

				.icon-font {
					font-size: 200rpx;
				}

				.no-data-text {
					flex-direction: column;
					font-size: 28rpx;
					color: #999;
				}
			}

			.no-data-btn {
				margin-top: 60rpx;
				width: 200rpx;
				height: 64rpx;
				background: #FF967D;
				border: 1rpx solid #FF967D;
				border-radius: 10rpx;
				font-size: 28rpx;
				color: #fff;
			}
		}

		.box-footer {
			padding: 15rpx 40rpx 30rpx;
			box-sizing: border-box;
		}
	}
</style>
