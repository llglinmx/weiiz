<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="设置"></navTitle>
		</view>
		<view class="box-content">
			<view class="content-list">
				<view class="content-list-li">
					<view class="content-list-li-title">个人信息</view>
					<view class="content-list-li-more flex-center" @click="listAllClick('info')">
						<image src="../../static/images/more-gray.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="content-list-li">
					<view class="content-list-li-title">身体状态</view>
					<view class="content-list-li-more flex-center" @click="listAllClick('bodyState')">
						<image src="../../static/images/more-gray.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="content-list-li">
					<view class="content-list-li-title">紧急联系人</view>
					<view class="content-list-li-more flex-center" @click="listAllClick('contacts')">
						<image src="../../static/images/more-gray.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="content-list-li">
					<view class="content-list-li-title">账号安全</view>
					<view class="content-list-li-more flex-center" @click="listAllClick('security')">
						<image src="../../static/images/more-gray.png" mode="aspectFill"></image>
					</view>
				</view>
			</view>
			<view class="content-list">
				<view class="content-list-li">
					<view class="content-list-li-title">推送设置</view>
					<view class="content-list-li-more flex-center" @click="listAllClick('pushSet')">
						<image src="../../static/images/more-gray.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="content-list-li">
					<view class="content-list-li-title"">合作授权</view>
					<view class=" content-list-li-more flex-center" @click="listAllClick('empower')">
						<image src="../../static/images/more-gray.png" mode="aspectFill">
						</image>
					</view>
				</view>
			</view>
			<view class="content-list">
				<view class="content-list-li">
					<view class="content-list-li-title">关于我们</view>
					<view class="content-list-li-more flex-center" @click="listAllClick('aboutUs')">
						<image src="../../static/images/more-gray.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="content-list-li">
					<view class="content-list-li-title">常见问题</view>
					<view class="content-list-li-more flex-center" @click="listAllClick('problem')">
						<image src="../../static/images/more-gray.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="content-list-li">
					<view class="content-list-li-title">反馈</view>
					<view class="content-list-li-more flex-center" @click="listAllClick('feedback')">
						<image src="../../static/images/more-gray.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="content-list-li">
					<view class="content-list-li-title">举报</view>
					<view class="content-list-li-more flex-center" @click="listAllClick('report')">
						<image src="../../static/images/more-gray.png" mode="aspectFill"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="box-footer">
			<btnPink btnName="退出登录" @btnClick="logOut"></btnPink>
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
			// 所有点击事件
			listAllClick(type) {
				console.log(type)
				switch (type) {
					// 个人信息
					case "info":
						uni.navigateTo({
							url: "../../pagesMineTwo/personalInfo/personalInfo"
						})
						break;
						// 身体状态
					case "bodyState":
						break;
						// 紧急联系人
					case "contacts":
						break;
						// 账号安全
					case "security":
						break;
						// 推送设置
					case "pushSet":
						break;
						// 合作授权
					case "empower":
						break;
						// 关于我们
					case "aboutUs":
						break;
						// 常见问题
					case "problem":
						break;
						// 反馈
					case "feedback":
						break;
						// 举报
					case "report":
						break;
				}
			},


			// 退出登录按钮
			logOut() {
				uni.showToast({
					title: "退出登录",
					icon: "none"
				})
			}
		}
	}
</script>

<style lang="scss">
	.box {
		height: 100%;
		display: flex;
		flex-direction: column;
		background: #F7F7F7;

		.box-head {
			background: #fff;
		}

		.box-content {
			flex: 1;

			.content-list {
				margin: 20rpx 0;
				background: #fff;

				.content-list-li {
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 0 40rpx;
					box-sizing: border-box;
					height: 91rpx;
					border-bottom: 1rpx solid #EDEDED;

					.content-list-li-title {
						font-size: 32rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #000000;
					}

					.content-list-li-more {
						width: 32rpx;
						height: 32rpx;

						image {
							width: 18rpx;
							height: 30rpx;
						}
					}
				}

				.content-list-li:last-child {
					border-bottom: none;
				}
			}
		}

		.box-footer {
			padding: 0 40rpx;
			box-sizing: border-box;
			margin-bottom: 30rpx;
		}
	}
</style>
