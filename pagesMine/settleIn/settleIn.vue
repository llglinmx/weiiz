<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="我要入驻"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content-list-title">
				欢迎加入weiiz平台，请填写申请信息
			</view>
			<view class="box-content-list" style="margin-top: 0;">
				<view class="box-content-list-li">
					<view class="box-content-list-li-title">门店名称</view>
					<view class="box-content-list-li-info">
						<input class="box-content-list-li-info-input" v-model.trim="from.storeName" type="text"
							placeholder="请填写门店名称" placeholder-class="plac-color" />
					</view>
				</view>
				<view class="box-content-list-li">
					<view class="box-content-list-li-title">区域</view>
					<view class="box-content-list-li-info" style="justify-content: space-between;">
						<view class="box-content-list-li-info-title" style="color: #000;">请选择</view>
						<view class="box-content-list-li-info-more">
							<text class="iconfont icongengduo icon-font" style="color: #999;font-size:28rpx;"></text>
						</view>
					</view>
				</view>
				<view class="box-content-list-li" @click="classify">
					<view class="box-content-list-li-title">分类</view>
					<view class="box-content-list-li-info" style="justify-content: space-between;">
						<view class="box-content-list-li-info-title" style="color: #000;">{{categoryTitle}}</view>
						<view class="box-content-list-li-info-more">
							<text class="iconfont icongengduo icon-font" style="color: #999;font-size:28rpx;"></text>
						</view>
					</view>
				</view>
				<view class="box-content-list-li" style="height: 180rpx;">
					<view class="box-content-list-li-title">
						<text class="list-li-title-msg">门店图标</text>
						<text class="list-li-title-text">(100*100)</text>
					</view>
					<view class="box-content-list-li-info">
						<view class="box-content-list-li-info-upload" @click="upImage('icon')" v-if="iconImage==''">
							<text class="iconfont icontupian" style="font-size: 50rpx;color: #fff;"></text>
						</view>
						<view class="box-content-list-li-info-upload-image" @click="upImage('icon')"
							v-if="iconImage!=''">
							<image :src="iconImage" mode="aspectFill"></image>
						</view>
					</view>
				</view>
				<view class="box-content-list-li" style="height: 180rpx;">
					<view class="box-content-list-li-title">
						<text class="list-li-title-msg">门店封面</text>
						<text class="list-li-title-text">(110*80)</text>
					</view>
					<view class="box-content-list-li-info">
						<view class="box-content-list-li-info-upload" @click="upImage('cover')" v-if="coverImage==''">
							<text class="iconfont icontupian" style="font-size: 50rpx;color: #fff;"></text>
						</view>
						<view class="box-content-list-li-info-upload-image" @click="upImage('cover')"
							v-if="coverImage!=''">
							<image :src="coverImage" mode="aspectFill"></image>
						</view>
					</view>
				</view>


				<view class="box-content-list-li">
					<view class="box-content-list-li-title">门店电话</view>
					<view class="box-content-list-li-info">
						<input class="box-content-list-li-info-input" v-model.trim="from.storeTel" type="number"
							placeholder="请输入电话" placeholder-class="plac-color" />
					</view>
				</view>

				<view class="box-content-list-li">
					<view class="box-content-list-li-title">营业时间</view>
					<view class="box-content-list-li-info" v-if="from.businessHours==''">营业时间</view>
					<view class="box-content-list-li-info" v-if="from.businessHours!=''">{{from.businessHours}}</view>
				</view>
				<view class="box-content-list-li">
					<view class="box-content-list-li-title">门店地址</view>
					<view class="box-content-list-li-info" v-if="from.storeAddress==''">点击定位</view>
					<view class="box-content-list-li-info" v-if="from.storeAddress!=''">{{}}</view>
				</view>
			</view>

			<view class="box-content-list">
				<view class="box-content-list-li">
					<view class="box-content-list-li-title box-content-list-li-title-name">姓名</view>
					<view class="box-content-list-li-info">
						<input class="box-content-list-li-info-input" v-model.trim="from.name" type="text"
							placeholder="请输入名称" placeholder-class="plac-color" />
					</view>
				</view>
				<view class="box-content-list-li">
					<view class="box-content-list-li-title box-content-list-li-title-name">联系方式</view>
					<view class="box-content-list-li-info">
						<input class="box-content-list-li-info-input" v-model.trim="from.tel" type="number"
							placeholder="请输入联系方式" placeholder-class="plac-color" />
					</view>
				</view>
				<view class="box-content-list-li">
					<view class="box-content-list-li-title box-content-list-li-title-name">地址</view>
					<view class="box-content-list-li-info">
						<input class="box-content-list-li-info-input" v-model.trim="from.address" type="text"
							placeholder="请输入地址" placeholder-class="plac-color" />
					</view>
				</view>

				<view class="box-content-list-li" style="height: 180rpx;">
					<view class="box-content-list-li-title box-content-list-li-title-name">上传执照</view>
					<view class="box-content-list-li-info">
						<view class="box-content-list-li-info-upload" @click="upImage('license')"
							v-if="licenseImage==''">
							<text class="iconfont icontupian" style="font-size: 50rpx;color: #fff;"></text>
						</view>
						<view class="box-content-list-li-info-upload-image" @click="upImage('license')"
							v-if="licenseImage!=''">
							<image :src="licenseImage" mode="aspectFill"></image>
						</view>

					</view>
				</view>
				<view class="box-content-list-li" style="height: 180rpx;">
					<view class="box-content-list-li-title box-content-list-li-title-name">门店照片</view>
					<view class="box-content-list-li-info">
						<view class="box-content-list-li-info-upload" @click="upImage('recruit')"
							v-if="recruitImage==''">
							<text class="iconfont icontupian" style="font-size: 50rpx;color: #fff;"></text>
						</view>
						<view class="box-content-list-li-info-upload-image" @click="upImage('recruit')"
							v-if="recruitImage!=''">
							<image :src="recruitImage" mode="aspectFill"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="box-footer">
			<btn-pink btnName="提交申请" @btnClick="apply"></btn-pink>
		</view>
		<list-popup :visible.sync="visible" :activeIndex='activeIndex' :dataList="categoryList" @close='closeClass'
			@confirm="categoryClick">
		</list-popup>

	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	import btnPink from "../../components/btnPink/btnPink.vue"
	import listPopup from "../../components/list-popup/list-popup.vue"

	import {
		pathToBase64,
		base64ToPath
	} from '../../js_sdk/mmmm-image-tools/index.js'
	import uploadImage from "../../js_sdk/oss/uploadOSS.js";

	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				iconImage: '', //门店图标
				coverImage: '', //门店封面
				licenseImage: '', //执照
				recruitImage: '', //照片
				isType: '', //当前点击是哪一个图片类型
				categoryList: [],
				categoryTitle: '请选择',
				activeIndex: -1,
				visible: false,
				from: {
					storeName: '', //门店名称
					classify: '', //门店分类
					storeTel: '', //门店电话
					businessHours: '', //营业时间
					storeAddress: '', //门店地址
					name: '', //姓名
					tel: '', //联系方式
					address: '', //联系地址
				}
			};
		},
		components: {
			navTitle,
			btnPink,
			listPopup
		},

		onReady() {
			// 获取顶部电量状态栏高度
			uni.getSystemInfo({
				success: (res) => {
					this.barHeight = res.statusBarHeight
				}
			});
		},
		onLoad() {
			this.getCategory()
		},
		methods: {
			// 分类点击
			classify() {
				this.visible = true
			},
			// 关闭分类弹出层
			closeClass(bool) {
				this.visible = bool
			},
			// 确认按钮点击
			categoryClick(id) {
				this.categoryList.forEach((item, index) => {
					if (item.id == id) {
						this.categoryTitle = item.name
						this.from.classify = item.id
						this.activeIndex = index
					}
				})
				this.visible = false
			},

			// 选择头像
			upImage(type) {
				uni.chooseImage({
					count: 1, //默认100
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					success: (res) => {
						//转为base64位图片
						pathToBase64(res.tempFilePaths[0]).then((data) => {
							switch (type) {
								case 'icon':
									this.iconImage = data
									break;
								case 'cover':
									this.coverImage = data
									break;
								case 'license':
									this.licenseImage = data
									break;
								case 'recruit':
									this.recruitImage = data
									break;
							}

							this.isType = type

							const path = 'images/';

							// #ifdef H5
							let file = res.tempFilePaths[0];
							let suffix = res.tempFiles[0].name.split('.').pop();
							// #endif

							// #ifdef APP-PLUS
							let file = res.tempFilePaths[0];
							let suffix = res.tempFiles[0].path.split('.').pop();
							// #endif

							// this.getOss(path, file, suffix)

						})

						// console.log(this.userImage)
					}
				});
			},

			// 获取阿里云oss 信息
			getOss(path, file, suffix) {
				this.apiget('app/oss/url', {}).then(res => {
					if (res.status == 200) {
						var obj = {
							accessid: res.data.accessid,
							policy: res.data.policy,
							signature: res.data.signature,
						}
						// 上传图片
						uploadImage(obj, file, path, suffix, result => {
							console.log(result)
						});
					}
				});
			},

			// 类别
			getCategory() {
				this.apiget('pc/category/category_type', {
					type: 11
				}).then(res => {
					if (res.status == 200) {
						this.categoryList = res.data
					}
				});

			},

			// 提交申请按钮
			apply() {
				console.log(this.from)
				uni.showToast({
					title: "提交申请",
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

			.box-content-list-title {
				display: flex;
				align-items: center;
				padding-left: 40rpx;
				box-sizing: border-box;
				height: 88rpx;
				font-size: 28rpx;
				color: #FF8366;
			}


			.box-content-list {
				padding: 0 0 0 40rpx;
				box-sizing: border-box;
				margin-top: 20rpx;
				background: #fff;

				.box-content-list-li:last-child {
					border-bottom: 0;
				}

				.box-content-list-li {
					display: flex;
					align-items: center;
					height: 99rpx;
					border-bottom: 1rpx solid #ededed;
					font-size: 28rpx;

					.box-content-list-li-title {
						display: flex;
						flex-direction: column;
						width: 192rpx;
						color: #333;

						.list-li-title-msg {}

						.list-li-title-text {
							font-size: 24rpx;
							color: #999;
						}
					}

					.box-content-list-li-title-name {
						position: relative;
					}

					.box-content-list-li-title-name::after {
						position: absolute;
						top: 0;
						left: -20rpx;
						content: "*";
						color: #FF6F4D;
						font-size: 36rpx;
					}


					.box-content-list-li-info {
						flex: 1;
						display: flex;
						align-items: center;
						padding-right: 40rpx;
						box-sizing: border-box;
						color: #999;

						.plac-color {
							color: #999;
						}


						.box-content-list-li-info-input {
							flex: 1;
							font-size: 28rpx;
						}

						.box-content-list-li-info-title {}

						.box-content-list-li-info-more {
							display: flex;
							align-items: center;

							image {
								width: 28rpx;
								height: 28rpx;
							}
						}

						.box-content-list-li-info-upload {
							display: flex;
							align-items: center;
							justify-content: center;
							width: 120rpx;
							height: 120rpx;
							background: #EDEDED;
							border-radius: 10rpx;
						}

						.box-content-list-li-info-upload-image {
							width: 120rpx;
							height: 120rpx;

							image {
								width: 120rpx;
								height: 120rpx;
								border-radius: 10rpx;
							}
						}


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
