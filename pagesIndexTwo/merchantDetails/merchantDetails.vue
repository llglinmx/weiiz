<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitleAll @store="store" :isStore='Number(isStore)' navTitle="商家详情"></navTitleAll>
			<view class="box-head-tabs">
				<liuyuno-tabs ref="boxTabs" :tabData="tabs" :activeIndex="defaultIndex" @tabClick='tabClick' />
			</view>
		</view>
		<view class="box-content">
			<view class="box-content-wrap-item">
				<swiper class="swiper-box" :current="defaultIndex" @change="tabChange">
					<swiper-item class="swiper-box-item-list">
						<view class="box-content-item-wrap">
							<view class="box-content-item-wrap-image">
								<swiper class="box-content-item-wrap-banner" :autoplay="true" :interval="5000">
									<swiper-item class="box-content-item-wrap-banner-li"
										v-for="(item,index) in merchantData.bimg" :key="index">
										<image :src="item" mode="aspectFill"></image>
									</swiper-item>
								</swiper>
								<view class="box-content-item-wrap-msg">
									<text class="iconfont icontupian" style="font-size: 26rpx;"></text>
									<text class="box-content-item-wrap-text"
										v-if="merchantData&&merchantData.bimg&&merchantData.bimg.length!=0">{{merchantData.bimg.length}}</text>
								</view>
							</view>
							<view class="box-content-item-wrap-info">
								<view class="item-wrap-info-left">
									<view class="item-wrap-info-left-image">
										<image :src="merchantData.simg" mode="aspectFill"></image>
									</view>
									<view class="item-wrap-info-left-box">
										<view class="item-wrap-left-box-title">{{merchantData.name}}</view>
										<view class="item-wrap-left-box-score">
											<text class="iconfont iconwujiaoxing icon-font"
												:style="{color:isComment(merchantData.comment,storeIndex)?'#FFCD4D':'#eee',}"
												style="font-size: 28rpx;" v-for="(store,storeIndex) in 5"></text>
											<text>{{storeMsg(merchantData.comment)}}分</text>
										</view>
										<view class="item-wrap-left-box-bottom">
											<view class="item-wrap-left-box-bottom-text flex-center">
												按摩/SPA
											</view>
										</view>
									</view>
								</view>
								<view class="item-wrap-info-right" @click="makeCall(merchantData.mobile)">
									<text class="iconfont icondianhua icon-font"
										style="color:#FF8366;font-size: 44rpx;"></text>
									<text>电话</text>
								</view>
							</view>
							<view class="box-content-item-wrap-business-time">
								营业时间：周一至周日 {{merchantData.plan_date}}
							</view>
							<view class="box-content-item-wrap-address">
								<view class="box-content-item-wrap-address-left">
									<view class="box-content-item-wrap-left-address-icon">
										<text class="iconfont icondingwei1 icon-font"
											style="color: #26BF82;font-size: 34rpx;"></text>
									</view>
									<view class="box-content-item-wrap-address-left-text">{{merchantData.address}}
									</view>
								</view>
								<view class="box-content-item-wrap-address-right">
									<view class="box-content-item-wrap-address-right-text">距离6.1KM</view>
									<view class="box-content-item-wrap-right-address-icon">
										<text class="iconfont icongengduo icon-font"
											style="color: #26BF82;font-size: 40rpx;margin-top: 4rpx;"></text>
									</view>
								</view>
							</view>
							<view class="box-content-item-wrap-business-description">
								<view class="content-item-wrap-business-description">
									其他门店
									（{{merchantData && merchantData.otherStores && merchantData.otherStores.length}}家）
								</view>
								<view class="more-icon">
									<text class="iconfont icongengduo icon-font"
										style="color: #26BF82;font-size: 40rpx;margin-top: 4rpx;"></text>
								</view>
							</view>
							<view class="box-content-item-wrap-business-introduce" v-html="merchantData.content"></view>
						</view>

					</swiper-item>
					<swiper-item class="swiper-box-item-list">
						<view class="box-content-item-project box-content-item-common-styles"
							:style="{display:isDataPro?'block':'none'}">
							<view class="box-content-item-project-main">
								<view class="box-content-item-project-wrap">
									<scroll-view scroll-y="true" class="scroll-Y">
										<view class="box-content-item-project-list">
											<view class="project-list-li flex-center"
												v-for="(item,index) in classifyList" :key="index">{{item}}</view>
										</view>
									</scroll-view>
								</view>
								<view class="box-project-list">
									<z-paging ref="paging" @query="queryList" :list.sync="projectList"
										loading-more-no-more-text="已经到底了"
										:refresher-angle-enable-change-continued="false"
										:touchmove-propagation-enabled="true" :mounted-auto-call-reload="false"
										:use-custom-refresher="true">
										<view class="box-project-list-main">
											<view class="box-project-list-li" v-for="(item,index) in projectList"
												@click="projectDetails" :key="item.id">
												<view class="box-project-list-li-image">
													<image :src="item.simg" mode="aspectFill"></image>
												</view>
												<view class="box-project-list-li-info">
													<view class="box-project-list-li-info-title">{{item.name}}</view>
													<view class="box-project-list-li-info-list">
														<view class="project-list-li-info-list-item">
															{{item.service_time}}分钟
														</view>
														<view class="project-list-li-info-list-item"
															v-if="item.rc_name">{{item.rc_name}}
														</view>
													</view>
													<view class="box-project-list-li-info-sold">已售{{item.sold}}</view>
													<view class="box-project-list-li-info-bottom">
														<view class="project-list-li-info-bottom-price">
															<view class="list-li-info-bottom-present-price">
																{{item.price}}
															</view>
															<view class="list-li-info-bottom-original-price">
																{{item.o_price}}
															</view>
														</view>
														<view class="project-list-li-info-bottom-btn flex-center"
															@click.stop="reservationService(item.id)">预约</view>
													</view>
												</view>
											</view>
										</view>
									</z-paging>
								</view>
							</view>
						</view>
						<view class="box-content-item-project" :style="{display:!isDataPro?'block':'none'}">
							<loading v-if="isLoadPro" />
							<no-data v-if="!isLoadPro" />
						</view>
					</swiper-item>
					<swiper-item class="swiper-box-item-list">
						<view class="box-content-item-technician box-content-item-common-styles"
							:style="{display:isDataTer?'block':'none'}">
							<view class="box-content-item-technician-main">
								<view class="box-content-item-project-wrap">
									<scroll-view scroll-y="true" class="scroll-Y">
										<view class="box-content-item-project-list">
											<view class="project-list-li flex-center"
												v-for="(item,index) in classifyList" :key="index">{{item}}</view>
										</view>
									</scroll-view>
								</view>
								<view class="box-content-item-technician-wrap">
									<z-paging ref="paging1" @query="terQueryList" :list.sync="technicianList"
										loading-more-no-more-text="已经到底了"
										:refresher-angle-enable-change-continued="false"
										:touchmove-propagation-enabled="true" :mounted-auto-call-reload="false"
										:use-custom-refresher="true">

										<view class="content-item-technician-wrap-list">
											<view class="content-item-technician-wrap-list-li"
												v-for="(item,index) in technicianList" :key="item.id"
												@click="technicianDetails(item.id)">
												<view class="technician-wrap-list-li-image">
													<image src="../../static/images/shop-ico.png" mode="aspectFill">
													</image>
												</view>
												<view class="technician-wrap-list-li-info">
													<view class="technician-wrap-list-li-info-top">
														<view class="technician-info-top-title">
															<text
																class="technician-info-top-title-name">{{item.name}}</text>
															<text class="technician-info-top-title-msg">【金牌技师】</text>
														</view>
														<view class="technician-wrap-list-li-info-top-btn flex-center">
															预约
														</view>
													</view>
													<view class="technician-wrap-list-li-info-score">
														<text class="iconfont iconwujiaoxing icon-font"
															:style="{color:isComment(item.comment,storeIndex)?'#FFCD4D':'#eee',}"
															style="font-size: 28rpx;" v-for="(store,storeIndex) in 5"></text>
														<text>{{storeMsg(item.comment)}}分</text>
													</view>
													<view class="technician-wrap-list-li-info-introduce">
														<view class="technician-list-li-info-introduce-text">
															工龄：{{item.service_times}}年
														</view>
														<view class="technician-list-li-info-introduce-text">
															预约次数：{{item.service_num}}
														</view>
													</view>
													<view class="technician-wrap-list-li-info-category">
														<view class="technician-list-li-info-category-item"
															v-for="val in item.reserve_info" v-if="item.reserve_info.length!=0">
															{{val.name}}
														</view>
													</view>
												</view>
											</view>
										</view>
									</z-paging>
								</view>

							</view>
						</view>
						<view class="box-content-item-technician" :style="{display:!isDataTer?'block':'none'}">
							<loading v-if="isLoadTer" />
							<no-data v-if="!isLoadTer" />
						</view>
					</swiper-item>
					<swiper-item class="swiper-box-item-list">
						<view class="box-content-item-comment" :style="{display:isDataComment?'block':'none'}">
							<view class="box-content-item-comment-main">
								<view class="box-content-item-comment-category">
									<view class="comment-category-li flex-center"
										v-for="(item,index) in commentTypeList" :key="index"
										:class="commentIndex==index?'comment-category-li-active':''"
										@click="commentTypeClick(index)">
										{{item.title}}({{item.num}})
									</view>
								</view>
								<view class="box-content-item-comment-list-main">
									<z-paging ref="paging2" @query="commentQueryList" :list.sync="commentList"
										loading-more-no-more-text="已经到底了"
										:refresher-angle-enable-change-continued="false"
										:touchmove-propagation-enabled="true" :mounted-auto-call-reload="false"
										:use-custom-refresher="true">
										<view class="box-content-item-comment-list">
											<view class="comment-list-item" v-for="(item,index) in commentList"
												:key="item.id">
												<view class="comment-list-item-image">
													<image :src="item.member_avatar" mode="aspectFill"></image>
												</view>
												<view class="comment-list-item-info">
													<view class="comment-list-item-info-nickname">
														{{item.member_nickname}}
													</view>
													<view class="comment-list-item-info-score">
														<text class="iconfont iconwujiaoxing icon-font"
															style="color: #FFCD4D;font-size: 28rpx;"
															v-for="item in 5"></text>
														<text>5分</text>
													</view>
													<view class="comment-list-item-info-content">{{item.content}}</view>
													<view class="comment-list-item-info-message-time">
														{{item.createtime}}
													</view>
													<view class="comment-list-item-info-picture-image"
														v-if="item.bimg!=''&&item.bimg!=null">
														<view class="picture-image-li" v-for="(i,j) in item.bimg">
															<image :src="i" mode="aspectFill">
															</image>
														</view>
													</view>
													<view class="comment-list-item-info-reply">
														<view class="comment-list-item-info-reply-name">
															王二麻子回复：
														</view>
														<view class="comment-list-item-info-reply-content">
															感谢您的支持与认可！我们会继续努力提供更优质的服务与项目
														</view>
													</view>
												</view>
											</view>
										</view>
									</z-paging>
								</view>
							</view>
						</view>
						<view class="box-content-item-comment" :style="{display:!isDataComment?'block':'none'}">
							<loading v-if="isLoadComment" />
							<no-data v-if="!isLoadComment" />
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
	import navTitleAll from "../../components/navTitleAll/navTitleAll.vue"
	import liuyunoTabs from "@/components/liuyuno-tabs/liuyuno-tabs.vue";
	import zPaging from '../../uni_modules/z-paging/components/z-paging/z-paging.vue'
	import loading from '../../components/loading/loading.vue'
	import noData from '../../components/no-data/no-data.vue'

	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				tabs: ["介绍", "项目", "技师", "评论"],
				defaultIndex: 0, //当前 滑动的下标
				imageList: [{
						url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1212%2F10%2Fc1%2F16491670_1355126816487.jpg&refer=http%3A%2F%2Fimg.pconline.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617169230&t=15c6d87792f9fe60a66efcc066e816d5",
						link: ""
					},
					{
						url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2Fattachments2%2F201304%2F18%2F001339jv88x0qs06vo3qq6.jpg&refer=http%3A%2F%2Fattachments.gfan.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617169230&t=cee66d4129e14994e31b7f0f370b0c39",
						link: ""
					},
					{
						url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201312%2F31%2F111859myvyiivetyftfz2n.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617169230&t=91b7765aa0a2234b14fc7dbf31cc2bf8",
						link: ""
					}
				],
				classifyList: ["泰式按摩", "中式按摩", "韩式按摩", "美式按摩", "足底按摩"], //按摩分类
				commentTypeList: [{
						title: "全部",
						num: 0
					},
					{
						title: "好评",
						num: 0
					},
					{
						title: "中评",
						num: 0
					},
					{
						title: "差评",
						num: 0
					}
				], //评论类型
				commentIndex: 0, //评论类型当前选中
				id: '', //商家id
				projectList: [],
				technicianList: [],
				commentList: [],
				merchantData: {},
				isDataPro: false,
				isLoadPro: true,
				isDataTer: false,
				isLoadTer: true,
				isDataComment: false,
				isLoadComment: true,
				isStore: 0, //是否收藏
			};
		},
		components: {
			liuyunoTabs,
			navTitleAll,
			zPaging,
			loading,
			noData
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
			this.id = options.id
			this.getMerchantInfo(this.id)
		},
		methods: {
			// 拨打电话
			makeCall(tel) {
				console.log(tel)
				uni.makePhoneCall({
					// 手机号
					phoneNumber: tel,
					// 成功回调
					success: (res) => {
						console.log('调用成功!')
					},
					// 失败回调
					fail: (res) => {
						console.log('调用失败!')
					}
				});
			},
			// 顶部收藏
			store(state) {
				// 等于1 为已收藏  
				state == 1 ? this.cancelCollection() : this.addCollection()
			},
			// 添加收藏
			addCollection() {
				this.isStore = 1
				var vuedata = {
					type: 2,
					itemid: this.id
				}
				this.apipost('api/v1/members/collection/add', vuedata).then(res => {
					if (res.status == 200) {
						uni.showToast({
							title: "添加收藏成功",
							icon: "none"
						})
						return false;
					}
					this.isStore = 0
				})
			},
			// 取消收藏
			cancelCollection() {
				this.isStore = 0
				var vuedata = {
					type: 2,
					itemid: this.id
				}
				this.apipost('api/v1/members/collection/cancel', vuedata).then(res => {
					if (res.status == 200) {
						uni.showToast({
							title: "取消收藏成功",
							icon: "none"
						})
						return false;
					}
					this.isStore = 1
				})
			},
			// 切割字符
			label(str) {
				return str.split(',')
			},

			// 项目 上拉 下拉
			queryList(pageNo, pageSize) {
				this.getProject(pageNo, pageSize)
			},
			// 技师 上拉 下拉
			terQueryList(pageNo, pageSize) {
				this.getTechnician(pageNo, pageSize)
			},
			// 技师 上拉 下拉
			commentQueryList(pageNo, pageSize) {
				this.getComment(pageNo, pageSize)
			},

			// 评论类型点击
			commentTypeClick(index) {
				this.commentIndex = index
				this.getComment(1, 10)
			},
			// 商家详情里的项目列表点击进入项目详情
			projectDetails() {
				uni.navigateTo({
					url: "../../pagesIndexThree/projectDetails/projectDetails"
				})
			},
			// 商家详情里的项目列表点击进入技师详情
			technicianDetails(id) {
				uni.navigateTo({
					url: "../../pagesIndexThree/technicianDetails/technicianDetails?id="+id
				})
			},

			// 商家项目预约服务
			reservationService(id) {
				var str = {
					id: id,
					store: this.id
				}
				this.$store.commit("upCheckId", -1)

				uni.navigateTo({
					url: "../../pagesIndexThree/orderByAppointment/orderByAppointment?data=" + JSON.stringify(str)
				})
				// console.log(this.$store.state.checkId)
			},

			// 获取商家信息
			getMerchantInfo(id) {
				var vuedata = {
					id: id
				}
				this.apiget('pc/store', vuedata).then(res => {
					if (res.status == 200) {
						this.merchantData = res.data.storeList
						this.isStore = res.data.storeList.collection ? 1 : 0 //是否收藏
					}
				})
			},


			// 获取项目列表
			getProject(num, size) {
				var vuedata = {
					page_index: num, // 请求页数，
					each_page: size, // 请求条数
					store: this.id
				}
				this.apiget('pc/reserve', vuedata).then(res => {
					if (res.status == 200) {
						if (res.data.reserveList.length != 0) {
							this.isDataPro = true
							let list = res.data.reserveList
							let totalSize = res.data.total_rows
							this.$refs.paging.addData(list);

						} else {
							this.isDataPro = false
							this.isLoadPro = false
						}

					}
				})
			},

			// 获取技师列表
			getTechnician(num, size) {
				var vuedata = {
					page_index: num, // 请求页数，
					each_page: size, // 请求条数
					store: this.id
				}
				this.apiget('pc/engineer', vuedata).then(res => {
					if (res.status == 200) {
						if (res.data.engineerList.length != 0) {
							this.isDataTer = true
							let list = res.data.engineerList
							let totalSize = res.data.total_rows
							this.$refs.paging1.addData(list);
						} else {
							this.isDataTer = false
							this.isLoadTer = false
						}
					}
				})
			},

			// 获取评论列表
			getComment(num, size) {
				var vuedata = {
					page_index: num, // 请求页数，
					each_page: size, // 请求条数
					id: this.id,
					type: 4,
					star: this.commentIndex,
				}
				this.apiget('pc/comment', vuedata).then(res => {
					if (res.status == 200) {
						if (res.data.comment.length != 0) {
							this.isDataComment = true
							let list = res.data.comment
							let totalSize = res.data.total_rows
							this.commentTypeList[0].num = res.data.all_comment
							this.commentTypeList[1].num = res.data.Praise
							this.commentTypeList[2].num = res.data.in_Review
							this.commentTypeList[3].num = res.data.negative_comment

							this.$refs.paging2.addData(list);
						} else {
							this.isDataComment = false
							this.isLoadComment = false
						}
					}
				})
			},

			// tabs 点击
			tabClick(e) {
				this.defaultIndex = e
			},


			// 滑动切换列表
			tabChange(e) {
				this.$refs.boxTabs.tabToIndex(e.detail.current)
				this.defaultIndex = e.detail.current
				this.tabIndex(this.defaultIndex)
			},

			tabIndex(index) {
				var page = {
					num: 1,
					size: 10,
				}
				switch (index) {
					case 0:
						break;
					case 1:
						// this.isLoadPro = true
						this.getProject(page.num, page.size)
						break;
					case 2:
						this.getTechnician(page.num, page.size)
						break;
					case 3:
						this.getComment(page.num, page.size)
						break;
				}
			},

			// 评分
			isComment(comment, index) {
				var store = parseInt(comment)
				var str = 0
				if (store <= 20) {
					str = 1
				} else if (store > 20 && store <= 40) {
					str = 2
				} else if (store > 40 && store <= 60) {
					str = 3
				} else if (store > 60 && store <= 80) {
					str = 4
				} else if (store > 80) {
					str = 5
				}
				if (str > index) {
					return true
				} else {
					return false
				}
			},
			// 评分提示
			storeMsg(comment) {
				var store = parseInt(comment)
				var str = 0
				if (store <= 20) {
					str = 1
				} else if (store > 20 && store <= 40) {
					str = 2
				} else if (store > 40 && store <= 60) {
					str = 3
				} else if (store > 60 && store <= 80) {
					str = 4
				} else if (store > 80) {
					str = 5
				}
				return str
			},
		}
	}
</script>

<style lang="scss">
	.box {
		display: flex;
		flex-direction: column;
		height: 100%;

		.box-head {
			background-color: #fff;
		}

		.box-content {
			flex: 1;
			border-top: 1rpx solid #ededed;

			.box-content-wrap-item {
				height: 100%;

				font-family: Source Han Sans CN;
				font-weight: 400;

				.swiper-box {
					height: 100%;

					.swiper-box-item-list {
						// overflow-y: scroll;

						.box-content-item-wrap {
							padding: 30rpx 40rpx;
							box-sizing: border-box;

							.box-content-item-wrap-image {
								position: relative;
								border-radius: 20rpx;

								.box-content-item-wrap-banner {
									height: 376rpx;
									border-radius: 20rpx;
									border-radius: 20rpx;
									overflow: hidden;
									border-radius: 20rpx;

									.box-content-item-wrap-banner-li {
										height: 376rpx;

										image {
											width: 100%;
											height: 376rpx;

										}
									}
								}

								.box-content-item-wrap-msg {
									display: flex;
									justify-content: center;
									align-items: center;
									position: absolute;
									bottom: 20rpx;
									right: 20rpx;
									width: 85rpx;
									height: 44rpx;
									background: rgba(0, 0, 0, .4);
									border-radius: 24rpx;
									color: #fff;

									.box-content-item-wrap-text {
										margin-left: 8rpx;
										font-size: 24rpx;
									}
								}


							}

							.box-content-item-wrap-info {
								margin-top: 30rpx;
								display: flex;
								justify-content: space-between;

								.item-wrap-info-left {
									display: flex;

									.item-wrap-info-left-image {
										width: 126rpx;
										height: 126rpx;

										image {
											width: 126rpx;
											height: 126rpx;
											border-radius: 10rpx;
										}
									}

									.item-wrap-info-left-box {
										margin-left: 20rpx;
										display: flex;
										flex-direction: column;
										justify-content: space-between;

										.item-wrap-left-box-title {
											line-height: 40rpx;
											font-size: 36rpx;
											color: #000;
										}

										.item-wrap-left-box-score {
											display: flex;
											align-items: center;



											text {
												margin-right: 6rpx;
												font-size: 24rpx;
												color: #999;
											}
										}

										.item-wrap-left-box-bottom {
											display: flex;

											.item-wrap-left-box-bottom-text {
												width: 112rpx;
												height: 34rpx;
												background: #F5F5F5;
												border-radius: 3rpx;
												font-size: 22rpx;
												color: #666;
											}
										}

									}
								}

								.item-wrap-info-right {
									display: flex;
									flex-direction: column;
									align-items: center;
									justify-content: center;
									padding: 0 10rpx 0 30rpx;
									box-sizing: border-box;
									height: 70rpx;
									border-left: 1rpx solid #EDEDED;

									image {
										width: 34rpx;
										height: 36rpx;
									}

									text {
										font-size: 20rpx;
										color: #666;
									}
								}
							}

							.box-content-item-wrap-business-time {
								padding: 30rpx 0;
								font-size: 28rpx;
								color: #333;
								border-bottom: 1rpx solid #ededed;
							}

							.box-content-item-wrap-address {
								display: flex;
								justify-content: space-between;
								height: 127rpx;
								border-bottom: 1rpx solid #ededed;

								.box-content-item-wrap-address-left {
									display: flex;
									margin-right: 50rpx;
									align-items: center;
									flex-shrink: 1;
									flex: 2;

									.box-content-item-wrap-left-address-icon {
										image {
											width: 32rpx;
											height: 40rpx;
										}
									}

									.box-content-item-wrap-address-left-text {
										margin-left: 20rpx;
										font-size: 28rpx;
										color: #333;
									}



								}

								.box-content-item-wrap-address-right {
									flex: 1;
									display: flex;
									align-items: center;
									justify-content: flex-end;

									.box-content-item-wrap-address-right-text {
										font-size: 28rpx;
										color: #26BF82;
									}

									.box-content-item-wrap-right-address-icon {
										margin-left: 20rpx;

										image {
											width: 28rpx;
											height: 28rpx;
										}
									}
								}
							}

							.box-content-item-wrap-business-description {
								display: flex;
								justify-content: space-between;
								align-items: center;
								height: 99rpx;
								border-bottom: 1rpx solid #ededed;

								.content-item-wrap-business-description {
									font-size: 28rpx;
									color: #333;
								}

								.more-icon {
									image {
										width: 28rpx;
										height: 28rpx;
									}
								}
							}

							.box-content-item-wrap-business-introduce {
								padding: 30rpx 0;
								font-size: 28rpx;
								color: #333;
								text-indent: 2em;
							}
						}

						.box-content-item-project {
							height: 100%;

							.box-content-item-project-main {
								height: 100%;
								display: flex;
								flex-direction: column;

								.box-project-list {
									flex: 1;
									overflow-y: scroll;
									padding: 0 40rpx;
									box-sizing: border-box;

									.box-project-list-main {
										.box-project-list-li {
											display: flex;
											margin-bottom: 40rpx;

											.box-project-list-li-image {
												image {
													width: 196rpx;
													height: 196rpx;
													border-radius: 10rpx;
												}
											}

											.box-project-list-li-info {
												display: flex;
												flex-direction: column;
												justify-content: space-around;
												margin-left: 20rpx;
												flex: 1;

												.box-project-list-li-info-title {
													line-height: 30rpx;
													font-size: 34rpx;
													color: #000;
												}

												.box-project-list-li-info-list {
													display: flex;
													flex-wrap: wrap;

													.project-list-li-info-list-item {
														padding: 6rpx 10rpx;
														box-sizing: border-box;
														margin-right: 5rpx;
														margin-bottom: 5rpx;
														font-size: 22rpx;
														color: #666;
														background: #F5F5F5;
														border-radius: 3rpx;
													}
												}

												.box-project-list-li-info-sold {
													font-size: 24rpx;
													color: #666;
												}

												.box-project-list-li-info-bottom {
													display: flex;
													align-items: center;
													justify-content: space-between;

													.project-list-li-info-bottom-price {
														display: flex;
														align-items: center;

														.list-li-info-bottom-present-price {
															font-size: 34rpx;
															color: #FF4D4D;
														}

														.list-li-info-bottom-original-price {
															margin-left: 8rpx;
															font-size: 24rpx;
															color: #999;
															text-decoration: line-through;
														}
													}

													.project-list-li-info-bottom-btn {
														width: 116rpx;
														height: 48rpx;
														background: #FF8366;
														border-radius: 29rpx;
														font-size: 28rpx;
														color: #fff;
													}
												}
											}
										}
									}
								}
							}
						}

						.box-content-item-technician {
							height: 100%;

							.box-content-item-technician-main {
								height: 100%;
								display: flex;
								flex-direction: column;

								.box-content-item-technician-wrap {
									flex: 1;
									overflow-y: scroll;
									display: flex;
									flex-direction: column;


									.content-item-technician-wrap-list {
										padding: 0 40rpx;
										box-sizing: border-box;
										height: 100%;
										overflow-y: scroll;

										.content-item-technician-wrap-list-li {
											display: flex;
											margin-bottom: 40rpx;

											.technician-wrap-list-li-image {
												image {
													width: 164rpx;
													height: 164rpx;
												}
											}

											.technician-wrap-list-li-info {
												display: flex;
												flex: 1;
												flex-direction: column;

												margin-left: 20rpx;

												.technician-wrap-list-li-info-top {
													display: flex;
													justify-content: space-between;
													align-items: flex-start;

													.technician-info-top-title {
														display: flex;
														align-items: center;
														font-size: 34rpx;
														color: #000;
														line-height: 30rpx;

														.technician-info-top-title-name {}

														.technician-info-top-title-msg {
															font-size: 28rpx;
															color: #FF8366;
														}
													}

													.technician-wrap-list-li-info-top-btn {
														width: 116rpx;
														height: 48rpx;
														background: #FF8366;
														border-radius: 29rpx;
														font-size: 28rpx;
														color: #fff;
													}
												}

												.technician-wrap-list-li-info-score {
													display: flex;
													align-items: center;

													text {
														margin-right: 6rpx;
														font-size: 24rpx;
														color: #999;
													}
												}

												.technician-wrap-list-li-info-introduce {
													display: flex;
													margin: 10rpx 0;
													font-size: 24rpx;
													line-height: 24rpx;
													color: #999;

													.technician-list-li-info-introduce-text {
														padding: 0 20rpx;
														box-sizing: border-box;
														border-right: 1rpx solid #ccc;
													}

													.technician-list-li-info-introduce-text:first-child {
														padding-left: 0;
													}

													.technician-list-li-info-introduce-text:last-child {
														border-right: 0;
													}
												}

												.technician-wrap-list-li-info-category {
													display: flex;
													// flex-wrap: wrap;
													overflow: hidden;
													text-overflow: ellipsis;
													white-space: nowrap;

													.technician-list-li-info-category-item {
														padding: 6rpx 10rpx;
														box-sizing: border-box;
														margin-right: 5rpx;
														margin-bottom: 5rpx;
														font-size: 22rpx;
														color: #666;
														background: #F5F5F5;
														border-radius: 3rpx;
													}
												}

											}
										}
									}
								}

							}
						}

						.box-content-item-comment {
							height: 100%;

							.box-content-item-comment-main {
								height: 100%;
								display: flex;
								flex-direction: column;

								.box-content-item-comment-category {
									display: flex;
									padding: 30rpx 40rpx 40rpx;
									box-sizing: border-box;

									.comment-category-li {
										width: 154rpx;
										height: 60rpx;
										border: 1px solid #ccc;
										margin-right: 20rpx;
										color: #999;
										font-size: 28rpx;
										border-radius: 35rpx;
										transition: 0.2s;
									}

									.comment-category-li:last-child {
										margin-right: 0;
									}

									.comment-category-li-active {
										color: #FF8366 !important;
										border: 1px solid #FF8366 !important;
									}
								}

								.box-content-item-comment-list-main {
									flex: 1;
									overflow-y: scroll;
									padding: 0 40rpx;
									box-sizing: border-box;

									.box-content-item-comment-list {
										.comment-list-item:last-child {
											border-bottom: 0;
										}

										.comment-list-item:first-child {
											padding-top: 0;
										}

										.comment-list-item {
											display: flex;
											padding: 40rpx 0;
											border-bottom: 1rpx solid #ededed;
											box-sizing: border-box;

											.comment-list-item-image {
												image {
													width: 88rpx;
													height: 88rpx;
													border-radius: 50%;
												}
											}

											.comment-list-item-info {
												flex: 1;
												display: flex;
												flex-direction: column;
												margin-left: 20rpx;

												.comment-list-item-info-nickname {
													// line-height: 40rpx;
													font-size: 32rpx;
													color: #000;
												}

												.comment-list-item-info-score {
													display: flex;
													align-items: center;

													text {
														margin-right: 6rpx;
														font-size: 24rpx;
														color: #999;
													}
												}

												.comment-list-item-info-content {
													margin-top: 8rpx;
													font-size: 28rpx;
													color: #333;
												}

												.comment-list-item-info-message-time {
													line-height: 50rpx;
													font-size: 24rpx;
													color: #999;
												}

												.comment-list-item-info-picture-image {
													display: flex;
													flex-wrap: wrap;

													.picture-image-li {
														margin-right: 8rpx;

														image {
															width: 182rpx;
															height: 182rpx;
														}
													}
												}

												.comment-list-item-info-reply {
													padding: 20rpx;
													box-sizing: border-box;
													border-radius: 10rpx;
													background: #F7F7F7;
													font-size: 28rpx;
													margin-top: 10rpx;

													.comment-list-item-info-reply-name {
														color: #999999;
													}

													.comment-list-item-info-reply-content {
														color: #333;
													}
												}
											}
										}
									}
								}
							}
						}


						.box-content-item-common-styles {
							.box-content-item-project-wrap {
								padding: 30rpx 0 40rpx 40rpx;
								box-sizing: border-box;
								overflow-x: scroll;

								.box-content-item-project-list {
									display: flex;
									display: -webkit-box;
									// overflow-x: scroll;

									.project-list-li {
										width: 160rpx;
										height: 60rpx;
										margin-right: 30rpx;
										background: #F7F7F7;
										border-radius: 30rpx;
										font-size: 28rpx;
										color: #666;
									}

									.project-list-li:last-child {
										margin-right: 0;
									}

									.project-list-li-active {
										background: #FF8366 !important;
										color: #fff !important;
									}
								}
							}
						}

					}
				}
			}
		}

		.box-footer {}
	}
</style>
