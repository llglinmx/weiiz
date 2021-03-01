<template>
	<view class="mine-box">
		个人
		<view class="mine-head">
			
		</view>
		<view class="mine-content">
			
		</view>
		<!-- tabbar导航栏 -->
		<view class="mine-footer">
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
.mine-box{
	height: 100%;
	display: flex;
	flex-direction: column;
	.mine-content{
		flex: 1;
	}
}
</style>
