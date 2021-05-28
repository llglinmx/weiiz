<template>
	<view class="box">
		<view class="box-head" :style="{paddingTop:barHeight+'px'}">
			<navTitle navTitle="举报"></navTitle>
		</view>
		<view class="box-content">
			<view class="box-content-text">
				<text>
					正直诚信是weiiz平台的核心价值观，为了维护消费者、合作伙伴及平台的共同利益，促进平台的良性发展、净化工作合作环境，我们对于在商业合作中有任何违法、违规或不正当的行为，公司严惩不贷，违者必究。weiiz平台廉洁合作三知道内容，请您知悉：
				</text>
				<text>
					一、平台提倡诚信经营；合作伙伴勿弄虚作假。
					二、平台拒绝商业贿赂；合作伙伴勿与平台员工或其他关系人私定商业协议，交换利益。
					三、合作伙伴涉及舞弊、贿赂等行为，一经查实永不合作，并坚决追究法律责任。
				</text>
				<text>
					平台本着以客户为中心，严厉打击一切违规行为，我们会尽全力调查核实，维护您的正当权益，并及时向您进行反馈。我们希望您采取实名举报，对于您和您所举报、提供的内容信息，我们将严格保守秘密，绝不泄露任何相关信息。
				</text>
			</view>
			<view class="box-content-report-info">
				<text class="box-content-report-title">举报电话</text>
				<text class="box-content-report-text">18858585858</text>
			</view>
			<view class="box-content-report-info">
				<text class="box-content-report-title">举报邮箱</text>
				<text class="box-content-report-text">564652554@qq.com</text>
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

			.box-content-text {
				padding: 30rpx 40rpx;
				box-sizing: border-box;
				font-size: 28rpx;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #000000;

				text {
					display: block;
					margin-bottom: 80rpx;
				}
				text:last-child{
					margin-bottom: 0;
				}
			}

			.box-content-report-info {
				display: flex;
				flex-direction: column;
				padding: 0 40rpx;
				box-sizing: border-box;
				margin-top: 40rpx;
				font-size: 28rpx;
				font-family: Source Han Sans CN;
				font-weight: 400;

				.box-content-report-title {
					color: #000000;
				}

				.box-content-report-text {
					color: #FF8366;
				}
			}

		}


	}
</style>
