<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="套餐卡"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content-tabs">
				<liuyuno-tabs ref="boxTabs" :tabData="tabs" :activeIndex="defaultIndex" @tabClick='tabClick' />
			</view>
			<view class="box-content-wrap">
				<view class="box-content-wrap-item">
					<swiper class="swiper-box" :current="defaultIndex" @change="tabChange">
						<swiper-item class="swiper-box-item-list" v-for="(item,index) in tabs" :key="index">
							<scroll-package-swiper-item @detail="cardDetails" :tabIndex="index" :status='status'
								:currentIndex="defaultIndex">
							</scroll-package-swiper-item>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	import liuyunoTabs from "@/components/liuyuno-tabs/liuyuno-tabs.vue";
	import scrollPackageSwiperItem from "../../components/scroll-package-swiper-item/scroll-package-swiper-item.vue"
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				defaultIndex: 0,
				tabs: ["未使用", "已使用", "已过期"],
				status: 1
			};
		},
		components: {
			navTitle,
			liuyunoTabs
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

			// 点击进入套餐卡详情
			cardDetails(id) {
				uni.navigateTo({
					url: "../../pagesMineTwo/packageCardOrderDetails/packageCardOrderDetails?id=" + id
				})
			},

			// tabs 点击
			tabClick(e) {
				this.defaultIndex = e
			},
			// 滑动切换列表
			tabChange(e) {
				this.$refs.boxTabs.tabToIndex(e.detail.current)
				this.defaultIndex = e.detail.current
				this.changeIndex(this.defaultIndex)
			},


			changeIndex(index) {
				switch (index) {
					case 0:
						this.status = 1
						break;
					case 1:
						this.status = 2
						break;
					case 2:
						this.status = 3
						break;
				}
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
	}
</style>
