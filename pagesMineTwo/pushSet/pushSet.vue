<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="推送设置"></navTitle>
		</view>
		<view class="box-content">
			<view class="content-list">
				<view class="content-list-li">
					<view class="content-list-li-wrap">
						<view class="content-list-li-title">
							活动推送
						</view>
						<view class="content-list-li-text">
							点评促销优惠活动以及精选内容
						</view>
					</view>
					<view class="content-list-li-switch">
						<switch checked @change="switch1Change($event,'activity')" color="#07C160" />
					</view>
				</view>
				<view class="content-list-li">
					<view class="content-list-li-wrap">
						<view class="content-list-li-title">
							首页活动提醒
						</view>
						<view class="content-list-li-text">
							关闭后不再收到首页弹窗活动提醒
						</view>
					</view>
					<view class="content-list-li-switch">
						<switch checked @change="switch1Change($event,'remind')" color="#07C160" />
					</view>
				</view>
				<view class="content-list-li">
					<view class="content-list-li-wrap">
						<view class="content-list-li-title">
							附近推荐
						</view>
						<view class="content-list-li-text">
							基于地理位置向您推荐附近优质商户
						</view>
					</view>
					<view class="content-list-li-switch">
						<switch checked @change="switch1Change($event,'recommend')"color="#07C160" />
					</view>
				</view>
			</view>
			<view class="box-content-btn">
				<btnPink btnName="保存" @btnClick="preserve"></btnPink>

			</view>
		</view>
		<view class="box-footer">

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
			};
		},
		components: {
			btnPink,
			navTitle
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
			switch1Change: function(e,type) {
				// activity
				// remind
				// recommend
				console.log(type)
				console.log(type+' 发生 change 事件，携带值为'+ e.target.value)
				uni.showToast({
					title: type+' 发生 change 事件，携带值为'+ e.target.value,
					icon: "none"
				})
			},
			// 保存按钮
			preserve() {
				uni.showToast({
					title: "保存",
					icon: "none"
				})
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

			.content-list {
				margin: 20rpx 0;
				padding-left: 40rpx;
				background: #fff;

				.content-list-li {
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 0 40rpx 0 0;
					box-sizing: border-box;
					height: 127rpx;
					border-bottom: 1rpx solid #EDEDED;

					.content-list-li-wrap {
						font-family: Source Han Sans CN;
						font-weight: 400;

						.content-list-li-title {
							font-size: 32rpx;
							color: #333333;
						}

						.content-list-li-text {
							font-size: 24rpx;
							color: #999999;
						}
					}

					.content-list-li-switch {}

				}

				.content-list-li:last-child {
					border-bottom: none;
				}
			}


			.box-content-btn {
				padding: 0 40rpx;
				box-sizing: border-box;
				margin-top: 40rpx;
			}
		}

		.box-footer {}
	}
</style>
