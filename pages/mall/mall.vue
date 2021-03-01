<template>
	<view class="mall-box">
		商城
		<view class="mall-head">
			
		</view>
		<view class="mall-content">
			
		</view>
		<!-- tabbar导航栏 -->
		<view class="mall-footer">
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
.mall-box{
	height: 100%;
	display: flex;
	flex-direction: column;
	.mall-content{
		flex: 1;
	}
}
</style>
