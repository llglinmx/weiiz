<template>
	<view class="score">
		<text class="iconfont iconwujiaoxing icon-font" :style="{color:isComment(comment,storeIndex)?'#FFCD4D':'#eee',}"
			style="font-size: 28rpx;" v-for="(store,storeIndex) in 5"></text>
		<text>{{storeMsg(comment)}}分</text>
	</view>
</template>

<script>
	export default {
		name: "score",
		data() {
			return {

			};
		},
		props: {
			comment: {}
		},
		methods: {
			// 评分
			isComment(comment, index) {
				var store = parseInt(comment)
				var str = 0
				if (store <= 0) {
					str = 0
				} else if (store > 0 && store <= 20) {
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
				if (store <= 0) {
					str = 0
				} else if (store > 0 && store <= 20) {
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
	.score {
		display: flex;
		align-items: center;

		text {
			margin-right: 10rpx;
			color: #999;
			font-size: 24rpx;
		}
	}
</style>
