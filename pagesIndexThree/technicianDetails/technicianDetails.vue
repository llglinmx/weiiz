<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitleAll @store="store" :isStore='Number(isStore)' navTitle="技师详情"></navTitleAll>
		</view>
		<view class="box-content">
			<view class="box-content-info">
				<view class="box-content-info-image">
					<image :src="userInfo.simg" mode="aspectFill"></image>
				</view>
				<view class="box-content-info-wrap">
					<view class="box-content-info-wrap-title">
						<view class="box-content-info-wrap-title-name" v-if="userInfo&&userInfo.name">{{userInfo.name}}</view>
						<view class="box-content-info-wrap-title-text">【{{userInfo.level_name}}】</view>
					</view>
					<view class="box-content-info-wrap-score">
						<text class="iconfont iconwujiaoxing icon-font"
							:style="{color:isComment(userInfo.comment,storeIndex)?'#FFCD4D':'#eee',}"
							style="font-size: 28rpx;" v-for="(store,storeIndex) in 5"></text>
						<text>{{storeMsg(userInfo.comment)}}分</text>
					</view>
					<view class="box-content-info-wrap-msg">工龄：{{userInfo.service_times}}年</view>
					<view class="box-content-info-wrapnum">
						预约次数：{{userInfo.service_num}}
					</view>
					<view class="box-content-info-wrap-btn flex-center">
						预约服务
					</view>
				</view>
			</view>

			<view class="box-content-store">
				<view class="box-content-store-title">所属门店</view>
				<view class="box-content-store-shop-name">
					<view class="store-shop-name-info">
						<text class="iconfont iconshangjia"
							style="font-size: 28rpx;color: #FF967D;margin-top: 4rpx;"></text>
						<text v-if="userInfo.name">{{userInfo.name}}</text>
					</view>
					<view class="store-shop-name-more">
						<text class="iconfont icongengduo icon-font" style="color: #ccc;font-size:28rpx"></text>
					</view>
				</view>
				<view class="box-content-store-shop-address">
					<view class="store-shop-address-info">
						<text class="iconfont icondingwei1 icon-font"
							style="color: #26BF82;font-size: 40rpx;margin-top: 4rpx;"></text>
						<text v-if="userInfo&&userInfo.member_info&&userInfo.member_info.address">{{userInfo.member_info.address}}</text>
					</view>
					<view class="store-shop-address-more">
						<text>6.1km</text>
						<text class="iconfont icongengduo icon-font"
							style="color: #26BF82;font-size:40rpx;margin-top: 4rpx;"></text>
					</view>
				</view>
			</view>

			<view class="box-content-service-type">
				<view class="box-content-service-type-title">服务工种</view>
				<view class="box-content-service-type-list">
					<view class="box-content-service-type-li flex-center" v-for="(item,index) in userInfo.reserve_info"
						:key="item.id">
						{{item.name}}
					</view>
				</view>
			</view>
			<view class="box-content-service-items">
				<view class="box-content-service-items-wrap">
					<view class="box-content-service-items-wrap-title">服务项目</view>
					<view class="box-content-service-items-wrap-text">
						<text>其他项目</text>
						<text class="iconfont icongengduo icon-font"
							style="color: #999;font-size: 28rpx;margin-top: 4rpx;"></text>
					</view>
				</view>

				<view class="box-project-list">
					<view class="box-project-list-li" v-for="(item,index) in reserveList" :key="item.id">
						<view class="box-project-list-li-image">
							<image :src="item.simg" mode="aspectFill"></image>
						</view>
						<view class="box-project-list-li-info">
							<view class="box-project-list-li-info-title">{{item.name}}</view>
							<view class="box-project-list-li-info-list">
								<view class="project-list-li-info-list-item">60分钟</view>
								<view class="project-list-li-info-list-item">背部按摩</view>
							</view>
							<view class="box-project-list-li-info-sold">已售{{item.sold}}</view>
							<view class="box-project-list-li-info-bottom">
								<view class="project-list-li-info-bottom-price">
									<view class="list-li-info-bottom-present-price">{{item.price |keepTwo}}</view>
									<view class="list-li-info-bottom-original-price">{{item.o_price | keepTwo}}</view>
								</view>
								<view class="project-list-li-info-bottom-btn flex-center">预约</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="box-content-comment-wrap">
				<view class="box-content-comment-wrap-selected">
					<view class="comment-wrap-selected-title">
						精选评论
					</view>
					<view class="box-content-comment-wrap-selected-more">
						<text class="iconfont icongengduo icon-font"
							style="color: #999;font-size: 28rpx;margin-top: 4rpx;"></text>
					</view>
				</view>
				<view class="box-content-item-comment">
					<view class="box-content-item-comment-category">
						<view class="comment-category-li flex-center" v-for="(item,index) in commentTypeList"
							:key="index" :class="commentIndex==index?'comment-category-li-active':''"
							@click="commentTypeClick(index)">
							{{item.title}}{{item.num}}
						</view>
					</view>
					<view class="box-content-item-comment-list">
						<view class="comment-list-item" v-for="(item,index) in commentList" :key="item.id">
							<view class="comment-list-item-image">
								<image :src="item.member_avatar" mode="aspectFill"></image>
							</view>
							<view class="comment-list-item-info">
								<view class="comment-list-item-info-nickname">{{item.member_nickname}}</view>
								<view class="comment-list-item-info-score">
									<text class="iconfont iconwujiaoxing icon-font"
										style="color: #FFCD4D;font-size: 28rpx;" v-for="item in 5"></text>
									<text>5分</text>
								</view>
								<view class="comment-list-item-info-content">
									{{item.content}}
								</view>
								<view class="comment-list-item-info-message-time">{{item.createtime}}</view>
								<view class="comment-list-item-info-picture-image">
									<view class="picture-image-li" v-for="(i,j) in item.bimg">
										<image :src="i" mode="aspectFill"></image>
									</view>
								</view>
								<view class="comment-list-item-info-reply" v-if="false">
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
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import navTitleAll from "../../components/navTitleAll/navTitleAll.vue"
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				commentIndex: 0, //评论类型当前选中下标
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
				id: '',
				userInfo: {
					
				},
				commentList: [],
				reserveList: [],
				isStore: 0, //是否收藏
			};
		},
		components: {
			navTitleAll
		},
		onReady() {
			// 获取顶部电量状态栏高度
			uni.getSystemInfo({
				success: (res) => {
					this.barHeight = res.statusBarHeight
				}
			});
		},
		filters: {
			keepTwo(val) {
				var num = Number(val)
				return num.toFixed(2)
			}
		},
		onLoad(options) {
			this.id = options.id
			this.getDetails(options.id)
			this.getComment(this.id)
			this.getProject(this.id)
		},
		methods: {

			// 顶部收藏
			store(state) {
				// 等于1 为已收藏  
				state == 1 ? this.cancelCollection() : this.addCollection()
			},
			// 添加收藏
			addCollection() {
				this.isStore = 1
				var vuedata = {
					type: 1,
					itemid: this.userInfo.id
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
					type: 1,
					itemid: this.userInfo.id
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


			// 获取详情
			getDetails(id) {
				var vuedata = {
					id: id
				}
				this.apiget('pc/engineer', vuedata).then(res => {
					if (res.status == 200) {
						this.userInfo = res.data.engineerList
						this.isStore = res.data.engineerList.is_collection==1 ? 1 : 0 //是否收藏
					}
				})
			},
			// 获取服务项目
			getProject(id) {
				var vuedata = {
					id: id,
					page_index: 1,
					each_page: 50,
				}
				this.apiget('pc/reserve/engineer_reserve', vuedata).then(res => {
					if (res.status == 200) {
						this.reserveList = res.data.reserveList
					}
				})
			},

			// 获取评论
			getComment() {
				var vuedata = {
					id: this.id,
					page_index: 1,
					each_page: 50,
					star: this.commentIndex,
				}
				this.apiget('pc/comment', vuedata).then(res => {
					if (res.status == 200) {
						this.commentList = res.data.comment
						this.commentTypeList[0].num = res.data.all_comment
						this.commentTypeList[1].num = res.data.Praise
						this.commentTypeList[2].num = res.data.in_Review
						this.commentTypeList[3].num = res.data.negative_comment
					}
				})
			},



			// 评论类型点击
			commentTypeClick(index) {
				this.commentIndex = index;
				this.getComment();
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
		background: #F7F7F7;

		.box-head {
			background-color: #fff;
		}

		.box-content {
			flex: 1;
			overflow-y: scroll;
			font-family: Source Han Sans CN;
			font-weight: 400;

			.box-content-info {
				padding: 30rpx 40rpx 40rpx;
				box-sizing: border-box;
				background: #fff;
				display: flex;

				.box-content-info-image {
					image {
						width: 256rpx;
						height: 256rpx;
						border-radius: 10rpx;
					}
				}

				.box-content-info-wrap {
					margin-left: 20rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-around;

					.box-content-info-wrap-title {
						display: flex;
						align-items: center;
						line-height: 34rpx;

						.box-content-info-wrap-title-name {
							font-size: 36rpx;
							color: #000;
						}

						.box-content-info-wrap-title-text {
							font-size: 28rpx;
							color: #FF8366;
						}
					}

					.box-content-info-wrap-score {
						display: flex;
						align-items: center;

						text {
							margin-right: 6rpx;
							font-size: 24rpx;
							color: #999;
						}
					}

					.box-content-info-wrap-msg {
						font-size: 26rpx;
						color: #666;
					}

					.box-content-info-wrapnum {
						font-size: 26rpx;
						color: #666;
					}

					.box-content-info-wrap-btn {
						width: 208rpx;
						height: 64rpx;
						background: #FF8366;
						border-radius: 40rpx;
						font-size: 32rpx;
						color: #fff;
					}
				}
			}

			.box-content-store {
				margin-top: 20rpx;
				padding: 30rpx 40rpx;
				box-sizing: border-box;
				background: #fff;

				.box-content-store-title {
					font-size: 32rpx;
					color: #000;
				}

				.box-content-store-shop-name {
					display: flex;
					align-items: center;
					justify-content: space-between;
					height: 98rpx;
					border-bottom: 1rpx solid #ededed;

					.store-shop-name-info {
						display: flex;
						align-items: center;

						text {
							margin-right: 8rpx;
							font-size: 28rpx;
							font-weight: 500;
							color: #000;
						}
					}

					.store-shop-name-more {
						width: 28rpx;
						height: 28rpx;
					}
				}

				.box-content-store-shop-address {
					display: flex;
					align-items: center;
					justify-content: flex-end;
					margin-top: 30rpx;

					.store-shop-address-info {
						flex: 2;
						display: flex;
						align-items: center;
						margin-right: 40rpx;

						text {
							margin-right: 10rpx;
							font-size: 28rpx;
							color: #333;
						}
					}

					.store-shop-address-more {
						display: flex;
						align-items: center;
						justify-content: flex-end;
						flex: 1;

						text {
							font-size: 28rpx;
							color: #26BF82;
						}

						image {
							margin-left: 20rpx;
							width: 40rpx;
							height: 40rpx;
						}
					}
				}
			}

			.box-content-service-type {
				padding: 0rpx 40rpx 30rpx;
				box-sizing: border-box;
				margin-top: 20rpx;
				background: #fff;

				.box-content-service-type-title {
					padding: 30rpx 0;
					color: #000;
					font-size: 32rpx;
				}

				.box-content-service-type-list {
					display: flex;
					flex-wrap: wrap;

					.box-content-service-type-li {
						width: 144rpx;
						height: 48rpx;
						margin: 0 20rpx 16rpx 0;
						background: #F5F5F5;
						border-radius: 3rpx;
						font-size: 28rpx;
						color: #666;
					}
				}
			}


			.box-content-service-items {
				padding: 0rpx 40rpx;
				box-sizing: border-box;
				margin-top: 20rpx;
				background: #fff;

				.box-content-service-items-wrap {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding-top: 30rpx;

					.box-content-service-items-wrap-title {
						font-size: 32rpx;
						color: #000;
					}

					.box-content-service-items-wrap-text {
						display: flex;
						align-items: center;

						text {
							font-size: 24rpx;
							color: #999;
						}

						image {
							margin-left: 20rpx;
							width: 28rpx;
							height: 28rpx;
						}
					}
				}


				.box-project-list {
					padding: 30rpx 0;
					box-sizing: border-box;

					.box-project-list-li:last-child {
						margin-bottom: 0rpx;
					}

					.box-project-list-li {
						display: flex;
						margin-bottom: 30rpx;

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

			.box-content-comment-wrap {
				margin-top: 20rpx;
				background: #fff;
				padding: 0 40rpx;
				box-sizing: border-box;

				.box-content-comment-wrap-selected {
					padding-top: 30rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;

					.comment-wrap-selected-title {
						font-size: 32rpx;
					}

					.box-content-comment-wrap-selected-more {
						image {
							width: 28rpx;
							height: 28rpx;
						}
					}
				}

				.box-content-item-comment {
					height: 100%;
					display: flex;
					flex-direction: column;

					.box-content-item-comment-category {
						display: flex;
						padding: 30rpx 0;
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

					.box-content-item-comment-list {
						flex: 1;
						overflow-y: scroll;

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
									margin-top: 20rpx;
									padding: 20rpx;
									box-sizing: border-box;
									border-radius: 10rpx;
									background: #F7F7F7;
									font-size: 28rpx;

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

			.box-content-wrap-shop {
				background: #fff;
				padding: 0 40rpx;
				box-sizing: border-box;
				margin-top: 20rpx;



				.box-content-business-list {
					margin-top: 10rpx;
					flex: 1;
					overflow-y: scroll;

					.map-wrap-list-content {
						display: flex;
						background: #fff;
						margin-bottom: 30rpx;
						border-radius: 10px;

						.list-content-image {
							image {
								width: 164rpx;
								height: 164rpx;
							}
						}

						.list-content-info {
							flex: 1;
							display: flex;
							flex-direction: column;
							margin-left: 20rpx;

							.list-content-info-title {
								color: #000;
								font-size: 34pxr;
							}

							.list-content-info-score {
								display: flex;
								align-items: center;

								image {
									width: 30rpx;
									height: 30rpx;
								}

								text {
									margin-left: 10rpx;
									color: #999;
									font-size: 24rpx;
								}
							}

							.list-content-info-box {
								display: flex;
								justify-content: space-between;

								.list-content-info-box-text {
									line-height: 40rpx;
									font-size: 24rpx;
									color: #666;
								}

								.list-content-info-address {
									display: flex;
									align-items: center;

									image {
										width: 19rpx;
										height: 24rpx;
									}

									text {
										margin-left: 10rpx;
										font-size: 24rpx;
										color: #999;
									}
								}
							}

							.list-content-info-service-content {
								display: flex;
								flex-wrap: wrap;

								.list-info-service-content-li {
									width: 112rpx;
									height: 34rpx;
									margin-right: 8rpx;
									margin-bottom: 8rpx;
									background: #F5F5F5;
									border-radius: 3rpx;
									font-size: 22rpx;
									color: 666;
								}
							}
						}
					}
				}
			}
		}

	}
</style>
