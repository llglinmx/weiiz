<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<nav-title navTitle="修改密码"></nav-title>
		</view>
		<view class="box-content">
			<view class="box-content-text">
				请为您的账号<text> {{phone|mobileStr}} </text>设置一个新密码
			</view>
			<view class="box-content-main-input">
				<input type="text" @input="passwordChange" :password="!isShowPassword" v-model.trim="password"
					confirm-type="done" placeholder="请输入新密码长度为8-12位" />
				<text class="iconfont iconxianshimima icon-font" style="color: #ccc;" @click="showPass"
					v-if="!isShowPassword"></text>
				<text class="iconfont iconyincangmima icon-font" style="color: #ccc;" @click="showPass"
					v-if="isShowPassword"></text>
			</view>
			<view class="box-content-btn flex-center" @click="preservation" :class="isAll?'btn-active':''">保存新密码</view>
		</view>
	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				phone: '',
				isAll: false,
				isShowPassword: false, //是否显示密码
				password: '', //密码
			};
		},
		components: {
			navTitle
		},
		filters: {
			// 手机号中间四位变 * 号
			mobileStr(str) {
				if (str.length > 7) {
					return str.substring(0, 3) + '****' + str.substring(7, str.length);
				} else {
					return str.substring(0, str.length - 1) + '****';
				}
			}
		},
		onReady() {
			// 获取顶部电量状态栏高度
			uni.getSystemInfo({
				success: (res) => {
					this.barHeight = res.statusBarHeight
				}
			});
		},
		onLoad(options) {
			var data = JSON.parse(options.data)
			this.phone = data.phone
			this.id = data.id
		},
		methods: {
			// 点击显示 隐藏密码
			showPass() {
				this.isShowPassword = !this.isShowPassword
			},

			//监听输入密码
			passwordChange() {
				if (this.password.length >= 8 && this.password.length <= 13) {
					this.isAll = true
					return false
				}
				this.isAll = false
			},

			// 确定按钮
			preservation() {
				if (this.password != '') {
					if (this.password.length >= 8 && this.password.length <= 13) {
						var vuedata = {
							password: this.password
						}
						this.apiput('api/v1/members/member_info/edit/' + this.id, vuedata).then(res => {
							if (res.status == 200) {
								console.log(res)
								uni.showToast({
									title: "密码修改成功",
									icon: "none"
								})
								setTimeout(function() {
									uni.navigateBack({
										delta: 1
									})
								}, 1000)

							}
						});
						return false
					}
					uni.showToast({
						title: "请检查密码长度是否为8-13位",
						icon: "none"
					})
					return false
				}
				uni.showToast({
					title: "请输入密码",
					icon: "none"
				})
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

			.box-content-text {
				display: flex;
				align-items: center;
				justify-content: center;
				height: 120rpx;
				padding: 0 40rpx;
				box-sizing: border-box;
				background: #fff;
				font-size: 28rpx;
				color: #999;

				text {
					padding: 0 10rpx;
					font-size: 38rpx;
					color: #666;
				}
			}

			.box-content-main-input {
				margin-top: 20rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 100rpx;
				padding: 0 40rpx;
				box-sizing: border-box;
				background: #fff;
				display: flex;
				align-items: center;

				input {
					height: 100%;
					flex: 1;
					font-size: 28rpx;
				}
			}

			.box-content-btn {
				width: 660rpx;
				height: 88rpx;
				margin: auto;
				margin-top: 118rpx;
				background: #FFD6CC;
				box-shadow: 0rpx 10rpx 20rpx rgba(255, 49, 0, 0.15);
				border-radius: 15rpx;
				color: #fff;
				font-size: 32rpx;
				transition: 0.3s;
			}

			.btn-active {
				background: #FF967D;
			}

		}

		.box-footer {}
	}
</style>
