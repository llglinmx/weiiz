<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle :navTitle="lan.commonProblemv"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content-tabs">
				<liuyuno-tabs ref="boxTabs" :tabData="tabs" :activeIndex="defaultIndex" @tabClick='tabClick' />
			</view>
			<view class="box-content-wrap">
				<view class="box-content-wrap-item">
					<swiper class="swiper-box" :current="defaultIndex" @change="tabChange">
						<swiper-item class="swiper-box-item-list" v-for="(item,index) in tabs" :key="index">
							<scroll-problem-swiper-item :tabIndex="index" :currentIndex="defaultIndex"></scroll-problem-swiper-item>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import liuyunoTabs from "@/components/liuyuno-tabs/liuyuno-tabs.vue";
	import navTitle from "../../components/navTitle/navTitle.vue"
	import scrollProblemSwiperItem from "../../components/scroll-problem-swiper-item/scroll-problem-swiper-item.vue"
	export default {
		data() {
			return {
				barHeight: 0, //顶部电量导航栏高度
				tabs: ["热门问题", "支付问题", "消费问题", "评价问题", "退款问题"],
				defaultIndex: 0,
				arrList: [
					"银行/支付宝/微信已扣款，订单仍显示未付款", "支付问题",
					"银行/支付宝/微信已扣款，订单仍显示未付款",
					"评价问题", "优惠券是否已使用？", "银行/支付宝/微信已扣款，订单仍显示未付款",
					"银行/支付宝/微信已扣款，订单仍显示未付款", "消费问题",
					"银行/支付宝/微信已扣款，订单仍显示未付款", "退款问题",
					"银行/支付宝/微信已扣款，订单仍显示未付款", "支付问题",
					"银行/支付宝/微信已扣款，订单仍显示未付款",
					"评价问题", "优惠券是否已使用？", "银行/支付宝/微信已扣款，订单仍显示未付款",
					"银行/支付宝/微信已扣款，订单仍显示未付款", "消费问题",
					"银行/支付宝/微信已扣款，订单仍显示未付款", "退款问题",
				],
				lan:{}
			};
		},
		components: {
			navTitle,
			liuyunoTabs
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
			// this.getData(1, 10)
			this.getLanguage()
		},
		methods: {

			getData(num, size) {
				var vuedata = {
					page_index: num, // 请求页数，
					each_page: size, // 请求条数
				}
				this.apiget('pc/news/new_info', vuedata).then(res => {
					if (res.status == 200) {
						console.log(res.data.length)
						if (res.data.length !== 0) {
							console.log(res.data)
							let list = res.data.data
							let totalSize = res.data.total_rows
							// this.$refs.paging1.complete(list);
						} else {

						}
					}
				});
			},


			// tabs 点击
			tabClick(e) {
				this.defaultIndex = e
			},
			// 滑动切换列表
			tabChange(e) {
				this.$refs.boxTabs.tabToIndex(e.detail.current)
				this.defaultIndex = e.detail.current
			},
			// 请求语言包
			getLanguage() {
				this.apiget('language/info', {
					name: 'MyPageTwo'
				}).then(res => {
					if (res.status == 200) {
					  let language=res.data.language
					  this.lan=res.data.language
					  let arr =[]
					  arr[0]=language.TopQuestions
					  arr[1]=language.PaymentIssues
					  arr[2]=language.ConsumptionProblem
					  arr[3]=language.EvaluationQuestion
					  arr[4]=language.RefundProblem
					  this.tabs=arr
					  
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

		.box-head {
			background-color: #fff;
		}

		.box-content {
			flex: 1;
			overflow-y: scroll;
			display: flex;
			flex-direction: column;

			.box-content-tabs {}

			.box-content-wrap {
				flex: 1;
				overflow-y: scroll;

				.box-content-wrap-item {
					height: 100%;

					.swiper-box {
						height: 100%;
						overflow-y: scroll;

						.swiper-box-item-list {
							height: 100%;
							overflow-y: scroll;

							
						}
					}
				}
			}

		}

	}
</style>
