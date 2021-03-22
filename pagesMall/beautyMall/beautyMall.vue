<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="美容商城"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content-tabs">
				<liuyuno-tabs ref="boxTabs" :tabData="tabs" :activeIndex="defaultIndex" @tabClick='tabClick' />
			</view>
			<view class="box-content-wrap">
				<view class="box-content-wrap-item">
					<swiper class="swiper-box" :current="defaultIndex" @change="tabChange">
						<swiper-item class="swiper-box-item-list" v-for="(item,index) in tabs" :key="index">
							<goods-list :goodsList="goodsList"></goods-list>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import liuyunoTabs from "@/components/liuyuno-tabs/liuyuno-tabs.vue";
	import navTitle from "../../components/navTitle/navTitle.vue"
	import goodsList from "../../components/goods-list/goods-list.vue"
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				tabs: ["面部护肤", "身体彩妆", "男士护肤", "洗发护发", "身体护理"],
				defaultIndex: 0,
				goodsList: [{
						image: "../../static/images/001.png",
						goodsName: "玻尿酸深层补水面膜",
						price: "356.00",
						isStore: false
					},
					
					{
						image: "../../static/images/004.png",
						goodsName: "玻尿酸深层补水面膜",
						price: "356.00",
						isStore: false
					},
					{
						image: "../../static/images/003.png",
						goodsName: "玻尿酸深层补水面膜",
						price: "356.00",
						isStore: true
					},
					{
						image: "../../static/images/002.png",
						goodsName: "玻尿酸深层补水面膜",
						price: "356.00",
						isStore: false
					},
					{
						image: "../../static/images/003.png",
						goodsName: "玻尿酸深层补水面膜",
						price: "356.00",
						isStore: true
					},
					{
						image: "../../static/images/001.png",
						goodsName: "玻尿酸深层补水面膜",
						price: "356.00",
						isStore: false
					},
					{
						image: "../../static/images/004.png",
						goodsName: "玻尿酸深层补水面膜",
						price: "356.00",
						isStore: false
					},
					{
						image: "../../static/images/003.png",
						goodsName: "玻尿酸深层补水面膜",
						price: "356.00",
						isStore: true
					},
					{
						image: "../../static/images/002.png",
						goodsName: "玻尿酸深层补水面膜",
						price: "356.00",
						isStore: false
					},	
				]
			};
		},
		components: {
			navTitle,
			liuyunoTabs,
			goodsList
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
			// 点击进入详情
			clickGoodsDtails(item){
				uni.navigateTo({
					url:"../../pagesMallTwo/goodsDetails/goodsDetails"
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
			},

		
		}
	}
</script>

<style lang="scss">
	.box {
		display: flex;
		flex-direction: column;
		height: 100%;

		.box-head {
			background-color: #fff;
		}

		.box-content {
			flex: 1;
			overflow-y: scroll;
			display: flex;
			flex-direction: column;

			.box-content-tabs {}

			.box-content-wrap {
				flex: 1;
				overflow-y: scroll;

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
