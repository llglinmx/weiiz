<template>
	<view class="storemap">
		<view class="map"><map class="map-content-main" enable-zoom="true" @callouttap="calloutHandle" :latitude="coords.lat" :longitude="coords.lng"  :scale="10" :markers="marker"></map></view>
		<uni-popup ref="popup" type="bottom">
			<view class="pppbox">
				<view class="popcon">
					<view class="storetitle"><text class="title">商家信息</text></view>
					<view class="flexrow"><text class="iconfont">&#xe60a;</text><text class="address">{{storeinfo.address}}</text></view>
					<view class="flexrow"><text class="iconfont">&#xe602;</text><text class="tel">{{storeinfo.mobile}}</text></view>
					<view class="timebox">
						<view><text class="iconfont">&#xe6cb;</text></view>
						<view class="rit">
							<text class="time">周一至周四  10:00 - 02:00</text>
							<text class="time mt10">周五至周日  10:00 - 03:00</text>
						</view>
					</view>
				</view>
				<view class="button">
					<view @click="callnumber"><text class="btn">联系客服</text></view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import {
		get
	} from '../../store/index.js'
	export default {
		name:"information",
		data() {
			return {
				dataList:[{}],
				marker:[],
				storeinfo:{},
				coords:{}
			};
		},
		props:{
			storeid:{
				type:String,
				default:''
			}
		},
		mounted(){
			this.getDelits()
		},
		methods:{
			// 客户电话
			callnumber(){
				uni.makePhoneCall({
				    phoneNumber: '114' //仅为示例
				});
			},
			setScrollRef(height) {
			    
			},
			//打开底部弹窗
			calloutHandle(e){
				this.$refs.popup.open('bottom')
			},
			//百度与高德地图坐标偏移
			bd_decrypt(bd_lng, bd_lat) {
			    var X_PI = Math.PI * 3000.0 / 180.0;
			    var x = bd_lng - 0.0065;
			    var y = bd_lat - 0.006;
			    var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * X_PI);
			    var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * X_PI);
			    var gg_lng = z * Math.cos(theta);
			    var gg_lat = z * Math.sin(theta);
			    return {lng: gg_lng, lat: gg_lat}
			},
			//获取商家信息详情
			getDelits() {
				var vuedata = {}
				get('app/store/' + this.storeid, vuedata).then(res => {
					if (res.status == 200) {
						const {storeList} = res.data;
						this.storeinfo = storeList;
						let coords = this.bd_decrypt(storeList.longitude_baidu,storeList.latitude_baidu)
						this.coords = coords
						this.marker = [
							{
								id: storeList.id,
								latitude: coords.lat,
								longitude: coords.lng,
								iconPath: '/static/images/address-icon.png',
								width: 35,
								height: 35,
								title: storeList.name,
								callout: {
									content: storeList.name,
									bgColor: "#26BF82",
									padding:8,
									borderRadius:3,
									display:"ALWAYS",
									color:'#fff'
								}
							}
						]
					}
				});
			},
			
			loadData() {
			    // 首次激活时被调用
			},
			clear() {
			    // 释放数据时被调用，参考 swiper-list 缓存配置
			    this.dataList.length = 0;
			}
		}
	}
</script>

<style lang="scss">
.storemap{
	flex: 1;
	.iconfont{
		color: #FF967D;
		font-size: 32rpx;
	}
	flex:1;
	.map{
		flex:1;
		.map-content-main{
			flex: 1;
			/* #ifdef H5 */
			width: 100%;
			/* #endif */
		}
	}
	.pppbox{
		padding:50rpx 0 30rpx;
		border-radius: 40rpx 40rpx 0 0;
		background: #fff;
		.popcon{
			margin: 0 30rpx;
			.storetitle{
				flex-direction: row;
				font-size: 34rpx;
				padding-bottom: 30rpx;
			}
			.flexrow{
				flex-direction: row;
				border-radius: 20rpx;
				padding: 32rpx;
				border:1px solid #EDEDED;
				margin-bottom: 20rpx;
				.address{
					font-size: 28rpx;
					color: #333;
					margin-left: 22rpx;
				}
				.tel{
					color: #333;
					font-size: 28rpx;
					margin-left: 22rpx;
				}
			}
			.timebox{
				flex-direction: row;
				border-radius: 20rpx;
				padding: 32rpx;
				border:1px solid #EDEDED;
				.rit{
					margin-top: -2rpx;
					margin-left: 22rpx;
					.mt10{
						margin-top: 10rpx;
					}
				}
				.time{
					font-size: 28rpx;
					color:#333;
				}
			}
		}
		
		.button{
			margin-top: 30rpx;
			.btn{
				background-color: #FF967D;
				text-align: center;
				line-height: 80rpx;
				border-radius: 20rpx;
				color:#fff;
				margin:0 30rpx;
				height:80rpx;
				font-size: 28rpx;
			}
		}
		
	}
	
}		
</style>
