<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle :navTitle="lan.setUp"></navTitle>
		</view>
		<view class="box-content">
			<view class="content-list">
				<view class="content-list-li" @click="listAllClick('info')">
					<view class="content-list-li-title">{{lan.personalInfo}}</view>
					<view class="content-list-li-more flex-center">
						<text class="iconfont icongengduo icon-font"
							style="color: #ccc;font-size: 40rpx;font-weight: 500;"></text>
					</view>
				</view>
				<view class="content-list-li" @click="listAllClick('bodyState')">
					<view class="content-list-li-title">{{lan.PhysicalCondition}}</view>
					<view class="content-list-li-more flex-center">
						<text class="iconfont icongengduo icon-font"
							style="color: #ccc;font-size: 40rpx;font-weight: 500;"></text>
					</view>
				</view>
				<view class="content-list-li" @click="listAllClick('contacts')">
					<view class="content-list-li-title">{{lan.emergencyContactbv}}</view>
					<view class="content-list-li-more flex-center">
						<text class="iconfont icongengduo icon-font"
							style="color: #ccc;font-size: 40rpx;font-weight: 500;"></text>
					</view>
				</view>
				<view class="content-list-li" @click="listAllClick('security')">
					<view class="content-list-li-title">{{lan.AccountSecurity}}</view>
					<view class="content-list-li-more flex-center">
						<text class="iconfont icongengduo icon-font"
							style="color: #ccc;font-size: 40rpx;font-weight: 500;"></text>
					</view>
				</view>
			</view>
			<view class="content-list">
				<view class="content-list-li" @click="listAllClick('pushSet')">
					<view class="content-list-li-title">{{lan.PushSettings}}</view>
					<view class="content-list-li-more flex-center">
						<text class="iconfont icongengduo icon-font"
							style="color: #ccc;font-size: 40rpx;font-weight: 500;"></text>
					</view>
				</view>
				<view class="content-list-li" @click="listAllClick('empower')">
					<view class="content-list-li-title">{{lan.Cooperation}}</view>
					<view class=" content-list-li-more flex-center">
						<text class="iconfont icongengduo icon-font"
							style="color: #ccc;font-size: 40rpx;font-weight: 500;"></text>
					</view>
				</view>
			</view>
			<view class="content-list">
				<view class="content-list-li" @click="listAllClick('aboutUs')">
					<view class="content-list-li-title">{{lan.Aboutus}}</view>
					<view class="content-list-li-more flex-center">
						<text class="iconfont icongengduo icon-font"
							style="color: #ccc;font-size: 40rpx;font-weight: 500;"></text>
					</view>
				</view>
				<view class="content-list-li" @click="()=>{listAllClick('problem')}">
					<view class="content-list-li-title">{{lan.commonProblemb}}</view>
					<view class="content-list-li-more flex-center">
						<text class="iconfont icongengduo icon-font"
							style="color: #ccc;font-size: 40rpx;font-weight: 500;"></text>
					</view>
				</view>
				<view class="content-list-li" @click="listAllClick('feedback')">
					<view class="content-list-li-title">{{lan.feedbackb}}</view>
					<view class="content-list-li-more flex-center">
						<text class="iconfont icongengduo icon-font"
							style="color: #ccc;font-size: 40rpx;font-weight: 500;"></text>
					</view>
				</view>
				<view class="content-list-li" @click="listAllClick('report')">
					<view class="content-list-li-title">{{lan.reportb}}</view>
					<view class="content-list-li-more flex-center">
						<text class="iconfont icongengduo icon-font"
							style="color: #ccc;font-size: 40rpx;font-weight: 500;"></text>
					</view>
				</view>
			</view>
		</view>
		<view class="box-footer">
			<btnPink :btnName="lan.LogOutB" @btnClick="logOut"></btnPink>
		</view>
		<uni-popup ref="popup" type="dialog">
			<uni-popup-dialog :cancel='lan.cancelm' :determine='lan.determinem' type="warn" mode='base' :title="lan.warningb" :content="content"  :duration="2000"  @confirm="confirm"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	import btnPink from "../../components/btnPink/btnPink.vue"

	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				content: '你确定要退出登录吗？',
				lan:{}
			};
		},
		components: {
			navTitle,
			btnPink
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
            
			close(){
				this.$refs.popup.close()
			},
			
			// 所有点击事件
			listAllClick(type) {
				switch (type) {
					// 个人信息
					case "info":
						uni.navigateTo({
							url: "../../pagesMineTwo/personalInfo/personalInfo"
						})
						this.$store.commit("upEditText", '')
						break;
						// 身体状态
					case "bodyState":
						uni.navigateTo({
							url: "../../pagesMineTwo/physicalCondition/physicalCondition"
						})
						break;
						// 紧急联系人
					case "contacts":
						break;
						// 账号安全
					case "security":
						uni.navigateTo({
							url: "../../pagesMineTwo/accountSecurity/accountSecurity"
						})
						break;
						// 推送设置
					case "pushSet":
						uni.navigateTo({
							url: "../../pagesMineTwo/pushSet/pushSet"
						})
						break;
						// 合作授权
					case "empower":
						uni.navigateTo({
							url: "../../pagesMineTwo/empower/empower"
						})
						break;
						// 关于我们
					case "aboutUs":
						uni.navigateTo({
							url: "../../pagesMineTwo/aboutUs/aboutUs"
						})

						break;

						// 常见问题
					case "problem":
						uni.navigateTo({
							url: "../../pagesMineTwo/commonProblem/commonProblem"
						})
						break;

						// 反馈
					case "feedback":
						uni.navigateTo({
							url: "../../pagesMineTwo/feedback/feedback"
						})
						break;
						// 举报
					case "report":
						uni.navigateTo({
							url: "../../pagesMineTwo/report/report"
						})
						break;
				}
			},


			// 退出登录按钮
			logOut() {
				this.$refs.popup.open()
			},
			// 弹窗点击确认
			confirm() {
				var data = {}
				this.apiput('api/v1/logout', data).then(res => {
					this.$refs.popup.close()
					
					if (res.status == 200) {
						uni.removeStorageSync('token');
						this.$store.commit("upLogin",true,)
						uni.showToast({
							icon: 'none',
							duration: 1000,
							title: this.lan.Exitsuccessful
						});
						uni.reLaunch({
							url: "../../pagesIndex/login/login"
						})
					}
				});
			},
			// 请求语言包
			getLanguage() {
				this.apiget('language/info', {
					name: 'mypage'
				}).then(res => {
					if (res.status == 200) {
			          console.log(res)
					  let language=res.data.language
					  this.lan=res.data.language
					  this.content=language.logoutbb
			}
				});
			},

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
