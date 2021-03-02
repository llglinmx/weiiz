<template>
	<view class="tabbar-box">
		<view class="tabbar-li" v-for="(item,index) in tabbarList" :key="index">
			<view v-if="item.isMap" class="tabbar-li-item" style="width: 100rpx;height: 100%;" @click="tabbarClick(item.title)">
				<view class="map-boxshow"></view>
				<view class="map-cover">
					<view class="cover-icon-box">

					</view>
					<view class="cover-box-title">
						{{item.title}}
					</view>
				</view>
			</view>
			<view class="tabbar-li-item" v-else @click="tabbarClick(item.title)">
				<image class="tabbar-ico" src="../../static/images/code.png" mode=""></image>
				<text class="tabbar-text">{{item.title}}</text>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabbarTitle: '首页',
				tabbarList: [{
						title: "首页",
						icon: '',
						selectIcon: "",
						isMap: false
					},
					{
						title: "我的预约",
						icon: '',
						selectIcon: "",
						isMap: false
					},
					{
						title: "地图",
						icon: '',
						selectIcon: "",
						isMap: true
					},
					{
						title: "商城",
						icon: '',
						selectIcon: "",
						isMap: false
					},
					{
						title: "我的",
						icon: '',
						selectIcon: "",
						isMap: false
					},
				]
			}
		},
		onLoad() {

		},
		methods: {
			// tabbar点击
			tabbarClick(item) {
				console.log(this.tabbarTitle,item)
				// if (this.tabbarTitle != item) // 判断是否为本页面，如果为本页面则不执行
					switch (item) {
						case "首页":
							console.log("首页")
							uni.redirectTo({
								url: "../../pages/index/index"
							})
							break;
						case "我的预约":
							uni.redirectTo({
								url: "../../pages/subscribe/subscribe"
							})
							console.log("我的预约")
							break;
						case "地图":
							uni.redirectTo({
								url: "../../pages/map/map"
							})
							console.log("地图")
							break;
						case "商城":
							uni.redirectTo({
								url: "../../pages/mall/mall"
							})
							console.log("商城")
							break;
						case "我的":
							uni.redirectTo({
								url: "../../pages/mine/mine"
							})
							console.log("我的")
							break;
					}
				this.tabbarTitle = item
			}
		}
	}
</script>

<style scoped lang="scss">
	.tabbar-box {
		display: flex;
		justify-content: space-evenly;
		height: 102rpx;
		box-shadow: 0px -1px 10px rgba(0, 0, 0, 0.1);
		background: #fff;

		.tabbar-li {
			display: flex;

			.tabbar-li-item {
				position: relative;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;

				.tabbar-ico {
					width: 45rpx;
					height: 40rpx;
					margin-bottom: 10rpx;
				}

				.tabbar-text {
					color: #626366;
					font-size: 20rpx;
				}

				.map-boxshow {
					position: absolute;
					top: -30rpx;
					width: 100rpx;
					height: 100rpx;
					border-radius: 50%;
					box-shadow: 0px -1px 10px rgba(0, 0, 0, 0.1);
					background: #fff;
					z-index: 1;
				}

				.map-cover {
					position: absolute;
					top: 0;
					width: 120rpx;
					height: 100%;
					background: #fff;
					z-index: 2;

					.cover-icon-box {
						position: absolute;
						top: -20rpx;
						left: 0;
						right: 0;
						margin: auto;
						width: 80rpx;
						height: 80rpx;
						background: #FF967D;
						border-radius: 50%;
					}

					.cover-box-title {
						padding-bottom: 14rpx;
						height: 100%;
						display: flex;
						box-sizing: border-box;
						align-items: center;
						justify-content: end;
						color: #626366;
						font-size: 20rpx;
						justify-content: flex-end;
						flex-direction: column;
					}
				}
			}
		}
	}
</style>
