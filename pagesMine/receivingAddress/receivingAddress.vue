<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="地址管理"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content-list" v-if="isData">
				<view class="box-content-list-li" v-for="(item,index) in 3" :key="index">
					<view class="box-content-list-li-top">
						<view class="list-li-top-name">
							张三
						</view>
						<view class="list-li-top-phone">
							18888888888
						</view>
					</view>
					<view class="box-content-list-li-address">
						<text>中国 福建省 厦门市 集美区 银江路137号121212</text>
						<image src="../../static/images/more-gray.png" mode="aspectFill"></image>
					</view>
					<view class="box-content-list-li-postcode">
						36000000
					</view>
					<view class="box-content-list-li-default" @click.top="setDefault(index)">
						<image src="../../static/images/no-check-coupons.png" mode="aspectFill" v-if="index!=idx"></image>
						<image src="../../static/images/check-coupons.png" mode="aspectFill" v-else></image>
						<text>设为默认地址</text>
					</view>
				</view>
			</view>
			<view class="box-content-login" v-else>
				<view class="box-content-login-no-data">
					<view class="box-content-login-no-data-text">
						暂无收货地址
					</view>
					<view class="box-content-login-no-data-btn flex-center" @click="addAddress">
						添加地址
					</view>
				</view>
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
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				idx: 0, //当前默认地址
				isData: true, //是否有数据
				isLoad: true, //显示加载效果
			};
		},
		components: {
			navTitle,
			btnPink
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
			// 添加地址按钮
			addAddress() {
				uni.navigateTo({
					url: "../../pagesMineTwo/addShippingAddress/addShippingAddress"
				})
				// uni.showToast({
				// 	title: "添加收货地址",
				// 	icon: "none"
				// })
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

						image {
							width: 28rpx;
							height: 28rpx;
						}
					}

					.box-content-list-li-postcode {}

					.box-content-list-li-default {
						margin-top: 16rpx;
						display: flex;
						align-items: center;

						image {
							width: 36rpx;
							height: 36rpx;
						}

						text {
							margin-left: 10rpx;
							font-size: 26rpx;
							color: #000;
						}
					}
				}
			}

			.box-content-login {
				height: 100%;

				.box-content-login-no-data {
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
					height: 100%;

					.box-content-login-no-data-text {
						font-size: 28rpx;
						color: #999;
					}

					.box-content-login-no-data-btn {
						width: 200rpx;
						height: 64rpx;
						margin-top: 80rpx;
						background: #FF967D;
						border: 1rpx solid #FF967D;
						border-radius: 10rpx;
						color: #fff;
						font-size: 28rpx;
					}
				}
			}
		}

		.box-footer {
			padding: 30rpx 40rpx;
			box-sizing: border-box;
		}
	}
</style>
