<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitleAll navTitle="项目详情"></navTitleAll>
		</view>
		<view class="box-content">
			<view class="box-content-item-wrap">
				<view class="box-content-item-wrap-image">
					<swiper class="box-content-item-wrap-banner" :autoplay="true" :interval="5000">
						<swiper-item class="box-content-item-wrap-banner-li" v-for="(item,index) in imageList" :key="index">
							<image :src="item.url" mode="aspectFill"></image>
						</swiper-item>
					</swiper>
					<view class="box-content-item-wrap-msg">
						<text class="iconfont icontupian" style="font-size: 26rpx;"></text>
						<text class="box-content-item-wrap-text">4</text>
					</view>
				</view>
				<view class="box-content-wrap-text">
					<view class="box-content-item-wrap-text-top">
						<view class="item-wrap-text-top-title">泰式古法按摩</view>
						<view class="item-wrap-text-top-price">￥238.00</view>
					</view>
					<view class="box-content-item-wrap-text-center">
						<view class="item-wrap-text-center-sold">已售</view>
						<view class="item-wrap-text-center-original-price">598.00</view>
					</view>
					<view class="box-content-item-wrap-text-bottom">
						<view class="item-wrap-text-bottom-list">
							<view class="item-wrap-text-bottom-list-li">
								60分钟
							</view>
							<view class="item-wrap-text-bottom-list-li">
								背部按摩
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="box-content-wrap-service-details">
				<view class="box-content-wrap-service-details-title">服务详情</view>
				<view class="service-details-list">
					<view class="service-details-list-li" v-for="(item,index) in 3">
						<view class="service-details-list-li-text">
							背部按摩
						</view>
						<view class="service-details-list-li-time">
							40分钟
						</view>
					</view>

				</view>
			</view>

			<view class="box-content-wrap-shop">
				<view class="box-content-wrap-shop-text">
					<view class="box-content-wrap-shop-title">
						适用门店
					</view>
					<view class="box-content-wrap-shop-more">
						<text>共6家可用</text>
						<text class="iconfont icongengduo icon-font" style="color: #999;font-size: 28rpx;margin-top: 4rpx;"></text>
					</view>
				</view>

				<view class="box-content-business-list">
					<view class="map-wrap-list-content" v-for="(item,index) in 10">
						<view class="list-content-image">
							<image src="../../static/images/shop-ico.png" mode="aspectFill"></image>
						</view>
						<view class="list-content-info">
							<view class="list-content-info-title">
								印象诗意·悠然SPA
							</view>
							<view class="list-content-info-score">
								<text class="iconfont iconwujiaoxing icon-font" style="color: #FFCD4D;font-size: 28rpx;" v-for="item in 5"></text>
								<text>5分</text>
							</view>
							<view class="list-content-info-box">
								<view class="list-content-info-box-text">明发商业广场</view>
								<view class="list-content-info-address">
									<text class="iconfont icondingwei1 icon-font" style="color: #ccc;font-size: 24rpx;margin-top: 4rpx;"></text>
									<text>6.1km</text>
								</view>
							</view>
							<view class="list-content-info-service-content">
								<view class="list-info-service-content-li flex-center">
									按摩/SPA
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="box-content-notice-wrap">
				<view class="box-content-notice-title">
					购买须知
				</view>
				<view class="box-content-notice-wrap-list">
					<view class="notice-wrap-list-li">
						<view class="notice-wrap-list-li-title">有效期</view>
						<view class="notice-wrap-list-li-text">购买后90天内有效</view>
					</view>
					<view class="notice-wrap-list-li">
						<view class="notice-wrap-list-li-title">预约信息</view>
						<view class="notice-wrap-list-li-text">下单后选择您想要预约的时间并提交90天内有效</view>
					</view>
					<view class="notice-wrap-list-li">
						<view class="notice-wrap-list-li-title">规则提醒</view>
						<view class="notice-wrap-list-li-text">不再与其他优惠同享</view>
					</view>
					<view class="notice-wrap-list-li">
						<view class="notice-wrap-list-li-title">温馨提示</view>
						<view class="notice-wrap-list-li-text">为了保障您的权益，建议使用weiiz平台网上支付。若使用其他支付方式导致纠纷，平台不承担任何责任，感谢您的理解！</view>
					</view>
				</view>
			</view>

			<view class="box-content-comment-wrap">
				<view class="box-content-comment-wrap-selected">
					<view class="comment-wrap-selected-title">
						精选评论
					</view>
					<view class="box-content-comment-wrap-selected-more">
						<text class="iconfont icongengduo icon-font" style="color: #999;font-size: 28rpx;margin-top: 4rpx;"></text>
					</view>
				</view>
				<view class="box-content-item-comment">
					<view class="box-content-item-comment-category">
						<view class="comment-category-li flex-center" v-for="(item,index) in commentTypeList" :key="index" :class="commentIndex==index?'comment-category-li-active':''"
						 @click="commentTypeClick(index)">
							{{item.title}}(20)
						</view>
					</view>
					<view class="box-content-item-comment-list">
						<view class="comment-list-item" v-for="(item,index) in 5">
							<view class="comment-list-item-image">
								<image src="../../static/images/002.png" mode="aspectFill"></image>
							</view>
							<view class="comment-list-item-info">
								<view class="comment-list-item-info-nickname">SKB露娜可可</view>
								<view class="comment-list-item-info-score">
									<text class="iconfont iconwujiaoxing icon-font" style="color: #FFCD4D;font-size: 28rpx;" v-for="item in 5"></text>
									<text>5分</text>
								</view>
								<view class="comment-list-item-info-content">
									经常累的时候过来按摩，技师服务很好，按摩还会询问力度，很会聊天，这里地理位置也很好找，环境也挺好的，服务员也很热情，来这里整体给我的感觉都是不错的，推荐大家来这家店体验一下。
								</view>
								<view class="comment-list-item-info-message-time">
									2020年10月20日 16:25:01
								</view>
								<view class="comment-list-item-info-picture-image">
									<view class="picture-image-li" v-for="item in 5">
										<image src="../../static/images/shop-ico.png" mode="aspectFill"></image>
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
				</view>
			</view>

		</view>
		<view class="box-footer">
			<view class="box-footer-stepper">
				<view class="reduce flex-center">
					<image src="../../static/images/reduce-icon.png" mode="aspectFill"></image>
				</view>
				<view class="num flex-center">20</view>
				<view class="add flex-center">
					<image src="../../static/images/add-icon.png" mode="aspectFill"></image>
				</view>
			</view>
			<view class="box-footer-right">
				<view class="box-footer-price">
					￥580.00
				</view>
				<view class="box-footer-btn flex-center">
					立即预约
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
					},
					{
						title: "好评",
					},
					{
						title: "中评",
					},
					{
						title: "差评",
					}
				], //评论类型
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
		methods: {
			// 评论类型点击
			commentTypeClick(index) {
				this.commentIndex = index
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

			.box-content-item-wrap {
				padding: 30rpx 40rpx;
				box-sizing: border-box;
				background: #fff;

				.box-content-item-wrap-image {
					position: relative;
					border-radius: 20rpx;

					.box-content-item-wrap-banner {
						height: 376rpx;
						border-radius: 20rpx;
						border-radius: 20rpx;

						.box-content-item-wrap-banner-li {
							height: 376rpx;

							image {
								width: 100%;
								height: 376rpx;
								border-radius: 20rpx;
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

				.box-content-wrap-text {
					margin-top: 30rpx;

					.box-content-item-wrap-text-top {
						display: flex;
						align-items: center;
						justify-content: space-between;
						font-size: 36rpx;

						.item-wrap-text-top-title {
							color: #000;
						}

						.item-wrap-text-top-price {
							color: #FF8366;
						}
					}

					.box-content-item-wrap-text-center {
						display: flex;
						align-items: center;
						justify-content: space-between;
						margin: 16rpx 0;
						font-size: 24rpx;

						.item-wrap-text-center-sold {
							color: #666;
						}

						.item-wrap-text-center-original-price {
							color: #999;
							text-decoration: line-through;
						}
					}

					.box-content-item-wrap-text-bottom {
						.item-wrap-text-bottom-list {
							display: flex;

							.item-wrap-text-bottom-list-li {
								padding: 6rpx 10rpx;
								box-sizing: border-box;
								margin-right: 8rpx;
								background: #F5F5F5;
								border-radius: 3rpx;
								font-size: 22rpx;
								color: #666;
							}
						}
					}
				}
			}

			.box-content-wrap-service-details {
				padding: 30rpx 40rpx;
				margin-top: 20rpx;
				box-sizing: border-box;
				background: #fff;

				.box-content-wrap-service-details-title {
					padding-bottom: 30rpx;
					border-bottom: 1rpx solid #ededed;
					font-size: 32rpx;
					color: #000;
				}

				.service-details-list {
					padding-top: 30rpx;

					.service-details-list-li {
						display: flex;
						align-items: center;
						justify-content: space-between;
						font-size: 28rpx;
						margin-bottom: 20rpx;

						.service-details-list-li-text {}

						.service-details-list-li-time {}
					}

					.service-details-list-li:last-child {
						margin-bottom: 0rpx;
					}
				}
			}

			.box-content-notice-wrap {
				padding: 30rpx 40rpx;
				box-sizing: border-box;
				margin-top: 20rpx;
				background: #fff;

				.box-content-notice-title {
					font-size: 32rpx;
					color: #000000;
				}

				.box-content-notice-wrap-list {
					.notice-wrap-list-li {
						margin-top: 30rpx;

						.notice-wrap-list-li-title {
							font-size: 28rpx;
							color: #000000;
							font-weight: 500;
						}

						.notice-wrap-list-li-text {
							position: relative;
							padding-left: 18rpx;
							box-sizing: border-box;
							margin-top: 10rpx;
							font-size: 26rpx;
							color: #333;
							
						}

						.notice-wrap-list-li-text::after {
							position: absolute;
							top: 15rpx;
							left: 0;
							content: "";
							width: 10rpx;
							height: 10rpx;
							background-color: #999;
							border-radius: 50%;
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
							padding-bottom: 0;
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

				.box-content-wrap-shop-text {
					padding: 30rpx 0;
					display: flex;
					align-items: center;
					justify-content: space-between;

					.box-content-wrap-shop-title {
						font-size: 32rpx;
					}

					.box-content-wrap-shop-more {
						display: flex;
						align-items: center;

						text {
							margin-right: 10rpx;
							font-size: 24rpx;
							color: #999;
						}

						image {
							width: 28rpx;
							height: 28rpx;
						}
					}
				}


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

								text {
									margin-right: 10rpx;
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

		.box-footer {
			height: 108rpx;
			display: flex;
			padding: 0 20rpx;
			box-sizing: border-box;
			justify-content: space-between;
			align-items: center;
			background: #FFFFFF;

			.box-footer-stepper {
				display: flex;
				width: 220rpx;
				height: 68rpx;
				border: 1rpx solid #E0E0E0;
				border-radius: 20rpx;

				.reduce {
					width: 80rpx;
				}

				.num {
					flex: 1;
					font-size: 28rpx;
				}

				.add {
					width: 80rpx;
					flex: 1;
				}

				image {
					width: 30rpx;
					height: 30rpx;
				}
			}

			.box-footer-right {
				display: flex;
				align-items: center;

				.box-footer-price {
					margin-right: 20rpx;
					font-size: 40rpx;
					color: #FF8366;
				}

				.box-footer-btn {
					width: 220rpx;
					height: 80rpx;
					background: #FF8366;
					border-radius: 40rpx;
					color: #fff;
					font-size: 32rpx;
				}
			}
		}
	}
</style>
