<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="个人信息"></navTitle>
		</view>
		<view class="box-content">
			<view class="content-list">
				<view class="content-list-li" style="height: 171rpx;" @click="upImage">
					<view class="content-list-li-title">头像</view>
					<view class="content-list-li-wrap">
						<view class="content-list-li-wrap-image">
							<image :src="userImage!=''?userImage:noUserImage" mode="aspectFill"></image>
							<!-- <image :src="userImage" mode="aspectFill"></image> -->
						</view>
						<view class="content-list-li-more flex-center">
							<text class="iconfont icongengduo icon-font"
								style="color: #ccc;font-size: 32rpx;font-weight: 500;"></text>
						</view>
					</view>
				</view>
				<view class="content-list-li" @click="nickNameClick">
					<view class="content-list-li-title">昵称</view>
					<view class="content-list-li-wrap">
						<view class="content-list-li-wrap-text">{{nickname}}</view>
						<view class="content-list-li-more flex-center">
							<text class="iconfont icongengduo icon-font"
								style="color: #ccc;font-size: 32rpx;font-weight: 500;"></text>
						</view>
					</view>
				</view>
				<view class="content-list-li" @click="sexClick">
					<view class="content-list-li-title">性别</view>
					<view class="content-list-li-wrap">
						<view class="content-list-li-wrap-text" v-if='sex==1'>男</view>
						<view class="content-list-li-wrap-text" v-if='sex==2'>女</view>
						<view class="content-list-li-wrap-text" v-if='sex==0'>保密</view>
						<view class="content-list-li-more flex-center">
							<text class="iconfont icongengduo icon-font"
								style="color: #ccc;font-size: 32rpx;font-weight: 500;"></text>
						</view>
					</view>
				</view>
				<view class="content-list-li" @click="birthday">
					<view class="content-list-li-title">生日</view>
					<view class="content-list-li-wrap">
						<view class="content-list-li-wrap-text">{{birth}}</view>
						<view class="content-list-li-more flex-center">
							<text class="iconfont icongengduo icon-font"
								style="color: #ccc;font-size: 32rpx;font-weight: 500;"></text>
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
							<text class="iconfont icongengduo icon-font"
								style="color: #ccc;font-size: 32rpx;font-weight: 500;"></text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="box-footer">
			<btnPink btnName="保存" @btnClick="preserve"></btnPink>
		</view>

		<pickerAddress v-model="addressShow" @confirm="addresspick" />


		<liudx-picker v-model="isShow" :dataList="sexList" initType='sex' @confirm="sexInput" />

		<!-- <s-picker :visible.sync="isShow" title="性别" :list="sexList" v-model="sexSelect" @input="sexInput"></s-picker> -->


		<view class="data-picker" :class="visible?'data-picker-open':'data-picker'" @click="cancle">
			<view class="data-picker-box" :style="{height:visible?'600rpx':'0'}">
				<view class="data-picker-top">
					<text style="color: #999;" @click.stop="cancle">取消</text>
					<text style="color: #389ae0;" @click="confirm">确定</text>
				</view>
				<picker-view :indicator-style="indicatorStyle" :value="value" @change="bindChange" class="picker-view">
					<picker-view-column>
						<view class="item" v-for="(item,index) in years" :key="index">{{item}}年</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item,index) in months" :key="index">{{item}}月</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item,index) in days" :key="index">{{item}}日</view>
					</picker-view-column>
				</picker-view>
			</view>
		</view>
	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	import btnPink from "../../components/btnPink/btnPink.vue"
	import pickerAddress from '@/components/liudx-pickerAddress/index.vue'
	import liudxPicker from "../../components/liudx-picker/index.vue"
	import sPicker from '../../components/s-ui/s-picker/index.vue'
	import {
		pathToBase64,
		base64ToPath
	} from '../../js_sdk/mmmm-image-tools/index.js'
	import uploadImage from "../../js_sdk/oss/uploadOSS.js";
	// import uploadImage from "../../js_sdk/yushijie-ossutil/ossutil/uploadFile.js";

	export default {
		data() {
			var date = new Date()
			var years = []
			var year = date.getFullYear()
			var months = []
			var month = date.getMonth() + 1
			var days = []
			var day = date.getDate()
			for (let i = 1990; i <= date.getFullYear(); i++) {
				years.push(i)
			}
			for (let i = 1; i <= 12; i++) {
				months.push(i)
			}
			for (let i = 1; i <= 31; i++) {
				days.push(i)
			}
			return {
				barHeight: 0, //顶部电量导航栏高度
				addressShow: false, //控制地址栏是否显示
				show: false, //控制日期显示
				form: {
					province: '',
					city: '',
					area: '',
				},
				isShow: false,
				sexList: [{
						name: '男',
						text: 1
					},
					{
						name: '女',
						text: 2
					},
					{
						name: '保密',
						text: 0
					},
				],
				nickname: '', //昵称
				sex: 1, //性别
				birth: '', //生日
				address: '请选择地址',
				userImage: '', // 用户头像
				avatar: '',
				noUserImage: '../../static/images/userImage.png',

				years,
				year,
				months,
				month,
				days,
				day,
				value: [9999, month - 1, day - 1],
				visible: false,
				indicatorStyle: `height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/80))}px;`,
			};
		},
		components: {
			navTitle,
			btnPink,
			pickerAddress,
			sPicker,
			liudxPicker
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
			// this.id = this.$store.state.userInfo.id
			this.getInfo()

		},

		onShow() {
			if (this.$store.state.editText != '') {
				this.nickname = this.$store.state.editText
			}
		},
		methods: {
			// 选择头像
			upImage() {
				uni.chooseImage({
					count: 1, //默认100
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					success: (res) => {
						// console.log(res.tempFilePaths[0])
						// this.userImage = res.tempFilePaths[0]

						//转为base64位图片
						pathToBase64(res.tempFilePaths[0]).then((data) => {
							this.userImage = data
							const path = 'avatar/';

							// #ifdef H5
							let file = res.tempFilePaths[0];
							let suffix = res.tempFiles[0].name.split('.').pop();
							// #endif

							// #ifdef APP-PLUS
							let file = res.tempFilePaths[0];
							let suffix = res.tempFiles[0].path.split('.').pop();
							// #endif
							this.getOss(path, file, suffix)

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
							this.avatar = result
						});
					}
				});
			},

			// 昵称
			nickNameClick() {
				var str = {
					type: "nickname",
					nickname: this.nickname
				}
				uni.navigateTo({
					url: "../../pagesCommon/edit/edit?data=" + JSON.stringify(str)
				})
			},

			// 点击打开选择生日
			birthday() {
				this.visible = true
			},
			number(val) {
				if (val < 10) {
					return '0' + val
				} else {
					return val
				}
			},
			// 日期选择确认
			confirm() {
				var y = this.number(this.year)
				var m = this.number(this.month)
				var d = this.number(this.day)
				this.visible = false

				this.birth = y + '-' + m + '-' + d

			},
			// 日期选择取消
			cancle() {
				this.visible = false
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
			// 性别
			sexClick() {
				this.isShow = true
			},
			// 选择性别确认事件
			sexInput(e) {
				this.sex = e.text
			},


			// 选择日期
			bindChange(e) {
				const val = e.detail.value
				this.year = this.years[val[0]]
				this.month = this.months[val[1]]
				this.day = this.days[val[2]]
			},



			// 保存按钮
			preserve() {
				var vuedata = {
					nickname: this.nickname,
					sex: this.sex,
					birth: this.birth,
					address: this.address,
					avatar: this.avatar,
				}
				console.log(vuedata)
				this.apiput('api/v1/members/member_info/edit/' + this.id, vuedata).then(res => {
					if (res.status == 200) {
						uni.showToast({
							title: "信息修改成功",
							icon: "none"
						})
						setTimeout(function() {
							uni.navigateBack({
								delta: 1
							})
						}, 500)
					}
				});
			},
			// 获取个人信息
			getInfo() {
				let vuedata = {

				}
				this.apiget('api/v1/members/member_info', vuedata).then(res => {
					if (res.status == 200) {
						this.nickname = res.data.nickname
						this.sex = res.data.sex
						this.birth = res.data.birth
						this.address = res.data.address
						this.userImage = res.data.avatar
						this.id = res.data.id
					}
				});
			},
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

							.icon-font {
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
								border-radius: 50%;
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

		.data-picker {
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
			transition: 0.3s;

			.data-picker-box {
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				display: flex;
				align-items: center;
				flex-direction: column;
				transition: 0.3s;

				.data-picker-top {
					width: 100%;
					height: 100rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 0 40rpx;
					box-sizing: border-box;
					background: #fff;
					font-size: 28rpx;
					border-bottom: 1rpx solid #ededed;
				}

				.picker-view {
					width: 100%;
					height: 500rpx;
					background: #fff;
				}

				.item {
					height: 80rpx;
					line-height: 80rpx;
					align-items: center;
					justify-content: center;
					text-align: center;
					font-size: 32rpx;
				}
			}

		}

		.data-picker-open {
			background: rgba(0, 0, 0, 0.5);
			z-index: 999 !important;
		}
	}
</style>
