<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<nav-title :navTitle="title"></nav-title>
		</view>
		<view class="box-content">
			<view class="box-content-main-input">
				<view class="box-content-main-input-box">
					<input type="text" :focus="isFocus" v-model.trim="val" />
				</view>
				<view class="box-content-main-input-box-ico flex-center" @click="empty">
					<text class="iconfont iconcuowu" style="font-size: 28rpx;color: #999;"></text>
				</view>
			</view>
			<view class="box-content-main-text">{{lan.goodNickname}}</view>
		</view>
		<view class="box-footer">
			<btnPink :btnName="lan.determinec" @btnClick="preserve"></btnPink>
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
				title: '修改昵称',
				val: '',
				isFocus: true,
				lan:{}
			};
		},
		components: {
			navTitle,
			btnPink
		},
		onLoad(options) {
			var data = JSON.parse(options.data)

			switch (data.type) {
				case "nickname":
					this.title = "修改昵称"
					this.val = data.nickname
					break;
				case "ddd":
					break;
			}
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
			// 清空
			empty() {
				this.val = ''
			},

			// 保存
			preserve() {
				if (this.val.length > 0) {
					uni.navigateBack({
						delta: 1
					})
					this.$store.commit('upEditText', this.val)
					return false;
				}
				uni.showToast({
					title: this.lan.entercharacter,
					icon: "none"
				})
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
					  this.title=language.ChangeNickname
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
		background: #fff;

		.box-head {
			background-color: #fff;
		}

		.box-content {
			flex: 1;
			overflow-y: scroll;
			padding: 0 40rpx;
			box-sizing: border-box;

			.box-content-main-input {
				display: flex;
				align-items: center;
				margin-bottom: 20rpx;
				height: 80rpx;
				border-bottom: 1rpx solid #ededed;
				padding: 0 10rpx;
				box-sizing: border-box;

				.box-content-main-input-box {
					flex: 1;
					height: 100%;

					input {
						box-sizing: border-box;
						height: 100%;
						font-size: 28rpx;
					}
				}

				.box-content-main-input-box-ico {
					width: 32rpx;
					height: 32rpx;
					border-radius: 50%;
					margin-left: 10rpx;
					border: 1rpx solid #ededed;
				}
			}

			.box-content-main-text {
				font-size: 28rpx;
				color: #999;
			}

		}

		.box-footer {
			padding: 30rpx 40rpx;
			box-sizing: border-box;
		}
	}
</style>
