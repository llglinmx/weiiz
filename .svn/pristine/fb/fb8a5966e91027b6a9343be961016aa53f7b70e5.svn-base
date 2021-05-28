<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="身体状态"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content">
				<view class="content-list">
					<view class="content-list-li" @click="openSex">
						<view class="content-list-li-title">性别</view>
						<view class="content-list-li-wrap">
							<view class="content-list-li-wrap-text" v-if='sex==1'>男</view>
							<view class="content-list-li-wrap-text" v-if='sex==2'>女</view>
							<view class="content-list-li-wrap-text" v-if='sex==3'>保密</view>
							<view class="content-list-li-more flex-center">
								<text class="iconfont icongengduo icon-font"
									style="color: #ccc;font-size: 28rpx;font-weight: 500;"></text>
							</view>
						</view>
					</view>
					<view class="content-list-li">
						<view class="content-list-li-title">年龄</view>
						<view class="content-list-li-wrap">
							<view class="content-list-li-wrap-text">
								<input type="text" v-model.trim="age" />
							</view>
							<view class="content-list-li-more flex-center"></view>
						</view>
					</view>
					<view class="content-list-li" style="min-height: 186rpx;align-items: baseline;">
						<view class="content-list-li-title">过往病例</view>
						<view class="content-list-li-wrap">
							<textarea class="textarea-text" v-model.trim="cottoms" placeholder="多个病例用“；”分隔" />
						</view>
					</view>
					<view class="content-list-li" style="min-height: 186rpx;align-items: baseline;">
						<view class="content-list-li-title">过敏病例</view>
						<view class="content-list-li-wrap">
							<textarea class="textarea-text" v-model.trim="allergy" placeholder="多个病例用“；”分隔" />
						</view>
					</view>
					<view class="content-list-li" @click="operationCilck">
						<view class="content-list-li-title">有无手术</view>
						<view class="content-list-li-wrap">
							<view class="content-list-li-wrap-text">{{operation==1?'无':'有'}}</view>
							<view class="content-list-li-more flex-center">
								<text class="iconfont icongengduo icon-font"
									style="color: #ccc;font-size: 28rpx;font-weight: 500;"></text>
							</view>
						</view>
					</view>
					<view class="content-list-li" @click="fetationClick">
						<view class="content-list-li-title">是否怀孕</view>
						<view class="content-list-li-wrap">
							<view class="content-list-li-wrap-text">{{fetation==1?'否':'是'}}</view>
							<view class="content-list-li-more flex-center">
								<text class="iconfont icongengduo icon-font"
									style="color: #ccc;font-size: 28rpx;font-weight: 500;"></text>
							</view>
						</view>
					</view>
					<view class="content-list-li" style="min-height: 99rpx;align-items: baseline;">
						<view class="content-list-li-title">注意事项</view>
						<view class="content-list-li-wrap">
							<view class="content-list-li-text">
								<input type="text" v-model.trim="announcements" />
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="box-footer">
			<btnPink btnName="保存" @btnClick="preserve"></btnPink>
		</view>

		<liudx-picker v-model="isShow" :dataList="sexList" @confirm="sexInput" />
		<liudx-picker v-model="isFlag" :dataList="list" @confirm="listChange" />
		<liudx-picker v-model="isFetation" :dataList="fetationList" @confirm="fetationChange" />

	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	import btnPink from "../../components/btnPink/btnPink.vue"
	import liudxPicker from "../../components/liudx-picker/index.vue"
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				id: '',
				isShow: false,
				sex: 1, //性别
				age: '', //年龄
				operation: 1, //有无手术
				fetation: 1, //是否怀孕
				announcements: '无', //注意事项
				allergy: '',
				cottoms: '',
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
				isFlag: false,
				list: [{
					name: '无',
					text: 1
				}, {
					name: '有',
					text: 2
				}],
				isFetation: false,
				fetationList: [{
					name: '否',
					text: 1
				}, {
					name: '是',
					text: 2
				}],
			};
		},
		components: {
			btnPink,
			navTitle,
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
			this.getInfo()
		},
		methods: {


			// 选择性别确认事件
			openSex() {
				this.isShow = true
			},
			sexInput(e) {
				this.sex = e.text
			},

			// 有无手术
			operationCilck() {
				this.isFlag = true
			},
			listChange(e) {
				this.operation = e.text
			},
			// 有无怀孕
			fetationClick() {
				this.isFetation = true
			},
			fetationChange(e) {
				this.fetation = e.text
			},


			// 获取个人信息
			getInfo() {
				let vuedata = {

				}
				this.apiget('api/v1/members/member_info', vuedata).then(res => {
					if (res.status == 200) {
						this.id = res.data.id
						this.sex = res.data.sex
						this.age = res.data.age
						this.allergy = res.data.allergy
						this.cottoms = res.data.cottoms
						this.announcements = res.data.announcements
						this.operation = res.data.operation == 0 ? 1 : res.data.operation
						this.fetation = res.data.fetation == 0 ? 1 : res.data.fetation

					}
				});
			},




			// 保存按钮
			preserve() {
				var vuedata = {
					sex: this.sex,
					age: this.age,
					operation: this.operation,
					fetation: this.fetation,
					announcements: this.announcements,
					allergy: this.allergy,
					cottoms: this.cottoms
				}

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
						}, 1000)
					}
				});
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
				background: #fff;

				.content-list-li {
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 36rpx 40rpx;
					box-sizing: border-box;
					height: 99rpx 40;
					border-bottom: 1rpx solid #EDEDED;

					.content-list-li-title {
						width: 180rpx;
						font-size: 28rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #000000;

					}

					.content-list-li-wrap {
						flex: 1;
						display: flex;
						align-items: center;
						justify-content: space-between;

						.content-list-li-wrap-text {
							font-family: Source Han Sans CN;
							font-weight: 400;
							color: #000000;
								font-size: 28rpx;
							input{
								font-size: 28rpx;
							}
						}

						.content-list-li-more {
							.icon-font {
								margin-top: 4rpx;
							}
						}

						.textarea-text {
							height: 120rpx;
							width: 100%;
							font-size: 28rpx;
						}

						.content-list-li-text {
							width: 100%;
							font-family: Source Han Sans CN;
							font-weight: 400;
							color: #000000;

							input {
								width: 100%;
								font-size: 28rpx;
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
			padding: 0 40rpx;
			box-sizing: border-box;
			margin-bottom: 30rpx;
		}
	}
</style>
