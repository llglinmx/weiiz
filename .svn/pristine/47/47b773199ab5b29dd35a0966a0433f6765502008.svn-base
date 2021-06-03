<template>
	<view class="count-down" :style="{color: color}">
		{{msg}}{{timeData}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				timeData: '', //存放每条数据的处理好的倒计时
			}
		},
		props: {
			startTime: {
				type: String,
				default: ''
			},
			endTime: {
				type: String,
				default: ''
			},
			msg:{
				type:String,
				default:'支付剩余时间: '
			},
			color:{
				type:String,
				default:'#999'
			}
		},
		watch:{
			endTime(){
				this.countdowm(this.endTime)
			}
		},
		methods: {

			// 换算日期时间
			getTimes() {
				var nowdate = new Date().getTime() //获取当前时间毫秒数
				var time = this.endTime.replace(new RegExp("-", "gm"), "/")

				//ios不能识别日期格式中的 "-" ； .productExpiredTime是接口返回的名称
				var time = time.split('.')[0] //此处是因为我们接口返回的时间格式是这样："2019-12-31 11:00:00.0"
				var enddate = new Date(time).getTime() //处理好格式之后获取结束时间的毫秒数
				var totaltime = enddate - nowdate //获取时间差
			},

			countdowm(timestamp) {
				console.log(timestamp)
				let self = this;
				let timer = setInterval(function() {
					let nowTime = new Date();
					let endTime = new Date(timestamp);
					let t = endTime.getTime() - nowTime.getTime();

					if (t > 0) {
						// let day = Math.floor(t / 86400000);
						// let hour = Math.floor((t / 3600000) % 24);
						// let min = Math.floor((t / 60000) % 60);
						// let sec = Math.floor((t / 1000) % 60);
						let day = Math.floor(t / 1000 / 60 / 60 / 24) * 24
						let hour = Math.floor(t / 1000 / 60 / 60 % 24)
						let min = Math.floor(t / 1000 / 60 % 60)
						let sec = Math.floor(t / 1000 % 60)

						hour = hour < 10 ? "0" + hour : hour;
						min = min < 10 ? "0" + min : min;
						sec = sec < 10 ? "0" + sec : sec;
						let format = '';
						if (day > 0) {
							format = `${day}天${hour}时${min}分${sec}秒`;
						}
						if (day <= 0 && hour > 0) {
							format = `${hour} : ${min} : ${sec}`;
						}
						if (day <= 0 && hour <= 0) {
							format = `${min} : ${sec}`;
						}
						self.timeData = format;
					} else {
						clearInterval(timer);
					}
				}, 1000);
			},
		}
	}
</script>

<style scoped lang="scss">
	.count-down {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28rpx;
	}
</style>
