<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle :navTitle="title"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content-list">
				<view class="box-content-list-li">
					<view class="box-content-list-li-title">姓氏</view>
					<view class="box-content-list-li-info">
						<input class="box-content-list-li-info-input" v-model.trim="lastname" type="text"
							placeholder="请输入姓" />
					</view>
				</view>
				<view class="box-content-list-li">
					<view class="box-content-list-li-title">名字</view>
					<view class="box-content-list-li-info">
						<input class="box-content-list-li-info-input" v-model.trim="name" type="text"
							placeholder="请输入名字" />
					</view>
				</view>
				<view class="box-content-list-li">
					<view class="box-content-list-li-title">手机号码</view>
					<view class="box-content-list-li-info">
						<view class="box-content-list-li-info-area-code flex-center">
							<text>+86</text>
							<text class="iconfont iconxiangxiajiantou icon-font"
								style="color: #000;font-size: 28rpx;margin-top: 4rpx;"></text>
						</view>
						<input class="box-content-list-li-info-input" v-model.trim="phone" type="number"
							placeholder="请输入手机号码" />
					</view>
				</view>
				<view class="box-content-list-li" @click="showAddress">
					<view class="box-content-list-li-title">国家</view>
					<view class="box-content-list-li-info" style="justify-content: space-between;">
						<view class="box-content-list-li-info-title">{{country}}</view>
						<view class="box-content-list-li-info-more">
							<text class="iconfont icongengduo icon-font"
								style="color: #999;font-size: 28rpx;margin-top: 4rpx;"></text>
						</view>
					</view>
				</view>
				<view class="box-content-list-li">
					<view class="box-content-list-li-title">省</view>
					<view class="box-content-list-li-info" style="justify-content: space-between;">
						<view class="box-content-list-li-info-title">{{province}}</view>
						<view class="box-content-list-li-info-more">
							<text class="iconfont icongengduo icon-font"
								style="color: #999;font-size: 28rpx;margin-top: 4rpx;"></text>
						</view>
					</view>
				</view>
				<view class="box-content-list-li">
					<view class="box-content-list-li-title">市</view>
					<view class="box-content-list-li-info" style="justify-content: space-between;">
						<view class="box-content-list-li-info-title">{{city}}</view>
						<view class="box-content-list-li-info-more">
							<text class="iconfont icongengduo icon-font"
								style="color: #999;font-size: 28rpx;margin-top: 4rpx;"></text>
						</view>
					</view>
				</view>
				<view class="box-content-list-li">
					<view class="box-content-list-li-title">区</view>
					<view class="box-content-list-li-info" style="justify-content: space-between;">
						<view class="box-content-list-li-info-title">{{area}}</view>
						<view class="box-content-list-li-info-more">
							<text class="iconfont icongengduo icon-font"
								style="color: #999;font-size: 28rpx;margin-top: 4rpx;"></text>
						</view>
					</view>
				</view>
				<view class="box-content-list-li">
					<view class="box-content-list-li-title">街道</view>
					<view class="box-content-list-li-info" style="justify-content: space-between;">
						<view class="box-content-list-li-info-title">{{street}}</view>
						<view class="box-content-list-li-info-more">
							<text class="iconfont icongengduo icon-font"
								style="color: #999;font-size: 28rpx;margin-top: 4rpx;"></text>
						</view>
					</view>
				</view>
				<view class="box-content-list-li">
					<view class="box-content-list-li-title">详细地址</view>
					<view class="box-content-list-li-info">
						<input class="box-content-list-li-info-input" v-model.trim="detailedAddress" type="text"
							placeholder="街道门牌信息" />
					</view>
				</view>
				<view class="box-content-list-li">
					<view class="box-content-list-li-title">邮政编码</view>
					<view class="box-content-list-li-info">
						<input class="box-content-list-li-info-input" v-model.trim="postalCode" type="number"
							placeholder="请输入邮政编码" />
					</view>
				</view>
				<view class="box-content-list-li">
					<view class="box-content-list-li-title">是否默认地址</view>
					<view class="box-content-list-li-info"
						style="display: flex;align-items: center;justify-content: flex-end;">
						<switch :checked='isDefault' color="#4CD964" @change="switch1Change" />
					</view>
				</view>
			</view>
		</view>
		<view class="box-footer">
			<view class="box-footer-btn flex-center" :class="checkAll?'box-footer-btn-active':''" @click="determine"
				v-if="!isEdit">
				确定
			</view>
			<view class="box-footer-btn flex-center" :class="checkAll?'box-footer-btn-active':''" @click="modify"
				v-if="isEdit">
				确认修改
			</view>
		</view>
		<!-- <s-picker :visible='visible' :list="addressList" /> -->
	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	export default {
		data() {
			return {
				level: 1,
				barHeight: 0, //顶部电量导航栏高度
				lastname: '', //姓
				name: '', //名
				phone: '', //手机号
				country: '中国', //国家
				province: '贵州省', //省
				city: '铜仁市', //市
				area: '松桃苗族自治县', //区
				street: '黄板镇', //街道
				detailedAddress: '', //详细地址
				postalCode: '', //邮编
				isDefault: false, //是否默认地址
				isEdit: false, //是否编辑
				id: '', //地址id
				title: "添加地址", //标题名称
				addressList: [],
				visible: false,
				 oneIndexList: [0],
			};
		},
		components: {
			navTitle
		},
		onLoad(options) {
			var data = JSON.parse(options.data)
			if (data.isType) { //为true 则为编辑
				this.id = data.id
				this.isEdit = data.isType
				this.addressDetails(data.id)
				this.title = "编辑地址"
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
		computed: {
			checkAll() {
				var bool = false
				if (this.lastname != '' && this.name != '' && this.phone != '' && this.country != '' && this.province !=
					'' && this.city != '' && this.area != '' && this.street != '' && this.detailedAddress != '' && this
					.postalCode != '') {
					bool = true
				} else {
					bool = false
				}
				this.isAll = bool
				return bool;
			},
		},
		onLoad() {
			this.getProvince()
		},
		methods: {
			change(data) {
				console.log(data)
			},
			showAddress() {
				this.visible = true;
			},
			popClose() {
				this.visible = false
			},

			// 获取省份
			getProvince() {
				var vuedata = {
					// parent_id: 95
				}
				this.apiget('region/regions', vuedata).then(res => {
					if (res.status == 200) {
						this.addressList = res.data
					}
				})
			},

			determine() {
				if (this.checkAll) {
					// 判断是否为编辑
					if (!this.isEdit) {
						// 添加地址
						this.addAddress()
					} else {
						// 编辑地址
					}
				} else {
					uni.showToast({
						title: "请检查是否都有填写完整",
						icon: "none"
					})
				}

			},
			// 地址详情
			addressDetails(id) {
				var vuedata = {}
				this.apiget('api/v1/members/address/' + id, vuedata).then(res => {
					if (res.status == 200) {
						this.lastname = res.data.name.charAt(0) //截取第一个字符
						this.name = res.data.name.slice(1, res.data.name.length)
						this.phone = res.data.mobile
						this.country = res.data.country
						this.province = res.data.province
						this.city = res.data.city
						this.area = res.data.area
						this.detailedAddress = res.data.address
						this.postalCode = res.data.postcode
						this.isDefault = res.data.is_default == '1' ? true : false
					}
				});
			},

			// 修改地址
			modify() {
				var vuedata = {
					name: this.lastname + '' + this.name, //姓名
					mobile: this.phone, //手机号
					country: this.country, //国家
					province: this.province, //省份
					city: this.city, //城市
					area: this.area, //区域
					street: this.street, //街道
					address: this.detailedAddress, //详细地址
					longitude: '', //经度
					latitude: '', //纬度
					content: '', //地址
					status: '', //
					postcode: this.postalCode, //邮编
					is_default: this.isDefault ? 1 : 0, //是否默认地址
				}

				this.apiput('api/v1/members/address/edit/' + this.id, vuedata).then(res => {
					if (res.status == 200) {
						this.$store.commit("upAdd", true)
						uni.navigateBack({
							delta: 1
						})
					}
				});
			},


			// 添加地址
			addAddress() {
				var vuedata = {
					name: this.lastname + '' + this.name, //姓名
					mobile: this.phone, //手机号
					country: this.country, //国家
					province: this.province, //省份
					city: this.city, //城市
					area: this.area, //区域
					street: this.street, //街道
					address: this.detailedAddress, //详细地址
					longitude: '', //经度
					latitude: '', //纬度
					content: '', //地址
					status: '', //
					postcode: this.postalCode, //邮编
					is_default: this.isDefault ? 1 : 0, //是否默认地址

				}
				this.apipost('api/v1/members/address/add', vuedata).then(res => {
					if (res.status == 200) {
						this.$store.commit("upAdd", true)
						uni.navigateBack({
							delta: 1
						})

						// this.$store.state.isAdd = true
					}
				});
				console.log(vuedata)
			},
			// 是否默认地址开关
			switch1Change: function(e) {
				this.isDefault = e.target.value
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

			.box-content-list {
				overflow-y: scroll;
				padding: 0 0 0 40rpx;
				box-sizing: border-box;
				margin-top: 20rpx;
				background: #fff;

				.box-content-list-li {
					display: flex;
					align-items: center;
					height: 99rpx;
					border-bottom: 1rpx solid #ededed;
					font-size: 28rpx;

					.box-content-list-li-title {
						width: 192rpx;
						color: #333;
					}

					.box-content-list-li-info {
						flex: 1;
						display: flex;
						align-items: center;
						padding-right: 40rpx;
						box-sizing: border-box;

						.box-content-list-li-info-area-code {
							position: relative;
							width: 104rpx;
							height: 44rpx;
							margin-right: 10rpx;
							border: 1rpx solid #CCCCCC;
							border-radius: 22rpx;

							text {
								font-size: 24rpx;
							}

						}

						.box-content-list-li-info-input {
							width: 100%;
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

					}
				}
			}

		}

		.box-footer {
			padding: 30rpx 40rpx;
			box-sizing: border-box;

			.box-footer-btn {
				width: 670rpx;
				height: 80rpx;
				border-radius: 10rpx;
				font-size: 32rpx;
				color: #fff;
				background: #FFD6CC;
				transition: 0.3s;
				// box-shadow: 0rpx 10rpx 20rpx rgba(255, 49, 0, 0.15);
			}

			.box-footer-btn-active {
				background: #FF967D !important;
			}
		}
	}
</style>
