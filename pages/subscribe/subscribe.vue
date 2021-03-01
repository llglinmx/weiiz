<template>
	<view class="sub-box">
		我的预约
		<view class="sub-head">
			
		</view>
		<view class="sub-content">
			
		</view>
		<!-- tabbar导航栏 -->
		<view class="sub-footer">
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
.sub-box{
	height: 100%;
	display: flex;
	flex-direction: column;
	.sub-content{
		flex: 1;
	}
}
</style>
