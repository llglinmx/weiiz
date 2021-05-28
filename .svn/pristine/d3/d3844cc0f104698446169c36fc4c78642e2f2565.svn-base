<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="优惠券"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content-tabs">
				<liuyuno-tabs ref="boxTabs" :tabData="tabs" :activeIndex="defaultIndex" @tabClick='tabClick' />
			</view>
			<view class="box-content-wrap">
				<view class="box-content-wrap-item">
					<swiper class="swiper-box" :current="defaultIndex" @change="tabChange">
						<swiper-item class="swiper-box-item-list" v-for="(item, index) in tabs" :key="index">
							<scroll-coupon-swiper-item :tabIndex="index" :currentIndex="defaultIndex" :type='type'
								:status="status"></scroll-coupon-swiper-item>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<view class="box-footer">
			<view class="box-footer-btn flex-center" @click="receive">领取更多优惠券</view>
		</view>
	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	import liuyunoTabs from "@/components/liuyuno-tabs/liuyuno-tabs.vue";
	import zPaging from '../../uni_modules/z-paging/components/z-paging/z-paging.vue'
	import scrollCouponSwiperItem from '../../components/scroll-coupon-swiper-item/scroll-coupon-swiper-item.vue'

	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				defaultIndex: 0,
				tabs: ["平台优惠券", "店铺优惠券", "已使用", "已过期"],
				status: -1,
				type: -1
			};
		},
		components: {
			navTitle,
			liuyunoTabs,
			scrollCouponSwiperItem
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

		},
		methods: {

			// 获取数据
			getDataList(page, status, type) {
				var vuedata = {
					page_index: page.num, // 请求页数，
					each_page: page.size, // 请求条数
					status: this.status,
					type: this.type
				}
				this.apiget('api/v1/members/coupon', vuedata).then(res => {
					if (res.status == 200) {
						if (res.data.data.length != 0) {
							let list = res.data.data
							let totalSize = res.data.total_rows

						} else {

						}

					}
				});
			},




			// tabs 点击
			tabClick(e) {
				this.defaultIndex = e

				this.setType(this.defaultIndex)

			},
			// 滑动切换列表
			tabChange(e) {
				this.$refs.boxTabs.tabToIndex(e.detail.current)
				this.defaultIndex = e.detail.current
				this.setType(this.defaultIndex)
			},

			setType(defaultIndex) {
				switch (defaultIndex) {
					case 0:
						this.status = -1
						this.type = -1
						break;
					case 1:
						this.status = -1
						this.type = 1
						break;
					case 2:
						this.status = 1
						this.type = ''
						break;
					case 3:
						this.status = -2
						this.type = ''
						break;
				}
				var page = {
					num: 1,
					size: 10,
				}

			},

			// 领取更多优惠券按钮
			receive() {
				uni.navigateTo({
					url: "../collection-center/collection-center"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
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

			box-sizing: border-box;
			overflow-y: scroll;

			.box-content-tabs {}

			.box-content-wrap {
				height: calc(100% - 90rpx);
				overflow-y: scroll;
				font-family: Source Han Sans CN;
				font-weight: 400;

				.box-content-wrap-item {
					height: 100%;

					.swiper-box {
						height: 100%;
						overflow-y: scroll;

						.swiper-box-item-list {
							height: 100%;
							overflow-y: scroll;


						}
					}
				}
			}
		}

		.box-footer {
			padding: 30rpx 40rpx;
			box-sizing: border-box;

			.box-footer-btn {
				height: 88rpx;
				background: rgba(255, 150, 125, 0);
				border: 1rpx solid #333333;
				border-radius: 15rpx;
				color: #333;
				font-size: 32rpx;
			}
		}
	}
</style>
