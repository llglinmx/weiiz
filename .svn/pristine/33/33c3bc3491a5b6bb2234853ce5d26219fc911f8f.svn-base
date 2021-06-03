<template>
	<view class="popup-box" :class="visible?'popup-box-open':''" @click="cancel">
		<view class="popup-box-main" :class="visible?'popup-box-main-open':''" @click.stop="prevent">
			<view class="popup-box-head">
				<text class="cancel" @click="cancel">{{cancels}}</text>
				<text class="confirm" @click="confirm">{{determinen}}</text>
			</view>
			<view class="popup-box-content">
				<view class="popup-box-content-left">
					<view @click="checkChange(index)" class="popup-box-content-left-li flex-center"
						:class="activeIndex==index?'popup-box-content-left-li-active':''"
						v-for="(item,index) in dataList" :key='index'>{{item.name}}</view>
				</view>
				<view class="popup-box-content-right" v-if="activeIndex!=-1">
					<view class="popup-box-content-right-li flex-center" @click="checkList('ASC')">
						<text  :style="{color:isCheck=='ASC'?'#FF967D':'#333'}">{{AscendingOrder}}</text>
						<text v-if="isCheck=='ASC'" class="iconfont icon-font icondagou"
							style="color: #FF967D;margin-left: 20rpx;"></text>
					</view>
					<view class="popup-box-content-right-li flex-center" @click="checkList('DESC')">
						<text :style="{color:isCheck=='DESC'?'#FF967D':'#333'}">{{DescendingOrder}}</text>
						<text v-if="isCheck=='DESC'" class="iconfont icon-font icondagou"
							style="color: #FF967D;margin-left: 20rpx;"></text>
					</view>
				</view>
				<view class="popup-box-content-right flex-center" v-if="activeIndex==-1">
					请选择筛选方式
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "popup-list-select",
		data() {
			return {
				dataList: [{
					name: '价格',
					type:'price'
				}, {
					name: '距离',
					type:'distance'
				}, {
					name: '评价',
					type:'comment'
				}],
				activeIndex: 0,
				isCheck: 'ASC',
				selectType:'price',
				name:'价格',
				cancels:'取消',
				determinen:'确定',
				AscendingOrder:'升序',
				DescendingOrder:'降序'
			};
		},
		props: {
			visible: {
				type: Boolean,
				default: false
			},
			// dataList: {
			// 	type: Array,
			// 	default: []
			// }
			textArr:{}
		},
		mounted() {

		},
		watch:{
			textArr:{ 
				handler(arr){ 
					this.cancels = arr.cancelxz
					this.determinen = arr.determinen
					this.AscendingOrder = arr.AscendingOrder
					this.DescendingOrder = arr.DescendingOrder
					this.dataList[0].name=arr.Pricev
					this.dataList[1].name=arr.distancev
					this.dataList[2].name=arr.evaluatev
				}
			}
		},
		methods: {

			// 取消
			cancel() {
				this.$emit("cancel", false)
			},


			// 确定
			confirm() {
				var str = {
					orderby:this.isCheck,
					ordertype:this.selectType,
					name:this.name
				}

				this.$emit('confirm', str)
				this.cancel()
			},
			// 列表点击
			checkChange(index) {
				this.activeIndex = index
				this.selectType = this.dataList[index].type
				this.name = this.dataList[index].name
				this.isCheck = 'ASC'
			},

			// 升序降序点击
			checkList(type) {
				switch (type) {
					case "ASC":
						this.isCheck = 'ASC'
						break;
					case "DESC":
						this.isCheck = 'DESC'
						break;
				}
			},

			prevent() {},

		}
	}
</script>

<style lang="scss" scoped>
	.popup-box-open {
		background: rgba(0, 0, 0, 0.5) !important;
		z-index: 999 !important;
		// display: block !important;
	}

	.popup-box {
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.1);
		transition: 0.4s;
		z-index: -999;
		// display: none;

		.popup-box-main-open {
			height: 700rpx !important;
		}

		.popup-box-main {
			display: flex;
			flex-direction: column;
			position: absolute;
			bottom: 0;
			width: 100%;
			height: 0;
			transition: 0.4s;
			background: #fff;

			.popup-box-head {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 40rpx;
				box-sizing: border-box;
				height: 100rpx;
				border-bottom: 1rpx solid #ededed;
				font-size: 28rpx;

				.cancel {
					color: #999;
				}

				.confirm {
					color: #1676ec;
				}
			}

			.popup-box-content {
				display: flex;
				flex: 1;

				.popup-box-content-left {
					width: 200rpx;
					background: #f7f7f7;

					.popup-box-content-left-li {
						height: 80rpx;
						font-size: 28rpx;
						transition: 0.3s;
					}

					.popup-box-content-left-li-active {
						background: #fff !important;
					}
				}

				.popup-box-content-right {
					// margin-left: 20rpx;
					flex: 1;

					.popup-box-content-right-li {
						position: relative;
						height: 80rpx;
						font-size: 28rpx;
						// border-bottom: 1rpx solid #f7f7f7;

						.icon-font {
							position: absolute;
							right: 30rpx;
						}
					}
				}
			}
		}
	}
</style>
