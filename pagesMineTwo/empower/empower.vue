<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle :navTitle="lan.Cooperationz"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content-wrap">
				<view class="box-content-wrap-title">
					为您的当前账号：138****1010进行如下平台的合作授权，授权后您使用当前账号在weiiz平台登录时您可以：
				</view>
				<view class="box-content-wrap-text">
					1、将喜欢的内容分享到合作平台，和朋友们一起分析好项目
				</view>
				<view class="box-content-wrap-text">
					2、将喜欢的内容分享到合作平台，和朋友们一起分析好项目
				</view>
				<view class="box-content-wrap-text">
					3、将喜欢的内容分享到合作平台
				</view>
			</view>
			<view class="content-list">
				<view class="content-list-li" v-for="(item,index) in list" :key="index">
					<view class="content-list-li-wrap">
						<view class="content-list-li-image">
							<image :src="item.image" mode="aspectFill"></image>
						</view>
						<view class="content-list-li-info">
							<view class="list-li-info-title">{{item.title}}</view>
							<view class="list-li-info-text">{{item.isEmpower?item.EnpowerTime:lan.unauthorized}}</view>
						</view>
					</view>
					<view class="content-list-li-switch">
						<switch @change="switchChange($event,item,index)"  style="transform: scale(0.7);" :checked="item.isEmpower" color="#07C160" />
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				list: [{
						image: "../../static/images/fackbook.png",
						title: "facebook",
						isEmpower: false,
						EnpowerTime: "2020-05-20",
					},
					{
						image: "../../static/images/twitter.png",
						title: "twitter",
						isEmpower: false,
						EnpowerTime: "2020-05-20",
					},
					{
						image: "../../static/images/pinterest.png",
						title: "pinterest",
						isEmpower: true,
						EnpowerTime: "2020-05-20",
					},
					{
						image: "../../static/images/instagram.png",
						title: "instagram",
						isEmpower: false,
						EnpowerTime: "2020-05-20",
					},
					{
						image: "../../static/images/google.png",
						title: "google",
						isEmpower: false,
						EnpowerTime: "2020-05-20",
					},
					{
						image: "../../static/images/weChat.png",
						title: "weChat",
						isEmpower: true,
						EnpowerTime: "2020-05-20",
					},

				],
				lan:{}
			};
		},
		components: {
			navTitle
		},
		onLoad(){
			this.getLanguage()
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
			// switch 开关点击事件
			switchChange: function(e, item, index) {
				switch (item.title) {
					case "facebook":
						break;
					case "twitter":
						break;
					case "pinterest":
						break;
					case "instagram":
						break;
					case "google":
						break;
					case "weChat":
						break;
				}
				this.list[index].isEmpower = e.target.value // 状态赋值

				uni.showToast({
					title: this.lan.Statusm + this.list[index].isEmpower,
					icon: "none"
				})

			},
			// 请求语言包
			getLanguage() {
				this.apiget('language/info', {
					name: 'MyPageTwo'
				}).then(res => {
					if (res.status == 200) {
					  let language=res.data.language
					  this.lan=res.data.language
					  
			}
				});
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
			overflow-y: scroll;

			.box-content-wrap {
				padding: 30rpx 40rpx;
				box-sizing: border-box;
				font-family: Source Han Sans CN;
				font-weight: 400;
				font-size: 28rpx;

				.box-content-wrap-title {
					color: #000;

				}

				.box-content-wrap-text {
					margin-top: 5rpx;
					color: #999;
				}
			}

			.content-list {
				margin: 0 0 20rpx 0;
				background: #fff;

				.content-list-li {
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 0 40rpx;
					box-sizing: border-box;
					height: 127rpx;
					border-bottom: 1rpx solid #EDEDED;

					.content-list-li-wrap {
						display: flex;
						justify-content: space-between;

						.content-list-li-image {
							width: 92rpx;
							height: 92rpx;

							image {
								width: 92rpx;
								height: 92rpx;
							}
						}

						.content-list-li-info {
							display: flex;
							flex-direction: column;
							justify-content: center;
							margin-left: 20rpx;
							font-family: Source Han Sans CN;
							font-weight: 400;

							.list-li-info-title {
								font-size: 32rpx;
								color: #000000;
							}

							.list-li-info-text {
								font-size: 24rpx;
								color: #999999;
							}
						}
					}

					.content-list-li-switch {}
				}

				.content-list-li:last-child {
					border-bottom: 0;
				}
			}
		}

	}
</style>
