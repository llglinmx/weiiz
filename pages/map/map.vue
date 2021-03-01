<template>
	<view class="map-box">
		地图
		<view class="map-head">
			
		</view>
		<view class="map-content">
			
		</view>
		<!-- tabbar导航栏 -->
		<view class="map-footer">
			<Tabbar></Tabbar>
		</view>
	</view>
</template>

<script>
	import Tabbar from "../../components/tabbar/tabbar.vue"
	export default {
		data() {
			return {
				
			}
		},
		components: {
			Tabbar,
		},
		methods: {
			
		}
	}
</script>
<style scoped lang="scss">
.map-box{
	height: 100%;
	display: flex;
	flex-direction: column;
	.map-content{
		flex: 1;
	}
}
</style>
