<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="商品详情"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content-banner">
				<swiper class="banner-swiper-box">
					<swiper-item class="banner-swiper-box-item" v-for="(item,index) in imageArr">
						<image :src="item.url" mode=""></image>
					</swiper-item>
				</swiper>
			</view>
			<view class="box-content-main">
				<view class="box-content-main-one-top">
					<view class="main-one-top-title">
						玻尿酸深层补水面膜
					</view>
					<view class="main-one-top-text">
						已售45
					</view>
				</view>
				<view class="box-content-main-one-bottom">
					<view class="main-one-bottom-item">
						<view class="main-one-bottom-item-present-price">
							￥<text>200.00</text>
						</view>
						<view class="main-one-bottom-item-original-price">￥150.00</view>
						<view class="main-one-bottom-item-original-text">零售价</view>
					</view>
					<view class="main-one-bottom-item">
						<view class="main-one-bottom-item-present-price">
							￥<text>200.00</text>
						</view>
						<view class="main-one-bottom-item-original-price">￥150.00</view>
						<view class="main-one-bottom-item-original-text">50-1000个</view>
					</view>
					<view class="main-one-bottom-item">
						<view class="main-one-bottom-item-present-price">
							￥<text>200.00</text>
						</view>
						<view class="main-one-bottom-item-original-price">￥150.00</view>
						<view class="main-one-bottom-item-original-text">>1000个</view>
					</view>
				</view>
			</view>

			<view class="content-list">
				<view class="content-list-li">
					<view class="content-list-li-title">已选</view>
					<view class="content-list-li-wrap">
						<view class="content-list-li-wrap-text">50ml*1</view>
						<view class="content-list-li-more flex-center">
							<image src="../../static/images/more-gray.png" mode="aspectFill"></image>
						</view>
					</view>
				</view>
				<view class="content-list-li">
					<view class="content-list-li-title">送至</view>
					<view class="content-list-li-wrap">
						<view class="content-list-li-wrap-text">北京北京市海淀区清河街道</view>
						<view class="content-list-li-more flex-center">
							<image src="../../static/images/more-gray.png" mode="aspectFill"></image>
						</view>
					</view>
				</view>

			</view>

			<view class="box-content-comment">
				<view class="box-content-comment-title-wrap">
					<view class="content-comment-title">精选评论</view>
					<view class="content-comment-more">
						<image src="../../static/images/more-gray.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="box-content-comment-type-list">
					<view class="content-comment-type-list-li flex-center" :class="commentIndex==index?'content-comment-type-list-li-active':''"
					 v-for="(item,index) in commentTypeList" :key="index" @click="commentTypeClick(index)">
						{{item.title}}(42)
					</view>
				</view>
				<view class="box-content-comment-list">
					<view class="content-comment-list-item">
						<view class="content-comment-list-item-image">
							<image src="../../static/images/userImage.png" mode="aspectFill"></image>
						</view>
						<view class="content-comment-list-item-info">
							<view class="comment-list-item-info-name">Crystal</view>
							<view class="comment-list-item-info-score">
								<view class="comment-list-item-score-stars">
									<image src="../../static/images/stars-icon.png" mode="aspectFill" v-for="item in 5"></image>
								</view>
								<view class="comment-list-item-score-text">
									5分
								</view>
							</view>
							<view class="comment-list-item-info-text">
								活动促销时买的，特别划算，性价比很高，拆开一股淡淡的清香
							</view>
							<view class="comment-list-item-info-time">
								2020年10月20日 16:25:01
							</view>
						</view>

					</view>
				</view>
			</view>
			<view class="box-content-shop">
				<view class="box-content-shop-left">
					<view class="box-content-shop-image">
						<image src="../../static/images/shop-ico.png" mode=""></image>
					</view>
					<view class="box-content-shop-info">
						<view class="box-content-shop-name">印象诗意·悠然SPA</view>
						<view class="box-content-shop-score">
							<image src="../../static/images/stars-icon.png" mode="aspectFill" v-for="item in 5"></image>
							<text>5分</text>
						</view>
					</view>
				</view>
				<view class="box-content-shop-right">
					<view class="box-content-shop-right-wrap">
						<text>进入店铺</text>
						<image src="../../static/images/more-icon-FF967D.png" mode="aspectFill"></image>
					</view>
				</view>
			</view>
			<view class="box-content-introduce">
				<view class="box-content-introduce-title">
					商品介绍
				</view>
				<view class="box-content-introduce-image">
					<image src="../../static/images/details001.png" mode="widthFix"></image>
					<image src="../../static/images/001.png" mode="widthFix"></image>
					<image src="../../static/images/details002.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<view class="box-footer">
			<view class="box-footer-left">
				<view class="box-footer-wrap">
					<view class="box-footer-icon">
						<image src="../../static/images/customer-icon.png" mode="aspectFill"></image>
					</view>
					<view class="box-footer-text">
						客服
					</view>
				</view>
				<view class="box-footer-wrap">
					<view class="box-footer-icon">
						<image src="../../static/images/shopping-icon.png" mode=""></image>
						<text class="flex-center">20</text>
					</view>
					<view class="box-footer-text">
						购物车
					</view>
				</view>
			</view>
			<view class="box-footer-right">
				<view class="box-footer-btn box-footer-btn-join flex-center">
					加入购物车
				</view>
				<view class="box-footer-btn box-footer-btn-immediately flex-center">
					立即购买
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import navTitle from "../../components/navTitle/navTitle.vue"
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				commentIndex: 0, // 评论类型选中下标
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
				],
				imageArr: [{
						url: "../../static/images/001.png"
					},
					{
						url: "../../static/images/002.png"
					},
					{
						url: "../../static/images/003.png"
					},
					{
						url: "../../static/images/004.png"
					},
				]
			};
		},
		components: {
			navTitle
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
			// 评论类型
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
			background: #fff;
		}

		.box-content {
			flex: 1;
			overflow-y: scroll;

			.box-content-banner {
				height: 763rpx;
				background: #F7F7F7;

				.banner-swiper-box {
					height: 100%;

					.banner-swiper-box-item {
						display: flex;
						align-items: center;
						justify-content: center;
						height: 100%;

						image {
							height: 100%;
						}
					}
				}
			}

			.box-content-main {
				padding: 30rpx 40rpx;
				box-sizing: border-box;
				background: #fff;
				font-family: Source Han Sans CN;
				font-weight: 400;

				.box-content-main-one-top {
					display: flex;
					align-items: center;
					justify-content: space-between;

					.main-one-top-title {
						font-size: 36rpx;
						color: #000000;
					}

					.main-one-top-text {
						font-size: 24rpx;
						color: #666666;
					}
				}

				.box-content-main-one-bottom {
					display: flex;
					margin-top: 20rpx;

					.main-one-bottom-item {
						flex: 1;

						.main-one-bottom-item-present-price {
							font-size: 24rpx;
							color: #FF4D4D;
							line-height: 24rpx;

							text {
								font-size: 36rpx;
							}
						}

						.main-one-bottom-item-original-price {
							margin: 10rpx 0;
							font-size: 22rpx;
							color: #999;
							text-decoration: line-through;
						}

						.main-one-bottom-item-original-text {
							font-size: 26rpx;
							color: #4D4D4D;
						}
					}
				}
			}

			.content-list {
				margin: 20rpx 0;
				background: #fff;

				.content-list-li {
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 36rpx 40rpx;
					box-sizing: border-box;
					height: 91rpx;
					border-bottom: 1rpx solid #EDEDED;

					.content-list-li-title {
						width: 100rpx;
						font-size: 32rpx;
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
							font-size: 32rpx;
							font-family: Source Han Sans CN;
							font-weight: 400;
							color: #000000;
						}

						.content-list-li-more {
							width: 32rpx;
							height: 32rpx;

							image {
								width: 18rpx;
								height: 30rpx;
							}
						}

					}
				}

				.content-list-li:last-child {
					border-bottom: none;
				}
			}

			.box-content-comment {
				padding: 30rpx 40rpx;
				box-sizing: border-box;
				background: #fff;
				font-family: Source Han Sans CN;
				font-weight: 400;

				.box-content-comment-title-wrap {
					display: flex;
					align-items: center;
					justify-content: space-between;

					.content-comment-title {
						font-size: 32rpx;
						color: 000;
					}

					.content-comment-more {
						width: 32rpx;
						height: 32rpx;

						image {
							width: 18rpx;
							height: 30rpx;
						}
					}
				}

				.box-content-comment-type-list {
					padding: 30rpx 0 40rpx;
					box-sizing: border-box;
					display: flex;

					.content-comment-type-list-li {
						width: 154rpx;
						height: 60rpx;
						border: 1px solid #ccc;
						margin-right: 20rpx;
						color: #999;
						font-size: 28rpx;
						border-radius: 35rpx;
						transition: 0.2s;
					}

					.content-comment-type-list-li:last-child {
						margin-right: 0;
					}

					.content-comment-type-list-li-active {
						color: #FF8366 !important;
						border: 1px solid #FF8366 !important;
					}
				}

				.box-content-comment-list {
					.content-comment-list-item {
						display: flex;

						.content-comment-list-item-image {
							width: 80rpx;
							height: 80rpx;
							border-radius: 50%;

							image {
								width: 80rpx;
								height: 80rpx;
								border-radius: 50%;
							}
						}
					}

					.content-comment-list-item-info {
						margin-left: 20rpx;

						.comment-list-item-info-name {
							color: #000;
							font-size: 32rpx;
						}

						.comment-list-item-info-score {
							display: flex;
							align-items: center;

							.comment-list-item-score-stars {
								image {
									width: 30rpx;
									height: 30rpx;
								}
							}

							.comment-list-item-score-text {
								margin-left: 10rpx;
								color: #999;
								font-size: 24rpx;
							}

						}

						.comment-list-item-info-text {
							color: #333;
							font-size: 28rpx;
						}

						.comment-list-item-info-time {
							color: #999;
							font-size: 24rpx;
						}
					}
				}
			}

			.box-content-shop {
				display: flex;
				justify-content: space-between;
				margin: 20rpx 0;
				padding: 30rpx 40rpx;
				box-sizing: border-box;
				background: #fff;

				.box-content-shop-left {
					display: flex;

					.box-content-shop-image {
						width: 110rpx;
						height: 110rpx;

						image {
							width: 110rpx;
							height: 110rpx;
						}
					}

					.box-content-shop-info {
						margin-left: 25rpx;
						flex-direction: column;
						display: flex;
						justify-content: center;

						.box-content-shop-name {
							font-size: 34rpx;
							color: #000;
						}

						.box-content-shop-score {
							display: flex;
							align-items: center;

							image {
								width: 30rpx;
								height: 30rpx;
							}

							text {
								margin-left: 10rpx;
								font-size: 24rpx;
								color: #999;
							}
						}
					}
				}

				.box-content-shop-right {
					display: flex;
					align-items: center;

					.box-content-shop-right-wrap {
						display: flex;
						align-items: center;

						text {
							// line-height: 21rpx;
							font-size: 30rpx;
							color: #FF967D;
						}

						image {
							margin-left: 20rpx;
							width: 18rpx;
							height: 30rpx;
						}
					}
				}
			}

			.box-content-introduce {
				background: #fff;

				.box-content-introduce-title {
					padding: 30rpx 40rpx 40rpx;
					box-sizing: border-box;
					font-size: 32rpx;
					color: 000;
				}

				.box-content-introduce-image {
					image {
						width: 100%;
					}
				}

			}
		}

		.box-footer {
			display: flex;
			justify-content: space-between;
			align-items: center;
			box-sizing: border-box;
			height: 108rpx;
			background: #fff;

			.box-footer-left {
				padding-left: 30rpx;
				width: 200rpx;
				display: flex;
				justify-content: space-around;
				
				.box-footer-wrap {
					display: flex;
					flex-direction: column;
					align-items: center;
					margin: 0 10rpx;
					.box-footer-icon {
						position: relative;

						image {
							width: 40rpx;
							height: 40rpx;
						}

						text {
							position: absolute;
							right: -14rpx;
							top: -8rpx;
							width: 28rpx;
							height: 28rpx;
							border-radius: 50%;
							background: #FF967D;
							color: #fff;
							font-size: 20rpx;
						}
					}

					.box-footer-text {
						font-size: 20rpx;
						color: #666;
					}
				}
			}

			.box-footer-right {
				display: flex;
				padding-right: 20rpx;

				.box-footer-btn {
					width: 233rpx;
					height: 80rpx;
					color: #fff;
				}

				.box-footer-btn-join {
					background: #CCCCCC;
					border-radius: 40rpx 0rpx 0rpx 40rpx;
				}

				.box-footer-btn-immediately {
					background: #FF8366;
					border-radius: 0rpx 40rpx 40rpx 0rpx;
				}
			}

		}
	}
</style>
