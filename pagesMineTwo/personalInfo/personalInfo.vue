<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="个人信息"></navTitle>
		</view>
		<view class="box-content">
			<view class="content-list">
				<view class="content-list-li" style="height: 171rpx;">
					<view class="content-list-li-title">头像</view>
					<view class="content-list-li-wrap">

						<view class="content-list-li-wrap-image">
							<image src="../../static/images/userImage.png" mode=""></image>
						</view>
						<view class="content-list-li-more flex-center" @click="listAllClick('info')">
							<text class="iconfont icongengduo icon-font" style="color: #ccc;font-size: 32rpx;font-weight: 500;"></text>
						</view>
					</view>
				</view>
				<view class="content-list-li" @click="listAllClick('security')">
					<view class="content-list-li-title">昵称</view>
					<view class="content-list-li-wrap">
						<view class="content-list-li-wrap-text">
							安稳也随性
						</view>
						<view class="content-list-li-more flex-center">
							<text class="iconfont icongengduo icon-font" style="color: #ccc;font-size: 32rpx;font-weight: 500;"></text>
						</view>
					</view>
				</view>
				<view class="content-list-li" @click="listAllClick('security')">
					<view class="content-list-li-title">性别</view>
					<view class="content-list-li-wrap">
						<view class="content-list-li-wrap-text">
							男
						</view>
						<view class="content-list-li-more flex-center">
							<text class="iconfont icongengduo icon-font" style="color: #ccc;font-size: 32rpx;font-weight: 500;"></text>
						</view>
					</view>
				</view>
				<view class="content-list-li" @click="birthday">
					<view class="content-list-li-title">生日</view>
					<view class="content-list-li-wrap">
						<view class="content-list-li-wrap-text">
							1996-10-04
						</view>
						<view class="content-list-li-more flex-center">
							<text class="iconfont icongengduo icon-font" style="color: #ccc;font-size: 32rpx;font-weight: 500;"></text>
						</view>
					</view>
				</view>
				<view class="content-list-li" @click="addressShow = true">
					<view class="content-list-li-title">居住地</view>
					<view class="content-list-li-wrap">
						<view class="content-list-li-wrap-text">
							{{address}}
						</view>
						<view class="content-list-li-more flex-center">
							<text class="iconfont icongengduo icon-font" style="color: #ccc;font-size: 32rpx;font-weight: 500;"></text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="box-footer">
			<btnPink btnName="保存" @btnClick="preserve"></btnPink>
		</view>
		<pickerAddress v-model="addressShow" @confirm="addresspick" />
	
	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	import btnPink from "../../components/btnPink/btnPink.vue"
	import pickerAddress from '@/components/liudx-pickerAddress/index.vue'

	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				addressShow: false, //控制地址栏是否显示
				show: false, //控制日期显示
				form: {
					province: '',
					city: '',
					area: '',
				},
				address: '请选择地址',

			};
		},
		components: {
			navTitle,
			btnPink,
			pickerAddress
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
			// 点击打开选择生日
			birthday() {
				this.show = true
			},
			// 出生日期确认
			confirm(date) {
				this.show = false;
				this.birth = date;
			},
			// 选择地址
			addresspick(obj) {
				let arr = ['province', 'city', 'area'];
				let place = '';
				arr.map(key => {
					this.form[key] = obj[key].AreaId
					place += obj[key].AreaName
				})
				this.address = place
				console.log(this.address)
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

<style lang="scss" scoped>
	.box {
		display: flex;
		flex-direction: column;
		height: 100%;
		background: #F7F7F7;

		.box-head {
			background: #fff;
		}

		.box-content {
			flex: 1;
			overflow-y: scroll;

			.content-list {
				margin: 20rpx 0;
				background: #fff;

				.content-list-li {
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 0 40rpx;
					box-sizing: border-box;
					height: 99rpx;
					border-bottom: 1rpx solid #EDEDED;

					.content-list-li-title {
						font-size: 32rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #000000;
					}

					.content-list-li-wrap {
						display: flex;
						align-items: center;

						.content-list-li-wrap-text {
							font-size: 29rpx;
							font-family: Source Han Sans CN;
							font-weight: 400;
							color: #999999;
							margin-right: 10rpx;
						}

						.content-list-li-more {
							display: flex;
							align-items: center;
							.icon-font{
								margin-top: 4rpx;
							}
						}

						.content-list-li-wrap-image {
							width: 112rpx;
							height: 112rpx;
							margin-right: 10rpx;

							image {
								width: 112rpx;
								height: 112rpx;
							}
						}
					}
				}

				.content-list-li:last-child {
					border-bottom: none;
				}
			}
		}

		.box-footer {
			margin-bottom: 30rpx;
			padding: 0 40rpx;
		}
	}
</style>
