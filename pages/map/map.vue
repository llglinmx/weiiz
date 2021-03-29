<template>
	<view class="map-box">
		地图
		<view class="map-head">

		</view>
		<view class="map-content">

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
				activeIndex: 2, //当前tabbar所在页面
			}
		},
		components: {
			Tabbar,
		},
		methods: {
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

		.map-content {
			flex: 1;
		}
	}
</style>
